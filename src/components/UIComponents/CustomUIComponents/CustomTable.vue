<template>
<div class="CustomTable text-center">
  <div class="card">
    <div class="card-header">
        <slot name="table-header">
          <div class="d-flex">
            <h2 class="ml-2 mb-0 text-left">{{header}}</h2>
            <input v-if="searchBar" class="mx-5 customTable--input"
              v-model="search"
              size="mini"
              placeholder="Type to search"/>
          </div>
        </slot>
    </div>
    <div class="card-body table table-full-width">
      <el-table 
        :data="data"
        class="table-main"
        :max-height="maxHeight"
        @row-click="clickEventHandler"
        style="width: 100%"
        :empty-text="`No ${elementType} have been defined.`"
      >
        <slot name="table-body"></slot>
      </el-table>
    </div>
  </div>
</div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';

export default {
    name: 'CustomTable',
    props: {
        data: {
            type: [Array, Object],
            description: 'The array of objects to be tabulated within the component.'
        },
        header: '',
        clickEventHandler: {
            type: Function,
            description: 'Function that is called when a table row is clicked.',
            default: () => 1
        },
        maxHeight: {
            type: String,
            description: 'The max height of a particular table instance.'
        },
        searchBar: {
          type: Boolean,
          default: false
        },
        elementType: {
          type: String,
          default: ''
        }
    },
    data() {
      return {
        search: '',
      }
    },
    watch: {
      search(newVal) {
        this.$emit('search', newVal)
      }
    }
}
</script>

<style lang="scss" scoped>
 .customTable--input {
   flex: auto;
 }
</style>