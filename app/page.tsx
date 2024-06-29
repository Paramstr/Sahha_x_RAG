"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PieChartIcon } from "@radix-ui/react-icons";
import Markdown from "react-markdown";


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
      // Retrieve the first item from sample_sahha_scores.json
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
      const dayData = scoresData[0]; // Get the first item
      console.log("Day data retrieved successfully");
      
      // const systemPrompt = `
      // You are a health specialist analyzing user data. 
      // What thoughtful insights can you provide based on their activity and health patterns? 
      // Please provide a comprehensive analysis of the user's health habits, 
      // identifying areas of strength and suggesting improvements where necessary. 
      // Focus on general trends and behaviors rather than specific numerical scores. 
      // Describe how these trends may impact the user's overall well-being and 
      // suggest potential adjustments to their lifestyle for optimal health.
      // `;

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
      // Prepare and send the query (simplified for brevity)
      const queryString = systemPrompt + `\n\nDay Data: ${JSON.stringify(
        dayData
      )}`;

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

            <Button className="w-[400px]" onClick={sendQuery}>
              Get Insight: Week
            </Button>

            <Button className="w-[400px]" onClick={sendQuery}>
              Get Insight: Month
            </Button>
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
            <div className="my-8 border p-4 rounded w-[400px] max-h-[400px] overflow-auto">
              {/* <Markdown>{result}</Markdown> */}
              {result}
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
