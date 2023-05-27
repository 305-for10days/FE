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
    category: string;
    calorie: number;
    set: number;
}
