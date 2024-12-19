<template>
<div class="ActionDropdown">
    <drop-down>
        <p-button
            slot="title"
            :size="buttonSize"
            class="dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            type="outline-primary"
            block
        >
            Action
        </p-button>
        <button class="dropdown-item" @click="dropDownAction">Copy/Move</button>
        <button class="dropdown-item" @click="dropDownAction">{{ edit ? 'Save' : 'Edit'}}</button>
        <button class="dropdown-item" @click="dropDownAction">Feedback</button>
        <button class="dropdown-item" @click="dropDownAction">Find</button>
        <button class="dropdown-item" @click="dropDownAction">Publish</button>
        <button class="dropdown-item" @click="dropDownAction">Remove/Delete</button>
    </drop-down>
</div>
</template>

<script>
export default {
    name: 'ActionDropdown',
    props: {
        buttonSize: {
            type: String,
            default: ''
        }
    },
    methods: {
        // Function that will handle selected dropdown action.
        dropDownAction(e) {
            // Placeholder action
            this.$store.commit('toggle', 'edit');
        },
    },
    computed: {
        edit() {
            return this.$store.state.edit;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>