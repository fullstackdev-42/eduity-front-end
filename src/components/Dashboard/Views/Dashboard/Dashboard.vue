<template>
  <div class="dashboard-page">
    <h1>Dashboard</h1>
    <h4>Coming Soon!</h4>
  </div>
</template>
<script>
  import users from '@/services/user.service.js';

  export default {
    components: {
    
    },
    data() {
      return {
        
      }
    },
    async mounted() {
      const currentUsers = await users.getUsers()
      console.log("users", currentUsers)
    }
  }
</script>
<style>
</style>
