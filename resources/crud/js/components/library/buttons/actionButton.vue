<template>
    <div class="action-button">
        <button @click="click">{{ text }}</button>
    </div>
</template>

<script>
export default {
    props: {
        actionType: {
            type: String,
            default: 'default'
        },
        text: {
            type: String,
            default: 'Action button'
        }
    },
    data() {
        return {
            listOfType: [
                'default',
                'create',
                'read',
                'update',
                'delete',
            ]
        }
    },
    computed: {
        
    },
    methods: {
        click() {
            this.$emit('button-click');
        }
    }
}
</script>

<style></style>
