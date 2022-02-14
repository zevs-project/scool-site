const home = () => import("../components/home.vue");
const news = () => import("../components/news.vue");
const schoolboy = () => import("../components/schoolboy.vue");
const parents = () => import("../components/parents.vue");
const timetable = () => import("../components/timetable.vue");

export default [
    {
        path: "/",
        component: home,
        name: "home",
        description: "Головна",
    },
    {
        path: "/news",
        component: news,
        name: "news",
        description: "Новини",
    },
    {
        path: "/schoolboy",
        component: schoolboy,
        name: "schoolboy",
        description: "Учням",
        children: [
            {
                path: "timetable",
                component: timetable,
                description: 'Розклад уроків'
            },
        ],
    },
    {
        path: "/parents",
        component: parents,
        name: "parents",
        description: "Батькам"
    },
];
