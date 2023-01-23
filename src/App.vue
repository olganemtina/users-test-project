<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item
          v-for="link in links"
          :key="link.name"
          :active="$route.name == link.name"
          :to="{ path: link.path }"
          >{{ link.title }}</b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  links: Array<{ name: string; path: string; title: string }> = [
    { name: 'home', path: '/', title: 'Главная' },
    { name: 'users', path: '/users', title: 'Пользователи' },
  ];
}
</script>
