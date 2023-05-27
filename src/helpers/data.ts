export const WORKOUT_RECORD_DATAS = [
    {
        id: 1,
        kcal: 340,
        title: "체지방 감소",
        time: 50,
        image: 1,
        createDate: new Date(),
    },
    {
        id: 2,
        kcal: 120,
        title: "하체",
        time: 30,
        image: 2,
        createDate: new Date(),
    },
    {
        id: 3,
        kcal: 90,
        title: "코어",
        time: 20,
        image: 3,
        createDate: new Date(),
    },
];

export const EMOJI_DATAS = [
    {
        id: 1,
        title: "행복",
        src: "/emojis/slightly-smiling-face.png",
    },
    { id: 2, title: "휴...", src: "/emojis/dizzy-face.png" },
    { id: 3, title: "힘드러...", src: "/emojis/crying-face.png" },
    { id: 4, title: "eazy~", src: "/emojis/beaming-face.png" },
    { id: 5, title: "우엑~", src: "/emojis/face-vomiting.png" },
    { id: 6, title: "헤헤헤", src: "/emojis/melting-face.png" },
];

export const WORKOUT_IMAGES = [
    { id: 1, name: "플랭크", src: "/images/workouts/plank.png" },
    { id: 2, name: "버드독", src: "/images/workouts/bird_dog.png" },
    { id: 3, name: "롤-아웃", src: "/images/workouts/roll_out.png" },
    { id: 4, name: "크런치", src: "/images/workouts/crunch.png" },
    { id: 5, name: "마운틴클라이머", src: "" },
    { id: 6, name: "슈퍼맨", src: "" },
    { id: 7, name: "레그레이즈", src: "" },
    { id: 8, name: "브릿지", src: "/images/workouts/bridge.png" },
    { id: 9, name: "오버헤드프레스", src: "/images/workouts/overhead_press.png" },
    { id: 10, name: "펙덱플라이", src: "/images/workouts/peck_deck_fly.png" },
    { id: 11, name: "체스트프레스", src: "/images/workouts/chest_press.png" },
    { id: 12, name: "어시스트풀업", src: "/images/workouts/assist_pullup.png" },
    { id: 13, name: "랫풀다운", src: "/images/workouts/lat_pull_down.png" },
    { id: 14, name: "바벨플랫벤치프레스", src: "" },
    { id: 15, name: "덤벨플랫벤치프레스", src: "" },
    { id: 16, name: "덤벨인클라인벤치프레스", src: "" },
    { id: 17, name: "덤벨플라이", src: "" },
    { id: 18, name: "푸쉬업", src: "" },
    { id: 19, name: "밴드프론트레이즈", src: "" },
    { id: 20, name: "머신숄더프레스", src: "" },
    { id: 21, name: "케이블레터럴레이즈", src: "" },
    { id: 22, name: "덤벨로우", src: "" },
    { id: 23, name: "머신시티드로우", src: "" },
    { id: 24, name: "바벨로우", src: "/images/workouts/babel_row.png" },
    { id: 25, name: "스미스벤트오버로우", src: "" },
    { id: 26, name: "케이블시티드로우", src: "" },
    { id: 27, name: "데드리프트", src: "" },
    { id: 28, name: "스쿼드", src: "/images/workouts/squad.png" },
    { id: 29, name: "레그프레스", src: "/images/workouts/leg_press.png" },
    { id: 30, name: "힙쓰러스트", src: "/images/workouts/hip_thrust.png" },
    { id: 31, name: "레그익스텐션", src: "/images/workouts/leg_extensions.png" },
    { id: 32, name: "레그컬", src: "/images/workouts/leg_curl.png" },
    { id: 33, name: "바벨스쿼드", src: "" },
    { id: 34, name: "스플릿스쿼드", src: "" },
    { id: 35, name: "백익스텐션", src: "" },
    { id: 36, name: "케틀벨스윙", src: "/images/workouts/kettlebell_swing.png" },
    { id: 37, name: "랙풀", src: "" },
    { id: 38, name: "스티프데드리프트", src: "" },
    { id: 39, name: "덤벨런지", src: "" },
    { id: 40, name: "걷기", src: "/images/workouts/walk.png" },
    { id: 41, name: "인터벌러닝", src: "/images/workouts/interval.png" },
    { id: 42, name: "버피", src: "" },
    { id: 43, name: "실내사이클", src: "" },
    { id: 44, name: "스텝밀또는계단오르기", src: "" },
];

interface WorkOutUnits {
    readonly [key: string]: any;
}

interface WorkOutTypesText {
    time: number;
    count: number;
    distance: number;
    weight: number;
    set: number;
}

export const WorkOutTypes: WorkOutUnits = {
    TIME_AND_COUNT_BASED: (data: WorkOutTypesText) => `${data.time}초 ${data.set}세트`,
    COUNT_BASED: (data: WorkOutTypesText) => `${data.count}회 ${data.set}세트`,
    COUNT_AND_WEIGHT_BASED: (data: WorkOutTypesText) => `${data.weight}kg ${data.count}회 ${data.set}세트`,
    DISTANCE_BASED: (data: WorkOutTypesText) => `${data.distance}km/h`,
};
