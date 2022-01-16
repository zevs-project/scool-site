<template>
    <div class="navigation">
        <div class="logo">Мотовилівська ЗОШ</div>
        <nav>
            <div class="goto" v-for="(menu, id) in menuList" :key="id">
                <router-link :to="menu.route">{{ menu.name }}</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "navigation",
    data() {
        return {
            menuList: [
                {
                    route: "/",
                    name: "Головна",
                },
                {
                    route: "/news",
                    name: "Новини",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
@import "../../sass/_variables";

.navigation {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    max-width: $maxWidth;
    width: 100%;
    margin: 0 auto;

    .logo {
        font-family: $fontPacifico;
        font-size: 1.5rem;
    }

    nav {
        display: flex;
        align-items: center;
        padding: 5px;

        a {
            padding: 5px;
            text-decoration: none;
            font-size: 1.2rem;

            &:visited {
                color: inherit;
            }
        }
    }
}
</style>
