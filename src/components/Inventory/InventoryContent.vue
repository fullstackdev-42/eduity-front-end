<template>
  <div class="InventoryContent">
    <collapse :multiple-active="false" :activeIndex="0">
        <collapse-item
            v-for="(section, index) in inventorySections"
            :key="index"
            :title="section"
            titleElement="h2"
        >
            <template slot="button">
                <ModalWrapper
                    v-if="section === 'Jobs'"
                    buttonStyle="primary"
                    bodyClasses="px-0"
                    modalClasses="modal-lg"
                    ref="Job"
                >
                    <h6 class="mb-0 d-flex align-items-center" slot="header">
                        Add Job
                    </h6>
                    <NewJob @submit="addJobToOrganization" slot="body" />
                </ModalWrapper>

                <ModalWrapper
                    v-else-if="section === 'Units'"
                    buttonStyle="primary"
                    bodyClasses="px-0"
                    modalClasses="modal-lg"
                    ref="Unit"
                >
                    <h6 class="mb-0 d-flex align-items-center" slot="header">
                        {{ modalHeader }}
                    </h6>
                    <keep-alive
                        slot="body"
                        :exclude="['NewJob']"
                    >
                        <component
                            @submit="handleSubmit"
                            @activateJobForm="wizardComponent = 'NewJob'"
                            :is="wizardComponent"
                        ></component>
                    </keep-alive>
                </ModalWrapper>

                <p-button v-else type="primary" @click="clickHandler">
                    <i class="nc-icon lindua-plus mx-1"></i>
                    Add
                </p-button>
            </template>
            <template slot="content">
                <component v-if="section === 'Requirements'" :is="`${container}RequirementsSubMenu`"></component>
                <component v-if="section === 'Units'" :is="`${container}Units`"></component>
                <!-- ^^ Will throw an error when routing to 'UnitsPage' because there is not yet a 'UnitUnits' component.
                Functionality is working as it should in theory, however.  Might need to consider alternative naming for 'UnitUnits' and ternary rendering logic at some point. -->
                <component v-if="section === 'Jobs'" :is="`${container}Jobs`"></component>
                <JobTemplates v-if="section === 'Templates'" />
            </template>
        </collapse-item>
    </collapse>
  </div>
</template>

<script>
import OrganizationRequirementsSubMenu from '@/components/Organization/OrganizationRequirementsSubMenu';
import OrganizationUnits from '@/components/Organization/OrganizationUnits';
import OrganizationJobs from '@/components/Organization/OrganizationJobs';
import UnitRequirementsSubMenu from '@/components/Unit/UnitRequirementsSubMenu';
import JobRequirementsSubMenu from '@/components/Job/JobRequirementsSubMenu';
import JobTemplates from '@/components/Job/JobTemplates.vue';
import ModalWrapper from '@/components/UIComponents/CustomUIComponents/ModalWrapper';
import NewJob from '@/components/Forms/NewJob';
import NewUnit from '@/components/Forms/NewUnit';

export default {
    components: {
        OrganizationRequirementsSubMenu,
        OrganizationUnits,
        OrganizationJobs,
        UnitRequirementsSubMenu,
        JobRequirementsSubMenu,
        JobTemplates,
        ModalWrapper,
        NewJob,
        NewUnit
    },
    name: 'InventoryContent',
    props: {
        inventorySections: {
            type: Array
        }
    },
    data() {
        return {
            wizardComponent: 'NewUnit'
        }
    },
    methods: {
        handleSubmit(dispatch, wizardComponent) {
            this.$store.dispatch(dispatch);
            this.wizardComponent = wizardComponent;
            if (dispatch === 'addUnitToOrganization') {
                this.$refs.Unit[0].toggleModal();
            }
        },
        // Questioning whether we want to allow the user to add a Job directly to an 
        // Organization without first adding it to a Unit.
        addJobToOrganization() {
            this.$store.dispatch('addJobToOrganization');
            this.$refs.Job[0].toggleModal();
        }
    },
    inject: {
        clickHandler: {
            default: () => {}
        },
        container: {
            default: ''
        }
    },
    computed: {
        organization() {
            return this.$store.getters.organization;
        },
        modalHeader() {
            if (this.wizardComponent === 'NewUnit') {
                return 'Add Unit';
            } else {
                return 'Add Job';
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.InventoryContent {
    display: block;
}
</style>