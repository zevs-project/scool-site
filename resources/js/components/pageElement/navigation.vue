<template>
    <div class="navigation">
        <div class="logo">Мотовилівська ЗОШ</div>
        <nav>
            <div class="goto" v-for="(menu, id) in getMenu" :key="id">
                <router-link :to="menu.path">{{
                    menu.description
                }}</router-link>

                <div v-if="menu.children" class="submenu-wrapper">
                    <div
                        v-for="(submenu, submenuId) in menu.children"
                        :key="submenuId"
                        class="submenu"
                    >
                        <router-link :to="mergePath(menu.path, submenu.path)">{{
                            submenu.description
                        }}</router-link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "navigation",
    data() {
        return {};
    },
    computed: {
        getMenu() {
            const routes = this.$router.options.routes;
            return routes;
        },
    },
    mounted() {},
    methods: {
        mergePath(...paths) {
            const mergePath = paths.join("/");
            return mergePath;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../../../sass/_variables";

.navigation {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    background: #fff;
    border-radius: 15px;
    box-shadow: 2px 2px 5px rgba(0,0,0,.3);
    margin-bottom: 15px;

    .logo {
        font-family: $fontPacifico;
        font-size: 1.5rem;
        padding: 0 5px;
    }

    nav {
        display: flex;
        align-items: center;
        padding: 5px;

        .goto {
            a {
                padding: 5px 10px;
                text-decoration: none;
                font-size: 1.2rem;
                position: relative;

                &:visited {
                    color: inherit;
                }
            }

            .submenu-wrapper {
                position: absolute;
                opacity: 0;
                transition: 0.5s 0s opacity ease-in;
            }

            &:hover > .submenu-wrapper {
                opacity: 1;
            }
        }
    }
}
</style>
