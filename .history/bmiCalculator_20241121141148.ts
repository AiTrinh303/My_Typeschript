// Underweight (Severe thinness)	< 16.0	< 0.64
// Underweight (Moderate thinness)	16.0 – 16.9	0.64 – 0.67
// Underweight (Mild thinness)	17.0 – 18.4	0.68 – 0.73
// Normal range	18.5 – 24.9	0.74 – 0.99
// Overweight (Pre-obese)	25.0 – 29.9	1.00 – 1.19
// Obese (Class I)	30.0 – 34.9	1.20 – 1.39
// Obese (Class II)	35.0 – 39.9	1.40 – 1.59
// Obese (Class III)	≥ 40.0	≥ 1.60



const calculateBmi = (height: number, weight: number): string => {
    const bmi = weight / Math.pow(height / 100, 2);
    if (bmi < 16.0) {
        return 'Underweight (Severe thinness)';
    } else if (16.0 < bmi && bmi < 16.9) {
        return 'Underweight (Moderate thinness)	';
    } else if (bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
    }

