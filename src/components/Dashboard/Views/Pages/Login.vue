<template>
  <div class="login-page">
    <div class="wrapper wrapper-full-page">
      <div class="full-page login-page">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <div class="container">
            <div class="col-lg-4 col-md-6 ml-auto mr-auto">
              <form @submit.prevent="login">
                <div class="text-center mb-3">
                  <img src="static/img/logo-white.png" class="img-fluid">
                </div>
                <card type="login">
                  <h3 slot="header" class="header text-center">Login</h3>
                  <p v-show="loginError" class="text-warning">{{loginMsg}}</p>
                  <fg-input v-model="form.username" addon-left-icon="lindua-envelope" placeholder="E-mail Address"></fg-input>
                  <fg-input v-model="form.password" addon-left-icon="lindua-lock" placeholder="Password" type="password"></fg-input>
                  <br>
                  <div class="row">
                    <div class="col-12 col-sm-6">
                      <router-link
                        to="/register"
                        class="btn btn-block btn-round btn-link"
                      >
                        Register
                      </router-link>
                    </div>
                    <div class="col-12 col-sm-6">
                      <p-button native-type="submit" slot="footer" type="warning" round block class="mb-3">Login</p-button>
                    </div>
                  </div>
                </card>
              </form>
            </div>
          </div>
        </div>
        <!-- <app-footer></app-footer> -->
        <!-- <div class="full-page-background" style="background-image: url(static/img/background/background-2.jpg) "></div> -->
      </div>
    </div>
  </div>
</template>
<script>
  import { Card, Checkbox, Button } from 'src/components/UIComponents';
  import AppNavbar from './Layout/AppNavbar'
  import AppFooter from './Layout/AppFooter'
  import Auth  from '@/services/auth.service.js'
  
  export default {
    components: {
      Card,
      AppNavbar,
      AppFooter,
      [Checkbox.name]: Checkbox,
      [Button.name]: Button
    },
    data(){
      return {
        form: {
          password: '',
          username: '',
        },
        loginError: false,
        loginMsg: ""
      }
    },
    methods: {
      toggleNavbar() {
        document.body.classList.toggle('nav-open')
      },
      closeMenu() {
        document.body.classList.remove('nav-open')
        document.body.classList.remove('off-canvas-sidebar')
      },
      async login() {
        this.loginError = false
        const login = await Auth.login(this.form.username, this.form.password)
        if(login.status === 200){
          this.$router.push(`/`)
        } else if(login.message) {
          this.loginMsg = `*${login.message}`
          this.loginError = true
        } else {
          this.loginMsg = "*There was an error with your login.  Please check your credentials and try again."
          this.loginError = true
        }
      }
    },
    beforeDestroy() {
      this.closeMenu()
    }
  }
</script>
<style>
</style>
