---
title: Mental Resilience and Mood Score
navigationTitle: Mental Resilience / Mood
description: The Mental Health Score is designed to gauge overall Mental Health of a user based off the behavioural phenotype of the individual. The machine learning model learns which aspects of your user's behaviour are putting the user most at risk or in resilience to mental health conditions. Based on clinically-backed rating scales and years of research, the score understands the user's mental health state and helps triage for self-managment, for behavioural change or to consult for professional mental health advice.
---

**Empower your mental wellbeing**. The Mental Health Score is designed to gauge overall mental health of a user based off the behavioural phenotype of the individual. The machine learning model **learns which aspect of your user's behaviour is putting them at-risk** to mental health conditions. Based on clinically-backed rating scales and years of research, the score understands the user's mental health state and helps triage users for self-managment, for behavioural change or to seek clinical intervention. 

## Displaying the Mental Health score

This score is a general measure of Mental Health and can be framed in different ways depending on your use case and brand. The underlying model is the same, but depending on your needs the value provided can be highly personalized:

| Score Framing           | Description                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Mood** Score              | A mood measure which looks at how the behavioral habits of the user puts them in high or low mood states |
| **Mental Health** Score     | A measure that assesses overall mental health by analyzing various behavioral and lifestyle factors to determine the user's mental health risk or resilience.                   |
| **Mental Resilience** Score | A measure focusing on the user's ability to cope with adverse and bounce back from such events, highlighting behaviors that enhance mental strength and resilience.                   |



## Understanding the Mental Health Score

The Mental Health Score is trained to predict a clinical measure of general mental health. Higher the score, better the mental health prediction.
Understanding how the score works will allow you to unlock the true potential of digital phenotyping applied to mental health and serve the mental health of your users.

### Example JSON Output

Here's a sample of how the data is structured:

```json
{
	"inference": {
		"id": "26051AB2-867F-4F8D-B134-0031C20D3FDC",
		"type": "mentalhealth",
		"state": "none",
		"score": 0.80,
		"factors": [
			...
		],
		"inputData": ["age", "activity", "sleep"],
		"createdAt": "2023-11-11T11:05:41.644Z"
	}
}
```

### Reading the Schema

| Key                |                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------ |
| Score `type`          | `mentalhealth`                                                                             |
| `score` range         | 0.0 - 1.0                                                                                  |
| Possible `state`s     | `none`, `low`, `medium`, `high`                                                            |
| Supported `inputData` | `activity`, `sleep`, `vitals`, `phone usage`, `age`, `gender`                              |
| Status                | **BETA**                                                                                   |


### Reading the Score

A lower score generally indicates behaviour that is of low resilience, while a higher score may suggest increased resilience-inducing behaviour. It's important to analyze the contribution of each factor for a comprehensive understanding.

### Displaying the Score

The score can instead be displayed in a more human-friend way such as opposed to a direct mental health score, where high indicates 

### Interpreting the State

- **High**: Suggests significantly resilient behaviour, indicaitng the optimal behavioural state.
- **Medium**: Indicates moderately resilient behaviour, which might impact well-being occasionally.
- **Low**: Reflects behaviour that could benefit from intervention to increase the influence on daily life.
- **Minimal**: Denotes an negligible resilient behaviour, suggesting a calm mental state.

---

<!-- ## Science behind the Mental Health Score

The score was trained to predict 50k+ samples of the DASS21 rating scale taken by more than 2000 participants across 3 months. 


---

## Use Cases for the Mental Health Score

### Using the MHS has a general measure of Mental Health -->



### Using the MHRS with the Depression, Anxiety and Stress Scores

The score can be in concordance with the resilience scores of Depression, 


### Using the MHRS for Triaging



---

## Limitations and Considerations

The Mental Health Score is a wellness tool and not a diagnostic measure. It should not replace professional medical advice. Individual experiences and psychological factors can also influence anxiety levels.

1. **Inference from Physical Behavior Alone**: The mental health scores infer the psychological state of a user solely based on physical behavior captured through smartphones and wearables. This method provides a limited perspective, as mental health is a complex interplay of various factors including genetics, personal experiences, and environmental influences, which cannot be fully captured through physical activity data alone.
2. **Screening, Not Diagnostic**: The training of the machine learning models for MHS is based on subjective clinical rating scales such as PHQ-9 for depression and GAD-7 for anxiety. These scales are used for screening and not for clinical diagnosis. Therefore, the MHS should be viewed as indicative of the level of severity of a mental health disorder rather than a clinical diagnosis.
3. **Explainability Factors of behavior alone**: While the models provide 'explainability factors' indicating which aspects of user behavior impact the scores most, these factors are derived from limited behavioral data. They might not encompass all relevant variables that contribute to an individual’s mental health state.

{% callout title="Note" %}
For effective utilization of our products, we encourage you to explore our [best practices guide.](/docs/guides/best-practices)
{% /callout %}


---

## Frequently Asked Questions (FAQs)

**Q: How can I improve my Mental Health Resilience Score (MHRS)?**

A: Improving your MHRS Score involves maintaining consistent physical activity, achieving daily activity goals, and minimizing periods of inactivity. Similarly for sleep  It's also important to address any significant deviations in your usual activity, sleep and phone usage patterns.

**Q: What does a `low` MHRS Score indicate?**

A: A `high` Anxiety Score suggests higher levels of anxiety, possibly impacting daily life. It's a prompt to evaluate lifestyle habits and consider professional advice if needed.

**Q: Can physical activity alone manage mental health?**

A: While physical activity is a key factor in managing anxiety, it's one part of a broader approach. Mental health is multifaceted, and professional guidance is often necessary for effective management.
