<template>
<div class="NewUnit">
    <wizard
        :key="key"
        @complete="submitNewUnit"
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
                    <CustomDatePicker 
                        id="openDate"
                        name="openDate"
                        label="Open Date:"
                        v-model="openDate"
                    />
                    <CustomDatePicker 
                        id="closeDate"
                        name="closeDate"
                        label="Close Date:"
                        v-model="closeDate"
                    />
                    <fg-input
                        label="Unit Type:"
                        id="type"
                        name="type"
                    >
                        <CustomSelectDropdown
                            v-model="type"
                            :options="this.$store.state.options.unitTypeOptions"
                        />
                    </fg-input>
                    <fg-input
                        label="Business Function:"
                        id="primaryBusinessFunction"
                        name="primaryBusinessFunction"
                    >
                        <CustomSelectDropdown
                            v-model="primaryBusinessFunction"
                            :options="this.$store.state.options.primaryBusinessFunctionOptions"
                        />
                    </fg-input>
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
                        id="location"
                        name="location"
                        label="Location:"
                        v-model="location"
                        type="text"
                    />
                    <fg-input
                        label="Purpose:"
                        id="purpose"
                        name="purpose"
                    >
                        <textarea
                            class="form-control"
                            rows="3"
                            v-model="purpose"
                        ></textarea>
                    </fg-input>
                    <fg-input
                        label="Annual Payroll Budget:"
                        id="annualPayrollBudget"
                        labelClasses="col-12 pl-0"
                        min="0.01"
                        step="0.01"
                        type="number"
                        name="annualPayrollBudget"
                        v-model="annualPayrollBudget"
                    >
                        <span slot="addonLeft">$</span>
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
                label="Add responsibilities for the entire unit."
                helperText="Please enter an importance rating and level for each work element."
            >
                <div class="col-12 text-left">
                    <ul class="list-group-flush p-0">
                        <li class="list-group-item px-0">
                            <NewAttribute
                                title="Activities"
                                attributeType="activities"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="activities"
                            />
                        </li>
                        <li class="list-group-item px-0">
                            <NewAttribute
                                title="Contexts"
                                attributeType="context"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="context"
                            />
                        </li>
                        <li class="list-group-item px-0">
                            <NewAttribute
                                title="Duties"
                                attributeType="duties"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="duties"
                            />
                        </li>
                        <li class="list-group-item px-0">
                            <NewAttribute
                                title="Tools And Tech"
                                attributeType="toolsAndTech"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="toolsAndTech"
                            />
                        </li>
                        <li class="list-group-item px-0">
                            <NewAttribute
                                title="Values"
                                attributeType="values"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="values"
                            />
                        </li>
                    </ul>
                </div>
            </WizardStep>
        </wizard-tab>
        <wizard-tab
            :before-change="() => validateStep('step3')"
            label="Competencies"
        >
            <WizardStep
                ref="step3"
                @on-validated="onStepValidated"
                label="Add competencies for the entire unit."
                helperText="Please enter an importance rating and level for each work element."
            >
                <div class="col-12 text-left">
                    <ul class="list-group-flush p-0">
                        <li class="list-group-item px-0">
                            <NewAttribute
                                title="Abilities"
                                attributeType="abilities"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="abilities"
                            />
                        </li>
                        <li class="list-group-item px-0">
                            <NewAttribute
                                title="Interests"
                                attributeType="interests"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="interests"
                            />
                        </li>
                        <li class="list-group-item px-0">
                            <NewAttribute
                                title="Knowledge"
                                attributeType="knowledge"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="knowledge"
                            />
                        </li>
                        <li class="list-group-item px-0">
                            <NewAttribute
                                title="Skills"
                                attributeType="skills"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="skills"
                            />
                        </li>
                        <li class="list-group-item px-0">
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
            :before-change="() => validateStep('step4')"
            label="Qualifications"
        >
            <WizardStep
                ref="step4"
                @on-validated="onStepValidated"
                label="Add qualifications for the entire unit."
                helperText="Please enter an importance rating and level for each work element."
            >
                <div class="col-12 text-left">
                    <ul class="list-group-flush p-0">
                        <li class="list-group-item px-0">
                            <NewCertification 
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="certifications"
                            />
                        </li>
                        <li class="list-group-item px-0">
                            <NewEducationWorkExperience 
                                title="Education"
                                attributeType="education"
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="education"
                            />
                        </li>
                        <li class="list-group-item px-0">
                            <NewTraining
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :onTheJobTrainingTags="onTheJobTraining"
                                :onSiteTrainingTags="onSiteTraining"
                            />
                        </li>
                        <li class="list-group-item px-0">
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
        <!-- Not sure what to label this step  -->
        <wizard-tab
            :before-change="() => validateStep('step5')"
            label="Step 5"
        >
            <WizardStep
                ref="step5"
                @on-validated="onStepValidated"
            >
                <div class="col-12 text-left">
                    <ul class="list-group-flush p-0">
                        <li class="list-group-item px-0">
                            <NewPostJobsTo
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="postJobsTo"   
                            />
                        </li>
                        <li class="list-group-item px-0">
                            <NewObjective
                                @push="addNewAttribute"
                                @delete="deleteAttribute"
                                :dynamicTags="objectives"
                            />
                        </li>
                    </ul>
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
                    <CustomSearchTagInput
                        id="contact"
                        name="contact"
                        label="Contact:"
                        placeholder="Search contacts"
                        :dynamicTags="contact"
                        :options="this.$store.state.users.organizationUsers"
                        @selected="(option) => addNewAttribute('contact', option)"
                        @delete="(index) => deleteAttribute('contact', index)"
                        class="mb-2"
                    />
                    <p-button
                        @click="activateJobForm"
                    >
                        Add Job
                    </p-button>
                </div>
            </WizardStep>
        </wizard-tab>
    </wizard>
