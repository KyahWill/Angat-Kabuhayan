<script setup lang="ts">

  definePageMeta({
    middleware: ["auth"],
  });
  
  const firebaseUser = useFirebaseUser();
//   console.log(donations)
// })
// onMounted( async () => {

//   // const email = "knownbutnotloved@gmail.com"
//   // const password = "password"

//   // const credentials = await createUser(email, password)
//   // console.log(credentials)
  
//   // const credentials = await signinUser("knownbutnotloved@gmail.com", "123456")
//   // console.log(credentials)
// })
</script>
<template>
    <div name="authLayout" class="bg-base-100">
        <TheHeader />
        <slot />
    </div>
</template>
