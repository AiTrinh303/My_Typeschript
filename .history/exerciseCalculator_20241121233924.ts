// 9.2 Exercise calculator

interface result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const exerciseCalculatorts = ( target: number, array: number[]): result => {
   
