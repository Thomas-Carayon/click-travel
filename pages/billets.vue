<template>
  <div class="container">
    <div class="toolbar">
      <Logo />
    </div>
    <div class="content">
      <div>
        <h1 class="title">Vous avez choisis la destination {{ name }}</h1>
        <h2>Liste des billets :</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Billets',
  props: ['name'],
}
</script>
