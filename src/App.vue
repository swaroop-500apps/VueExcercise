<template>
  <div id="app">
    <div class="wrapper">
      <virtual-list
        class="list"
        style="height: 360px; overflow-y: auto"
        :data-key="'API'"
        :data-key2="'Description'"
        :data-key3="'Auth'"
        :data-key4="'HTTPS'"
        :data-key5="'Cors'"
        :data-key6="'Link'"
        :data-sources="items"
        :data-component="item"
        :estimate-size="10"
      />
    </div>
  </div>
</template>

<script>
import listData from './components/listData.vue'
import { getData } from '@/components/data.js'

export default {
  name: 'App',
  data() {
    return {
      item: listData,
      items: getData(1425)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1em;
  padding: 1em;
}
.list {
  border: 2px solid steelblue;
  border-radius: 3px;
}
</style>
