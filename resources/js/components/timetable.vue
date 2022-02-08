<template>
    <div class="timetable-wrapper">
        <div class="timetable-block table-section">
            <h4 class="title">Розклад дня</h4>

            <table class="daytable-time">
                <thead>
                    <tr>
                        <td>Урок номер</td>
                        <td>Початок уроку</td>
                        <td>Кінець уроку</td>
                        <td>Перерва, хв</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>7.45</td>
                        <td>8.20</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>8.30</td>
                        <td>9.15</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>9.25</td>
                        <td>10.10</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>10.20</td>
                        <td>11.05</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>11.35</td>
                        <td>12.20</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>12.30</td>
                        <td>13.15</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>13.25</td>
                        <td>14.10</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>14.20</td>
                        <td>15.05</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="timetable-block sort-section">
            <h4 class="title">Розклад уроків</h4>
            <div class="timetable-sort-section">
                <input
                    type="checkbox"
                    value="Показать всі класи"
                    class="sorted-input"
                />

                <v-select></v-select>
            </div>
        </div>
    </div>
</template>

<script>
import vSelect from "vue-select";

export default {
    name: "parents",
    components: {
        "v-select": vSelect,
    },
    mounted() {
        console.log("Component mounted.");
    },
};
</script>

<style lang="scss" scoped>
@import "../../sass/_mixins";
@import "../../sass/_variables";

.timetable-wrapper {
    width: 100%;
    @include flexColumn;

    .timetable-block {
        @include flexColumn;
        padding: 25px 10px;
        .title {
            font-size: $titleFontSize;
        }
    }

    .table-section {
    }

    .sort-section {
    }
}
</style>
