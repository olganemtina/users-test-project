<template>
  <b-alert class="m-3" show variant="danger">{{ errorText }}</b-alert>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const ErrorComponentProps = Vue.extend({
  props: {
    value: {
      type: String,
    },
  },
});

@Component
export default class ErrorComponent extends ErrorComponentProps {
  errorText: string = this.value;
}
</script>
