<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><img src="https://hmp3.ru/upload/220/1-oqALbzpjX-R8vQRR8hsQ.jpg"></router-link> |
      <router-link to="/about"><img src="http://www.dogdrip.net/files/attach/images/78/792/821/057/60e76c23efbeb480c79bfad04f73f092.jpg"></router-link>
      <router-link to="/kakaha"><img src="https://www.kontrolkalemi.com/forum/data/avatars/o/414/414045.jpg?1573230667"></router-link>
      <router-link to="/rus9"><img src="https://i.pinimg.com/736x/33/d7/4f/33d74fb0ba60588fd0eaf04e3a4fc055--diana-game.jpg"></router-link>
      <router-link to="/romik"><img src="https://www.sa-rpg.com/forum/uploads/monthly_2019_06/teemo-classic.thumb.png.36d0d1e1bc19ca524d3e5e03b150a2ca.png"></router-link> 
    </div>
    <router-view/>
  </div>
</template>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

