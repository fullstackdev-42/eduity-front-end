<template>
<div class="Feedback">
  <ul class="list-group list-group-flush px-5 py-3 text-left">
    <li 
      v-for="(item, index) in containerFeedback"
      :key="index"
      class="list-group-item lead">
        <h6 class="user-name">{{ item.userName }}</h6>
        <p>{{ item.comment }}</p>
    </li>
  </ul>
</div>
</template>

<script>
import mockData from '@/mockData';

export default {
    name: 'Feedback',
    data() {
      return {
        containerFeedback: []
      }
    },
    mounted() {
      const { containerId } = this.$route.params;
      this.containerFeedback = mockData.getByProperty('feedback', 'organizationId', containerId);
    }
}
</script>

<style lang="scss" scoped>
.Feedback {
  display: block;
  .list-group {
    .list-group-item {
      .user-name {
        font-weight: 600;
        text-decoration: underline;
      }
    }
  }
}
</style>