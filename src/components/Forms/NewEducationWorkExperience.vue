<template>
  <div class="NewEducationWorkExperience col-12">
        <div class="d-flex justify-content-between align-items-center my-2">
            <label
                :for="attributeType"
                class="wizard--form-label mb-0"
            >{{ title }}</label>
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
                :id="attributeType"
                class="input-container"
                v-if="showInput"
            >
                <fg-input
                    id="education"
                    name="education"
                >
                    <CustomSelectDropdown
                        v-model="newAttribute.name"
                        :options="optionsArray"
                    />
                    <StarRating 
                        :increment="0.1"
                        v-model="newAttribute.level"
                        :star-size="25"
                    />
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
                    @click="toggleAlert(`${attributeType}-${index}`)"
                >
                    {{ tag.name }}
                </el-tag>

                <div style="display: none">
                    <JobElementDetails
                        :attributeType="attributeType"
                        :ref="`${attributeType}-${index}`"
                        :data="tag"
                    />
                </div>

            </div>
        </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

import CustomSelectDropdown from '@/components/UIComponents/CustomUIComponents/CustomSelectDropdown';
import JobElementDetails from '@/components/Job/JobElementDetails';
import StarRating from 'vue-star-rating';

export default {
    name: 'NewEducationWorkExperience',
    components: {
        JobElementDetails,
        CustomSelectDropdown,
        StarRating
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        attributeType: {
            type: String,
            default: ''
        },
        dynamicTags: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            newAttribute: {
                name: '',
                level: null
            },
            showInput: false,
        }
    },
    computed: {
        disable() {
            return Object.keys(this.newAttribute).some(x => this.newAttribute[x] === '' || this.newAttribute[x] === null)
        },
        optionsArray() {
            if (this.attributeType === 'education') {
                return this.$store.state.options.educationOptions;
            } else {
                return this.$store.state.options.workExperienceOptions;
            }
        }
    },
    methods: {
        addAttribute() {
            this.newAttribute.id = uuidv4();
            this.$emit('push', this.attributeType, this.newAttribute);
            this.newAttribute = {};
        },
        removeAttribute(index) {
            this.$emit('delete', this.attributeType, index);
        },
        toggleAlert(ref) {
            const el = this.$refs[ref][0].$el;
            this.$swal({
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: false,
                html: el,
            });
        }
    },
    watch: {
        showInput() {
            if (!this.showInput) {
                this.newAttribute = {};
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.NewEducationWorkExperience {
    display: block;
}
</style>