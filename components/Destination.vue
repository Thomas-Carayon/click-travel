<template>
  <a
    href="#"
    class="giant-button"
    @click="$router.push({ name: 'billets', params: { name } })"
    >{{ name }}</a
  >
</template>

<script>
export default {
  name: 'Destination',
  props: ['name'],
}
</script>
