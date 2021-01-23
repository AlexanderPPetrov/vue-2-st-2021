<template>
  <div id="app">
    <component-example></component-example>
    <div class="component">Div in App.vue</div>
  </div>
</template>

<script>
import ComponentExample from './components/ComponentExample';

export default {
  name: 'App',
  components: {
    ComponentExample,
  }
}

</script>

<style>

</style>
