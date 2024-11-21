// 9.2 Exercise calculator
import { calculateBmi } from "./bmiCalculator"

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
    let rating = 2;
    let rating


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

console.log(calculateExercises(2, [3, 0, 2, 4.5, 0, 3, 1]))   