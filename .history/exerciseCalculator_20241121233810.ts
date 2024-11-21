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
    const periodLength = array.length;
    const trainingDays = array.filter(day => day > 0).length;
    const average = array.reduce((acc, day) => acc + day, 0) / periodLength;
    const success = average >= target;
    let rating = 0;
    let ratingDescription = '';
     