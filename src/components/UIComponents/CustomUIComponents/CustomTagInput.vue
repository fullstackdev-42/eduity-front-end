<template>
 <div>
    <ValidationProvider
        :name="name"
        rules="numeric"
        v-slot="{ passed, failed }"
    >
        <fg-input
            :label="label"
            :placeholder="placeholder"
            :id="id"
            :name="name"
            type="text"
            v-model="inputValue"
            :error="failed ? 'Must be a number.' : null"
            :hasSuccess="passed"
            @keyup.enter="handleEnter"
            @blur="handleEnter"
        />
    </ValidationProvider>
    <el-tag
        :key="index"
        v-for="(tag,index) in dynamicTags"
        type="primary"
        :closable="true"
        :close-transition="true"
        @close="handleClose(index)"
    >
        {{ tag }}
    </el-tag>
 </div>
</template>

<script>
export default {
    name: 'CustomTagInput',
    props: {
        id: {
            type: String
        },
        name: {
            type: String
        },
        label: {
            type: String
        },
        placeholder: {
            type: String
        },
        dynamicTags: {
            type: Array
        },
        handleInputConfirm: {
            type: Function
        },
        handleClose: {
            type: Function
        }
    },
    data() {
      return {
        inputValue: ''
      }
    },
    methods: {
      handleEnter () {
        let inputValue = this.inputValue
        if (inputValue) {
          this.handleInputConfirm(inputValue)
        }
        this.inputValue = ''
      }
    }
}
</script>

<style lang="scss" scoped>
.CustomTagInput {
    display: block;
}
</style>