<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        Zadatak 1 - Web aplikacije, Luka Blašković
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view :key="$route.path" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
