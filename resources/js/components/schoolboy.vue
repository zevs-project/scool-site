<template>
    <div class="schoolboy-wrapper">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "schoolboy",
    mounted() {
        console.log("Component mounted.");
    },
};
</script>
<style lang="scss" scoped>
@import "../../sass/_mixins";
@import "../../sass/_variables";

.schoolboy-wrapper {
    @include flexColumn;
    padding: 20px 0;
    max-width: $maxWidth;
    width: 100%;
    margin: 0 auto;
}
</style>
