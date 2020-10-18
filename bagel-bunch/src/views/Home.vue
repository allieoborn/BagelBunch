<template>
  <div>
    <BreadCrumb :current="currentPhase" />
    <button @click="firebase_test">CLICK ME FOR A MESSAGE FROM FIREBASE</button>
  </div>
</template>

<script>
import BreadCrumb from "../components/BreadCrumb";

export default {
  components: {
    BreadCrumb: BreadCrumb,
  },
  data() {
    return {
      currentPhase: "Bagels",
    };
  },
  methods: {
    cycle: function () {
      this.currentPhase = "Eli";
    },
    firebase_test: function () {
      fetch(
        "https://us-central1-bagelbunch-b5e21.cloudfunctions.net/helloWorld"
      )
        .then((response) => response.json())
        .then((value) => {
          console.log(value.message);
          var btn_div = document.createElement("div");
          btn_div.style = "text-align: center;";
          var btn = document.createElement("p");
          btn.style = "font-size: 30px";
          btn.innerHTML = value.message;
          btn_div.appendChild(btn);
          document.body.appendChild(btn_div);
        });
    },
  },
};
</script>