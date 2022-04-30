<template>
  <div>
    <h3>Dohvacanje vremena i prognoze sa backenda iz WA-101 foldera</h3>
    <h2>Današnji datum i vrijeme: {{ datum }}</h2>
    <h2>{{ prognoza }}</h2>
  </div>
</template>

<script>
export default {
  name: "WA103",
  data: () => ({
    datum: "",
    prognoza: "",
  }),

  created() {
    this.fetchDatum();
    this.fetchPrognoza();
  },
  methods: {
    fetchDatum() {
      let prom = fetch("http://localhost:5000/datum");
      let prom2 = prom.then((res) => {
        return res.text();
      });
      prom2.then((data) => {
        this.datum = data;
      });
    },
    fetchPrognoza() {
      let prom = fetch("http://localhost:5000/prognoza");
      let prom2 = prom.then((res) => {
        return res.text();
      });
      prom2.then((data) => {
        this.prognoza = data;
      });
    },
  },
};
</script>
