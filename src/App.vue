<template>
  <div id="app">
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
@import '@/style/_variable.scss';
@import '@/style/_mixin.scss';

// google fonts
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap');

// Material design icons
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

body {
  // min-height: 640px;
  background: url(./assets/images/bg-pattern-unit.svg) #ffeb95;
}

#app {
  font-family: 'Roboto', sans-serif, Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

// vue transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
