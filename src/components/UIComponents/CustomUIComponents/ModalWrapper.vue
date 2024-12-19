<template>
  <div class="ModalWrapper">
    <p-button
        :type="buttonStyle"
        @click="toggleModal"
        :size="buttonSize"
    >
        <i class="nc-icon lindua-plus"></i>
        Add {{ buttonText }}
    </p-button>
    <modal
        :show.sync="showModal"
        :showClose="true"
        @close="toggleModal"
        :bodyClasses="bodyClasses"
        :modalClasses="modalClasses"
    >
        <template v-if="modalIsOpen" slot="header">
            <slot name="header"></slot>
        </template>
        <template v-if="modalIsOpen" slot="body">
            <slot name="body"></slot>
        </template>
        <template v-if="modalIsOpen" slot="footer">
            <slot name="footer"></slot>
        </template>
    </modal>
  </div>
</template>

<script>
export default {
    name: 'ModalWrapper',
    props: {
        buttonText: {
            type: String,
            default: ''
        },
        buttonStyle: {
            type: String,
            default: ''
        },
        buttonSize: {
            type: String,
            default: ''
        },
        bodyClasses: {
            type: String,
            default: ''
        },
        modalClasses: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            showModal: false,
        }
    },
    methods: {
        toggleModal() {
            this.showModal = !this.showModal;
        }
    },
    computed: {
        modalIsOpen() {
            return this.showModal
        },
    }
}
</script>

<style>
.ModalWrapper {
    display: block;
}
</style>