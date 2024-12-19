<template>
<div class="NewOrganization">
    <wizard 
        @complete="submitNewOrganization"
        :plain="true"
        :showHeader="false"
    >
        <wizard-tab :before-change="() => validateStep('step1')">
            <template slot="label">
                Step 1
            </template>
            <WizardStep ref="step1" @on-validated="onStepValidated">
                <div class="col-12 text-left">
                    <ValidationProvider
                        name="name"
                        rules="required"
                        v-slot="{ passed, failed }"
                    >
                        <fg-input
                            label="Name:"
                            id="name"
                            type="text"
                            name="name"
                            :error="failed ? 'This field is required.' : null"
                            :hasSuccess="passed"
                            v-model="name"
                        />
                    </ValidationProvider>
                    <fg-input
                        label="Entity Type:"
                        id="entityType"
                        name="entityType"
                    >
                        <CustomSelectDropdown
                            v-model="entityType"
                            :options="this.$store.state.options.entityTypeOptions"
                        />
                    </fg-input>
                    <fg-input
                        label="Mission Statement:"
                        id="missionStatement"
                        name="missionStatement"
                    >
                        <textarea
                            class="form-control"
                            rows="3"
                            v-model="missionStatement"
                        />
                    </fg-input>
                    <fg-input
                        label="Value Proposition:"
                        id="valueProposition"
                        name="valueProposition"
                    >
                        <textarea
                            class="form-control"
                            rows="3"
                            v-model="valueProposition"
                        />
                    </fg-input>
                    <ValidationProvider
                        name="websiteURL"
                        :rules="{
                            regex: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
                        }"
                        v-slot="{ passed, failed }"
                    >
                        <fg-input
                            label="Website URL:"
                            id="websiteURL"
                            type="text"
                            name="websiteURL"
                            :error="failed ? 'Must begin with \'https://\' or \'www.\'.' : null"
                            :hasSuccess="passed"
                            v-model="websiteURL"
                        />
                    </ValidationProvider>
                    <ValidationProvider
                        name="mainPhone"
                        :rules="{
                            regex: /^(?:\(\d{3}\)|\d{3}-)\d{3}-\d{4}$/
                        }"
                        v-slot="{ passed, failed }"
                    >
                        <fg-input
                            label="Main Phone Number: (xxx-xxx-xxxx)"
                            id="mainPhone"
                            type="text"
                            name="mainPhone"
                            :error="failed ? 'Number format must be xxx-xxx-xxxx' : null"
                            :hasSuccess="passed"
                            v-model="mainPhone"
                        />
                    </ValidationProvider>
                </div>
            </WizardStep>
        </wizard-tab>
        <wizard-tab :before-change="() => validateStep('step2')">
            <template slot="label">
                Step 2
            </template>
            <WizardStep ref="step2" @on-validated="onStepValidated">
                <div class="col-12 text-left">
                    <ValidationProvider
                        name="mainEmail"
                        rules="email"
                        v-slot="{ passed, failed }"
                    >
                        <fg-input
                            label="Main Email:"
                            id="mainEmail"
                            type="text"
                            name="mainEmail"
                            :error="failed ? 'Please enter a valid email address.' : null"
                            :hasSuccess="passed"
                            v-model="mainEmail"
                        />
                    </ValidationProvider>
                    <CustomSearchDropdown 
                        id="naicsMajor"
                        name="naicsMajor"
                        label="NAICS Major:"
                        placeholder="Search Industry Sectors"
                        :options="this.$store.state.options.primarySectors"
                        @selected="handleSelection"
                    />
                    <CustomSearchTagInput 
                        id="naicsMinor"
                        name="naicsMinor"
                        label="NAICS Minor:"
                        placeholder="Search Industry Subsectors"
                        :dynamicTags="organization.naicsMinor"
                        :options="this.$store.state.options.subSectors"
                        @selected="handleInputConfirm"
                        @delete="handleClose"
                    />
                    <fg-input
                        label="Administrator Name:"
                        id="administrator"
                        type="text"
                        name="administrator"
                        v-model="administrator"
                    />
                    <fg-input
                        label="Total Employees:"
                        id="totalEmployees"
                        type="number"
                        name="totalEmployees"
                        v-model="totalEmployees"
                    />
                    <fg-input
                        label="Annual Revenue:"
                        id="annualRevenue"
                        type="number"
                        name="annualRevenue"
                        v-model="annualRevenue"
                    />
                </div>
            </WizardStep>
        </wizard-tab>
        <wizard-tab :before-change="() => validateStep('step3')">
            <template slot="label">
                Step 3
            </template>
            <WizardStep ref="step3" @on-validated="onStepValidated">
                <div class="col-12 text-left">
                    <fg-input
                        label="Finanical Year Ends:"
                        id="financialYearEnds"
                        name="financialYearEnds"
                    >
                        <CustomSelectDropdown
                            v-model="financialYearEnds"
                            :options="this.$store.state.options.months"
                        />
                    </fg-input>
                    <fg-input
                        label="Full Time Hours Per Week:"
                        id="fullTimeHoursPerWeek"
                        type="number"
                        name="fullTimeHoursPerWeek"
                        v-model="fullTimeHoursPerWeek"
                    />
                    <fg-input
                        label="Business Hours:"
                        id="businessHours"
                        type="text"
                        name="businessHours"
                        v-model="businessHours"
                    />
                    <fg-input 
                        label="Date Founded:"
                        class="m-0"
                        type="date"
                        id="dateFounded"
                        name="dateFounded"
                        v-model="dateFounded"
                        min="1950-01-01"
                        :max="getCurrentDate"
                    />
                    <p-button
                        @click="activateUnitForm"
                    >
                        Add Unit
                    </p-button>
                </div>
            </WizardStep>
        </wizard-tab>
    </wizard>
