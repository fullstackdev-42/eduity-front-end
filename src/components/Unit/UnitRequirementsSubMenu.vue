<template>
<tabs :pills="false" :tabs="tabs" :handleClick="handleClick" :activeTab="selectedMenuTab">
    <keep-alive>
        <component :is="selectedMenuTab" class="col-12" />
    </keep-alive>
</tabs>
</template>

<script>
import UnitCompetencies from '@/components/Unit/UnitCompetencies';
import Objectives from '@/components/Inventory/Objectives';
import UnitQualifications from '@/components/Unit/UnitQualifications';
import UnitResponsibilities from '@/components/Unit/UnitResponsibilities';

export default {
    name: 'UnitRequirementsSubMenu',
    components: {
        UnitCompetencies,
        Objectives,
        UnitQualifications,
        UnitResponsibilities
    },
    data() {
        return {
            selectedMenuTab: 'UnitCompetencies',
            tabs: [
                { 
                    label: 'Competencies',
                    value: 'UnitCompetencies'
                },
                {
                    label: 'Objectives',
                    value: 'Objectives'
                },
                {
                    label: 'Qualifications',
                    value: 'UnitQualifications'
                },
                {
                    label: 'Responsibilities',
                    value: 'UnitResponsibilities'
                }
            ]
        }
    },
    methods: {
        handleClick(tab) {
            this.selectedMenuTab = tab.value;
        }
    }
}
</script>

<style lang="scss" scoped>
.UnitRequirementsSubMenu {
    display: block;
}
</style>