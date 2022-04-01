<template>
  <v-simple-table class="ml-16 mr-16" v-if="loaded">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Naziv</th>
          <th class="text-left">Prvi autor</th>
          <th class="text-left">Datum izdavanja</th>
          <th class="text-left">Detalji o knjizi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in books_data" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ `${item.authors}` }}</td>
          <td>
            {{ `${item.released.slice(0, 10)}` }}
          </td>
          <td>
            <router-link
              :to="{
                name: 'book-details',
                params: {
                  url: item.url.split('/').slice(-1)[0],
                },
              }"
              ><v-btn depressed color="primary"> Više </v-btn></router-link
            >
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <v-card class="mx-auto mt-12" max-width="400" v-else>
    <v-img
      class="black--text align-end"
      height="200px"
      src="@/assets/loading.gif"
    >
    </v-img>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      books_data: [],
      loaded: false,
    };
  },
  async created() {
    const response = await axios.get(
      "https://www.anapioficeandfire.com/api/books"
    );
    this.books_data = response.data;
    this.loaded = true;
  },
};
</script>
