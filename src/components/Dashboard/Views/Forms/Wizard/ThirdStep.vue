<template>
  <ValidationObserver ref="form">
    <form @submit.prevent="validate">
      <div class="row justify-content-center">
        <slot name="content"></slot>
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
<style>
</style>
