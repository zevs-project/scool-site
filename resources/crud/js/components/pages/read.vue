<template>
    <div class="read-wrapper">
        <div class="table-wrapper">
            <div
                class="table-row"
                v-for="(row, rowIndex) in cellList"
                :key="rowIndex"
            >
                <div
                    class="table-cell"
                    v-for="(cellValue, cellName, cellIndex) in row"
                    :key="cellIndex"
                >
                    {{ cellValue }}
                </div>

                <action-button
                    :text="'Update'"
                    class="table-cell"
                    v-if="rowIndex !== 0"
                ></action-button>
                <div v-else class="table-cell empty"></div>
                <action-button
                    :text="'Remove'"
                    class="table-cell"
                    v-if="rowIndex !== 0"
                ></action-button>
                <div v-else class="table-cell empty"></div>
            </div>
        </div>

        <action-button :text="'Add row'" @click.native="gotoAddRow"></action-button>
    </div>
</template>

<script>
import actionButton from "./../library/buttons/actionButton.vue";

export default {
    props: {
        tableId: {
            type: String,
            default: "table1",
        },
    },
    components: {
        actionButton,
    },
    data() {
        return {
            cellList: [],
        };
    },
    watch: {
        tableId: {
            handler: function () {
                this.cellList = [
                    {
                        author: "author name",
                        title: "title",
                        content: "article content",
                        created_at: "created date",
                        updated_at: "updated date",
                    },
                    {
                        author: "author1",
                        title: "article title",
                        content: "article content",
                        created_at: "created date",
                        updated_at: "updated date",
                    },
                    {
                        author: "author name",
                        title: "article title",
                        content: "article content datea dsfadfja dsfadj dfasfa",
                        created_at: "21/01/2022",
                        updated_at: "21/03/2022",
                    },
                    {
                        author: "author name",
                        title: "article title",
                        content: "article content datea dsfadfja dsfadj dfasfa",
                        created_at: "21/01/2022",
                        updated_at: "21/03/2022",
                    },
                    {
                        author: "author name",
                        title: "article title",
                        content: "article content datea dsfadfja dsfadj dfasfa",
                        created_at: "21/01/2022",
                        updated_at: "21/03/2022",
                    },
                ];
            },
            deep: true,
            immediate: true,
        },
    },
    mounted() {
 console.log(this.$route);
    },
    methods: {
        gotoAddRow() {
            const tableId = this.$route.params.tableId;
            this.$router.push({ name: "create", params: { table: tableId } });
        }
    }
};
</script>

<style lang="scss">
.read-wrapper {
    display: flex;
    max-width: 1368px;
    width: 100%;
    padding: 1rem;
    flex-direction: column;

    .table-wrapper {
        display: flex;
        flex-direction: column;

        .table-row {
            display: grid;
            grid-auto-columns: 1fr;
            grid-auto-flow: column;

            .table-cell {
                padding: 0.5rem 1rem;
            }
        }
    }
}
</style>
