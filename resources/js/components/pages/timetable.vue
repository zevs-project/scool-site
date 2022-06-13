<template>
    <div class="timetable-wrapper">
        <day-table></day-table>
    </div>
</template>

<script>
import dayTable from "../pageElement/dayTimetable.vue";

export default {
    name: "timetable",
    components: {
        dayTable,
    },
    data() {
        return {};
    },
    mounted() {},
};
</script>

<style lang="scss" scoped>
@import "../../../sass/_mixins";
@import "../../../sass/_variables";

.timetable-wrapper {
    width: 100%;
    @include flexColumn;
}
</style>
