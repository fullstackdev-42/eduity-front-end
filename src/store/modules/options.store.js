import primarySectors from '../../../primarySectors.json';
import subSectors from '../../../subSectors.json';
import { JobInventoryService } from '@/services/jobInventory.service';

const options = {
    state: () => ({
        searchOptions: [],
        entityTypeOptions: [
            {
                label: 'Sole Proprietor',
                value: 'Sole Proprietor'
            },
            {
                label: 'Partnership (General, LP, LLP, or PLLP)',
                value: 'Partnership (General, LP, LLP, or PLLP)'
            },
            {
                label: 'Limited Liability Company',
                value: 'Limited Liability Company'
            },
            {
                label: 'Corporation (C, S, or Professional)',
                value: 'Corporation (C, S, or Professional)'
            },
            {
                label: 'Government Agency',
                value: 'Government Agency'
            },
        ],
        unitTypeOptions: [
            {
                label: 'Administration',
                value: 'Administration'
            },
            {
                label: 'Agency',
                value: 'Agency'
            },
            {
                label: 'Center',
                value: 'Center'
            },
            {
                label: 'Department',
                value: 'Department'
            },
            {
                label: 'Division',
                value: 'Division'
            },
            {
                label: 'Group',
                value: 'Group'
            },
            {
                label: 'Institute',
                value: 'Institute'
            },
            {
                label: 'Office',
                value: 'Office'
            },
            {
                label: 'Plant',
                value: 'Plant'
            },
            {
                label: 'Project',
                value: 'Project'
            },
            {
                label: 'Shop',
                value: 'Shop'
            },
            {
                label: 'Store',
                value: 'Store'
            },
            {
                label: 'Team',
                value: 'Team'
            },
            {
                label: 'Unit',
                value: 'Unit'
            }
        ],
        months: [
            {
                label: 'January',
                value: 'January'
            },
            {
                label: 'February',
                value: 'February'
            },
            {
                label: 'March',
                value: 'March'
            },
            {
                label: 'April',
                value: 'April'
            },
            {
                label: 'May',
                value: 'May'
            },
            {
                label: 'June',
                value: 'June'
            },
            {
                label: 'July',
                value: 'July'
            },
            {
                label: 'August',
                value: 'August'
            },
            {
                label: 'September',
                value: 'September'
            },
            {
                label: 'October',
                value: 'October'
            },
            {
                label: 'November',
                value: 'November'
            },
            {
                label: 'December',
                value: 'December'
            }
        ],
        fmlsaStatusOptions: [
            {
                label: 'Non-exempt',
                value: 'Non-exempt'
            },
            {
                label: 'Executive',
                value: 'Executive'
            },
            {
                label: 'Administrative',
                value: 'Administrative'
            },
            {
                label: 'Professional',
                value: 'Professional'
            },
            {
                label: 'Outside Sales',
                value: 'Outside Sales'
            },
            {
                label: 'Computer',
                value: 'Computer'
            },
        ],
        primaryBusinessFunctionOptions: [
            {
                label: 'Admin/Manage',
                value: 'Admin/Manage'
            },
            {
                label: 'Buy/Hire',
                value: 'Buy/Hire'
            },
            {
                label: 'Inbound',
                value: 'Inbound'
            },
            {
                label: 'Produce/Provide',
                value: 'Produce/Provide'
            },
            {
                label: 'Sell/Market',
                value: 'Sell/Market'
            },
            {
                label: 'Outbound',
                value: 'Outbound'
            },
            {
                label: 'External Support',
                value: 'External Support'
            },
            {
                label: 'Internal Support',
                value: 'Internal Support'
            },
        ],
        payPeriodOptions: [
            {
                label: 'Hour',
                value: 'Hour'
            },
            {
                label: 'Day',
                value: 'Day'
            },
            {
                label: 'Week',
                value: 'Week'
            },
            {
                label: 'Month',
                value: 'Month'
            },
            {
                label: 'Year',
                value: 'Year'
            },
        ],
        educationOptions: [
            {
                label: 'Less than a High School Diploma',
                value: 'Less than a High School Diploma'
            },
            {
                label: 'High School Diploma or the equivalent (GED)',
                value: 'High School Diploma or the equivalent (GED)'
            },
            {
                label: 'Post-Secondary Certificate',
                value: 'Post-Secondary Certificate'
            },
            {
                label: 'Some College Courses',
                value: 'Some College Courses'
            },
            {
                label: 'Associate\'s Degree or other 2-year degree',
                value: 'Associate\'s Degree or other 2-year degree'
            },
            {
                label: 'Bachelor\'s Degree',
                value: 'Bachelor\'s Degree'
            },
            {
                label: 'Post-Baccalaureate',
                value: 'Post-Baccalaureate'
            },
            {
                label: 'Master\'s Degree',
                value: 'Master\'s Degree'
            },
            {
                label: 'Post-Master\'s Certificate',
                value: 'Post-Master\'s Certificate'
            },
            {
                label: 'First Professional Degree',
                value: 'First Professional Degree'
            },
            {
                label: 'Doctoral Degree',
                value: 'Doctoral Degree'
            },
            {
                label: 'Post-Doctoral Training',
                value: 'Post-Doctoral Training'
            },
        ],
        workExperienceOptions: [
            {
                label: 'None',
                value: 'None'
            },
            {
                label: 'Up to and including 1 month',
                value: 'Up to and including 1 month'
            },
            {
                label: 'Over 1 month, up to and including 3 months',
                value: 'Over 1 month, up to and including 3 months'
            },
            {
                label: 'Over 3 months, up to and including 6 months',
                value: 'Over 3 months, up to and including 6 months'
            },
            {
                label: 'Over 6 months, up to and including 1 year',
                value: 'Over 6 months, up to and including 1 year'
            },
            {
                label: 'Over 1 year, up to and including 2 years',
                value: 'Over 1 year, up to and including 2 years'
            },
            {
                label: 'Over 2 years, up to and including 4 years',
                value: 'Over 2 years, up to and including 4 years'
            },
            {
                label: 'Over 4 years, up to and including 6 years',
                value: 'Over 4 years, up to and including 6 years'
            },
            {
                label: 'Over 6 years, up to and including 8 years',
                value: 'Over 6 years, up to and including 8 years'
            },
            {
                label: 'Over 8 years, up to and including 10 years',
                value: 'Over 8 years, up to and including 10 years'
            },
            {
                label: 'Over 10 years',
                value: 'Over 10 years'
            },
        ],
        trainingOptions: [
            {
                label: 'None/short demonstration',
                value: 'None/short demonstration'
            },
            {
                label: 'Anything beyond short demonstration/up to and including 1 month',
                value: 'Anything beyond short demonstration/up to and including 1 month'
            },
            {
                label: 'Over 1 month, up to and including 3 months',
                value: 'Over 1 month, up to and including 3 months'
            },
            {
                label: 'Over 3 months, up to and including 6 months',
                value: 'Over 3 months, up to and including 6 months'
            },
            {
                label: 'Over 6 months, up to and including 1 year',
                value: 'Over 6 months, up to and including 1 year'
            },
            {
                label: 'Over 1 year, up to and including 2 years',
                value: 'Over 1 year, up to and including 2 years'
            },
            {
                label: 'Over 2 years, up to and including 4 years',
                value: 'Over 2 years, up to and including 4 years'
            },
            {
                label: 'Over 4 years, up to and including 10 years',
                value: 'Over 4 years, up to and including 10 years'
            },
            {
                label: 'Over 10 years',
                value: 'Over 10 years'
            },
        ],
        level: [
            {
                label: 'Job Zone One: Little or No Preparation Needed',
                value: 'Job Zone One: Little or No Preparation Needed'
            },
            {
                label: 'Job Zone Two: Some Preparation Needed',
                value: 'Job Zone Two: Some Preparation Needed'
            },
            {
                label: 'Job Zone Three: Medium Preparation Needed',
                value: 'Job Zone Three: Medium Preparation Needed'
            },
            {
                label: 'Job Zone Four: Considerable Preparation Needed',
                value: 'Job Zone Four: Considerable Preparation Needed'
            },
            {
                label: 'Job Zone Five: Extensive Preparation Needed',
                value: 'Job Zone Five: Extensive Preparation Needed'
            },
        ],
        primarySectors,
        subSectors,
    }),
    mutations: {
        setSearchOptions(state, payload) {
            state.searchOptions = payload;
        },
        resetSearchOptions(state) {
            state.searchOptions = [];
        }
    },
    actions: {
        async getWorkElement({ commit }, resource) {
            try {
                const { data } = await JobInventoryService.get(`${resource}`);
                commit('setSearchOptions', data.payload);
            } catch (error) {
                throw new Error(`The following error occurred while getting work elements: ${error}`);
            }
        } 
    }
}

export default options