---
title: Depression Score
navigationTitle: Depression
description: The Depression Score is an integral part of Sahha's suite of mental health scores, specifically focused on depression-like behavioral characteristics. It integrates behavioral data from smartphones and wearables to provide insights into your psychological state.
---

**Monitor mental well-being through behavioral patterns.** The Depression Score is an integral part of Sahha's suite of mental health scores, specifically focused on depression-like behavioral characteristics. It integrates behavioral data from smartphones and wearables to provide insights into an individual's psychological state. This guide explains the factors contributing to the Depression Score, helping users understand their mental health in a new, data-driven way.

## At-a-Glance: Depression Score

| Aspect                | Details                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------ |
| Score `type`          | `depression`                                                                               |
| `score` range         | 0.0 - 1.0                                                                                  |
| Possible `state`s     | `none`, `low`, `medium`, `high`                                                            |
| Supported `inputData` | `activity`, `age`, `gender`                                                                |
| Key `factors`         | `active_hours`, `daily_steps`, `activity_goals`, `sedentary_periods`, `activity_deviation` |
| Status                | **AVAILABLE**                                                                              |

---

## Understanding the Depression Score

### How to Read the Score

A higher score may imply a greater resemblance to behavioral patterns commonly associated with depression. Each factor's contribution is crucial for managing and improving mental health.

### Interpreting the State

- **High**: Suggests significant depressive characteristics, potentially warranting professional help.
- **Medium**: Reflects moderate depressive symptoms, indicating the need for lifestyle adjustments or support.
- **Low**: Represents mild depression-like behavior, an opportunity for adopting proactive mental well-being measures.
- **None**: Implies minimal or no depression-like behavior; however, continuous monitoring and well-being practices are advised.

### Using the Score for Depression Management

Identify and address factors that increase the score, such as irregular activity patterns or prolonged sedentary periods, to enhance mental well-being.

### Limitations and Considerations

The Depression Score is an indicator of mental health and not a clinical diagnosis. Depression is a multifaceted clinical disorder requiring a specialist for diagnosis that involves non-behavioural factors such as medical history, genetic predisposition, familial history, comorbidities.

1. **Inference from Physical Behavior Alone**: The mental health scores infer infers the psychological state of a user solely based on physical behavior captured through smartphones and wearables. This method provides a limited perspective, as mental health is a complex interplay of various factors including genetics, personal experiences, and environmental influences, which cannot be fully captured through physical activity data alone.
2. **Screening, Not Diagnostic**: The training of the machine learning models for MHS is based on subjective clinical rating scales such as PHQ-9 for depression and GAD-7 for anxiety. These scales are used for screening and not for clinical diagnosis. Therefore, the MHS should be viewed as indicative of the level of severity of a mental health disorder rather than a clinical diagnosis.
3. **Explainability Factors of behavior alone**: While the models provide 'explainability factors' indicating which aspects of user behavior impact the scores most, these factors are derived from limited behavioral data. They might not encompass all relevant variables that contribute to an individual’s mental health state.

{% callout title="Note" %}
For effective utilization of our products, we encourage you to explore our [best practices guide.](/docs/guides/best-practices)
{% /callout %}

---

## Depression Score Factors

| #   | Factor             | Definition                                                                                                              | Clinical Relevance                                                                   | Optimal Value                                                                          | Reference                                                                                                                                                         |
| --- | ------------------ | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | Active Hours       | Represents the number of hours in a day where the individual is sufficiently active, based on a minimum step count.     | Being active throughout the day is linked with improved mood and mental health.      | Ideally, most waking hours should involve some level of physical activity.             | Dinas, P. C., Yiannis Koutedakis, and A. D. Flouris. "Effects of exercise and physical activity on depression."                                                   |
| 2.  | Daily Steps        | Counts the average number of steps taken each day.                                                                      | Steps are a basic indicator of physical activity, which affects mental well-being.   | Aim for at least 10,000 steps per day as a general guideline for good health.          | Mammen, George, and Guy Faulkner. "Physical activity and the prevention of depression: a systematic review of prospective studies."                               |
| 3.  | Activity Goals     | Tracks progress towards personalized physical activity targets based on the recommended value for the individual's age. | Meeting activity goals indicates a proactive approach to physical and mental health. | Achieving daily or weekly activity targets tailored to individual fitness levels.      | Cuijpers, Pim, Annemieke Van Straten, and Lisanne Warmerdam. "Behavioral activation treatments of depression: A meta-analysis."                                   |
| 4.  | Sedentary Periods  | Monitors durations of prolonged inactivity or minimal physical movement.                                                | Long sedentary periods are often associated with poorer mental health outcomes.      | Limiting sedentary periods to less than 8 hours a day, including work-related sitting. | Zhai, Long, Yi Zhang, and Dongfeng Zhang. "Sedentary behaviour and the risk of depression: a meta-analysis."                                                      |
| 5.  | Activity Deviation | Estimates the total number of calories expended through physical activity.                                              | Significant deviations in activity can reflect changes in mental state.              | Consistency in physical activity patterns.                                             | Luik, Annemarie I., et al. "24‐hour activity rhythm and sleep disturbances in depression and anxiety: A population‐based study of middle‐aged and older persons." |

---

## Frequently Asked Questions (FAQs)

**Q: How can I use the Depression Score to improve my mental health?**

A: By understanding and acting on the factors impacting your score, such as increasing daily activity and reducing sedentary periods, you can work towards better mental health.

**Q: Is the Depression Score a replacement for professional mental health care?**

A: No, it is a screening tool. If your score is medium or high, seeking professional help is recommended.

**Q: Can lifestyle changes impact my Depression Score?**

A: Absolutely. Positive lifestyle modifications, like more regular physical activity and reduced sedentary time, can influence your score and overall mental well-being.
