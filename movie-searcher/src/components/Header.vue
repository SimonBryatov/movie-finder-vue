<template>
<div class="header"> {{msg}}
</div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your FIRST Vue.js App'
    }
  }
}
</script>

<style>
.header {
    color: darkred;
    font-size: 300px;
}
</style>