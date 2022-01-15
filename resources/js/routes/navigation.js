const home = () =>import ( '../components/home.vue')
const news = () =>import ( '../components/news.vue')

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
]