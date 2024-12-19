<template>
  <div :class="{'nav-open': $sidebar.showSidebar}">
    <notifications transition-name="notification-list" transition-mode="out-in">

    </notifications>
    <router-view name="header"></router-view>
    <transition name="fade"
                mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
  // Loading some plugin css asynchronously
  import 'sweetalert2/dist/sweetalert2.css'
  import 'vue-notifyjs/themes/default.css'
  export default {}
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Libre+Franklin&display=swap');

  @import 'assets/sass/paper/variables';
  @import 'assets/sass/paper/mixins/vendor-prefixes';

  $blue: #2756A9;
  $green: #81B600;
  $red: #881029;
  $orange: #EE7A00;
  $white: #FFFFFF;

  $warning: $orange;
  $danger: $red;

  html, body {
    min-height: 100%;
  }

  body {
      font-family: 'Libre Franklin', 'Montserrat', "Helvetica", Arial, sans-serif !important;
  }

  .wrapper-full-page {
    background: rgba($blue, 1);
    background: linear-gradient(180deg, rgba($blue,1) 0%, rgba(darken($blue, 10%),1) 100%);
    & > .full-page:after {
      background: transparent !important;
    }
  }

  .main-panel > .content {
    min-height: calc(100vh - 93px);
  }

  .logo {
    background: $blue;
    color: $white;
    height: 52px;

    @media (min-width: 991px) {
      height: 62px;
    }
  }

  .logo-normal img {
    height: 36px;
    width: auto;
    margin-top: -10px;
    margin-left: 20px;

    @media (min-width: 991px) {
      height: 100%;
      width: 95px;
      margin-left: 10px;
    }
  }

  .logo-mini img {
    width: auto;
    height: 48px;
  }

  .sidebar:after, .off-canvas-sidebar:after {
    background: $blue;
    @include sidebar-active-color(#FFF);
  }

  .logo-normal,
  .logo-mini,
  .sidebar,
  .main-panel,
  .sidebar-wrapper {
    transition: none !important;
  }

  .sidebar-mini .sidebar:hover {
    .logo-mini {
      opacity: 0 !important;
    }
  }

  .main-panel > .navbar {
    background: $blue !important;

    &,
    .navbar-brand,
    a.nav-link,
    ::-webkit-input-placeholder,
    .input-group-text,
    .navbar-toggler {
      color: $white !important;
    }

    .navbar-toggler-bar {
      background: $white !important;
    }
  }

  #minimizeSidebar {
    background: rgba($white, 0.2);

    &:hover, &:focus {
      background: rgba($white, 0.3) !important;
    }
  }

  .navbar-nav .dropdown-menu::after {
    display: none;
  }

  .sidebar {
    border-right: 0px !important;
  }

  .form-check .form-check-sign::after {
    content: '\2713 ';
    font-family: inherit;
  }

  .input-group.is-invalid .input-group-prepend,
  .input-group.is-invalid .input-group-append {
    .input-group-text {
      border-color: $danger;
    }
  }

  .input-group.is-invalid .nc-icon {
    color: $danger;
  }

  .form-check input[type=checkbox], .form-check-radio input[type=radio] {
    visibility: visible;

    &:focus + .form-check-sign:before {
      background-color: darken(#AAA7A4, 10%);
    }

    &:focus:checked + .form-check-sign:before {
      background-color: darken(#66615B, 10%);
    }
  }

</style>
