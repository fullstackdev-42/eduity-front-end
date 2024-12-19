<template>
<tabs :pills="false" :tabs="tabs" :handleClick="handleClick" :activeTab="selectedMenuTab">
    <keep-alive>
        <component :is="selectedMenuTab" class="col-12" />
    </keep-alive>
</tabs>
</template>

<script>
import OrganizationCompetencies from '@/components/Organization/OrganizationCompetencies';
import Goals from '@/components/Inventory/Goals';
import OrganizationQualifications from '@/components/Organization/OrganizationQualifications';
import OrganizationResponsibilities from '@/components/Organization/OrganizationResponsibilities';

export default {
    name: 'OrganizationRequirementsSubMenu',
    components: {
        OrganizationCompetencies,
        Goals,
        OrganizationQualifications,
        OrganizationResponsibilities
    },
    data() {
        return {
            selectedMenuTab: 'OrganizationCompetencies',
            tabs: [
                { 
                    label: 'Competencies',
                    value: 'OrganizationCompetencies'
                },
                {
                    label: 'Goals',
                    value: 'Goals'
                },
                {
                    label: 'Qualifications',
                    value: 'OrganizationQualifications'
                },
                {
                    label: 'Responsibilities',
                    value: 'OrganizationResponsibilities'
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
.OrganizationRequirementsSubMenu {
    display: block;
}
</style>