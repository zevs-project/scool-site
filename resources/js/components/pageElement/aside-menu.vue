<template>
    <div class="aside">
        <h6>Категорії</h6>

        <div class="category-wrapper">
            <a href="" class="category-link">Категорія 1</a>
            <a href="" class="category-link">Категорія 2</a>
            <a href="" class="category-link">Категорія 3</a>
            <a href="" class="category-link">Категорія 4</a>
            <a href="" class="category-link">Категорія 5</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "aside-menu",
    props: {
        categories: {}
    },
    data() {
        return {};
    },
    computed: {},
    mounted() {},
    methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../../sass/_variables";

.aside {
    display: flex;
    flex-direction: column;

    .category-wrapper {
        display: flex;
        flex-direction: column;

        .category-link {
            text-decoration: none;
        }
    }
}
</style>
