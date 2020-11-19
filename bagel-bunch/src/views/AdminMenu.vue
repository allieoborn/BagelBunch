<template>
  <div v-if="menu" class="content-section container">
    <div v-for="(val, name) in menu" :key="name" class="container card p-3 m-3">
      <b-row>
        <h3 class="col-3">{{ name.charAt(0).toUpperCase() + name.slice(1) }}</h3>
        <div class="col-9 row">
          <h6 class="col-4">Name:</h6><h6 class="col-4">Cost:</h6><h6 class="col-4">Amount:</h6>
          <div v-for="(item) in val" :key="`${name}-${item.name}`" class="container card">
            <b-row>
              <div class="col-1"></div>
              <input class="col-4" type="text" v-model="item.name"/>
              <input class="col-4" type="number" v-model="item.cost"/>
              <input class="col-3" type="number" v-model="item.amount"/>
            </b-row>
          </div>
        </div>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// AdminEditMenu

export default {
  name: "Admin", 
  data: () => ({
    
  }),
  computed: {
    ...mapGetters({
      menu: "menu",
    })
  }

}
</script>

<style>

</style>