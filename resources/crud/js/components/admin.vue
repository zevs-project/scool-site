<template>
    <div class="admin-wrapper">
        <div
            class="table-wrapper"
            v-for="table in listOfTables"
            :key="table.id"
        >
            <div class="row-wrapper">
                <span class="table-name">{{ table.name }}</span>
                <action-button
                    text="Редагувати таблицю"
                    @button-click="gotoChangeTable(table.id)"
                ></action-button>
            </div>
        </div>
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
                    name: "table 3",
                    id: "table3",
                },
            ],
        };
    },
    methods: {
        gotoChangeTable(tableId) {
            console.log(tableId);
        },
    },
};
</script>

<style></style>
