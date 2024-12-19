<template>
  <div class="card card-plain collapse-item">
    <div role="tab" id="headingOne" class="card-header d-flex justify-content-between align-items-center">
        <a data-toggle="collapse"
          data-parent="#accordion"
          :href="`#${itemId}`"
          @click.prevent="activate"
          :aria-expanded="active"
          :aria-controls="`content-${itemId}`"
          class="flex-grow-1 text-left"
        >
          <component :is="titleElement" class="mb-0 d-flex justify-content-start align-items-center">
            {{ title }}
            <i class="nc-icon lindua-chevron-right mx-3 align-self-center"></i>
          </component>
        </a>
      <slot name="button"></slot>
    </div>
    <collapse-transition :duration="animationDuration">
      <div v-show="active"
           :id="`content-${itemId}`"
           role="tabpanel"
           :aria-labelledby="title"
           class="collapsed">
        <div class="card-body">
          <slot name="content"></slot>
        </div>
      </div>
    </collapse-transition>
  </div>
</template>
<script>
  import { CollapseTransition } from 'vue2-transitions';

  export default {
    name: 'collapse-item',
    components: {
      CollapseTransition
    },
    props: {
      title: {
        type: String,
        default: '',
        description: 'Collapse item title (text)'
      },
      id: [Number, String],
      titleElement: String
    },
    inject: {
      animationDuration: {
        default: 250
      },
      multipleActive: {
        default: false
      },
      addItem: {
        default: () => {}
      },
      removeItem: {
        default: () => {}
      },
      deactivateAll: {
        default: () => {}
      }
    },
    computed: {
      itemId() {
        return this.id || this.title
      }
    },
    data() {
      return {
        active: false
      }
    },
    methods: {
      activate(){
        let wasActive = this.active;
        if(!this.multipleActive){
          this.deactivateAll();
        }
        this.active = !wasActive;
      }
    },
    mounted() {
      this.addItem(this)
    },
    destroyed() {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el)
      }
      this.removeItem(this)
    }
  }
</script>
<style>
</style>
