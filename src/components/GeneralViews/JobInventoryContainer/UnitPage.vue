<template>
  <div class="UnitPage mb-5 mx-auto col-12 container-fluid">
    <div class="my-3 d-flex align-items-center justify-content-start">
      <h1 class="mx-3 mb-0 text-left">{{ unit.details.name }}</h1>
      <ActionDropdown class="mx-3" />
      <CustomDatePicker class="mx-3" />
    </div>
    <FunctionalMenu class="col-10 my-5 mx-auto" :route="`/unit/${this.$route.params.unitId}`" containerType="unit" />
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
    name: 'UnitPage',
    components: {
        ActionDropdown,
        CustomDatePicker,
        FunctionalMenu,
        InventoryContent
    },
    data() {
        return {
          inventorySections: [
            'Requirements',
            'Units',
            'Jobs'
          ],
        }
    },
    created() {
        this.fetchUnit();
    },
    computed: {
      unit() {
        return this.$store.state.unit.unit
      }
    },
    methods:{
        clickHandler(object) {
            // Leaving this console.log for placeholder functionality.
            console.log(JSON.parse(JSON.stringify(object)));
        },
        fetchUnit() {
          const { unitId } = this.$route.params;
          this.$store.commit('setUnit', mockData.get('units', unitId));
        }
    },
    provide() {
        return {
            clickHandler: this.clickHandler,
            container: 'Unit'
        }
    }
}
</script>

<style lang="scss" scoped>
.UnitPage {
    display: block;
}
</style>