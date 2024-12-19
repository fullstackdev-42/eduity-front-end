const mockData = {
    organizations: [
        {
            id: 1,
            name: 'Harbor House',
            entityType: 'LLC',
            missionStatement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            valueProposition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            websiteURL: 'http://www.whatever1.com',
            mainPhone: '111-111-1111',
            mainEmail: 'whatever1@whatever.com',
            naicsMajor: '342345',
            nacisMinor: '654678',
            administrator: 'John Doe',
            totalEmployees: 100,
            annualRevenue: 100000,
            financialYearEnds: '03-31',
            fullTimeHoursPerWeek: 40,
            businessHours: '9:00:00 - 17:00:00',
            dateFounded: '2021-01-14',
            userHasPermission: false
        },
        {
            id: 2,
            name: 'Joy Manufacturing',
            entityType: 'LLC',
            missionStatement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            valueProposition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            websiteURL: 'http://www.whatever2.com',
            mainPhone: '222-222-2222',
            mainEmail: 'whatever2@whatever.com',
            naicsMajor: '567654',
            nacisMinor: '778867',
            administrator: 'Jane Doe',
            totalEmployees: 200,
            annualRevenue: 500000,
            financialYearEnds: '03-31',
            fullTimeHoursPerWeek: 40,
            businessHours: '9:00:00 - 17:00:00',
            dateFounded: '2021-01-14',
            userHasPermission: false
        },
        {
            id: 3,
            name: 'Goodwill Industries',
            entityType: 'Partnership',
            missionStatement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            valueProposition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            websiteURL: 'http://www.whatever3.com',
            mainPhone: '333-333-3333',
            mainEmail: 'whatever3@whatever.com',
            naicsMajor: '443456',
            nacisMinor: '990876',
            administrator: 'Bob Johnson',
            totalEmployees: 500,
            annualRevenue: 400000,
            financialYearEnds: '03-31',
            fullTimeHoursPerWeek: 40,
            businessHours: '9:00:00 - 17:00:00',
            dateFounded: '2021-01-14',
            userHasPermission: false
        },
        {
            id: 4,
            name: 'Hands On Nashville',
            entityType: 'Partnership',
            missionStatement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            valueProposition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            websiteURL: 'http://www.whatever4.com',
            mainPhone: '444-444-4444',
            mainEmail: 'whatever4@whatever.com',
            naicsMajor: '343211',
            nacisMinor: '111222',
            administrator: 'Jerry Garcia',
            totalEmployees: 700,
            annualRevenue: 300500,
            financialYearEnds: '03-31',
            fullTimeHoursPerWeek: 40,
            businessHours: '9:00:00 - 17:00:00',
            dateFounded: '2021-01-14',
            userHasPermission: true
        },
        {
            id: 5,
            name: 'United Record Pressing',
            entityType: 'LLC',
            missionStatement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            valueProposition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            websiteURL: 'http://www.whatever5.com',
            mainPhone: '555-555-5555',
            mainEmail: 'whatever5@whatever.com',
            naicsMajor: '565789',
            nacisMinor: '990877',
            administrator: 'John Prine',
            totalEmployees: 200,
            annualRevenue: 300750,
            financialYearEnds: '03-31',
            fullTimeHoursPerWeek: 40,
            businessHours: '9:00:00 - 17:00:00',
            dateFounded: '2021-01-14',
            userHasPermission: true
        },
        {
            id: 6,
            name: 'Yusen Terminals',
            entityType: 'LLC',
            missionStatement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            valueProposition: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            websiteURL: 'http://www.whatever6.com',
            mainPhone: '666-666-6666',
            mainEmail: 'whatever6@whatever.com',
            naicsMajor: '665544',
            nacisMinor: '445321',
            administrator: 'Bob Dylan',
            totalEmployees: 1000,
            annualRevenue: 800000,
            financialYearEnds: '03-31',
            fullTimeHoursPerWeek: 40,
            businessHours: '9:00:00 - 17:00:00',
            dateFounded: '2021-01-14',
            userHasPermission: true
        },
    ],
    feedback: [
        {
            id: 1,
            organizationId: 6,
            userName: 'David Everett',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 2,
            organizationId: 6,
            userName: 'John Prine',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 3,
            organizationId: 6,
            userName: 'Tom Petty',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 4,
            organizationId: 6,
            userName: 'Stevie Nicks',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 5,
            organizationId: 6,
            userName: 'Bob Dylan',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 6,
            organizationId: 6,
            userName: 'Miles Davis',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 7,
            organizationId: 6,
            userName: 'Stevie Wonder',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 8,
            organizationId: 6,
            userName: 'Prince',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 9,
            organizationId: 6,
            userName: 'Bruce Springsteen',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 10,
            organizationId: 6,
            userName: 'Neil Young',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 11,
            organizationId: 6,
            userName: 'Willie Nelson',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ],
    units: [
        {
            id: 1,
            name: 'Unit 1',
        },
        {
            id: 2,
            name: 'Unit 2',
        },
        {
            id: 3,
            name: 'Unit 3',
        }
    ],
    jobs: [
        {
            id: 1,
            name: 'Job 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 2,
            name: 'Job 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 3,
            name: 'Job 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ],
    users: [
        {
            id: 1,
            prefix: 'Mr.',
            firstName: 'David',
            middleName: 'Mychal',
            otherName: '',
            surname: 'Everett',
            suffix: '',
            email1: 'davideverett1989@gmail.com',
            email2: '',
            email3: '',
            phone1: '217-343-1348',
            phone2: '',
            phone3: '',
            birthday: '12-11-1989',
            gender: 'Male',
            streetAddress: '1148 Ardee Ave.',
            city: 'Nashville',
            state: 'TN',
            zip: '37216'
        },
        {
            id: 2,
            prefix: 'Ms.',
            firstName: 'Katie',
            middleName: '',
            otherName: '',
            surname: 'McCall',
            suffix: '',
            email1: 'katiemccall808@gmail.com',
            email2: '',
            email3: '',
            phone1: '217-840-4867',
            phone2: '',
            phone3: '',
            birthday: '06-28-90',
            gender: 'Female',
            streetAddress: '1148 Ardee Ave.',
            city: 'Nashville',
            state: 'TN',
            zip: '37216'
        },
        {
            id: 3,
            prefix: 'Mr.',
            firstName: 'Jordan',
            middleName: '',
            otherName: '',
            surname: 'Birch',
            suffix: '',
            email1: 'jbirch40@gmail.com',
            email2: '',
            email3: '',
            phone1: '217-663-8774',
            phone2: '',
            phone3: '',
            birthday: '05-20-90',
            gender: 'Male',
            streetAddress: '108 McKennell Dr.',
            city: 'Nashville',
            state: 'TN',
            zip: '37216'
        },
        {
            id: 4,
            prefix: 'Mr.',
            firstName: 'Chris',
            middleName: '',
            otherName: '',
            surname: 'Lee',
            suffix: '',
            email1: 'farmsjungle@gmail.com',
            email2: '',
            email3: '',
            phone1: '217-343-3136',
            phone2: '',
            phone3: '',
            birthday: '07-21-88',
            gender: 'Male',
            streetAddress: '1427 Meridian St.',
            city: 'Nashville',
            state: 'TN',
            zip: '37216'
        },
        {
            id: 5,
            prefix: 'Ms.',
            firstName: 'Shelby',
            middleName: '',
            otherName: '',
            surname: 'Everett',
            suffix: '',
            email1: 'shelbyeverett@gmail.com',
            email2: '',
            email3: '',
            phone1: '217-690-2872',
            phone2: '',
            phone3: '',
            birthday: '09-17-93',
            gender: 'Female',
            streetAddress: '600 E. Kentucky Ave.',
            city: 'Effingham',
            state: 'IL',
            zip: '62401'
        },
    ],
    updates: [
        {
            text: 'Wifey made the best Father\'s Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.',
            icon: 'lindua-home',
            type: 'primary'
        },
        {
            text: 'Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....',
            icon: 'lindua-home2',
            type: 'primary'
        },
        {
            text: 'Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM.  What if Kanye made a song about Kanye Royère doesn\'t make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his GOKR Kanye.',
            icon: 'lindua-home3',
            type: 'primary'
        },
        {
            text: 'Tune into Big Boy\'s 92.3 I\'m about to play the first single from Cruel Winter Tune into Big Boy\'s 92.3 I\'m about to play the first single from Cruel Winter also to Kim\’s hair and makeup Lorraine jewelry and the whole style squad at Balmain and the Yeezy team. Thank you Anna for the invite thank you to the whole Vogue.',
            icon: 'lindua-home3',
            type: 'primary'
        }
    ],
    organizationsPageContent: [
        {
            label: 'Requirements',
            content: [
                {
                    label: 'Competencies',
                    content: [
                        {
                            label: 'Abilities',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Interests',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Knowledge',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Skills',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Styles',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        }
                    ],
                },
                {
                    label: 'GOKR',
                    content: [
                        {
                            label: 'Events',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Results',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Tasks',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        }
                    ]
                },
                {
                    label: 'Qualifications',
                    content: [
                        {
                            label: 'Certifications',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Education',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Training',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Work (experience)',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        }
                    ]
                },
                {
                    label: 'Responsibilities',
                    content: [
                        {
                            label: 'Activities',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Contexts',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Duties',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Tools & Tech',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Values',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Jobs',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            label: 'Units',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            label: 'Templates',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ],
    unitsPageContent: [
        {
            label: 'Requirements',
            content: [
                {
                    label: 'Competencies',
                    content: [
                        {
                            label: 'Abilities',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Interests',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Knowledge',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Skills',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Styles',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        }
                    ],
                },
                {
                    label: 'Objectives',
                    content: [
                        {
                            label: 'Events',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Results',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Tasks',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        }
                    ]
                },
                {
                    label: 'Qualifications',
                    content: [
                        {
                            label: 'Certifications',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Education',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Training',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Work (experience)',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        }
                    ]
                },
                {
                    label: 'Responsibilities',
                    content: [
                        {
                            label: 'Activities',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Contexts',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Duties',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Tools & Tech',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Values',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Jobs',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            label: 'Units',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ],
    jobsPageContent: [
        {
            label: 'Requirements',
            content: [
                {
                    label: 'Competencies',
                    content: [
                        {
                            label: 'Abilities',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Interests',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Knowledge',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Skills',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Styles',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        }
                    ],
                },
                {
                    label: 'Key Results',
                    content: [
                        {
                            label: 'Events',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Results',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Tasks',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        }
                    ]
                },
                {
                    label: 'Qualifications',
                    content: [
                        {
                            label: 'Certifications',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Education',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Training',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Work (experience)',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        }
                    ]
                },
                {
                    label: 'Responsibilities',
                    content: [
                        {
                            label: 'Activities',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Contexts',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Duties',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Tools & Tech',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        },
                        {
                            label: 'Values',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        }
                    ]
                }
            ]
        },
        {
            label: 'People',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ],
    treeChartData: [
        {
            id: '1',
            name: 'Tier 1',
            parentId: null
        },
        {
            id: '2',
            name: 'Tier 2',
            parentId: '1'
        },
        {
            id: '3',
            name: 'Tier 2',
            parentId: '1'
        },
        {
            id: '4',
            name: 'Tier 3',
            parentId: '2'
        },
        {
            id: '5',
            name: 'Tier 3',
            parentId: '2'
        },
        {
            id: '6',
            name: 'Tier 3',
            parentId: '3'
        },
        {
            id: '7',
            name: 'Tier 3',
            parentId: '3'
        },
        {
            id: '8',
            name: 'Tier 4',
            parentId: '7'
        },
        {
            id: '9',
            name: 'Tier 4',
            parentId: '7'
        },
        {
            id: '10',
            name: 'Tier 5',
            parentId: '9'
        },
    ]
}

const getAll = (collection) => {
    return mockData[collection];
}

const get = (collection, id) => {
    id = parseInt(id);
    return mockData[collection].find(x => x.id === id);
}

const set = (collection, payload) => {
    payload.id = Math.floor(Math.random() * 10000);
    mockData[collection].push(payload);
}

const getByProperty = (collection, key, value) => {
    value = parseInt(value);
    return mockData[collection].filter(x => x[key] === value);
}

export default { getAll, get, getByProperty, set };