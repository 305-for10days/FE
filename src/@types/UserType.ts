export interface InfoAddProps {
    [key: string]: any;
    gender: "M" | "W" | "";
    height?: number;
    weight?: number;
    severalTimesWeek: number;
    minutePerWorkout: number;
    bmi: string;
}

export interface RecommendWorkOutProps {
    workoutId: number;
    type: string;
    calorie: number;
}
