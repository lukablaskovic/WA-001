<template>
  <div>
    <v-card class="mx-auto" max-width="300" tile>
      <v-list dense>
        <v-subheader>Prikaz commitova (SHA)</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in data" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="item.sha"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  async created() {
    const response = await axios.get(
      "https://api.github.com/repos/vuejs/vue/commits"
    );
    this.data = response.data;
  },
  data: () => ({
    selectedItem: -1,
    data: null,
  }),
};
</script>
