// 9.2 Exercise calculator
import { calculateBmi, height, weight } from "./bmiCalculator"

interface ExcerciseResult {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const calculateExercises = ( target: number, dailyHours: number[]): ExcerciseResult => {
    const periodLength = dailyHours.length;
    const trainingDays = dailyHours.filter(hours => hours > 0).length;
    let success = false;
    if (trainingDays >= periodLength) {
        success = true;
    }
    const average = dailyHours.reduce((a, b) => a + b, 0) / periodLength;

    let rating : number;
    let ratingDescription : string;

    if (average < target) {
        rating = 1;
        ratingDescription = 'not too bad but could be better';
    } else if (average === target) {
        rating = 2;
        ratingDescription = 'good but you need to put in more effort!';
    } else {
        rating = 3;
        ratingDescription = 'You are doing great!';
    }

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    }
   }

const target = Number(process.argv[2]);
const dailyHours = process.argv.slice(3).map(Number);

if (process.argv.length < 4) {
    throw new Error('Not enough arguments');
}

if (dailyHours.some(isNaN) || isNaN(target)) {
    throw new Error('Please provide valid numbers');
}

console.log(calculateExercises(target, dailyHours));




console.log(`person with height: ${height} and ${weight}:`, calculateBmi(height, weight));