</div>
</template>

<script>
import { mapFields } from '@/util/helpers.js';
import WizardStep from '@/components/UIComponents/CustomUIComponents/WizardStep';
import NewAttribute from '@/components/Forms/NewAttribute';
import NewCertification from '@/components/Forms/NewCertification';
import NewEducationWorkExperience from '@/components/Forms/NewEducationWorkExperience';
import NewObjective from '@/components/Forms/NewObjective';
import NewTraining from '@/components/Forms/NewTraining';
import NewPostJobsTo from '@/components/Forms/NewPostJobsTo';
import {Wizard, WizardTab} from '@/components/UIComponents';
import CustomDatePicker from '@/components/UIComponents/CustomUIComponents/CustomDatePicker';
import CustomSelectDropdown from '@/components/UIComponents/CustomUIComponents/CustomSelectDropdown';
import CustomSearchTagInput from '@/components/UIComponents/CustomUIComponents/CustomSearchTagInput';
import ModalWrapper from '@/components/UIComponents/CustomUIComponents/ModalWrapper';
import NewJob from '@/components/Forms/NewJob';

export default {
    name: 'NewUnit',
    components: {
        WizardStep,
        Wizard,
        WizardTab,
        CustomDatePicker,
        CustomSelectDropdown,
        CustomSearchTagInput,
        NewAttribute,
        NewTraining,
        NewPostJobsTo,
        NewCertification,
        NewEducationWorkExperience,
        NewObjective,
        ModalWrapper,
        NewJob,
    },
    data() {
        return {
            key: 0
        }
    },
    methods: {
        submitNewUnit() {
            this.key++;
            this.$emit('submit', 'addUnitToOrganization', 'NewOrganization');
        },
        saveUnit() {
            this.$store.commit('setUnit', this.newUnit);
        },
        activateJobForm() {
            this.$emit('activateJobForm');
        },
        validateStep(ref) {
            return this.$refs[ref].validate()
        },
        onStepValidated(validated, model) {
            this.wizardModel = {...this.wizardModel, ...model}
        },
        addNewAttribute(attributeType, attribute) {
            this.$store.commit('addToUnit', { collection: attributeType, payload: attribute });
        },
        deleteAttribute(attributeType, index) {
            this.$store.commit('removeFromUnit', { collection: attributeType, index: index });
        },
    },
    computed: {
        ...mapFields({
            fields: [
                "name",
                "openDate",
                "closeDate",
                "type",
                "primaryBusinessFunction",
                "naicsMinor",
                "location",
                "purpose",
                "annualPayrollBudget",
                "websiteURL",
                "activities",
                "context",
                "duties",
                "toolsAndTech",
                "values",
                "abilities",
                "interests",
                "knowledge",
                "skills",
                "styles",
                "certifications",
                "education",
                "onTheJobTraining",
                "onSiteTraining",
                "workExperience",
                "postJobsTo",
                "objectives",
                "mainPhone",
                "mainEmail",
                "contact"
            ],
            base: "unit",
            mutation: "updateUnitField"
        }),
    }
}
</script>

<style lang="scss" scoped>
.NewUnit {
    display: block;
}
</style>