<template>
  <b-nav-form class="w-25">
    <label for="search" class="sr-only">{{ placeholder }}</label>
    <input
      id="search"
      :placeholder="placeholder"
      v-model="search"
      type="text"
      class="form-control w-100"
    />
  </b-nav-form>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

const SearchComponentProps = Vue.extend({
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
      default: 'Поиск...',
    },
  },
});

@Component
export default class SearchComponent extends SearchComponentProps {
  search: string = this.value;

  @Watch('search')
  onPropertyChanged(value: string) {
    this.$emit('search', value);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
form.form-inline
  width 100%

.sr-only{
  position absolute;
  width 1px;
  height 1px;
  padding 0;
  margin -1px;
  overflow hidden;
  clip rect(0, 0, 0, 0);
  border 0;
}
</style>
