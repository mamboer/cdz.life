<template>
  <div class="container mx-auto py-12">
    <HomeHero
      :title="$t('hero.title')"
      :subtitle="$t('hero.subtitle')"
      :desc="$t('hero.desc')"
      image="https://unocss.dev/logo.svg"
    />
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
</style>