<template>
  <div class="JobPage mb-5 mx-auto col-12 container-fluid">
    <div class="my-3 d-flex align-items-center justify-content-start">
      <h1 class="mx-3 mb-0 text-left">{{ job.details.name }}</h1>
      <ActionDropdown class="mx-3" />
      <CustomDatePicker class="mx-3" />
    </div>
    <FunctionalMenu class="col-10 my-5 mx-auto" :route="`/job/${this.$route.params.jobId}`" containerType="job" />
    <div class="functional-menu-content col-12 mx-auto text-center">
      <transition mode="out-in">
        <el-collapse-transition>
          <router-view />
        </el-collapse-transition>
      </transition>
    </div>
    <div class="page-content">
      <InventoryContent :inventorySections="inventorySections" />
    </div>
  </div>
</template>

<script>
import ActionDropdown from '@/components/UIComponents/CustomUIComponents/ActionDropdown';
import CustomDatePicker from '@/components/UIComponents/CustomUIComponents/CustomDatePicker';
import FunctionalMenu from '@/components/FunctionalMenu/FunctionalMenu';
import InventoryContent from '@/components/Inventory/InventoryContent.vue';

import mockData from '@/mockData';

export default {
  name: 'JobPage',
  components: {
    ActionDropdown,
    CustomDatePicker,
    FunctionalMenu,
    InventoryContent,
  },
  computed: {
    job() {
      return this.$store.state.job.job
    }
  },
  data() {
    return {
      inventorySections: [
        'Requirements',
        'People'
      ]
    }
  },
  created() {
    this.fetchJob();
  },
  methods:{
    clickHandler(object) {
      // Leaving this console.log for placeholder functionality.
      console.log(JSON.parse(JSON.stringify(object)));
    },
    fetchJob() {
      const { jobId } = this.$route.params;
      this.$store.commit('setJob', mockData.get('jobs', jobId));
    }
  },
  provide() {
    return {
      clickHandler: this.clickHandler,
      container: 'Job'
    }
  }
}
</script>

<style lang="scss" scoped>
.JobPage {
    display: block;
}
</style>