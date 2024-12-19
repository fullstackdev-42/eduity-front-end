<template>
    <el-select class="select-default"
                placeholder="Select..."
                v-model="inputVal"
    >
        <el-option v-for="option in options"
                    class="select-default"
                    :value="option.value"
                    :label="option.label"
                    :key="option.label">
        </el-option>
    </el-select>
</template>

<script>
export default {
    name: 'CustomSelectDropdown',
    props: {
        value: {
            type: String,
            default: ''
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    computed: {
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