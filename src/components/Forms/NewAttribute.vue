<template>
    <div class="NewAttribute col-12">
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
                <CustomSearchDropdown
                    ref="searchComponent"
                    :id="`${this.attributeType}Name`"
                    :name="`${this.attributeType}Name`"
                    label="Name:"
                    :placeholder="placeholder"
                    :options="this.$store.state.options.searchOptions"
                    @show="findAttributes"
                    @selected="setAttribute"
                />
                <fg-input
                    id="importance"
                    name="importance"
                    type="text"
                    label="Importance:"
                >
                    <StarRating
                        :increment="0.1"
                        v-model="newAttribute.importance"
                        :star-size="25"
                    />
                    <el-tooltip
                        class="m-0 p-0"
                        slot="infoBlock"
                        content="The importance of the new attribute as it relates to your job."
                        :open-delay="300"
                        placement="top"
                    >
                        <i class="m-0 p-0 nc-icon lindua-question-circle wizard--tooltip-icon"></i>
                    </el-tooltip>
                </fg-input>
                <fg-input
                    id="level"
                    name="level"
                    type="text"
                    label="Level:"
                >
                    <el-tooltip
                        class="m-0 p-0"
                        slot="infoBlock"
                        content="The level of the new attribute."
                        :open-delay="300"
                        placement="top"
                    >
                        <i class="m-0 p-0 nc-icon lindua-question-circle wizard--tooltip-icon"></i>
                    </el-tooltip>
                    <StarRating
                        :increment="1"
                        v-model="newAttribute.level"
                        :star-size="25"
                        :star-points="[0,0, 0,190, 160,190, 160, 0]"
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
import StarRating from 'vue-star-rating';

import CustomSelectDropdown from '@/components/UIComponents/CustomUIComponents/CustomSelectDropdown';
import JobElementDetails from '@/components/Job/JobElementDetails';
import CustomSearchDropdown from '@/components/UIComponents/CustomUIComponents/CustomSearchDropdown';

export default {
    name: 'NewAttribute',
    components: {
        StarRating,
        CustomSelectDropdown,
        JobElementDetails,
        CustomSearchDropdown
    },
    data() {
        return {
            newAttribute: {
                name: '',
                importance: null,
                level: null,
            },
            showInput: false,
        }
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        dynamicTags: {
            type: Array,
            default: () => []
        },
        attributeType: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        }
    },
    methods: {
        addAttribute() {
            this.$emit('push', this.attributeType, this.newAttribute);
            this.$refs.searchComponent.reset();
            this.$store.commit('resetSearchOptions');
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
        },
        findAttributes() {
            this.$store.dispatch('getWorkElement', this.attributeType);
        },
        setAttribute(option) {
            const optionCopy = { ...option }
            this.newAttribute = optionCopy;
        }
    },
    watch: {
        showInput() {
            if (!this.showInput) {
                this.newAttribute = {};
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
.NewAttribute {
    display: block;
}
</style>