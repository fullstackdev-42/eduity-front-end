const organizations = {
    state: () => ({
        organizations: []
    }),
    mutations: {
        setOrganizations(state, organizations) {
            state.organizations = organizations.slice();
        },
        addOrganization(state, payload) {
            state.organizations.push(payload);
        }
    },
    // actions: {
    //  Api Call for organizations will go here    
    // },
    getters: {
        organizations(state) {
            return state.organizations;
        }
    }
}

export default organizations