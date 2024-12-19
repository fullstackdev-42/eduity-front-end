import Dashboard from '@/components/Dashboard/Views/Dashboard/Dashboard.vue';
import DashboardLayout from '@/components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import Networks from '@/components/GeneralViews/Networks.vue';
import Plan from '@/components/GeneralViews/Plan.vue';
import Areas from '@/components/GeneralViews/Areas.vue';
import Organizations from '@/components/GeneralViews/Organizations.vue';
import OrganizationPage from '@/components/GeneralViews/JobInventoryContainer/OrganizationPage.vue';
import PublicOrganizationPage from '@/components/GeneralViews/PublicOrganizationPage.vue';
import UnitPage from '@/components/GeneralViews/JobInventoryContainer/UnitPage.vue';
import JobPage from '@/components/GeneralViews/JobInventoryContainer/JobPage.vue';
import Details from '@/components/FunctionalMenu/Details.vue';
import Feedback from '@/components/FunctionalMenu/Feedback.vue';
import Indicators from '@/components/FunctionalMenu/Indicators.vue';
import Structure from '@/components/FunctionalMenu/Structure.vue';
import Team from '@/components/FunctionalMenu/Team.vue';
import Updates from '@/components/FunctionalMenu/Updates.vue';
import People from '@/components/GeneralViews/People.vue';
import Login from '@/components/Dashboard/Views/Pages/Login.vue'
import Register from '@/components/Dashboard/Views/Pages/Register.vue'
// import Lock from '@/components/Dashboard/Views/Pages/Lock.vue'
import NotFound from '@/components/GeneralViews/NotFoundPage.vue'



let loginPage = {
  path: '/login',
  name: 'Login',
  component: Login
}

let registerPage = {
  path: '/register',
  name: 'Register',
  component: Register
}

// let lockPage = {
//   path: '/lock',
//   name: 'Lock',
//   component: Lock
// }

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard', // Which path is displayed in the URL?  Must be unique.
        component: Dashboard // Required so the dashboard layout is used.
      },
      {
        path: '/networks', 
        component: Networks 
      },
      {
        path: '/plan', 
        component: Plan 
      },
      {
        path: '/areas', 
        component: Areas 
      },
      {
        path: '/organizations', 
        component: Organizations 
      },
      {
        path: '/organization/:organizationId', 
        component: OrganizationPage,
        children: [
          {
            path: 'details',
            name: 'organization',
            component: Details,
            props: true
          },
          {
            path: 'feedback',
            component: Feedback
          },
          {
            path: 'indicators',
            component: Indicators
          },
          {
            path: 'structure',
            component: Structure
          },
          {
            path: 'team',
            component: Team
          },
          {
            path: 'updates',
            component: Updates
          },
        ] 
      },
      {
        path: '/public/organization/:organizationId',
        component: PublicOrganizationPage
      },
      {
        path: '/job/:jobId',
        component: JobPage,
        children: [
          {
            path: 'details',
            name: 'job',
            component: Details,
            props: true
          },
          {
            path: 'feedback',
            component: Feedback
          },
          {
            path: 'indicators',
            component: Indicators
          },
          {
            path: 'structure',
            component: Structure
          },
          {
            path: 'team',
            component: Team
          },
          {
            path: 'updates',
            component: Updates
          },
        ]
      },
      {
        path: '/unit/:unitId',
        component: UnitPage,
        children: [
          {
            path: 'details',
            name: 'unit',
            component: Details,
            props: true
          },
          {
            path: 'feedback',
            component: Feedback
          },
          {
            path: 'indicators',
            component: Indicators
          },
          {
            path: 'structure',
            component: Structure
          },
          {
            path: 'team',
            component: Team
          },
          {
            path: 'updates',
            component: Updates
          },
        ]
      },
      {
        path: '/people', 
        component: People 
      },
    ]
  },
  loginPage,
  registerPage,
  // lockPage,
  {path: '*', component: NotFound}
];

export default routes
