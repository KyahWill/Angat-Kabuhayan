<script setup lang="ts">
// https://x9t4gr.sse.codesandbox.io/landingpage
import { createUser } from "../composables/useFirebase"
const form = ref({ email: "", password: "" , contact: "", username: ""});
const firebaseUser = useFirebaseUser();
const registerMessage = ref();


const signin = async () => {
  const credentials = await signInUser(form.value.email, form.value.password);
  form.value = { email: "", password: "" };
  
  if(credentials) {
    registerMessage.value = `Successfully registered: ${credentials.user.email}`
    setTimeout(() => {
      registerMessage.value = ""
    }, 3000);
    window.location.href = window.location.origin + "/home" 
  }
};

</script>


<template>
  <div name="root">
    <Head>
      <Link
        href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <Link
        href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
        rel="stylesheet"
      />
      <Link href="./css/main.css" rel="stylesheet" />
      <Title> Log in </Title>
    </Head>

    <div class="v50_71">
      <div class="v50_72"></div>
      <div class="v11_34"></div>
      <div
        class="inline-block"
        name="form_container"
        style="position: absolute; top: 185px; left: 1126px"
      >
        <div name="tabs" class="flex">
          <div class="v50_74 flex-1 flex items-center justify-center">
            <span class="v50_75 text-center">LOGIN</span>
          </div>
          <div class="v50_76 flex-1 flex items-center justify-center">
            <a href="/signup">
              <span class="v50_77 text-center" >SIGN UP</span>
            </a>
          </div>
        </div>

        <form style="padding: 20px; background-color:#C38370; ">
          <span class="v50_91 text-center" style="margin-bottom: 40px"
            >WELCOME TO ANGAT-KINABUKASAN</span
          >
          <br />
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Email address
              </label>
              <input
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="username or email address"
                v-model="form.email"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
                
              >
                Password
              </label>
              <input
                class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="*********"
                v-model="form.password"
              />
            </div>
          </div>
          <button class="btn" @click.prevent="signin"> Log In</button>
        </form>
      </div>
    </div>
  </div>
</template>
<style>
* {
  box-sizing: border-box;
}
body {
  font-size: 14px;
}
.v50_71 {
  width: 100%;
  height: 1080px;
  background: rgba(246, 238, 224, 1);
  opacity: 1;
  position: relative;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v50_72 {
  width: 100%;
  height: 918px;
  background: url("../images/v50_72.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 131px;
  left: 261px;
  overflow: hidden;
}
.v11_34 {
  width: 800px;
  height: 800px;
  background: url("~/assets/images/v11_34.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 226px;
  left: 219px;
  overflow: hidden;
}
.v50_74 {
  width: 302px;
  height: 80px;
  background: rgba(195, 131, 112, 1);
  opacity: 1;
  overflow: hidden;
}
.v50_75 {
  width: 319px;
  color: rgba(255, 255, 255, 1);
  font-family: Montserrat;
  font-weight: Bold;
  font-size: 20px;
  opacity: 1;
}
.v50_76 {
  width: 336px;
  height: 81px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  overflow: hidden;
}
.v50_77 {
  width: 319px;
  color: rgba(195, 131, 112, 1);
  font-family: Montserrat;
  font-weight: Bold;
  font-size: 20px;
  opacity: 1;
}

.v50_79 {
  width: 409px;
  color: rgba(246, 238, 224, 1);
  position: absolute;
  top: 603px;
  left: 1405px;
  font-family: Poppins;
  font-weight: Regular;
  font-size: 16px;
  opacity: 1;
  text-align: left;
}
.v50_80 {
  width: 639px;
  height: 791px;
  background: url("../images/v50_80.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 185px;
  left: 1126px;
  overflow: hidden;
}
.v50_81 {
  width: 639px;
  height: 791px;
  background: url("../images/v50_81.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: relative;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v50_82 {
  width: 639px;
  height: 791px;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  position: relative;
  top: 0px;
  left: 0px;
  overflow: hidden;
}
.v50_83 {
  width: 304px;
  height: 61px;
  background: rgba(119, 147, 65, 1);
  opacity: 1;
  position: absolute;
  top: 678px;
  left: 179px;
  box-shadow: 0px 4px 19px
    rgba(
      0.46666666865348816,
      0.5764706134796143,
      0.2549019753932953,
      0.30000001192092896
    );
}
.v50_84 {
  width: 77px;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 695px;
  left: 308px;
  font-family: Poppins;
  font-weight: Medium;
  font-size: 16px;
  opacity: 1;
  text-align: left;
}
.v50_85 {
  width: 540px;
  height: 464px;
  background: url("../images/v50_85.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 148px;
  left: 50px;
  overflow: hidden;
}
.name {
  color: #fff;
}
.name {
  color: #fff;
}
.v50_88 {
  width: 481px;
  height: 117px;
  background: url("../images/v50_88.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 173px;
  left: 0px;
  overflow: hidden;
}
.name {
  color: #fff;
}
.name {
  color: #fff;
}
.v50_91 {
  width: 469px;
  color: rgba(0, 0, 0, 1);
  font-family: Montserrat;
  font-weight: Bold;
  font-size: 24px;
  opacity: 1;
  text-align: center;
}
</style>