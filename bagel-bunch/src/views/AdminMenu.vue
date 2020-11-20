<template>
  <div v-if="menu" class="content-section container">
    <div v-for="(val, name) in menu" :key="name" class="container card p-3 m-3">
      <b-row>
        <h3 class="col-3">{{ name.charAt(0).toUpperCase() + name.slice(1) }}</h3>
        <div class="col-9 row">
          <h6 class="col-4">Name:</h6><h6 class="col-4">Cost:</h6><h6 class="col-4">Amount:</h6>
          <div v-for="item in val" :key="`${name}-${item.name}`" class="container card">
            <div class="form-group">
              <b-row class="px-1">
                <b-form-input class="col-3 mx-2" type="text" v-model="item.name">{{item.name}}</b-form-input>
                <b-form-input class="col-3 mx-2" type="number" v-model="item.cost"></b-form-input>
                <b-form-input class="col-3 mx-2" type="number" v-model="item.amount"></b-form-input>
              </b-row>
            </div>
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