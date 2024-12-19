<template>
  <div class="register-page">
    <!-- <app-navbar></app-navbar> -->
    <div class="wrapper wrapper-full-page">
      <div class="full-page register-page section-image" filter-color="black">
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-md-5 ml-auto">
                <info-section 
                  type="primary"
                  title="Build Your Talent"
                  description="Find the best ways to upgrade your skill set, become a more valuable worker who can earn what they're worth."
                  icon="lindua-chart-upward">
                </info-section>
                <info-section 
                  type="primary"
                  title="Collaborate"
                  description="Work together on inventory management and workforce planning, whether you're an employee, an HR manager, a business owner, or anyone else getting work done."
                  icon="lindua-group-circle">
                </info-section>
                <info-section 
                  type="primary"
                  title="Analyze"
                  description="Forecast workforce needs, inspect cost paradigms, and [do some other really complicated stuff with numbers].  More analysis available for a fee, see our pricing."
                  icon="lindua-pie-chart">
                </info-section>
              </div>
              <div class="col-lg-4 col-md-6 mr-auto">
                <card type="signup" class="text-center">
                  <p v-if="registerError" class="text-warning">{{registerErrorMsg}}</p>
                  <template slot="header">
                    <h4 class="card-title">Register</h4>
                  </template>
                  <form @submit.prevent="register">
                    <ValidationProvider
                        name="firstName"
                        rules="required"
                        v-slot="{ passed, failed }"
                    >
                    <fg-input
                      v-model="form.firstName"
                      addon-left-icon="lindua-envelope"
                      placeholder="Your First Name..."
                      :error="failed ? 'You must provide a name.' : null"
                      :hasSuccess="passed"
                    ></fg-input>
                    </ValidationProvider>
                    <ValidationProvider
                        name="lastName"
                        rules="required"
                        v-slot="{ passed, failed }"
                    >
                      <fg-input 
                        v-model="form.lastName"
                        addon-left-icon="lindua-envelope"
                        placeholder="Your Last Name..."
                        :error="failed ? 'You must provide a name.' : null"
                        :hasSuccess="passed"
                      ></fg-input>
                    </ValidationProvider>
                    <ValidationProvider
                        name="email"
                        rules="required|email"
                        v-slot="{ passed, failed }"
                    >
                      <fg-input
                        v-model="form.email"
                        addon-left-icon="lindua-envelope"
                        placeholder="Your E-mail..."
                        :error="failed ? 'You must provide a properly formated email.' : null"
                        :hasSuccess="passed"
                      ></fg-input>
                    </ValidationProvider>
                    <ValidationProvider
                        name="password"
                        rules="required"
                        v-slot="{ passed, failed }"
                    >
                      <fg-input 
                        v-model="form.password" 
                        addon-left-icon="lindua-lock" 
                        placeholder="Password" 
                        type="password"
                        :error="failed ? 'You must provide a password.' : null"
                        :hasSuccess="passed"
                      ></fg-input>
                    </ValidationProvider>
                     <ValidationProvider
                        name="passwordMatch"
                        rules="required"
                        v-slot="{ passed, failed }"
                    >
                      <fg-input 
                        v-model="form.confirmPassword"
                        addon-left-icon="lindua-lock" placeholder="Confirm Password"
                        type="password"
                         :error="failed ? 'You must provide a password.' : null"
                        :hasSuccess="passed"
                      ></fg-input>
                    </ValidationProvider>
                    <p>*password must be at least 8 characters</p>
                    <p-checkbox class="text-left" v-model="form.acceptTerms">
                      I agree to the
                      <a href="#">terms and conditions</a>.
                    </p-checkbox>
                  </form>
                  <p-button native-type="submit" @click="register()" slot="footer" type="warning" round block class="mb-3">Get Started</p-button>
                  <br slot="footer">
                  <router-link
                    to="/login"
                    class="mt-2 d-inline-block"
                    slot="footer"
                  >
                    Back to Login
                  </router-link>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AppNavbar from './Layout/AppNavbar'
  import AppFooter from './Layout/AppFooter'
  import { Card, Checkbox, Button, InfoSection } from 'src/components/UIComponents';
  import Auth  from '@/services/auth.service.js'

  export default {
    components: {
      Card,
      AppNavbar,
      AppFooter,
      InfoSection,
      [Checkbox.name]: Checkbox,
      [Button.name]: Button
    },
    data(){
      return {
        form: {
          email: '',
          confirmPassword: '',
          firstName: '',
          lastName: '',
          acceptTerms: true
        },
        registerErrorMsg: "",
        registerError: false
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
      beforeDestroy() {
        this.closeMenu()
      },
      async register() {
        if(this.form.password === this.form.confirmPassword && this.form.acceptTerms) {
          const register = await Auth.register(this.form.email, this.form.password, this.form.firstName, this.form.lastName)
          if(register){
            this.$router.push(`/`)
          }else {
            this.registerErrorMsg = "*There was a problem with registartion.  Please try again later."
            this.registerError = true
          }
        }else {
            console.log("Passwords don't match")
            this.registerErrorMsg = "Your passwords do not match."
            this.registerError = true
        }
      }
    },
    watch: {
      form(val){
        if(val.password !== val.confirmPassword) {
          console.log("passwords do not match")
        }
      }
    }
  }
</script>
<style>
</style>
