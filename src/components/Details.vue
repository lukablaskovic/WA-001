<template>
  <v-card class="mx-auto mt-12" max-width="400">
    <v-img class="black--text align-end" height="200px" :src="authorImage">
    </v-img>
    <v-card-title>{{ authorName }}</v-card-title>
    <v-card-subtitle class="pb-0"> {{ authorEmail }} </v-card-subtitle>
    <br />
    <v-card-text class="text--primary">
      <div>{{ msg }}</div>
    </v-card-text>
    <v-card-subtitle class="pb-0"
      >Objavljeno: {{ date.slice(0, 10) }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn @click.native="$router.push('/')" color="orange" text>
        Povratak
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    sha: this.$route.params.sha,
  }),
  props: {
    authorName: String,
    authorEmail: String,
    msg: String,
    date: Date,
    authorImage: String,
  },
};
</script>
