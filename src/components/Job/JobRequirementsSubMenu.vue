<template>
<tabs :pills="false" :tabs="tabs" :handleClick="handleClick" :activeTab="selectedMenuTab">
    <keep-alive>
        <component :is="selectedMenuTab" class="col-12" />
    </keep-alive>
</tabs>
</template>

<script>
import JobCompetencies from '@/components/Job/JobCompetencies';
import KeyResults from '@/components/Inventory/KeyResults';
import JobQualifications from '@/components/Job/JobQualifications';
import JobResponsibilities from '@/components/Job/JobResponsibilities';

export default {
    name: 'JobRequirementsSubMenu',
    components: {
        JobCompetencies,
        KeyResults,
        JobQualifications,
        JobResponsibilities
    },
    data() {
        return {
            selectedMenuTab: 'JobCompetencies',
            tabs: [
                { 
                    label: 'Competencies',
                    value: 'JobCompetencies'
                },
                {
                    label: 'Key Results',
                    value: 'KeyResults'
                },
                {
                    label: 'Qualifications',
                    value: 'JobQualifications'
                },
                {
                    label: 'Responsibilities',
                    value: 'JobResponsibilities'
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
.JobRequirementsSubMenu {
    display: block;
}
</style>