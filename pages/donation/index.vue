<script setup lang="ts">
    const donations = await getFirestoreData("Donations")
    console.log("This shouldn't happen though")

</script>
<template>
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
  </Head>
  <NuxtLayout name="auth">
    <div style="text-align:center">
      <span class="v77_3003">DONATION</span>
    </div>
    <div class="flex justify-center">
      <DonationCard
       v-for="donation in donations"
       :key ="donation.id"
       :Title ="donation.Title"
       :Description ="donation.Description"
       :imgUrl ="donation.imgUrl"/>
    </div>
  </NuxtLayout>
</template>
<style>
* {
  box-sizing: border-box;
}
body {
  font-size: 14px;
}
.v77_3003 {
  width: 271px;
  color: rgba(71, 83, 102, 1);
  position: relative;
  text-align: center;
  font-family: Inter;
  font-weight: Extra Bold;
  font-size: 50px;
  opacity: 1;
  text-align: left;
}

/*Limit */
</style>