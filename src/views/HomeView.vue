<template>
  <div>
    <v-card class="mx-auto mt-12" max-width="320" tile>
      <v-list dense>
        <v-subheader>Prikaz commitova (SHA)</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in data.slice(-10 + p, 0 + p)" :key="i">
            <router-link
              :to="{
                name: 'details',
                params: {
                  sha: item.sha,
                  authorName: item.commit.author.name,
                  authorEmail: item.commit.author.email,
                  msg: item.commit.message,
                  date: item.commit.author.date,
                  authorImage: item.author.avatar_url,
                },
              }"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.sha"></v-list-item-title>
              </v-list-item-content>
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <div class="text-center">
      <v-pagination v-model="page" :length="3" circle></v-pagination>
    </div>
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
    page: 1,
    data: [],
  }),
  computed: {
    p() {
      return this.page * 10;
    },
  },
};
</script>
