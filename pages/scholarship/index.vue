<script setup lang="ts">
    const scholarships = await getFirestoreData("Scholarship")
</script>
<template>
  <div name="root">
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Inter&display=swap"
        rel="stylesheet"
      />
      <link href="./css/main.css" rel="stylesheet" />
      <title>Document</title>
    </Head>

    
    <NuxtLayout name="auth">
      <span class="v77_2982">SCHOLARSHIP PROGRAMS</span>
    </NuxtLayout>
  </div>
</template>

<style>
.v77_2982 {
  width: 671px;
  color: rgba(71, 83, 102, 1);
  position: absolute;
  top: 235px;
  left: 753px;
  font-family: Inter;
  font-weight: Extra Bold;
  font-size: 50px;
  opacity: 1;
  text-align: left;
}
</style>