<template>
  <div class="Details col-9 text-left mx-auto my-5">
    <form v-if="this.$store.state.edit">
      <ul class="list-group list-group-flush p-5">
        <li
          class="list-group-item lead"
          v-for="(key, index) in filterProps"
          :key="index"
        >
          <fg-input
            class="list-item-key"
            :placeholder="formatPropString(key)"
            :value="container[key]"
            :label="`${formatPropString(key)}:`"
          />
        </li>
      </ul>
    </form>
    <ul v-else class="list-group list-group-flush p-5">
      <li 
        v-for="(key, index) in filterProps" 
        :key="index"
        class="list-group-item lead"
      >
        <div class="list-item-key">
          {{ formatPropString(key) }}:
        </div>
        <p class="mb-4">
          {{ container[key] }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'Details',
    props: {
      containerType: {
        type: String,
      }
    },
    methods: {
      formatPropString(string) {
        string = string.replace(/([A-Z])/g, ' $1').trim()
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
    },
    computed: {
      filterProps() {
        return Object.keys(this.container).filter(x => x !== 'id' && x !== 'userHasPermission');
      },
      container() {
        return this.$store.getters[this.containerType];
      }
    }
}
</script>

<style lang="scss" scoped>
.Details {
  display: block;
  .list-group {
    border: none;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
    .list-group-item {
      border: none;
      font-family: Arial, Helvetica, sans-serif;
      .list-item-key {
        color: #94918d;
        flex-basis: auto;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }
    }
  }
}
</style>