</div>
</template>

<script>
import { mapFields } from '@/util/helpers.js';
import CustomSearchDropdown from '@/components/UIComponents/CustomUIComponents/CustomSearchDropdown';
import CustomSelectDropdown from '@/components/UIComponents/CustomUIComponents/CustomSelectDropdown';
import CustomDatePicker from '@/components/UIComponents/CustomUIComponents/CustomDatePicker';
import CustomSearchTagInput from '@/components/UIComponents/CustomUIComponents/CustomSearchTagInput';
import WizardStep from '@/components/UIComponents/CustomUIComponents/WizardStep';
import ModalWrapper from '@/components/UIComponents/CustomUIComponents/ModalWrapper';
import NewUnit from '@/components/Forms/NewUnit';
import {Wizard, WizardTab} from '@/components/UIComponents'

export default {
    name: 'NewOrganization',
    components: {
        CustomDatePicker,
        CustomSelectDropdown,
        CustomSearchTagInput,
        CustomSearchDropdown,
        WizardStep,
        Wizard,
        WizardTab,
        ModalWrapper,
        NewUnit
    },
    data() {
        return {
            naicsMinorSearch: '',
            naicsMinorSearchSuggestions: []
        }
    },
    methods: {
        submitNewOrganization() {
            this.$emit('submit', 'submitOrganization', 'NewOrganization');
        },
        setOrganization() {
            this.$store.commit('setOrganization', this.newOrganization);
        },
        activateUnitForm() {
            this.$emit('activateUnitForm');
        },
        handleInputConfirm(inputValue) {
            this.$store.commit('addToOrganization', { collection: 'naicsMinor', payload: inputValue })
        },
        handleClose(index) {
            this.$store.commit('removeFromOrganization', { collection: 'naicsMinor', index: index })
        },
        validateStep(ref) {
            return this.$refs[ref].validate()
        },
        onStepValidated(validated, model) {
            this.wizardModel = {...this.wizardModel, ...model}
        },
        handleSelection(selection) {
            this.$store.commit('updateOrganizationField', { field: 'naicsMajor', value: selection })
        }
    },
    computed: {
        getCurrentDate() {
            return new Date().toISOString().slice(0, 10)
        },
        organization() {
            return this.$store.getters.organization;
        },
        ...mapFields({
            fields: [
                "name",
                "entityType",
                "missionStatement",
                "valueProposition",
                "websiteURL",
                "mainPhone",
                "mainEmail",
                "administrator",
                "totalEmployees",
                "annualRevenue",
                "financialYearEnds",
                "fullTimeHoursPerWeek",
                "businessHours",
                "dateFounded"
            ],
            base: "organization",
            mutation: "updateOrganizationField"
        }),
    },
}
</script>

<style>
.NewOrganization {
    display: block;
}
</style>