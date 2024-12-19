<template>
    <div class="NewObjective px-0">
        <div class="d-flex justify-content-between align-items-center my-2">
            <label
                for="objectives"
                class="wizard--form-label mb-0"
            >Objectives</label>
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
                id="objectives"
                v-if="showInput"
            >
                <label
                    for="events"
                    class="col-12 px-0"
                >
                    Events:
                </label>
                <fg-input
                    id="events"
                    name="events"
                >
                    <textarea
                        class="form-control"
                        rows="3"
                        v-model="newObjective.events"
                    ></textarea>
                </fg-input>
                <label
                    for="notes"
                    class="col-12 px-0"
                >
                    Notes:
                </label>
                <fg-input
                    id="notes"
                    name="notes"
                >
                    <textarea
                        class="form-control"
                        rows="3"
                        v-model="newObjective.notes"
                    ></textarea>
                </fg-input>
                <label
                    for="tasks"
                    class="col-12 px-0"
                >
                    Tasks:
                </label>
                <fg-input
                    id="tasks"
                    name="tasks"
                >
                    <textarea
                        class="form-control"
                        rows="3"
                        v-model="newObjective.tasks"
                    ></textarea>
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
                    @click="toggleAlert(`objectives-${index}`)"
                >
                    {{ index + 1 }}
                </el-tag>

                <div style="display: none">
                    <JobElementDetails
                        attributeType="objectives"
                        :ref="`objectives-${index}`"
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
    name: 'NewObjective',
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
            newObjective: {
                events: '',
                notes: '',
                tasks: ''
            },
            showInput: false
        }
    },
    methods: {
        addAttribute() {
            this.newObjective.id = uuidv4();
            this.$emit('push', 'objectives', this.newObjective);
            this.newObjective = {
                events: '',
                notes: '',
                tasks: ''
            };
        },
        removeAttribute(index) {
            this.$emit('delete', 'objectives', index);
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
                this.newObjective = {
                    events: '',
                    notes: '',
                    tasks: ''
                };
            }
        }
    },
    computed: {
        disable() {
            return Object.keys(this.newObjective).some(x => this.newObjective[x] === '' || this.newObjective[x] === null)
        }
    }
}
</script>

<style lang="scss" scoped>
.NewObjective {
    display: block;
}
</style>