const organization = {
    initialState: () => ({
        name: '',
        entityType:  '',
        missionStatement: '',
        valueProposition: '',
        websiteURL: '',
        mainPhone: '',
        mainEmail: '',
        naicsMajor: {},
        naicsMinor: [],
        administrator: '',
        totalEmployees: null,
        annualRevenue: null,
        financialYearEnds: '',
        fullTimeHoursPerWeek: null,
        businessHours: '',
        dateFounded: '',
        userHasPermission: true,
        jobs: [],
        units: []
    }),
    state: () => ({ ...organization.initialState() }),
    mutations: {
        setOrganization(state, payload) {
            Object.assign(state, payload);
        },
        updateOrganizationField(state, { field, value }) {
            state[field] = value;
        },
        addToOrganization(state, { collection, payload }) {
            state[collection].push(payload);
        },
        removeFromOrganization(state, { collection, index }) {
            state[collection].splice(index, 1);
        },
        resetOrganization(state) {
            Object.assign(state, organization.initialState());
        }
    },
    actions: {
        submitOrganization(context) {
            const copy = { ...context.state };
            context.commit('addOrganization', copy, { root: true });
            context.commit('resetOrganization');
        }
    },
    getters: {
        organization(state) {
            return state;
        },
        units(state) {
            return state.units;
        },
        orgJobs(state) {
            return state.jobs;
        }
    }
}

export default organization