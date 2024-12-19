<template>
  <div class="Team">
    <div class="Details  text-left mx-auto">
      <card>
        <label for="financialInfo">Financial Info</label>
        <input v-model="financialInfo" type="text" value="" class="form-control" />
        <label for="domainName">Domain Name</label>
        <input v-model="domainName" type="text" value="" class="form-control" />
        <label for="socialMediaLinks">Social Media Links</label>
        <input v-model="socialMediaLinks" type="text" value="" class="form-control" />
        <label for="reviewRights">Review Rights</label>
        <input v-model="reviewRights" type="text" value="" class="form-control" />
        <label for="publicViewable">Publicly Viewable?</label>
        <input v-model="publicViewable" type="text" value="" class="form-control" />
        <div class="mt-3">
          <label for="areaSettings" class="mb-3 mr-3">Do you want to be part of areas?</label>
          <CustomSelectDropdown
            class="select-default"
            v-model="areaSettings"
            placeholder="Select One"
            :options="areaSettingsOptions"
          ></CustomSelectDropdown>
        </div>
      </card>
      <CustomTable  :data="filteredUsers" header="Roles" @search="searchUsersTable" maxHeight="500" :searchBar="true" elementType="roles">
        <template v-slot:table-body>
          <el-table-column label="Name" property="name" ></el-table-column>
          <el-table-column label="Contact" property="contact"></el-table-column>
          <el-table-column label="Role" property="role" ></el-table-column>
        </template>
      </CustomTable>
    </div>
  </div>
</template>

<script>
import mockData from '@/mockData';
import CustomTable from '@/components/UIComponents/CustomUIComponents/CustomTable';
import CustomSelectDropdown from '@/components/UIComponents/CustomUIComponents/CustomSelectDropdown';

export default {
    name: 'Team',
    components: {
      CustomTable,
      CustomSelectDropdown
    },
    data() {
      return {
        users: [],
        manageUsers: false,
        manageUsersTitle: "Manage",
        allUsers: this.$store.state.users.organizationUsers,
        filteredUsers: this.$store.state.users.organizationUsers,
        currentUserId: this.$store.state.users.currentUserId,
        currentUserContainerRoles: this.$store.state.users.currentUserRoles,
        financialInfo: '',
        domainName: "",
        socialMediaLinks: "",
        reviewRights: "" ,
        publicViewable: "",
        areaSettings: "",
        areaSettingsOptions: [{label:'Never', value: 'never'}, {label: 'Ask Me Each Request', value: 'ask'}, { label: 'Automatically Add Me', value: 'always'}]
      }
    },
    methods: {
      clickEventHandler(row) {
        console.log(row);
      },
      updateRoles(row, role) {
        this.$store.commit('updateOrganizationUsers', this.users )
        //Need to make an api post here
      },
      searchUsersTable(search) {
          this.filteredUsers = []
          if(search === '') {
            this.filteredUsers = this.allUsers
          } else {

            this.allUsers.filter(data => {
              if(data.name.toLowerCase().includes(search.toLowerCase())){
                this.filteredUsers = [...this.filteredUsers, data]
                return
              }
              if(data.contact.toLowerCase().includes(search.toLowerCase())){
                this.filteredUsers = [...this.filteredUsers, data]
                return
              }
              if(data.role.toLowerCase().includes(search.toLowerCase())){
                this.filteredUsers = [...this.filteredUsers, data]
                return
              }
            })
        }
      }
    },
    mounted() {
      this.users = mockData.getAll('users');
    },
}
</script>

<style>

</style>