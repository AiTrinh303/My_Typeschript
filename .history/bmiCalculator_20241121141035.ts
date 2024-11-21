const calculateBmi = (height: number, weight: number): string => {
    const bmi = weight / Math.pow(height / 100, 2);
    if (bmi < 16.0) {
        return 'Underweight (Severe thinness)';
    } else if (bmi < 25) {
        return 'Normal range';
    } else if (bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
    }

