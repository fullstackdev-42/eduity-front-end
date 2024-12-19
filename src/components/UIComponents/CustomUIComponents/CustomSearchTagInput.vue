<template>
    <div class="CustomSearchTagInput">
        <div class="d-flex justify-content-between align-items-center my-2">
            <label :for="id">
                {{ label }}
            </label>
            <p-button
                class="m-0 p-1"
                @click="toggleInput"
                :type="showInput ? 'danger' : 'primary'"
                size="sm"
            >
                <i v-if="showInput" class="nc-icon lindua-cross"></i>
                <i v-else class="nc-icon lindua-plus"></i>
                {{ showInput ? 'Cancel' : 'Add' }}
            </p-button>
        </div>
        <fg-input
            v-if="showInput"
            :id="id"
            :name="name"
            :placeholder="placeholder"
            type="text"
            v-model="search"
            class="m-0 flex-grow-1"
            labelClasses="col-12 pl-0"
        >
            <ul
                slot="infoBlock"
                class="data-list col-12" 
                v-show="showOptions"
            >
                <template
                    v-if="suggestions.length > 0"
                >
                    <li
                        v-for="(option, index) in suggestions"
                        :key="index"
                        @mousedown="selectOption(option)"
                    >
                        {{ `${option.code ? `${option.code} -` : ''}` }}
                        {{ option.name || option.title }}
                    </li>
                </template>
                <template
                    v-else
                >
                    <li>
                        No Matches found
                    </li>
                </template>
            </ul>
        </fg-input>
        <el-tag
            :key="index"
            v-for="(tag, index) in dynamicTags"
            class="mt-2"
            type="primary"
            :closable="true"
            :close-transition="false"
            @close="handleDelete(index)"
            >
                {{ `${tag.code ? `${tag.code} -` : ''}` }}
                {{ tag.name || tag.title }}
        </el-tag>
    </div>
</template>

<script>
export default {
    name: 'CustomSearchTagInput',
    data() {
        return {
            showInput: true,
            showOptions: false,
            search: ''
        }
    },
    watch: {
        dynamicTags() {
            if (this.dynamicTags.length > 0) {
                this.showInput = false;
            }
        }
    },
    props: {
        id: {
            type: String
        },
        name: {
            type: String
        },
        label: {
            type: String
        },
        placeholder: {
            type: String
        },
        dynamicTags: {
            type: Array,
            default: () => []
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        suggestions() {
            if (this.search !== '') {
                return this.options.filter(x => {
                    const formattedSearch = this.search.toLowerCase().replace(/\s/g, '').trim();
                    const regex = new RegExp(formattedSearch, 'gi');
                    if ('name' in x) {
                        return x.name.match(regex)
                    } else {
                        return x.title.match(regex) || x.code.toString().match(regex);
                    }
                });
            } else {
                return [];
            }
        }
    },
    methods: {
        selectOption(option) {
            this.showOptions = false;
            this.search = '';
            this.$emit('selected', option);
        },
        handleDelete(index) {
            this.$emit('delete', index);
        },
        toggleInput() {
            this.showInput = !this.showInput;
            this.search = '';
        }
    },
    watch: {
        search() {
            if (this.search !== '') {
                this.showOptions = true;
            } else {
                this.showOptions = false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.CustomSearchTagInput {
    display: block;
}
</style>