<template>
<div class="NewJob">
    <wizard
        @complete="submitNewJob"
        :plain="true"
        :showHeader="false"
    >
        <wizard-tab
            :before-change="() => validateStep('step1')"
            label="General"
        >
            <WizardStep 
                ref="step1"
                @on-validated="onStepValidated"
            >
                <div class="col-12 text-left">
                    <ValidationProvider
                        name="title"
                        rules="required"
                        v-slot="{ passed, failed }"
                    >
                        <fg-input 
                            label="Job Title:"
                            id="title"
                            type=text
                            name="title"
                            :error="failed ? 'This field is required' : null"
                            :hasSuccess="passed"
                            v-model="title"
                        />
                    </ValidationProvider>
                    <fg-input
                        label="Job Description:"
                        id="description"
                        name="description"
                    >
                        <textarea
                            class="form-control"
                            rows="3"
                            v-model="description"
                        ></textarea>
                    </fg-input>
                    <fg-input
                        label="Level (Job Zone):"
                        id="level"
                        name="level"
                    >
                        <CustomSelectDropdown
                            v-model="level"
                            :options="this.$store.state.options.level"
                        />
                    </fg-input>
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
                        :dynamicTags="naicsMinor"
                        :options="this.$store.state.options.subSectors"
                        @selected="(option) => addNewAttribute('naicsMinor', option)"
                        @delete="(index) => deleteAttribute('naicsMinor', index)"
                    />
                    <fg-input
                        label="Full-Time Equivalent Employees:"
                        id="FTE"
                        type="number"
                        name="FTE"
                        v-model="FTE"
                    />
                    <CustomSearchTagInput
                        id="reportsTo"
                        name="reportsTo"
                        label="Reports To:"
                        placeholder="Search Jobs"
                        :dynamicTags="reportsTo"
                        :options="this.$store.getters.jobs"
                        @selected="(option) => addNewAttribute('reportsTo', option)"
                        @delete="(index) => deleteAttribute('reportsTo', index)"
                        class="mb-2"
                    />
                    <fg-input
                        label="Family and Medical Leave Eligibility Status:"
                        id="fmlsaStatus"
                        name="fmlsaStatus"
                    >
                        <CustomSelectDropdown
                            v-model="fmlsaStatus"
                            :options="this.$store.state.options.fmlsaStatusOptions"
                        />
                    </fg-input>
                    <fg-input
                        label="Primary Business Function:"
                        id="primaryBusinessFunction"
                        name="primaryBusinessFunction"
                    >
                        <CustomSelectDropdown
                            v-model="primaryBusinessFunction"
                            :options="this.$store.state.options.primaryBusinessFunctionOptions"
                        />
                    </fg-input>
                </div>
            </WizardStep>
        </wizard-tab>

        <wizard-tab
            :before-change="() => validateStep('step2')"
            label="Responsibilities"
        >
            <WizardStep
                ref="step2"
                @on-validated="onStepValidated"
                label="Add responsibilities for this "
                helperText="Please enter an importance rating and level for each work element."
            >
                <div class="col-12 text-left">
                    <ul class="list-group-flush pl-0">
                        <li class="list-group-item">
                            <NewAttribute
                                title="Activities"
                                attributeType="activities"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="activities"
                                placeholder="Search activities..."
                            />
                        </li>
                        <li class="list-group-item">
                            <NewAttribute
                                title="Contexts"
                                attributeType="context"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="context"
                                placeholder="Search contexts..."
                            />
                        </li>
                        <li class="list-group-item">
                            <NewAttribute
                                title="Duties"
                                attributeType="duties"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="duties"
                                placeholder="Search duties..."
                            />
                        </li>
                        <li class="list-group-item">
                            <NewAttribute
                                title="Tools & Tech"
                                attributeType="toolsAndTech"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="toolsAndTech"
                                placeholder="Search tools & tech..."
                            />
                        </li>
                        <li class="list-group-item">
                            <NewAttribute
                                title="Values"
                                attributeType="values"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="values"
                                placeholder="Search values..."
                            />
                        </li>
                    </ul>
                </div>
            </WizardStep>
        </wizard-tab>

        <wizard-tab
            :before-change="() => validateStep('step3')"
            label="Qualifications"
        >
            <WizardStep
                ref="step3"
                @on-validated="onStepValidated"
                label="Add qualifications for this "
                helperText="Please enter an importance rating and level for each work element."
            >
                <div class="col-12 text-left">
                    <ul class="list-group-flush pl-0">
                        <li class="list-group-item">
                            <NewCertification 
                                :dynamicTags="certifications"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                            />
                        </li>
                        <li class="list-group-item">
                            <NewEducationWorkExperience 
                                title="Education"
                                attributeType="education"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="education"
                            />
                        </li>
                        <li class="list-group-item">
                            <NewTraining
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :onTheJobTrainingTags="onTheJobTraining"
                                :onSiteTrainingTags="onSiteTraining"
                            />
                        </li>
                        <li class="list-group-item">
                            <NewEducationWorkExperience 
                                title="Work Experience"
                                attributeType="workExperience"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="workExperience"
                            />
                        </li>
                    </ul>
                </div>
            </WizardStep>
        </wizard-tab>

        <wizard-tab
            :before-change="() => validateStep('step4')"
            label="Competencies"
        >
            <WizardStep
                ref="step4"
                @on-validated="onStepValidated"
                label="Add competencies for this "
                helperText="Please enter an importance rating and level for each work element."
            >
                <div class="col-12 text-left">
                    <ul class="list-group-flush pl-0">
                        <li class="list-group-item">
                            <NewAttribute
                                title="Abilities"
                                attributeType="abilities"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="abilities"
                            />
                        </li>
                        <li class="list-group-item">
                            <NewAttribute
                                title="Interests"
                                attributeType="interests"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="interests"
                            />
                        </li>
                        <li class="list-group-item">
                            <NewAttribute
                                title="Knowledge"
                                attributeType="knowledge"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="knowledge"
                            />
                        </li>
                        <li class="list-group-item">
                            <NewAttribute
                                title="Skills"
                                attributeType="skills"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="skills"
                            />
                        </li>
                        <li class="list-group-item">
                            <NewAttribute
                                title="Styles"
                                attributeType="styles"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="styles"
                            />
                        </li>
                    </ul>
                </div>
            </WizardStep>
        </wizard-tab>


        <wizard-tab
            :before-change="() => validateStep('step5')"
            label="Compensation"
        >
            <WizardStep
                ref="step5"
                @on-validated="onStepValidated"
            >
                <div class="col-12 text-left">
                    <fg-input
                        label="Minimum Pay:"
                        labelClasses="col-12 pl-0"
                        id="minimumPay"
                        min="0.01"
                        step="0.01"
                        type="number"
                        name="minimumPay"
                        v-model="minimumPay"
                    >
                        <span slot="addonLeft">$</span>
                    </fg-input>
                    <fg-input
                        label="Maximum Pay:"
                        labelClasses="col-12 pl-0"
                        id="maximumPay"
                        min="0.01"
                        step="0.01"
                        type="number"
                        name="maximumPay"
                        v-model="maximumPay"
                    >
                        <span slot="addonLeft">$</span>
                    </fg-input>
                    <fg-input
                        label="Pay Per:"
                        id="payPeriod"
                        name="payPeriod"
                    >
                        <CustomSelectDropdown
                            v-model="payPeriod"
                            :options="this.$store.state.options.payPeriodOptions"
                        />
                    </fg-input>
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
import CustomSearchTagInput from '@/components/UIComponents/CustomUIComponents/CustomSearchTagInput';
import NewAttribute from '@/components/Forms/NewAttribute';
import NewCertification from '@/components/Forms/NewCertification';
import NewEducationWorkExperience from '@/components/Forms/NewEducationWorkExperience';
import NewTraining from '@/components/Forms/NewTraining';
import WizardStep from '@/components/UIComponents/CustomUIComponents/WizardStep';
import {Wizard, WizardTab} from 'src/components/UIComponents';

