const home = () => import("../components/home.vue");
const news = () => import("../components/news.vue");
const schoolboy = () => import("../components/schoolboy.vue");
const timetable = () => import("../components/timetable.vue");
const articlesForSchoolchildren = () => import("../components/articlesForSchoolchildren.vue");

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
        redirect: {name: 'timetable'},
        children: [
            {
                path: "timetable",
                component: timetable,
                description: 'Розклад уроків',
                name: 'timetable'
            },
            {
                path: "articlesForSchoolchildren",
                component: articlesForSchoolchildren,
                description: 'Цікаві статті',
                name: 'articlesForSchoolchildren'
            },
        ],
    },
];
