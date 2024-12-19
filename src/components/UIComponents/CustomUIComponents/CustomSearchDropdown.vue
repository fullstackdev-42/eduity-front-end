<template>
<div class="CustomSearchDropdown">
    <fg-input
        :id="id"
        :name="name"
        :label="label"
        :placeholder="placeholder"
        type="text"
        v-model="search"
        class="m-0 flex-grow-1"
        labelClasses="col-12 pl-0"
        @focus="show()"
    >
        <ul
            slot="infoBlock"
            class="data-list col-12"
            v-show="showOptions"
        >
            <li
                @mousedown="selectOption(option)"
                v-for="(option, index) in suggestions"
                :key="index"
            >
                {{ `${option.code ? `${option.code} -` : ''}` }}
                {{ option.title || option.name }}
            </li>
        </ul>
    </fg-input>
</div>
</template>

<script>
export default {
    name: 'CustomSearchDropdown',
    data() {
        return {
            selection: {},
            showOptions: false,
            search: ''
        }
    },
    created() {
        this.$emit('selected', this.selection);
    },
    props: {
        id: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        suggestions() {
            return this.options.filter(x => {
                const formattedSearch = this.search.toLowerCase().replace(/\s/g, '').trim();
                const regex = new RegExp(formattedSearch, 'gi');
                if ('name' in x) {
                    return x.name.match(regex);
                } else if ('description' in x) {
                    return x.description.match(regex);
                } else {
                    return x.title.match(regex) || x.code.toString().match(regex);
                }
            });
        },
    },
    methods: {
        selectOption(option) {
            this.selection = option;
            this.showOptions = false;
            this.search = `${this.selection.code ? `${this.selection.code} -` : ''} ${this.selection.name || this.selection.title}`;
            this.$emit('selected', this.selection);
        },
        show() {
            this.search = '';
            this.showOptions = true;
            this.$emit('show');
        },
        reset() {
            this.search = '';
        }
    },
    watch: {
        search() {
            if (this.suggestions.length === 0) {
                this.selection = {};
            } else {
                this.selection = this.suggestions[0];
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.CustomSearchDropdown {
    display: block;
}
</style>