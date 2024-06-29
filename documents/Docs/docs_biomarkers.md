---
title: Digital Biomarkers
badge: new
description: Unlock insights into health and well-being with Sahha`s Digital Biomarkers, utilizing advanced analytics to transform raw health data into actionable knowledge.
---

Digital Biomarkers provide a comprehensive suite of metrics derived from various health and activity data sources. These biomarkers translate raw data into meaningful measures, enabling a deeper understanding of an individual's health status and lifestyle patterns.

{% callout title="Note" %}
Interested in discovering patterns or trends within biomarkers? Explore [User Insights](/docs/products/insights).
{% /callout %}

---

## Key Features

- **Clarity from Complexity**: Digital Biomarkers distill vast amounts of raw health data into clear, straightforward metrics, making it easy for anyone to understand their health status.
- **Multidimensional Analysis**: Capture a broad spectrum of health indicators, from physical activity to sleep patterns, offering a comprehensive health overview.
- **Proactive Monitoring**: By converting raw health data into meaningful metrics, Digital Biomarkers empower to make informed decisions and take proactive steps toward better health.
- **Evolving with Innovation**: Constantly refined with the latest technological advancements and health research.

---

## How It Works

Digital Biomarkers simplify and clarify health data, making it accessible and actionable:

- Health data is gathered from various sources, such as wearables, apps, and medical devices, capturing a wide array of health-related information.

- This raw data undergoes a meticulous process of cleaning, deduplication, and analysis. The transformation turns complex datasets into clean, reliable metrics.

- Through advanced analytics, these processed data points are then converted into Digital Biomarkers, which are concise indicators of different health aspects like activities, body composition, sleep patterns, and vital signs.

- These metrics offer a granular view of health and are instrumental in tracking changes, identifying trends, and guiding health-related decisions.

<!-- - Continuous Evolution: As new data comes in, the biomarker values are dynamically updated, ensuring they always offer the most current and relevant health measures. -->

---

## List of Biomarkers

### Activity

| Biomarker                       | Units  | Description                                                            | Significance                                                                                                      | Requires Wearable |
|---------------------------------|--------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|-------------------|
| **steps**                           | count  | The total number of steps taken                                        | Tracking steps is pivotal for daily physical activity, associated with lower risks of cardiovascular diseases, obesity, and diabetes | No                |
| **floors_climbed**                  | count  | The total number of floors climbed, reflecting vertical movement       | Enhances cardiovascular fitness and leg strength, contributing to a decreased risk of heart disease and obesity   | No                |
| **active_hours**                    | hour   | Number of hours in the day during which any physical activity occurs   | Critical for reducing sedentary lifestyle risks, including obesity and metabolic syndrome                         | No                |
| **active_duration**                 | minute | Total duration of all physical activities, including walking and exercises | Assesses overall activity levels, crucial for cardiovascular health and chronic disease prevention              | No                |
| **activity_low_intensity_duration** | minute | Duration in low-intensity activities (1.5-2.9 METs), like slow walking or light tasks | Aids in reducing sedentary behavior, linked with decreased risk of chronic diseases and mental health improvement | No                |
| **activity_medium_intensity_duration** | minute | Duration in moderate-intensity activities (3-5.9 METs), such as brisk walking | Key for cardiovascular benefits, reducing risks of heart disease, stroke, and hypertension                     | No                |
| **activity_high_intensity_duration**| minute | Time in high-intensity activities (>6 METs), likely intense exercises beyond walking | Boosts cardiovascular and metabolic health, significantly reducing various disease risks                         | No                |
| **activity_sedentary_duration**     | minute | Time spent inactive, highlighting minimal movement phases               | Crucial for identifying and minimizing sedentary time, reducing risks of metabolic syndrome and obesity          | No                |
| **active_energy_burned**            | kcal   | Energy expended during active phases, including walking and exercise   | Key for weight management, obesity prevention, and promoting metabolic health                                    | Yes               |
| **total_energy_burned**             | kcal   | Overall energy expenditure, combining resting and active states        | Offers a holistic view of energy expenditure, aiding in informed health and weight management decisions           | Yes               |


### Body

| Biomarker             | Units      | Description                                                                  | Significance                                                                                                                                                 | Requires Wearable |
|-----------------------|------------|------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| **height**            | meter      | The measure of the individual's stature from base to top                     | Crucial for clinical assessments like BMI calculation, nutritional status evaluation, and growth tracking in children and adolescents                        | No                |
| **weight**            | kilogram   | The total body mass of the individual                                        | Fundamental for health assessment, nutritional evaluation, and BMI calculation, aiding in the identification of potential health risks associated with underweight or overweight conditions | No                |
| **body_mass_index**   | kg/m^2     | A numerical computation of body fat, derived from the individual's weight and height | Serves as a standard metric for categorizing weight status, helping to identify risks for conditions such as obesity, cardiovascular disease, and diabetes  | No                |
| **body_fat**          | percentage | The proportion of total body weight that is composed of fat for the individual | Essential for determining body composition, assessing obesity-related disease risks, and guiding dietary and exercise interventions                         | Yes               |
| **fat_mass**          | kilogram   | The total weight of fat in the individual's body                             | Provides insight into body composition, crucial for evaluating obesity risk and designing targeted weight management programs                               | Yes               |
| **lean_mass**         | kilogram   | The total weight of non-fat body components, including muscle, bone, and water | Indicates overall muscle and organ mass, important for assessing nutritional status, physical fitness, and metabolic health                               | Yes               |
| **waist_circumference** | meter     | The circumference measurement around the individual's waist                  | A key indicator of visceral adiposity, predictive of metabolic syndrome, cardiovascular risk, and insulin resistance                                       | No                |
| **resting_energy_burned** | kcal     | The amount of energy expended by the individual's body at rest to maintain vital functions | Reflects basal metabolic rate, providing insights into metabolic efficiency and health status; important for nutrition and weight management planning         | No                |


### Sleep

| Biomarker             | Units     | Description                                                                                               | Significance                                                                                                                                                         | Requires Wearable |
|-----------------------|-----------|-----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| **sleep_start_time**      | datetime  | The exact time when the individual falls asleep                                                           | Understanding sleep onset helps in analyzing sleep patterns and consistency, crucial for maintaining circadian rhythm and promoting mental health                     | No                |
| **sleep_mid_time**        | datetime  | The midpoint time in the sleep cycle, equidistant between falling asleep and waking up                    | Reflects the balance and structure of the sleep cycle, aiding in the assessment of sleep quality and circadian rhythm alignment, which are vital for cognitive function and mood regulation                                  | No                |
| **sleep_end_time**        | datetime  | The time when the individual wakes up from sleep                                                          | Tracking waking time is essential for evaluating sleep regularity and duration, impacting alertness, cognitive performance, and overall physical health               | No                |
| **sleep_duration**        | minute    | The total time spent sleeping                                                                            | Critical for physical and mental recovery, supports memory consolidation, and is essential in reducing risks of various chronic conditions, including heart disease and obesity                                               | No                |
| **sleep_debt**            | hour      | The discrepancy between the amount of sleep an individual requires and the actual amount obtained         | Monitoring sleep debt is fundamental for understanding and mitigating long-term health impacts such as cognitive decline, mood instability, and increased susceptibility to illness                                          | No                |
| **sleep_interruptions**   | count     | The count of awakenings or breaks in sleep throughout the night                                           | High interruption frequency can significantly deteriorate sleep quality, affecting next-day functioning, mood stability, and long-term health                         | Yes               |
| **sleep_in_bed_duration** | minute    | Total time spent in bed, not necessarily sleeping                                                         | This metric helps assess sleep efficiency and identify patterns related to sleep disorders or insomnia, aiding in the management of sleep health                     | No                |
| **sleep_awake_duration**  | minute    | The time spent being awake after initially falling asleep and before finally waking up                    | Crucial for understanding sleep disturbances; prolonged awake durations can signal underlying sleep disorders or environmental issues impacting sleep                | Yes               |
| **sleep_light_duration**  | minute    | The time spent in the light sleep phase                                                                   | Light sleep is essential for memory processing and overall recovery, acting as a bridge to deeper sleep stages and contributing to the sleep cycle's effectiveness    | Yes               |
| **sleep_rem_duration**    | minute    | The time spent in REM (Rapid Eye Movement) sleep phase                                                    | REM sleep supports brain health, including memory and learning, emotional processing, and is closely linked with dreaming                                           | Yes               |
| **sleep_deep_duration**   | minute    | The time spent in deep (slow-wave) sleep phase                                                            | Deep sleep is fundamental for physical restoration, cell regeneration, and bolstering the immune system, playing a crucial role in overall health maintenance         | Yes               |
| **sleep_regularity**      | index     | A measure of how consistent sleep patterns are over time                                                  | Regular sleep patterns are associated with better overall health, reduced risk of chronic diseases, improved mood, and cognitive function                             | No                |
| **sleep_latency**         | minute    | Time it takes to fall asleep after going to bed                                                           | Sleep latency is an indicator of sleep initiation difficulty, where prolonged latency can be a marker of stress, anxiety, or sleep disorders, whereas shorter latency indicates healthy sleep initiation                     | Yes               |
| **sleep_efficiency**      | percentage| The ratio of total sleep time to the total time spent in bed                                              | An essential marker of sleep quality; high sleep efficiency is indicative of sound sleep health, whereas low efficiency may point to sleep disturbances or inefficiency in sleep initiation or maintenance                     | Yes               |


### Vitals

| Biomarker                      | Units         | Description                                                               | Significance                                                                                                         | Requires Wearable |
|--------------------------------|---------------|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|-------------------|
| **heart_rate_resting**         | bpm           | The heart rate when the individual is at rest                             | Indicates cardiovascular health and efficiency; lower resting heart rates are linked to better heart function and fitness | Yes               |
| **heart_rate_sleep**           | bpm           | The average heart rate during a sleep session                             | Offers insights into sleep quality and the balance of the autonomic nervous system during rest, which is crucial for recovery and health | Yes               |
| **heart_rate_variability_sdnn**| millisecond   | The standard deviation of NN intervals, representing variability in heartbeats | Higher HRV values suggest better cardiovascular fitness and resilience to stress, while lower values can signal potential health issues | Yes               |
| **heart_rate_variability_rmssd**| millisecond  | The root mean square of successive differences between heartbeats         | A key measure of parasympathetic nervous system activity, crucial for evaluating stress response, recovery, and cardiovascular health | Yes               |
| **respiratory_rate**           | count/minute  | The frequency of breaths per minute while at rest                         | An important indicator of respiratory and overall health, with significant implications for detecting various health conditions | Yes               |
| **respiratory_rate_sleep**     | count/minute  | The average respiratory rate during sleep                                 | Changes or abnormalities can signal sleep-related or respiratory conditions, affecting overall health quality | Yes               |
| **oxygen_saturation**          | percentage    | The proportion of oxygen-saturated hemoglobin in the blood                | Critical for evaluating cardiovascular and respiratory function, with low levels indicating potential health concerns | Yes               |
| **oxygen_saturation_sleep**    | percentage    | Average oxygen saturation levels during sleep                             | Important for assessing nighttime respiratory and cardiovascular efficiency, with deviations indicating potential health issues | Yes               |
| **vo2_max**                    | mL/kg/min     | The maximum volume of oxygen an individual can utilize during intense exercise | A strong indicator of cardiovascular fitness and aerobic capacity, with higher levels signifying better health and endurance | Yes               |
| **blood_glucose**              | mg/dL         | The level of glucose present in the blood                                 | Essential for metabolic health monitoring, with implications for energy management, mood regulation, and diabetes control | Yes               |
| **blood_pressure_systolic**    | mmHg          | The peak arterial pressure during heart beats                             | Elevated systolic pressure can signify cardiovascular risk, making its monitoring vital for hypertension management | Yes               |
| **blood_pressure_diastolic**   | mmHg          | The lowest arterial pressure during heart relaxation                      | Critical for cardiovascular health assessment, with its management being key in hypertension and related health risks | Yes               |
| **body_temperature_basal**     | celsius       | The body's temperature at rest                                           | Provides baseline for metabolic and overall health, with deviations indicating potential medical concerns | Yes               |
| **skin_temperature_sleep**     | celsius       | The skin temperature during sleep                                         | Offers insights into circulatory and environmental adaptation of the body during sleep, affecting sleep quality and health | Yes               |

---

## Output Schema

Understand the structure of Digital Biomarker data with the following schema:

```json
{
  "id": "unique_identifier",
  "type": "biomarker_type",
  "category": "biomarker_category",
  "value": numerical_value,
  "unit": "measurement_unit",
  "periodicity": "data_periodicity",
  "aggregation": "data_aggregation",
  "startDateTime": "start_timestamp",
  "endDateTime": "end_timestamp"
}
```

- **id**: A unique identifier for each biomarker reading.
- **type**: Specifies the biomarker type (e.g., steps, heart_rate).
- **category**: Classifies the biomarker into a category (e.g., activity, sleep).
- **value**: The numerical value of the biomarker.
- **unit**: The unit of measurement for the value.
- **periodicity**: The frequency at which the biomarker data is generated (e.g., daily, weekly, intraday).
- **aggregation**: The method of data aggregation used to calculate the value (e.g., total, average, maximum).
- **startDateTime**: The starting timestamp for the period over which the biomarker was calculated.
- **endDateTime**: The ending timestamp for that period.

---

<!-- ## Use Cases
For Individuals
- Monitor and understand personal health trends.
- Make lifestyle changes based on biomarker insights.
For Healthcare Providers
- Utilize biomarker data for comprehensive patient assessments.
- Tailor health interventions based on biomarker profiles.

--- -->

## FAQs

**Q: How frequently are Digital Biomarkers updated?**

A: Digital Biomarkers are updated based on their periodicity settings, which can be daily, weekly, or intraday.

**Q: Are wearable devices required to capture all Digital Biomarkers?**

A: While some biomarkers require wearable devices, others can be derived from different health data sources.

---

## Getting Started

To begin using Digital Biomarkers, integrate the Sahha SDK and subscribe to the biomarker webhooks.

---

## Support

For additional assistance or more detailed information on Digital Biomarkers, please contact [support@sahha.ai](mailto:support@sahha.ai) or reach out in the [slack community](https://join.slack.com/t/sahhacommunity/shared_invite/zt-1w0fmfbvk-qUwQ83tJgXyjT9XSxJvKIw).
