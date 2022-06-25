<template>
    <div class="timetable-wrapper">
        <day-table></day-table>
        <week-timetable></week-timetable>
    </div>
</template>

<script>
import dayTable from "../pageElement/dayTimetable.vue";
import weekTimetable from "../pageElement/weekTimetable.vue";
import WeekTimetable from "../pageElement/weekTimetable.vue";

export default {
    name: "timetable",
    components: {
    dayTable,
    weekTimetable,
    WeekTimetable
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
