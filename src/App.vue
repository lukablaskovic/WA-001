<template>
  <v-app>
    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ appTitle }}
          <a href="https://github.com/lukablaskovic" target="_blank">
            <v-app-bar-nav-icon
              ><img src="@/assets/github.png"
            /></v-app-bar-nav-icon>
          </a>
        </v-col>
        <v-btn
          v-for="link in links"
          :key="link.id"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.path"
        >
          {{ link.name }}
        </v-btn>
      </v-row>
    </v-footer>
    <v-main>
      <router-view :key="$route.path" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      appTitle: "WA zadaće - Luka Blašković",
      links: [
        { id: 1, name: "WA001", path: "/wa001" },
        { id: 2, name: "WA002", path: "/wa002" },
      ],
    };
  },
};
</script>
