<template>
  <div class="InventoryAttributeTable">
      <CustomTable :data="inventoryData" maxHeight="250" :elementType="elementType">
          <template slot="table-body">
            <el-table-column label="Name" property="name"></el-table-column>
            <el-table-column label="Importance" property="importance"></el-table-column>
            <el-table-column label="Level" property="level"></el-table-column>
            <el-table-column label="Feedback" property="feedback"></el-table-column>
          </template>
      </CustomTable>
  </div>
</template>

<script>
import CustomTable from '@/components/UIComponents/CustomUIComponents/CustomTable.vue';

export default {
    name: 'InventoryAttributeTable',
    components: {
        CustomTable
    },
    props: {
        inventoryData: {
            type: Array,
            default: () => []
        },
        elementType: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>
.InventoryAttributeTable {
    display: block;
}
</style>