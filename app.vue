<template>
  <div class="bg">
    <link
        rel="stylesheet"
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
    />
    <NuxtLayout>
      <NuxtPage class=" bg  max-w-xl mx-auto my-auto"/>
    </NuxtLayout>
  </div>
</template>

<style>
html,body, #__nuxt, #__layout{
  height:100%!important;
}

.bg {
  background-color: antiquewhite;
  height: 100%;
}

</style>