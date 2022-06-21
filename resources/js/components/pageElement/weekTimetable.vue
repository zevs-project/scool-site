<template>
    <div class="timetable-wrapper">
        <div class="timetable-block sort-section">
            <h4 class="title">Розклад уроків</h4>
            <div class="timetable-sort-section">
                <input
                    type="checkbox"
                    value="Показать всі класи"
                    class="sorted-input sorted-element"
                />

                <v-select
                    class="sorted-select sorted-element"
                    :value="selectedValue"
                    v-bind="selectOption"
                ></v-select>
                <button class="submit-filter sorted-element">
                    Застосувати
                </button>
            </div>

            <div class="lesson-wrapper">
                <div class="lesson-wrapper-header lesson-section">
                    <div class="lesson-time-title lesson-start-time cell col-1">
                        Початок уроку, час
                    </div>
                    <div class="lesson-name-title lesson-name cell col-2">
                        Назва уроку
                    </div>
                    <div class="lesson-teacher-title teacher-name cell col-3">
                        Вчитель
                    </div>
                    <div
                        class="lesson-classname-title current-class cell col-4"
                    >
                        Клас
                    </div>
                    <div class="lesson-date-title current-date cell col-5">
                        Дата
                    </div>
                </div>
                <div class="lesson-section">
                    <div class="lesson-start-time cell col-1">8.30</div>
                    <div class="lesson-name cell col-2">Математика</div>
                    <div class="teacher-name cell col-3">Іванов І.І.</div>
                    <div class="current-class cell col-4">
                        1 класс<i class="far fa-bell"></i>
                    </div>
                    <div class="current-date cell col-5">
                        20 лютого 2022 р.<i class="far fa-bell"></i>
                    </div>
                </div>
                <div class="lesson-section">
                    <div class="lesson-start-time cell col-1">8.30</div>
                    <div class="lesson-name cell col-2">Математика</div>
                    <div class="teacher-name cell col-3">Іванов І.І.</div>
                    <div class="current-class cell col-4">
                        1 класс<i class="far fa-bell"></i>
                    </div>
                    <div class="current-date cell col-5">
                        20 лютого 2022 р.<i class="far fa-bell"></i>
                    </div>
                </div>
                <div class="lesson-section">
                    <div class="lesson-start-time cell col-1">8.30</div>
                    <div class="lesson-name cell col-2">Математика</div>
                    <div class="teacher-name cell col-3">Іванов І.І.</div>
                    <div class="current-class cell col-4">
                        1 класс<i class="far fa-bell"></i>
                    </div>
                    <div class="current-date cell col-5">
                        20 лютого 2022 р.<i class="far fa-bell"></i>
                    </div>
                </div>
                <div class="lesson-section">
                    <div class="lesson-start-time cell col-1">8.30</div>
                    <div class="lesson-name cell col-2">Математика</div>
                    <div class="teacher-name cell col-3">Іванов І.І.</div>
                    <div class="current-class cell col-4">
                        1 класс<i class="far fa-bell"></i>
                    </div>
                    <div class="current-date cell col-5">
                        20 лютого 2022 р.<i class="far fa-bell"></i>
                    </div>
                </div>
                <div class="lesson-section">
                    <div class="lesson-start-time cell col-1">8.30</div>
                    <div class="lesson-name cell col-2">Математика</div>
                    <div class="teacher-name cell col-3">Іванов І.І.</div>
                    <div class="current-class cell col-4">
                        1 класс<i class="far fa-bell"></i>
                    </div>
                    <div class="current-date cell col-5">
                        20 лютого 2022 р.<i class="far fa-bell"></i>
                    </div>
                </div>
                <div class="lesson-section">
                    <div class="lesson-start-time cell col-1">8.30</div>
                    <div class="lesson-name cell col-2">Математика</div>
                    <div class="teacher-name cell col-3">Іванов І.І.</div>
                    <div class="current-class cell col-4">
                        1 класс<i class="far fa-bell"></i>
                    </div>
                    <div class="current-date cell col-5">
                        20 лютого 2022 р.<i class="far fa-bell"></i>
                    </div>
                </div>
                <div class="lesson-section">
                    <div class="lesson-start-time cell col-1">8.30</div>
                    <div class="lesson-name cell col-2">Математика</div>
                    <div class="teacher-name cell col-3">Іванов І.І.</div>
                    <div class="current-class cell col-4">
                        1 класс<i class="far fa-bell"></i>
                    </div>
                    <div class="current-date cell col-5">
                        20 лютого 2022 р.<i class="far fa-bell"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vSelect from "vue-select";

export default {
    name: "weekTimetable",
    components: {
        "v-select": vSelect,
    },
    data() {
        return {
            selectedValue: '',
            selectOption: {
                options: [
                    {
                        label: "День",
                        code: "day",
                    },
                    {
                        label: "Тиждень",
                        code: "week",
                    },
                    {
                        label: "Місяць",
                        code: "mouth",
                    },
                ],
                placeholder: "Вкажіть фільтр",
                appendToBody: false,
                inputId: "select-type-filter",
                clearable: true,
            },
        };
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

    .timetable-block {
        @include flexColumn;
        padding: 25px 10px;
        width: 100%;
        .title {
            font-size: $titleFontSize;
        }
    }

    .table-section {
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

    .sort-section {
        .timetable-sort-section {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 15px 0;

            .sorted-element {
                margin-right: 15px;
                border-radius: 10px;
                padding: 0.2rem 1rem;
            }

            .sorted-input {
                height: 20px;
                flex-basis: 10%;
            }

            .sorted-select {
                ::v-deep .vs__dropdown-toggle {
                    display: flex;
                }

                ::v-deep .vs__selected-options {
                    margin-right: 5px;
                }

                ::v-deep .vs__actions {
                    display: none;
                }
            }
        }

        .lesson-wrapper {
            @include flexColumn;
            width: 80%;
            text-align: center;
            font-size: 1.2rem;

            .cell {
                padding: 0 5px 15px 5px;
            }

            .col-1,
            .col-4 {
                flex-basis: 15%;
            }

            .col-2,
            .col-3 {
                flex-basis: 20%;
            }

            .col-5 {
                flex-basis: 30%;
            }

            .lesson-wrapper-header {
            }

            .lesson-section {
                display: flex;
                width: 100%;
                justify-content: space-around;
            }
        }
    }
}
</style>
