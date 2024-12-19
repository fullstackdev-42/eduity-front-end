# Eduity Frontend

This is the user-facing portion of the Eduity infrastructure.  It is written using [Vue 2](https://vuejs.org/v2/guide/), [Bootstrap 4](https://getbootstrap.com/docs/4.2/getting-started/introduction/), and [Vue Paper Dashboard 2 Pro](https://www.creative-tim.com/product/vue-paper-dashboard-2-pro), among other basic web technologies.


## Getting Started

1. You will need [Node.js](https://nodejs.org/en/) and NPM installed on your local machine.
2. Clone this repository.
4. Navigate to the project folder in your command console.
3. Run `npm install -g @vue/cli`.
5. Once completed, run `npm run dev`.

Now your browser should automatically open to the locally-served version of the application, ready for development.  Simply close the console or end the process to quit.

Further development should only need `npm run dev` within the project folder to continue; the other steps are first-run only.


## Development Process

You will need to branch your code from the `master` branch into a new feature branch, naming it based on the feature you are currently working on (something like `feature-organization-form-details`).  Once your code is ready to be deployed, send a pull request to the `master` branch, where it will be checked before either being sent back for changes or deployed.


## Making a New Page

Making a blank page is fairly straight-forward:

1. Create a new Vue component within `/src/components`.  Please following PascalCase naming conventions; so, if you were making a page for viewing all available organizations, the file might be `/src/components/Organizations/Views/OrganizationIndex.vue`.
2. Inside the new file, use the following basic template:

    ```
    <template>
      <h1>Your content goes here!</h1>
    </template>
    <script>
      // Your scripts go here
    </script>
    <style lang="scss">
      // Your styles go here.  SCSS is enabled in this case.
    </style>
    ```

3. Import your component into the routes file located in `/src/routes/routes.js`:

    ```
    import OrganizationIndex from '../components/Organizations/Views/OrganizationIndex.vue'
    ```

4. In the same file, near the bottom, register your component under a specific URI.  Here's an example of what that might look like:

    ```
    {
      path: '/organizations', // Which path is displayed in the URL?  Must be unique.
      component: DashboardLayout, // Required so the dashboard layout is used.
      children: [
        {
          path: '', // This is the default page, otherwise you might want something like "/organizations/something-else"
          name: 'Organizations',
          component: OrganizationIndex // The same name as imported from the last step.
        },
      ]
    },
    ```

5. (Optional) To register it in the sidebar, edit `/src/sidebarLinks.js` and add it as a menu item:

    ```
    {
      name: "Organizations",
      icon: "lindua-office",
      path: "/organizations"
    }
    ```

    The icons are part of the [Lindua icon pack](https://icomoon.io/icons-lindua.html).


## License

All original content is copyrighted by Eduity, LLC.  Use outside of this project and without explicit permission is prohibited.