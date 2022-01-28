const home = () =>import ( '../components/home.vue')
const news = () =>import ( '../components/news.vue')
const schoolboy = () =>import ( '../components/schoolboy.vue')
const parents = () =>import ( '../components/parents.vue')

export default [
    {
        path: '/',
        component: home,
        name: 'home',
    },
    {
        path: '/news',
        component: news,
        name: 'news',
    },
    {
        path: '/schoolboy',
        component: schoolboy,
        name: 'schoolboy',
    },
    {
        path: '/parents',
        component: parents,
        name: 'parents',
    },
]