<template>
  <div>
    <v-card class="mx-auto mt-12" max-width="520" tile>
      <v-list dense>
        <v-list-item>
          <v-container>
            <v-text-field v-model="ime" label="Unesi ime"></v-text-field>
            <v-btn @click="sendRequests" color="orange" text> Dohvati </v-btn>
          </v-container>
        </v-list-item>
        <v-list-item>
          <v-data-table
            v-if="show"
            :headers="headers"
            :items="result"
            :items-per-page="1"
            class="elevation-1"
          ></v-data-table
        ></v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "WA002",
  data: () => ({
    ime: "",
    show: false,
    result: [
      {
        name: "",
        god: "",
        div: "",
        siv: "",
      },
    ],

    headers: [
      {
        text: "Ime",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Države i vjerojatnosti", value: "div" },
      { text: "Godine", value: "god" },
      { text: "Spol i vjerojatnost", value: "siv" },
    ],
  }),
  methods: {
    resultReset() {
      Object.keys(this.result[0]).forEach((key) => {
        this.result[0][key] = "";
      });
    },
    async sendRequests() {
      this.resultReset();
      console.log("Šaljem...");
      if (!this.ime || this.ime == "") return;
      const response0 = await axios.get(
        "https://api.agify.io?name=" + this.ime
      );
      this.result[0].name = response0.data.name;
      this.result[0].god = response0.data.age;

      const response1 = await axios.get(
        "https://api.nationalize.io?name=" + this.ime
      );
      response1.data.country.forEach((element) => {
        this.result[0].div +=
          element.country_id +
          ": " +
          Math.floor(element.probability * 100) +
          "% ";
      });

      const response2 = await axios.get(
        "https://api.genderize.io?name=" + this.ime
      );
      this.result[0].siv =
        response2.data.gender +
        ": " +
        Math.floor(response2.data.probability * 100) +
        "% ";
      this.show = true;
    },
  },
};
</script>
