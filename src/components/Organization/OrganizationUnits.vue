<template>
  <div class="OrganizationUnits">
      <CustomTable :data="units" maxHeight="250" :clickEventHandler="clickEventHandler" elementType="units">
          <template slot="table-body">
            <el-table-column label="Unit Name" property="name"></el-table-column>
            <el-table-column label="Jobs" property="jobs"></el-table-column>
            <el-table-column label="People" property="people"></el-table-column>
            <el-table-column label="FTE" property="fte"></el-table-column>
            <el-table-column label="Feedback" property="feedback"></el-table-column>
          </template>
      </CustomTable>
  </div>
</template>

<script>
import CustomTable from '@/components/UIComponents/CustomUIComponents/CustomTable';

export default {
    name: 'OrganizationUnits',
    components: {
        CustomTable,
    },
    computed: {
        units() {
            return this.$store.getters.units;
        }
    },
    methods: {
        clickEventHandler(row) {
            const jobId = row.id;
            this.$router.push(`/unit/${jobId}`);
        }
    }
}
</script>

<style>
.OrganizationUnits {
    display: block;
}
</style>