<template>
  <v-app>
    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ appTitle }}
        </v-col>
        <v-btn
          v-for="link in links"
          :key="link"
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
    <v-content>
      <router-view :key="$route.path" />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      appTitle: "WA zadaće - Luka Blašković",
      links: [
        { name: "WA001", path: "/wa001" },
        { name: "WA002", path: "/wa002" },
      ],
    };
  },
};
</script>
