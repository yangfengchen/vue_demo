<template>
  <div id="app">
	<transition>
      <router-view></router-view>
    </transition>
	
  </div>
</template>

<script>
import store from './vuex/store'
export default {
  name: 'app'
}
</script>

<style>
</style>
