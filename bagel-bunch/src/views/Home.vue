<template>
  <div>
    <BreadCrumb :current="currentPhase"/>
    <button @click="cycle">Click Me</button>
  </div>
</template>

<script>
import BreadCrumb from "../components/BreadCrumb";

export default {
  components: {
    BreadCrumb: BreadCrumb
  },
  data () {
    return {
      currentPhase: "Bagels",
    }
  },
  methods: {
    cycle: function(){
      this.currentPhase = "Eli";
    }
  }
}
</script>