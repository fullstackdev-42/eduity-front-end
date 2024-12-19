<template>
    <div class="NewPostJobsTo px-0">
        <div class="d-flex justify-content-between align-items-center my-2">
            <label
                for="postJobsTo"
                class="wizard--form-label mb-0"
            >
                Post Jobs To
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
                id="postJobsTo"
                v-if="showInput"
            >
                <label
                    for="siteName"
                    class="col-12 px-0"
                >
                    Name:
                </label>
                <fg-input
                    id="siteName"
                    name="siteName"
                    type="text"
                    v-model="newAttribute.name"
                >
                    <el-tooltip
                        class="m-0 p-0"
                        slot="addonRight"
                        content="The site to which a job will be posted."
                        :open-delay="300"
                        placement="top"
                    >
                        <i class="m-0 p-0 nc-icon lindua-question-circle wizard--tooltip-icon"></i>
                    </el-tooltip>
                </fg-input>
                <ValidationProvider
                    ref="link"
                    name="websiteURL"
                    :rules="{
                        regex: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
                    }"
                    v-slot="{ passed, failed }"
                >
                    <label
                        for="websiteURL"
                        class="col-12 px-0"
                    >
                        Website URL:
                    </label>
                    <fg-input
                        id="websiteURL"
                        type="text"
                        name="websiteURL"
                        :error="failed ? 'Must begin with \'https://\' or \'www.\'.' : null"
                        :hasSuccess="passed"
                        v-model="newAttribute.websiteURL"
                    >
                        <el-tooltip
                            class="m-0 p-0"
                            slot="addonRight"
                            content="The URL of the site to which a job will be posted."
                            :open-delay="300"
                            placement="top"
                        >
                            <i class="m-0 p-0 nc-icon lindua-question-circle wizard--tooltip-icon"></i>
                        </el-tooltip>
                    </fg-input>
                </ValidationProvider>
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
                    @click="toggleAlert(`postJobsTo-${index}`)"
                >
                    {{ tag.name }}
                </el-tag>

                <div style="display: none">
                    <JobElementDetails
                        attributeType="postJobsTo"
                        :ref="`postJobsTo-${index}`"
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
    name: 'NewPostJobsTo',
    components: {
        JobElementDetails
    },
    data() {
        return {
            newAttribute: {
                name: '',
                websiteURL: '',
            },
            showInput: false,
        }
    },
    props: {
        dynamicTags: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        async addAttribute() {
            const res = await this.validate();
            if (res) {
                this.newAttribute.id = uuidv4();
                this.$emit('push', 'postJobsTo', this.newAttribute);
                this.newAttribute = {
                    name: '',
                    websiteURL: ''
                };
            } else {
                this.$swal({
                    confirmButtonClass: "btn btn-danger",
                    text: 'Please enter a valid URL.'
                })
            }
        },
        removeAttribute(index) {
            this.$emit('delete', 'postJobsTo', index);
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
                this.newAttribute = {
                    name: '',
                    websiteURL: ''
                };
            }
        }
    },
    computed: {
        disable() {
            return Object.keys(this.newAttribute).some(x => this.newAttribute[x] === '' || this.newAttribute[x] === null)
        }
    }
}
</script>

<style lang="scss" scoped>
.NewPostJobsTo {
    display: block;
}
</style>