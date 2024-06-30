"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PieChartIcon } from "@radix-ui/react-icons";
import Markdown from "react-markdown";

interface MarkdownFile {
  name: string;
  content: string;
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function createIndexAndEmbeddings() {
    try {
      const result = await fetch("/api/setup", { method: "POST" });
      const json = await result.json();
      console.log("result: ", json);
    } catch (err) {
      console.log("err:", err);
    }
  }

  //Send day query
  async function getDayInsight() {
    setResult("");
    setLoading(true);
    console.log("Starting getDayInsight function");
    try {
      const scoresResponse = await fetch(
        "/sahha_sample_data/sample_sahha_scores.json"
      );
      console.log("Sample scores response status:", scoresResponse.status);

      if (!scoresResponse.ok) {
        throw new Error(
          `Failed to fetch sample data: ${scoresResponse.status} ${scoresResponse.statusText}`
        );
      }

      const scoresData = await scoresResponse.json();
      const firstRow = scoresData[0];
      const targetDate = firstRow.scoreDateTime;
      const dayData = {
        activity: null,
        sleep: null,
        wellbeing: null,
      };

      for (const row of scoresData) {
        if (row.scoreDateTime === targetDate) {
          switch (row.type) {
            case "activity":
              dayData.activity = row;
              break;
            case "sleep":
              dayData.sleep = row;
              break;
            case "wellbeing":
              dayData.wellbeing = row;
              break;
          }
          if (dayData.activity && dayData.sleep && dayData.wellbeing) {
            break; // Exit loop if we've found all three types
          }
        }
      }

      console.log("Day data retrieved successfully:", dayData);

      const systemPrompt = `
      You are a health specialist analyzing user data.
      Your analysis should be comprehensive, focusing on general trends and behaviors rather than specific numerical scores.
      Please structure your response in the following format, using markdown headers:
      # Overall Health Summary
      ## Strengths
      ## Areas for Improvement
      ## Impact on Well-being
      ## Recommendations
      Remember to maintain a supportive and encouraging tone throughout your analysis.
      Focus on empowering the user with knowledge and practical advice for optimal health.
    `;

      const queryString =
        systemPrompt + `\n\nDay Data: ${JSON.stringify(dayData)}`;

      const result = await fetch("/api/read", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(queryString),
      });

      if (!result.ok) {
        throw new Error(
          `API request failed: ${result.status} ${result.statusText}`
        );
      }

      const json = await result.json();
      setResult(json.data);
    } catch (err) {
      console.error("Error in getDayInsight:", err);
      setResult(`An error occurred: ${err}`);
    } finally {
      setLoading(false);
      console.log("getDayInsight function completed");
    }
  }

  async function getWeekInsight() {
    setResult("");
    setLoading(true);
    console.log("Starting getWeekInsight function");
    try {
      const scoresResponse = await fetch(
        "/sahha_sample_data/sample_sahha_scores.json"
      );
      console.log("Sample scores response status:", scoresResponse.status);

      if (!scoresResponse.ok) {
        throw new Error(
          `Failed to fetch sample data: ${scoresResponse.status} ${scoresResponse.statusText}`
        );
      }

      //Getting Whole week of data
      /* ################################################################# */

      const scoresData = await scoresResponse.json();
      const firstRow = scoresData[0];
      const startDate = new Date(firstRow.scoreDateTime);
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 6); // Get the end date (7 days inclusive)

      const weekData: string[] = [];

      for (const row of scoresData) {
        const rowDate = new Date(row.scoreDateTime);
        if (rowDate >= startDate && rowDate <= endDate) {
          weekData.push(JSON.stringify(row));
        }
        if (weekData.length === 21) {
          break; // Exit loop if we've found all 21 rows (7 days * 3 types)
        }
      }

      console.log("Week data retrieved successfully:", weekData);

      // Fetch markdown files from public/core
      /* ################################################################# */

      const markdownFiles: MarkdownFile[] = [];
      const coreFolder = "/core";

      try {
        const response = await fetch(`${coreFolder}/index.json`);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch index.json: ${response.status} ${response.statusText}`
          );
        }
        const fileList: string[] = await response.json();

        for (const fileName of fileList) {
          if (fileName.endsWith(".md")) {
            const fileResponse = await fetch(`${coreFolder}/${fileName}`);
            if (fileResponse.ok) {
              const content = await fileResponse.text();
              markdownFiles.push({ name: fileName, content });
            } else {
              console.warn(`Failed to fetch content for ${fileName}`);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching markdown files:", error);
      }

      const markdownString = markdownFiles
        .map((file: MarkdownFile) => `${file.content}\nsource: ${file.name}`)
        .join("\n\n");

      /* ################################################################# */
      const systemPrompt = `
      You are a health specialist analyzing the same user's data for a week. Each day of data contains wellbeing, activty and sleep scores. Inside of each score there are factors.
      Your analysis should be comprehensive, focusing on general trends and behaviors rather than specific numerical scores.
      Please structure your response in the following format, using markdown headers:
      # Weekly Health Summary
      ## Overall Trends
      ## Strengths
      ## Areas for Improvement
      ## Impact on Well-being
      ## Recommendations
      Remember to maintain a supportive and encouraging tone throughout your analysis.
      Focus on empowering the user with knowledge and practical advice for optimal health.
      `;

      const queryString =
        systemPrompt +
        `\n\nWeek Data: ${JSON.stringify(weekData)}` +
        `\n\nAdditional Information:\n${markdownString}`;

      const result = await fetch("/api/read", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(queryString),
      });

      if (!result.ok) {
        throw new Error(
          `API request failed: ${result.status} ${result.statusText}`
        );
      }

      const json = await result.json();
      setResult(json.data);
    } catch (err) {
      console.error("Error in getWeekInsight:", err);
      setResult(`An error occurred: ${err}`);
    } finally {
      setLoading(false);
      console.log("getWeekInsight function completed");
    }
  }

  async function sendQuery() {
    if (!query) return;
    setResult("");
    setLoading(true);
    try {
      const result = await fetch("/api/read", {
        method: "POST",
        body: JSON.stringify(query),
      });
      const json = await result.json();
      setResult(json.data);
    } catch (err) {
      console.log("err:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-1 flex-col items-center justify-center p-24">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold mb-4">Sahha x RAG</h1>
        <p className="text-xl font-medium mb-8">
          Get personalised actionable insight into your Sahha Data.
        </p>

        <div className="flex flex-col items-center ">
          <div className="flex flex-row items-center mb-5 w-10 justify-center space-x-4">
            <Button className="w-[400px]" onClick={getDayInsight}>
              Get Insight: Day
            </Button>

            <Button className="w-[400px]" onClick={getWeekInsight}>
              Get Insight: Week
            </Button>

            {/* <Button className="w-[400px]" onClick={sendQuery}>
              Get Insight: Month
            </Button> */}
          </div>
          <input
            className="rounded border w-[400px] text-black px-2 py-1"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your query"
          />

          <Button className="w-[400px] mt-3 bg-slate-500" onClick={sendQuery}>
            Ask AI
          </Button>

          {loading && <PieChartIcon className="my-5 w-8 h-8 animate-spin" />}
          {result && (
            <div className="my-8 border p-4 rounded w-[600px] max-h-[500px] overflow-auto">
              <Markdown>{result}</Markdown>
              {/* {result} */}
            </div>
          )}
          <Button
            className="w-[400px] mt-2"
            variant="outline"
            onClick={createIndexAndEmbeddings}
          >
            Create index and embeddings
          </Button>
        </div>
      </div>
      <footer className="flex flex-1 justify-center items-end">
        <Image
          src="/sahha-logo.svg"
          alt="Sahha Health Logo"
          width={150}
          height={50}
        />
      </footer>
    </main>
  );
}
