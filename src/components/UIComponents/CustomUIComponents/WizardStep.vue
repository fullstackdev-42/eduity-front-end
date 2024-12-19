<template>
  <ValidationObserver ref="form">
    <form @submit.prevent="validate" class="container-fluid">
      <div class="d-flex flex-column justify-content-center align-items-center my-3">
        <h6 class="text-center">{{ label }}</h6>
        <small>{{ helperText }}</small>
      </div>
      <div class="row justify-content-center">
        <slot></slot>
      </div>
    </form>
  </ValidationObserver>
</template>
<script>
  import { extend } from "vee-validate";
  import { required, numeric, regex, email, alpha } from "vee-validate/dist/rules";

  extend("required", required);
  extend("email", email);
  extend("numeric", numeric);
  extend("regex", regex);
  extend("alpha", alpha);

  export default {
    name: 'WizardStep',
    props: {
      label: {
        type: String,
        default: ''
      },
      helperText: {
        type: String,
        default: ''
      }
    },
    methods: {
      validate() {
        return this.$refs.form.validate().then(res => {
          this.$emit('on-validated', res)
          return res
        })
      }
    }
  }
</script>
<style lang="scss">
  .card-wizard .picture-container .picture {
    input[type="file"] {
      display: none;
    }
  }
</style>