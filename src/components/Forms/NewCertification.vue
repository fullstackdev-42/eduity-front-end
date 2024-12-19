<template>
  <div class="NewCertification col-12">
    <div class="d-flex justify-content-between align-items-center my-2">
        <label
            for="certification"
            class="wizard--form-label mb-0"
        >
            Certification
        </label>
        <p-button
            class="m-0 py-1 px-2"
            :type="showInput ? 'danger' : 'primary'"
            size="sm"
            @click="showInput = !showInput"
        >
            <i v-if="showInput" class="nc-icon lindua-cross"></i>
            <i v-else class="nc-icon lindua-plus"></i>
            {{ showInput ? 'Close' : 'Add' }}
        </p-button>
    </div>
    <el-collapse-transition>
        <div
            id="certification"
            v-if="showInput"
        >
            <label for="certificationName">Name:</label>
            <fg-input
                id="certificationName"
                name="name"
                type="text"
                v-model="newCertification.name"
            >
                <el-tooltip
                    class="m-0 p-0"
                    slot="addonRight"
                    content="The name of the certification needed for your job."
                    :open-delay="300"
                    placement="top"
                >
                    <i class="m-0 p-0 nc-icon lindua-question-circle wizard--tooltip-icon"></i>
                </el-tooltip>
            </fg-input>
            <label for="certifyingOrganization">Certifying Organization:</label>
            <fg-input
                id="certifyingOrganization"
                name="certifyingOrganization"
                type="text"
                v-model="newCertification.certifyingOrganization"
            >
                <el-tooltip
                    class="m-0 p-0"
                    slot="addonRight"
                    content="The organization or institution that offers training for your job certification."
                    :open-delay="300"
                    placement="top"
                >
                    <i class="m-0 p-0 nc-icon lindua-question-circle wizard--tooltip-icon"></i>
                </el-tooltip>
            </fg-input>
            <label for="link">Link:</label>
            <ValidationProvider
                ref="link"
                name="link"
                :rules="{
                    regex: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
                }"
                v-slot="{ passed, failed }"
            >
                <fg-input
                    id="link"
                    name="link"
                    :error="failed ? 'Must begin with \'https://\' or \'www.\'.' : null"
                    :hasSuccess="passed"
                    type="text"
                    v-model="newCertification.link"
                >
                    <el-tooltip
                        class="m-0 p-0"
                        slot="addonRight"
                        content="The link to the certifying organization's website."
                        :open-delay="300"
                        placement="top"
                    >
                        <i class="m-0 p-0 nc-icon lindua-question-circle wizard--tooltip-icon"></i>
                    </el-tooltip>
                </fg-input>
            </ValidationProvider>
            <label for="link">Type:</label>
            <fg-input
                id="type"
                name="type"
                type="text"
                v-model="newCertification.type"
            >
                <el-tooltip
                    class="m-0 p-0"
                    slot="addonRight"
                    content="The type of your job certification."
                    :open-delay="300"
                    placement="top"
                >
                    <i class="m-0 p-0 nc-icon lindua-question-circle wizard--tooltip-icon"></i>
                </el-tooltip>
            </fg-input>
            <p-button
                type="primary"
                class="mx-0 my-2 py-1 px-2"
                @click="addAttribute"
                :disabled="disable"
            >
                <i class="nc-icon lindua-plus"></i>
                Add
            </p-button>
        </div>
    </el-collapse-transition>

    <div class="d-flex flex-wrap align-items-center justify-content-start">
        <div
            class="col-12"
            :key="index"
            v-for="(tag, index) in dynamicTags"
        >
            <el-tag
                class="mt-2 mx-0"
                type="primary"
                :closable="true"
                :close-transition="false"
                @close="removeAttribute(index)"
                @click="toggleAlert(`certifications-${index}`)"
            >
                {{ tag.name }}
            </el-tag>

            <div style="display: none">
                <JobElementDetails
                    attributeType="certifications"
                    :ref="`certifications-${index}`"
                    :data="tag"
                />
            </div>

        </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

import JobElementDetails from '@/components/Job/JobElementDetails';

export default {
    name: 'NewCertification',
    components: {
        JobElementDetails
    },
    props: {
        dynamicTags: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            newCertification: {
                name: '',
                certifyingOrganization: '',
                link: '',
                type: ''
            },
            showInput: false,
        }
    },
    methods: {
        async addAttribute() {
            const res = await this.validate();
            if (res) {
                this.newCertification.id = uuidv4();
                this.$emit('push', 'certifications', this.newCertification);
                this.newCertification = {};
            } else {
                this.$swal({
                    confirmButtonClass: "btn btn-danger",
                    text: 'Unable to add certification.'
                })
            }
        },
        removeAttribute(index) {
            this.$emit('delete', 'certifications', index);
        },
        toggleAlert(ref) {
            const el = this.$refs[ref][0].$el;
            this.$swal({
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: false,
                html: el,
            });
        },
        async validate() {
            const { valid } = await this.$refs.link.validate();
            return valid;
        }
    },
    watch: {
        showInput() {
            if (!this.showInput) {
                this.newCertification = {};
            }
        }
    },
    computed: {
        disable() {
            return Object.keys(this.newCertification).some(x => this.newCertification[x] === '')
        }
    }
}
</script>

<style lang="scss" scoped>
.NewCertification {
    display: block;
}
</style>