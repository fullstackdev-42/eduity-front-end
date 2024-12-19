<template>
  <div class="OrganizationPage mb-5 mx-auto col-12 container-fluid">
    <div class="my-3 d-flex align-items-center justify-content-start">
      <h1 class="mx-3 mb-0 text-left">{{ organization.name }}</h1>
      <ActionDropdown class="mx-3" />
      <CustomDatePicker class="mx-3" />
    </div>
    <FunctionalMenu class="col-10 my-5 mx-auto" :route="`/organization/${this.$route.params.organizationId}`" containerType="organization"/>
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
import InventoryContent from '@/components/Inventory/InventoryContent';

import mockData from '@/mockData';

export default {
  name: 'OrganizationPage',
  components: {
    ActionDropdown,
    CustomDatePicker,
    FunctionalMenu,
    InventoryContent,
  },
  data() {
    return {
      inventorySections: [
        'Requirements',
        'Jobs',
        'Units',
        'Templates'
      ]
    }
  },
  created() {
    this.fetchOrganization();
  },
  destroyed() {
    this.$store.commit('resetOrganization');
  },
  computed: {
    organization() {
      return this.$store.getters.organization;
    }
  },
  methods:{
    clickHandler(object) {
      console.log('Clicking this will eventually open up a wizard...', object);
    },
    fetchOrganization() {
      const { organizationId } = this.$route.params;
      this.$store.commit('setOrganization', mockData.get('organizations', organizationId));
    }
  },
  provide() {
    return {
      clickHandler: this.clickHandler,
      container: 'Organization'
    }
  }
}
</script>

<style lang="scss" scoped>
.OrganizationPage {
  display: block;
}
</style>