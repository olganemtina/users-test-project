<template>
  <div class="d-flex align-content-around flex-wrap">
    <b-card v-for="user in users" :key="user.uid" no-body img-top class="m-3">
      <div class="b-card-image-container">
        <b-skeleton-img v-show="loading" card-img="top" no-aspect></b-skeleton-img>
        <b-img
          v-show="!loading"
          :src="user.avatar"
          :alt="`${user.first_name} ${user.last_name}`"
        ></b-img>
      </div>
      <b-card-body>
        <b-card-title>{{ `${user.first_name} ${user.last_name}` }}</b-card-title>
        <b-card-text>
          <p>{{ user.date_of_birth_local }}</p>
          <p>{{ user.phone_number }}</p>
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script lang="ts">
import { IUser } from '@/types/user';
import { Component, Vue } from 'vue-property-decorator';

const UsersListProps = Vue.extend({
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
    users: {
      type: Array as () => Array<IUser>,
      required: true,
      default: () => [],
    },
  },
});

@Component
export default class UsersList extends UsersListProps {}
</script>

<style scoped lang="stylus">
.b-card-image-container
  width 300px
  height 300px
</style>
