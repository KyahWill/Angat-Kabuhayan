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
      <div style="text-align: center;" >
        <span class="v77_2982">SCHOLARSHIP PROGRAMS</span>
      </div>
      <TheCard />
    </NuxtLayout>
  </div>
</template>

<style>
.v77_2982 {
  width: 671px;
  color: rgba(71, 83, 102, 1);
  position: relative;
  font-family: Inter;
  font-weight: Extra Bold;
  font-size: 50px;
  opacity: 1;
}
</style>