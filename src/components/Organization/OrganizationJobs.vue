<template>
  <div class="OrganizationJobs">
      <CustomTable :data="jobs" maxHeight="250" :clickEventHandler="clickEventHandler" elementType="jobs">
          <template slot="table-body">
            <el-table-column label="Name" property="name"></el-table-column>
            <el-table-column label="People" property="people"></el-table-column>
            <el-table-column label="Full-Times" property="fullTimes"></el-table-column>
            <el-table-column label="Feedback" property="feedback"></el-table-column>
          </template>
      </CustomTable>
  </div>
</template>

<script>
import CustomTable from '@/components/UIComponents/CustomUIComponents/CustomTable';

export default {
    name: 'OrganizationJobs',
    components: {
        CustomTable,
    },
    computed: {
        jobs() {
            return this.$store.getters.orgJobs;
        }
    },
    methods: {
        clickEventHandler(row) {
            const jobId = row.id;
            this.$router.push(`/job/${jobId}`);
        }
    }
}
</script>

<style>
.OrganizationJobs {
    display: block;
}
</style>