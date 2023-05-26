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
    TimeAndCountBased: (data: WorkOutTypesText) => `${data.time}초 ${data.set}세트`,
    CountBasedExercise: (data: WorkOutTypesText) => `${data.count}초 ${data.set}세트`,
    CountAndWeightBased: (data: WorkOutTypesText) => `${data.weight}kg ${data.count}회 ${data.set}세트`,
    DistanceBased: (data: WorkOutTypesText) => `${data.distance}km/h`,
};
