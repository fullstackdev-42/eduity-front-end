const unit = {
    initialState: () => ({
        name: '',
        openDate: '',
        closeDate: '',
        type: '',
        primaryBusinessFunction: '',
        location: '',
        purpose: '',
        mainPhone: '',
        mainEmail: '',
        annualPayrollBudget: null,
        websiteURL: '',
        naicsMinor: [],
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
        onTheJobTraining: [],
        onSiteTraining: [],
        workExperience: [],
        postJobsTo: [],
        objectives: [],
        contact: [],
        jobs: [],
    }),
    state: () => ({ ...unit.initialState() }),
    mutations: {
        setUnit(state, payload) {
            Object.assign(state, payload);
        },
        updateUnitField(state, { field, value }) {
            state[field] = value;
        },
        addToUnit(state, { collection, payload }) {
            state[collection].push(payload);
        },
        removeFromUnit(state, { collection, index }) {
            state[collection].splice(index, 1);
        },
        resetUnit(state) {
            Object.assign(state, unit.initialState());
        }
    },
    actions: {
        // API call for units will go here
        addUnitToOrganization(context) {
            const copy = { ...context.state };
            context.commit('addToOrganization', { collection: 'units', payload: copy }, { root: true });
            context.commit('resetUnit');
        }
    },
    getters: {
        unit(state) {
            return state;
        },
        unitJobs(state) {
            return state.jobs;
        }
    }
}

export default unit;
