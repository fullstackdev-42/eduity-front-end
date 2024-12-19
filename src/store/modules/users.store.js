const users = {
  state: () => ({
    organizationUsers: [
      {
        id: 1,
        name: 'name 1',
        contact: 'email@name12.com',
        role: 'Sponsor'
      },
      {
        id: 2,
        name: 'name 2',
        contact: 'email@name2.com',
        role: 'Leader'
      },
    ],
    currentUserId: 1,
    currentUserRoles: {
      sponsor: true,
      leader: true,
      contributor: true,
      reviewer: true
    }
  }),
  mutations: {
    updateOrganizationUsers (state, newUsers) {
      state.users = newUsers
    }
  }
}

export default users