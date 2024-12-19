<template>
    <fg-input 
        :label="label"
        class="CustomDatePicker"
        type="date"
        :id="id"
        :name="name"
        v-model="inputVal"
        min="1900-01-01"
        :max="getCurrentDate"
    />
</template>

<script>
export default {
    name: 'CustomDatePicker',
    props: {
        value: {
            type: String
        },
        label: {
            type: String
        },
        id: {
            type: String
        },
        name: {
            type: String
        }
    },
    computed: {
        getCurrentDate() {
            return new Date().toISOString().slice(0, 10)
        },
        inputVal: {
            get() {
                return this.value
            },
            set(value) {
                this.$emit('input', value)
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>