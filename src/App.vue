<template>
  <div>
    <router-view name="navigation"></router-view>
    <div class="container mt-5">
        <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>