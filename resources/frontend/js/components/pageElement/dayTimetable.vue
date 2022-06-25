<template>
    <div class="day-timetable-wrapper">
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
                <tr class="current">
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
</template>

<script>
export default {
    name: "dayTimetable",
    components: {},
    data() {
        return {};
    },
    mounted() {},
};
</script>

<style lang="scss" scoped>
@import "../../../sass/_mixins";
@import "../../../sass/_variables";

.day-timetable-wrapper {
    @include flexColumn;
    padding: 25px 10px;
    width: 100%;
    .title {
        font-size: $titleFontSize;
    }
    table.daytable-time {
        border-collapse: collapse;
        font-size: 1.2rem;
        text-align: center;
        width: 80%;

        td {
            padding-top: 10px;
            padding-bottom: 10px;
        }

        thead {
            tr:first-of-type {
                background: #4ff7c8;
            }
        }

        tbody {
            tr {
                td {
                    border-top: 3px solid #fff;
                    border-bottom: 3px solid #fff;
                }
            }
            tr:nth-of-type(odd) {
                background: #dfdecc;
            }

            tr:nth-of-type(even) {
                background: #a2e1ef;
            }

            tr.current {
                background: #00a1ff;
            }
        }
    }
}
</style>
