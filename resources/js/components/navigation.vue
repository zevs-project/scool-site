<template>
    <div class="navigation">
        <div class="logo">Мотовилівська ЗОШ</div>
        <nav>
            <div class="goto" v-for="(menu, id) in getMenu" :key="id">
                <router-link :to="menu.path">{{ menu.name }}</router-link>

                <div v-if="menu.children" class="show-submenu">
                    <div
                        v-for="(submenu, submenuId) in menu.children"
                        :key="submenuId"
                        class="submenu"
                    >
                        <router-link :to="submenu.path">{{
                            submenu.path
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
            
            return this.$router.getRoutes();
        },
    },
    mounted() {
        console.log(this.$router.getRoutes());
        console.log(this.$router);
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
        padding: 0 5px;
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
