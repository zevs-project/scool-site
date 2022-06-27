<template>
    <div class="admin-wrapper">
        <div
            class="table-wrapper"
            v-for="table in listOfTables"
            :key="table.id"
        >
            <div class="row-wrapper">
                <span class="table-name" v-html="table.name"></span>
                <action-button
                    text="Редагувати таблицю"
                    class="change-button"
                    @button-click="gotoChangeTable(table.id)"
                ></action-button>
            </div>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
import actionButton from "./library/buttons/actionButton.vue";

export default {
    components: {
        actionButton,
    },
    props: {},
    data() {
        return {
            listOfTables: [
                {
                    name: "table 1",
                    id: "table1",
                },
                {
                    name: "table 2",
                    id: "table2",
                },
                {
                    name: "table 3 dfadsfa <br>sfdsdf sdfasd",
                    id: "table3",
                },
            ],
        };
    },
    methods: {
        gotoChangeTable(tableId) {
            this.$router.push({ name: "read", params: { table: tableId } });
        },
       
    },
};
</script>

<style lang="scss">
.admin-wrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    max-width: 1400px;
    margin: 0 auto;

    .table-wrapper {
        padding: 1rem;
        display: flex;
        justify-content: space-between;

        .row-wrapper {
            display: flex;
            flex-direction: column;
            justify-items: center;

            .table-name {
                padding: 0.5rem;
                font-size: 1.5rem;
            }
        }
    }
}
</style>
