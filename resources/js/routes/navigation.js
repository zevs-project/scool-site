const home = () => import("../components/home.vue");
const news = () => import("../components/news.vue");
const schoolboy = () => import("../components/schoolboy.vue");
const parents = () => import("../components/parents.vue");
const test = () => import("../components/test.vue");

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
        description: "Новиини",
    },
    {
        path: "/schoolboy",
        component: schoolboy,
        name: "schoolboy",
        description: "Учням",
        children: [
            {
                path: "timetable",
                component: test,
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
