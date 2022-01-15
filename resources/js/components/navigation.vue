<template>
    <div class="navigation">
        <div class="logo">
            School logo
        </div>
        <nav>
            <div class="goto" v-for="(menu, id) in menuList" :key="id">
                <router-link :to="menu.route">{{ menu.name }}</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navigation",
    data() {
        return {
            menuList: [
                {
                    route: '/',
                    name: 'home'
                },
                {
                    route: '/news',
                    name: "news"
                }
            ]
        }
    }
};
</script>

<style scoped>

.navigation {
    display: flex;
    justify-content: space-between;
}



</style>
