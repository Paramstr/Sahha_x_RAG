---
title: Health Scores
description: Explore Health Scores to quantify user well-being across various dimensions by evaluating lifestyle and behavior, developed with cutting-edge research and expert consultations.
---

Health Scores provide a quantified measure of user well-being across various dimensions, including Sleep, Activity, Well-being, and Mental Health. Developed using advanced research and expertise, these scores offer a comprehensive view of lifestyle and behavioral impacts on health, aiding in proactive decision-making.

### Available Scores

| Score Type                                           | Status     | Description                                                                 |
| ---------------------------------------------------- | ---------- | --------------------------------------------------------------------------- |
| [Wellbeing Score](/docs/products/scores/wellbeing)   | PRODUCTION | Integrates Activity and Sleep scores for a comprehensive health overview.   |
| [Activity Score](/docs/products/scores/activity)     | PRODUCTION | Evaluates physical activity, aiding in promoting a more active lifestyle.   |
| [Sleep Score](/docs/products/scores/sleep)           | PRODUCTION | Assesses sleep health to guide improvements for better rest.                |
| [Depression Score](/docs/products/scores/depression) | PRODUCTION | Analyzes behavioral patterns to assess depression levels.                   |
| [Stress Score](/docs/products/scores/stress)         | PRODUCTION | Determines stress levels by evaluating specific lifestyle aspects.          |
| [Anxiety Score](/docs/products/scores/anxiety)       | BETA       | Predicts anxiety levels based on user behavior and lifestyle patterns.      |
| Digital Score                                        | RESEARCH   | Analyzes digital behavior patterns to offer insights into well-being.       |
| Resilience Score                                     | RESEARCH   | Provides future risk or resilience indicators for mental health conditions. |

---

## Key Features

- **Rooted in Science**: Developed through integration of current research and consultation with experts.
- **Comprehensive**: Cover physical and mental health aspects, providing a holistic health perspective.
- **Actionable**: Equipped with explainability factors to offer clear insights into what influences the scores.
- **Dynamic**: Continually updated to incorporate the latest findings and user feedback for relevance and accuracy.

<!-- ### Continuous Improvement

Sahha is committed to the ongoing enhancement of Health Scores, ensuring they reflect the latest in health and wellness research. -->

---

## How It Works

### Calculating Health Scores
Health Scores are derived from complex models that analyze various user data points. The resulting numerical score gives a snapshot of an individual's health in specific areas like Activity, Sleep, and Mental Wellbeing.

### Explainability Factors

Explainability factors are key elements within the data that significantly impact the Health Score. They help to demystify the score by highlighting which specific behaviors or conditions are contributing positively or negatively. This level of transparency allows users to understand the rationale behind their score, fostering a deeper engagement with their health data.

How Explainability Factors Aid Users:
- **Transparency**: Users can see what specific data points are influencing their Health Score.
- **Actionable Insights**: By knowing which factors affect their score, users can take targeted actions to improve their health.
- **Trust**: Understanding the 'why' behind their scores helps users trust the system, knowing it's not just a black box.

<!-- Understanding the "why" behind your Health Scores is as crucial as the scores themselves. Explainability factors provide transparency, detailing the specific behaviors or conditions that influence your scores. These factors are key elements from your data that the models identify as significant contributors to the overall score, whether positively or negatively impacting it. Learn more about [expainability factors](/docs/products/scores/explainability-factors). -->

### Example: Factors in Action
Consider a scenario where a user's Activity Score is lower than desired. The explainability factors might highlight 'sedentary hours' as a significant negative contributor. Armed with this knowledge, the user can focus on reducing sedentary time to improve their score.

{% waterfall-chart /%}

Learn more about [explainability factors](/docs/products/scores/explainability-factors).

---

## Output Schema

The output schema outlines the structure and format of the data output from our health scores. This standardized schema ensures consistent and understandable results across different scores.

```json
{
  "id": "unique_identifier",
  "type": "health_score_type",
  "state": "state_value",
  "score": numerical_score,
  "factors": [
    {
      "name": "factor_name",
      "value": factor_value
    },
    ...
  ],
  "inputData": ["data_source1", "data_source2", ...],
  "createdAt": "timestamp"
}
```

- **id**: A unique identifier for each health score calculation.
- **type**: The type of health score (e.g., Wellbeing, Activity, Sleep, Depression, Stress, Anxiety).
- **state**: A qualitative assessment of the score (e.g., low, medium, high).
- **score**: A numerical value representing the health score.
- **factors**: A list of factors that influenced the score, each with a name and value.
- **inputData**: The types of data used to calculate the score.
- **createdAt**: The timestamp when the score was calculated.

For more details see the [output schema](/docs/products/scores/schema) documentation.

---

<!-- ## Use Cases

For Individuals
- Track and improve personal health by understanding and acting on Health Scores.
- Use scores to set health goals and monitor progress.
For Healthcare Providers
- Employ Health Scores to provide personalized care and interventions.
- Utilize scores in population health management and research.

--- -->

## FAQ

**Q: How often are Health Scores generated?**

A: Health Scores are generated daily to provide you the latest state of health and well-being.

**Q: Can users influence their Health Scores?**

A: Yes, by changing lifestyle behaviors, users can directly impact their scores.

**Q: What are explainability factors?**

A: Explainability factors are specific data points that clarify why your Health Score is what it is, guiding you on how to improve it.

---

## Getting Started

Dive into each score's specifics by visiting their dedicated pages. These pages provide in-depth information on how each score is calculated, what factors contribute to it, and how it can be used to foster better health outcomes.

---

## Support

For additional assistance or more detailed information on Health Scores, please contact [support@sahha.ai](mailto:support@sahha.ai) or reach out in the [slack community](https://join.slack.com/t/sahhacommunity/shared_invite/zt-1w0fmfbvk-qUwQ83tJgXyjT9XSxJvKIw).
