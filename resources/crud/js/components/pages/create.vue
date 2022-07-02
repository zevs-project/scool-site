<template>
  <div class="create-wrapper">
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      cellNames: []
    }
  },
  watch: {
    table: {
            handler: function () {
                this.cellNames = [
                    {
                        author: "author name",
                        title: "title",
                        content: "article content",
                        created_at: "created date",
                        updated_at: "updated date",
                    },
                ];
            },
            deep: true,
            immediate: true,
        },
  }


}
</script>

<style>

</style>