---
title: Anxiety Score
navigationTitle: Anxiety
description: The Anxiety Score is a measure designed to gauge anxiety-like behaviour based on physical activity patterns and lifestyle habits. It integrates various aspects of daily activity and routine to offer insights into potential mental health indicators.
---

**Empower your mental wellbeing**. The Anxiety Score is a measure designed to gauge anxiety-like behaviour based on physical activity patterns and lifestyle habits. It integrates various aspects of daily activity and routine to offer insights into potential mental health risk indicators. This guide outlines the factors contributing to the Anxiety Score, explaining how each element relates to anxiety levels and mental health.

## At-a-Glance: Anxiety Score

| Aspect                | Details                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------ |
| Score `type`          | `resilience`                                                                                  |
| `score` range         | 0.0 - 1.0                                                                                  |
| Possible `state`s     | `none`, `low`, `medium`, `high`                                                            |
| Supported `inputData` | `activity`, `age`, `gender`                                                                |
| Key `factors`         | `active_hours`, `daily_steps`, `activity_goals`, `sedentary_periods`, `activity_deviation` |
| Status                | **BETA**                                                                                   |

---

## Understanding the Anxiety Score

### How to Read the Score

A lower score generally indicates reduced anxiety-like behaviour, while a higher score may suggest increased anxiety-like behaviour. It's important to analyze the contribution of each factor for a comprehensive understanding.

### Interpreting the State

- **High**: Suggests significant anxiety-like behaviour, potentially affecting daily functioning.
- **Medium**: Indicates moderate anxiety-like behaviour, which might impact well-being occasionally.
- **Low**: Reflects manageable anxiety-like behaviour with minor influence on daily life.
- **None**: Denotes an absence or negligible anxiety-like behaviour, suggesting a calm mental state.

### Using the Score for Mental Wellbeing Management

Identify factors contributing to a higher score and consider lifestyle adjustments. For example, increasing active hours or reducing sedentary periods might help in managing anxiety.

### Limitations and Considerations

The Mental Health Resilience Score is a wellness tool and not a diagnostic measure. It should not replace professional medical advice. Individual experiences and psychological factors can also influence anxiety levels.

1. **Inference from Physical Behavior Alone**: The mental health scores infer the psychological state of a user solely based on physical behavior captured through smartphones and wearables. This method provides a limited perspective, as mental health is a complex interplay of various factors including genetics, personal experiences, and environmental influences, which cannot be fully captured through physical activity data alone.
2. **Screening, Not Diagnostic**: The training of the machine learning models for MHS is based on subjective clinical rating scales such as PHQ-9 for depression and GAD-7 for anxiety. These scales are used for screening and not for clinical diagnosis. Therefore, the MHS should be viewed as indicative of the level of severity of a mental health disorder rather than a clinical diagnosis.
3. **Explainability Factors of behavior alone**: While the models provide 'explainability factors' indicating which aspects of user behavior impact the scores most, these factors are derived from limited behavioral data. They might not encompass all relevant variables that contribute to an individual’s mental health state.

{% callout title="Note" %}
For effective utilization of our products, we encourage you to explore our [best practices guide.](/docs/guides/best-practices)
{% /callout %}

---

## Anxiety Score Factors

| #   | Factor             | Definition                                         | Relevance                                                                               | Optimal Value                                                               | Reference                                                                                                                                                         |
| --- | ------------------ | -------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | Active Hours       | Hours in a day with significant physical activity. | Active lifestyles are often associated with lower anxiety levels.                       | Ideally, most waking hours should involve some level of physical activity.  | Anderson, Elizabeth, and Geetha Shivakumar. "Effects of exercise and physical activity on anxiety."                                                               |
| 2.  | Daily Steps        | Average number of steps taken per day.             | Regular walking and movement can help in managing anxiety.                              | Aiming for a healthy number of steps, like 10,000 daily, can be beneficial. | Ströhle, Andreas. "Physical activity, exercise, depression and anxiety disorders."                                                                                |
| 3.  | Activity Goals     | Personalized physical activity targets.            | Achieving set goals can lead to a sense of accomplishment, reducing anxiety.            | Personalized goals that challenge yet are achievable.                       | Martinsen, Egil W. "Physical activity in the prevention and treatment of anxiety and depression."                                                                 |
| 4.  | Sedentary Periods  | Duration of inactivity or minimal movement.        | Long sedentary periods are often linked with higher anxiety levels.                     | Reducing sedentary periods, aiming for less than 8 hours a day.             | Teychenne, Megan, Sarah A. Costigan, and Kate Parker. "The association between sedentary behaviour and risk of anxiety: a systematic review."                     |
| 5.  | Activity Deviation | Variance from usual physical activity patterns.    | Significant deviations can indicate disruptions in routine, possibly elevating anxiety. | Maintaining consistent activity patterns.                                   | Luik, Annemarie I., et al. "24‐hour activity rhythm and sleep disturbances in depression and anxiety: A population‐based study of middle‐aged and older persons." |

---

## Frequently Asked Questions (FAQs)

**Q: How can I improve my Anxiety Score?**

A: Improving your Anxiety Score involves maintaining consistent physical activity, achieving daily activity goals, and minimizing periods of inactivity. It's also important to address any significant deviations in your usual activity patterns.

**Q: What does a `high` Anxiety Score indicate?**

A: A `high` Anxiety Score suggests higher levels of anxiety, possibly impacting daily life. It's a prompt to evaluate lifestyle habits and consider professional advice if needed.

**Q: Can physical activity alone manage anxiety?**

A: While physical activity is a key factor in managing anxiety, it's one part of a broader approach. Mental health is multifaceted, and professional guidance is often necessary for effective management.
