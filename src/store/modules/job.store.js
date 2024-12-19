const job = {
    initialState: () => ({
        title: '',
        description: '',
        level: '',
        FTE: null,
        fmlsaStatus: '',
        primaryBusinessFunction: '',
        minimumPay: null,
        maximumPay: null,
        payPeriod: '',
        naicsMajor: {},
        naicsMinor: [],
        reportsTo: [],
        activities: [],
        context: [],
        duties: [],
        toolsAndTech: [],
        values: [],
        abilities: [],
        interests: [],
        knowledge: [],
        skills: [],
        styles: [],
        certifications: [],
        education: [],
        onSiteTraining: [],
        onTheJobTraining: [],
        workExperience: [],
    }),
    state: () => ({ ...job.initialState() }),
    mutations: {
        setJob(state, payload) {
            Object.assign(state, payload);
        },
        updateJobField(state, { field, value }) {
            state[field] = value;
        },
        addToJob(state, { collection, payload }) {
            state[collection].push(payload);
        },
        removeFromJob(state, { collection, index }) {
            state[collection].splice(index, 1);
        },
        resetJob(state) {
            Object.assign(state, job.initialState());
        }
    },
    actions: {
        addJobToUnit(context) {
            const copy = { ...context.state };
            context.commit('addToUnit', { collection: 'jobs', payload: copy }, { root: true });
            context.commit('resetJob');
        },
        addJobToOrganization(context) {
            const copy = { ...context.state };
            context.commit('addToOrganization', { collection: 'jobs', payload: copy }, { root: true });
            context.commit('resetJob');
        }
    },
    getters: {
        job(state) {
            return state;
        },
    }
}

export default job