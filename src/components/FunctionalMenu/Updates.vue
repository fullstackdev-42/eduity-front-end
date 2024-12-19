<template>
<div class="Updates">
  <div class="p-5 mb-2 bg-primary rounded">
    <time-line type="simple">
      <time-line-item v-for="(update, index) in updates" :key="index" inverted :badge-type="update.type" :badge-icon="`nc-icon ${update.icon}`">
        <badge slot="header" :type="update.type">Update {{ index + 1 }}</badge>
        <p slot="content">{{ update.text }}</p>
      </time-line-item>
      </time-line>
  </div>
</div>
</template>

<script>
import mockData from '@/mockData';

export default {
    name: 'Updates',
    data() {
      return {
        updates: []
      }
    },
    mounted() {
      this.updates = mockData.getAll('updates');
    }
}
</script>

<style lang="scss" scoped>
.Updates {
  display: block;
}
</style>