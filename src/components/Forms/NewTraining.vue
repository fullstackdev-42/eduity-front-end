<template>
  <div class="NewTraining col-12">
        <div class="d-flex justify-content-between align-items-center my-2">
            <label
                for="training"
                class="wizard--form-label mb-0"
            >
                Training
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
                id="training"
                v-if="showInput"
            >
                <div>
                    <fg-input
                        id="onTheJobTraining"
                        name="onTheJobTraining"
                        label="On-The-Job Training:"
                    >
                        <CustomSelectDropdown
                            v-model="onTheJobTraining.name"
                            :options="this.$store.state.options.trainingOptions"
                        />
                        <StarRating 
                            :increment="0.1"
                            v-model="onTheJobTraining.level"
                            :star-size="25"
                        />
                    </fg-input>
                    <p-button
                        type="primary"
                        class="mx-0 my-2 py-1 px-2"
                        @click="() => addAttribute('onTheJobTraining')"
                    >
                        <i class="nc-icon lindua-plus"></i>
                        Add
                    </p-button>
                </div>
                <div>
                    <fg-input
                        id="onSiteTraining"
                        name="onSiteTraining"
                        label="On-Site Or In-Plant Training:"
                    >
                        <CustomSelectDropdown
                            v-model="onSiteTraining.name"
                            :options="this.$store.state.options.trainingOptions"
                        />
                        <StarRating 
                            :increment="0.1"
                            v-model="onSiteTraining.level"
                            :star-size="25"
                        />
                    </fg-input>
                    <p-button
                        type="danger"
                        class="mx-0 my-2 py-1 px-2"
                        @click="() => addAttribute('onSiteTraining')"
                    >
                        <i class="nc-icon lindua-plus"></i>
                        Add
                    </p-button>
                </div>
            </div>
        </el-collapse-transition>
        <div class="d-flex flex-wrap align-items-center justify-content-start">
            <div
                class="col-12"
                :key="`on-the-job-${index}`"
                v-for="(tag, index) in onTheJobTrainingTags"
            >
                <el-tag
                    class="mt-2 mx-0"
                    type="primary"
                    :closable="true"
                    :close-transition="false"
                    @close="removeAttribute('onTheJobTraining', index)"
                    @click="toggleAlert(`on-the-job-${index}`)"
                >
                    {{ tag.name || tag.value }}
                </el-tag>

                <div style="display: none">
                    <JobElementDetails
                        attributeType="training"
                        :ref="`on-the-job-${index}`"
                        :data="tag"
                    />
                </div>

            </div>
            <div
                class="col-12"
                :key="`on-site-${index}`"
                v-for="(tag, index) in onSiteTrainingTags"
            >
                <el-tag
                    class="mt-2 mx-0"
                    type="danger"
                    :closable="true"
                    :close-transition="false"
                    @close="removeAttribute('onSiteTraining', index)"
                    @click="toggleAlert(`on-site-${index}`)"
                >
                    {{ tag.name || tag.value }}
                </el-tag>

                <div style="display: none">
                    <JobElementDetails
                        attributeType="training"
                        :ref="`on-site-${index}`"
                        :data="tag"
                    />
                </div>

            </div>
        </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import StarRating from 'vue-star-rating';

import CustomSelectDropdown from '@/components/UIComponents/CustomUIComponents/CustomSelectDropdown';
import JobElementDetails from '@/components/Job/JobElementDetails';

export default {
    name: 'NewTraining',
    components: {
        StarRating,
        CustomSelectDropdown,
        JobElementDetails
    },
    props: {
        onTheJobTrainingTags: {
            type: Array,
            default: () => []
        },
        onSiteTrainingTags: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            showInput: false,
            onTheJobTraining: {},
            onSiteTraining: {},
        }
    },
    watch: {
        showInput() {
            this.onTheJobTraining = {};
            this.onSiteTraining = {};
        }
    },
    methods: {
        addAttribute(type) {
            const newTraining = this[type];
            newTraining.id = uuidv4();
            this.$emit('push', type, newTraining);
            this[type] = {};
        },
        removeAttribute(type, index) {
            this.$emit('delete', type, index);
        },
        toggleAlert(ref) {
            const el = this.$refs[ref][0].$el;
            this.$swal({
                confirmButtonClass: "btn btn-primary",
                buttonsStyling: false,
                html: el,  
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.NewTraining {
    display: block;
}
</style>