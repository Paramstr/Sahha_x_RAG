---
title: Stress Score
navigationTitle: Stress
description: The Stress Score is a vital component of Sahha's mental health scores, aimed at evaluating stress-like behaviour. This score utilizes data from smartphones and wearables to offer insights into a user’s stress state.
---

**Track and manage stress levels using behavioral data**. The Stress Score is a component of Sahha's mental health scores aimed at evaluating stress-like behaviour. This score utilizes data from smartphones and wearables to offer insights into a user’s stress state. This guide details the factors contributing to the Stress Score, enabling users to understand and manage their stress more effectively.

## At-a-Glance: Stress Score

| Aspect                | Details                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------ |
| Score `type`          | `stress`                                                                                   |
| `score` range         | 0.0 - 1.0                                                                                  |
| Possible `state`s     | `none`, `low`, `medium`, `high`                                                            |
| Supported `inputData` | `activity`, `age`, `gender`                                                                |
| Key `factors`         | `active_hours`, `daily_steps`, `activity_goals`, `sedentary_periods`, `activity_deviation` |
| Status                | **BETA**                                                                                   |

---

## Understanding the Stress Score

### How to Read the Score

A higher score indicates more stress-like behaviour. Understanding the impact of each factor is key to managing and mitigating stress.

### Interpreting the State

- **High**: Indicates significant stress-like behaviour that may require professional intervention.
- **Medium**: Reflects moderate stress-like behaviour, suggesting a need for stress management strategies.
- **Low**: Represents mild stress-like behaviour, a stage where proactive stress management can be most effective.
- **None**: Suggests minimal or no stress-like behaviour, although maintaining a healthy lifestyle is recommended.

### Using the Score for Stress Management

Focus on modifying factors that contribute to a higher stress score, like increasing physical activity and reducing sedentary periods, to manage stress better.

### Limitations and Considerations

The Stress Score is a tool for identifying stress-like behaviours and is not a clinical diagnosis. It's important to consider personal health conditions and environmental factors.

1. **Inference from Physical Behavior Alone**: The mental health scores infer the psychological state of a user solely based on physical behavior captured through smartphones and wearables. This method provides a limited perspective, as mental health is a complex interplay of various factors including genetics, personal experiences, and environmental influences, which cannot be fully captured through physical activity data alone.
2. **Screening, Not Diagnostic**: The training of the machine learning models for MHS is based on subjective clinical rating scales such as PHQ-9 for depression and GAD-7 for anxiety. These scales are used for screening and not for clinical diagnosis. Therefore, the MHS should be viewed as indicative of the level of severity of a mental health disorder rather than a clinical diagnosis.
3. **Explainability Factors of behavior alone**: While the models provide 'explainability factors' indicating which aspects of user behavior impact the scores most, these factors are derived from limited behavioral data. They might not encompass all relevant variables that contribute to an individual’s mental health state.

{% callout title="Note" %}
For effective utilization of our products, we encourage you to explore our [best practices guide.](/docs/guides/best-practices)
{% /callout %}

---

## Stress Score Factors

| #   | Factor             | Definition                                                           | Relevance                                                                    | Optimal Value                                                 | Reference                                                                                                                                                                                             |
| --- | ------------------ | -------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | Active Hours       | Indicates the amount of time spent in physical activity each day.    | Regular physical activity is associated with lower stress levels.            | Aim for consistent activity throughout the day.               | Norris, Richard, Douglas Carroll, and Raymond Cochrane. "The effects of physical activity and exercise training on psychological stress and well-being in an adolescent population."                  |
| 2.  | Daily Steps        | The average number of steps taken per day.                           | Physical activity, as measured in steps, can inversely affect stress levels. | Target around 10,000 steps per day for overall well-being.    | Schultchen, Dana, et al. "Bidirectional relationship of stress and affect with physical activity and healthy eating."                                                                                 |
| 3.  | Activity Goals     | Monitors progress towards daily or weekly physical activity targets. | Achieving activity goals can reduce stress and improve mental health.        | Personalized activity goals based on fitness level and age.   | Nguyen‐Michel, Selena T., et al. "Associations between physical activity and perceived stress/hassles in college students."                                                                           |
| 4.  | Sedentary Periods  | Tracks periods of inactivity or minimal movement.                    | Extended sedentary periods are linked to increased stress levels.            | Limit sedentary time, aiming for regular movement breaks.     | Mouchacca, Jennifer, Gavin R. Abbott, and Kylie Ball. "Associations between psychological stress, eating, physical activity, sedentary behaviours and body weight among women: a longitudinal study." |
| 5.  | Activity Deviation | Assesses the consistency of physical activity.                       | Fluctuations in activity can be indicators of changing stress levels.        | Maintaining a consistent level of physical activity is ideal. | Stults-Kolehmainen, Matthew A., and Rajita Sinha. "The effects of stress on physical activity and exercise."                                                                                          |

---

## Frequently Asked Questions (FAQs)

**Q: How can I use the Stress Score to manage my stress?**

A: By tracking and understanding the contributing factors, such as increasing physical activity and reducing sedentary periods, you can effectively manage your stress levels.

**Q: Is the Stress Score a substitute for professional care in stress management?**

A: No, it serves as a screening tool. Professional help is advised for high or persistent medium stress levels.

**Q: Can changes in lifestyle impact my Stress Score?**

A: Yes. Lifestyle modifications, particularly around physical activity and daily routine, can positively influence your Stress Score and stress management.
