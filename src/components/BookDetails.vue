<template>
  <v-card class="mx-auto mt-12" max-width="400" v-if="loaded">
    <v-img
      class="black--text align-end"
      height="400px"
      :src="getImgUrl('book')"
    >
    </v-img>
    <v-card-title>{{ name }}</v-card-title>
    <v-card-subtitle class="pb-0"> ISBN: {{ isbn }} </v-card-subtitle>
    <hr />
    <div class="mt-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 mr-1 ml-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
        />
      </svg>
      <span><b>Autori:</b> {{ `${authors}` }}</span>
    </div>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 mr-1 ml-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
          clip-rule="evenodd"
        />
      </svg>
      <span><b>Broj stranica:</b> {{ numPages }}</span>
    </div>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 mr-1 ml-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
          clip-rule="evenodd"
        />
      </svg>
      <span><b>Izdavač:</b> {{ publisher }}, {{ country }}</span>
    </div>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 mr-1 ml-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
          clip-rule="evenodd"
        />
      </svg>
      <span><b>Broj likova:</b> {{ characters.length }}</span>
    </div>
    <v-card-subtitle class="pb-0"
      >Objavljeno: {{ released.slice(0, 10) }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn @click.native="$router.push('/wa-blic-01')" color="orange" text>
        Povratak
      </v-btn>
    </v-card-actions>
  </v-card>
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
const months = ["January", "February", "March", "April", "May", "June", "July"];

import axios from "axios";
export default {
  data: () => ({
    loaded: false,
    url: "",
    name: "",
    released: "",
    authors: "",
    isbn: "",
    numPages: 0,
    publisher: "",
    country: "",
    characters: [],
  }),
  mounted() {
    this.url = this.$route.params.url;
  },
  methods: {
    getImgUrl(book) {
      let random = Math.floor(Math.random() * 5) + 1;
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + book + random + ".png");
    },
  },

  async created() {
    const response = await axios.get(
      "https://www.anapioficeandfire.com/api/books"
    );
    let data = response.data;
    const book = data.find(
      ({ url }) => url.split("/").slice(-1)[0] === this.url
    );
    this.name = book.name;
    this.released = book.released;
    this.authors = book.authors;
    this.isbn = book.isbn;
    this.numPages = book.numberOfPages;
    this.publisher = book.publisher;
    this.country = book.country;
    this.characters = book.characters;
    this.loaded = true;
  },
};
</script>
<style scoped>
svg {
  display: inline-block;
}
</style>
