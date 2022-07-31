<template>
  <Head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="stylesheet" type="text/css" href="main.css" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    />
  </Head>

  <nav class="navbar">
    <div>
      <a href="/studentview">
        <img
          src="~/assets/images/lognew.png"
          class="primary-logo"
          width="70"
          height="100"
      /></a>
    </div>
    <ul class="nav-links">
      <li class="list-item">
        <a href="/studentview"><i class="fas fa-band-aid"></i>Home</a>
      </li>
      <li class="list-item">
        <a href="/scholarship/_scholarship">Scholarship</a>
      </li>
      <li class="list-item">
        <a href="/internship/_internship">Internship</a>
      </li>
      <li class="list-item"><a href="/donation">Donate</a></li>
      <li class="list-item">
        <a href="#"><i class="glyphicon glyphicon-bell"></i> Notification</a>
      </li>
      <li class="list-item">
        <a href="/student/_profile"
          ><i class="glyphicon glyphicon-user"></i>&nbsp;&nbsp;My Profile</a
        >
      </li>
    </ul>
  </nav>
</template>
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  text-decoration: none;
}

.navbar {
  background-color: #f8ece4;
  display: flex;
  justify-content: space-around;
  height: 150px;
  align-items: center;
  /* fixed keyword is fine too */
  position: sticky;
  top: 0;
  z-index: 100;
}
.primary-logo {
  position: absolute;
  width: 285px;
  height: 299px;
  left: -16px;
  top: -39px;
}
.nav-links {
  list-style: none;
  text-decoration: none;
  fomt-color: #737373;
}
.nav-links .list-item {
  display: inline-block;
  padding: 20px 20px;
}

ul.nav-links li:hover,
ul.nav-links li:hover a {
  background-color: #FFE4C4;
  text-decoration: none;
}
ul.nav-links a {
  color: #737373;
}
</style>