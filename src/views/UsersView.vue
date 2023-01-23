<template>
  <b-container fluid>
    <h1 class="m-3">Пользователи</h1>
    <b-navbar>
      <SearchComponent :value="searchText" @search="searchText = $event" />
      <LoadButton text="Загрузить случайных пользователей" @load="loadUsers" class="ml-3" />
    </b-navbar>

    <UsersList :users="usersFilter" :loading="loading" />
    <ErrorComponent v-if="errorText" :value="errorText" />
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UsersList from '@/components/UsersList.vue';
import ErrorComponent from '@/components/ErrorComponent.vue';
import LoadButton from '@/components/LoadButton.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import getUsers from '@/services/request-api';
import { IUser } from '@/types/user';

@Component({
  components: {
    UsersList,
    SearchComponent,
    LoadButton,
    ErrorComponent,
  },
})
export default class HomeView extends Vue {
  loading = true;

  errorText = '';

  users: Array<IUser> = [];

  searchText = '';

  async loadUsers() {
    try {
      this.loading = true;
      const { data } = await getUsers<Array<IUser>>(Math.ceil(Math.random() * 30));
      this.users = data.map((elem: IUser) => {
        const user = elem;
        user.date_of_birth_local = !Number.isNaN(Date.parse(elem.date_of_birth))
          ? new Date(elem.date_of_birth).toLocaleDateString()
          : '';
        return user;
      });
      this.loading = false;
    } catch (error) {
      this.errorText = 'Ошибка загрузки пользователей';
      this.loading = false;
    }
  }

  get usersFilter(): Array<IUser> {
    if (this.searchText) {
      const searchText = this.searchText.toLowerCase();
      return this.users.filter((user) => {
        const props = [user.first_name, user.last_name, user.date_of_birth, user.phone_number];
        return (
          props.find((prop) => prop !== null && prop.toLowerCase().includes(searchText)) != null
        );
      });
    }
    return this.users;
  }

  created() {
    this.loadUsers();
  }
}
</script>
