<template>
  <b-button @click="load" variant="outline-dark">{{ text }}</b-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const LoadButtonProps = Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});

@Component
export default class LoadButton extends LoadButtonProps {
  load() {
    this.$emit('load');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