export default {
    name: 'NewJob',
    components: {
        CustomSelectDropdown,
        CustomSearchDropdown,
        CustomSearchTagInput,
        NewAttribute,
        NewTraining,
        NewCertification,
        NewEducationWorkExperience,
        WizardStep,
        Wizard,
        WizardTab
    },
    methods: {
        handleSelection(selection) {
            this.$store.commit('updateJobField', { field: 'naicsMajor', value: selection })
        },
        saveJob() {
            this.$store.commit('setJob', this.newJob);
        },
        submitNewJob() {
            this.$emit('submit', 'addJobToUnit', 'NewUnit');
        },
        addNewAttribute(attributeType, attribute) {
            this.$store.commit('addToJob', { collection: attributeType, payload: attribute });
        },
        deleteAttribute(attributeType, index) {
            this.$store.commit('removeFromJob', { collection: attributeType, index: index });
        },
        validateStep(ref) {
            return this.$refs[ref].validate()
        },
        onStepValidated(validated, model) {
            this.wizardModel = {...this.wizardModel, ...model}
        },
    },
    computed: {
        ...mapFields({
            fields: [
                "title",
                "description",
                "level",
                "naicsMinor",
                "reportsTo",
                "FTE",
                "fmlsaStatus",
                "primaryBusinessFunction",
                "activities",
                "context",
                "duties",
                "toolsAndTech",
                "values",
                "certifications",
                "education",
                "onTheJobTraining",
                "onSiteTraining",
                "workExperience",
                "abilities",
                "interests",
                "knowledge",
                "skills",
                "styles",
                "minimumPay",
                "maximumPay",
                "payPeriod"
            ],
            base: "job",
            mutation: "updateJobField"
        }),
    }
}
</script>

<style>
.NewJob {
    display: block;
}
</style>