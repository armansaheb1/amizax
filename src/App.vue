<template>
  <div class="bg">
    <supportchatbox />
    <chatside v-if="$store.state.chatside" />
    <router-view />
  </div>
</template>

<script setup>

import { useDark, useToggle } from "@vueuse/core";
import axios from 'axios'
import chatside from './components/modals/ChatSide.vue'
import supportchatbox from './components/modals/SupportChat.vue'
import boot from "../public/statics/bootstrap";
import "../public/statics/popper";

const isDark = useDark();
const toggleDark = useToggle(isDark);


</script>

<script>


export default {
  name: 'app',
  metaInfo: {
    title: 'Index',
    titleTemplate: '%s - Appwork'
  },
  components: {
    chatside,
    supportchatbox
  },
  mounted() {
  },
  updated() {
    new boot()
  },
  beforeCreate() {
    this.$store.commit('initializeStore')
    const token = this.$store.state.token
    if (token) {
      axios.defaults.headers.common.Authorization = 'Token ' + token
      this.$store.state.isAuthenticated = true
    } else {
      axios.defaults.headers.common.Authorization = ''
    }
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: "UD";
  src: url("./../public/URWDIN-Demi.woff") format('woff');
}

div,
a,
b,
h1,
h2,
h3,
h4,
h5,
select,
h6,
tr,
td,
th,
input,
p,
span,
label,
button {
  font-family: 'iranyekan-fanum' !important;
}

.center {
  text-align: center;
}

.darkalert {
  background-color: rgba(30, 70, 250, .1);
}

[theme="dark"] {
  background: rgb(13, 23, 38);
  color: #fff;
}

html.dark {
  color-scheme: dark;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.bg-mine {
  background-color: white;
  color: #444
}

.dark .bg-mine {
  background-color: rgb(13, 23, 38);
  color: white
}

::placeholder {
  color: #052B61;
  opacity: 1;
  /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #052B61;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #052B61;
}

.lightertext {
  color: #052B61
}

.lightertext a {
  color: #052B61
}

.normaltext,
.normaltext button,
.normaltext i,
.normaltext button i {
  color: rgb(134, 158, 192) !important;
}

.lightercard {
  background-color: white;
  border: solid 1px rgb(217, 229, 245);
}

.darkercard {
  background-color: #052B61;
  color: rgb(229, 240, 255);
}


.bg {
  background: rgb(244 247 251);
}

.bg2 {
  background: rgb(208, 218, 230);
}

.dark .bg2 {
  background: #070d16;
}

.dark .darkercard {
  background: rgb(229, 240, 255);
  color: #052B61;
}

.dark .bg {
  background: #0d1726;
}

.dark .lightertext {
  color: white
}

.dark .lightertext a,
.dark .lightertext div,
.dark .lightertext i {
  color: white
}

.dark .normaltext {
  color: rgb(134, 158, 192) !important
}

.dark ::placeholder {
  color: rgb(134, 158, 192);
  opacity: 1;
  /* Firefox */
}

.dark .lightercard {
  background-color: rgb(15, 28, 46);
  color: rgb(229, 240, 255);
  border: solid 2px rgb(11, 21, 36)
}



.dark :-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgb(134, 158, 192);
}

.dark ::-ms-input-placeholder {
  /* Microsoft Edge */
  color: rgb(134, 158, 192);
}


.half {
  width: 50%;
  text-align: right;
}

.text-half {
  padding: 19% 6% 0 0;
}

.text-half input {
  width: 55%
}

.text-half button {
  width: 100px;
}

.mobimage {
  width: 495px;
  margin-left: 50px;
}


.onphone {
  display: none
}

.lists {
  width: 92%;
}

.modal-vue3-content {
  width: 50% !important;
  top: 4% !important;
}

.stick {
  border-radius: 20px;
}

.userbar {
  width: 450px;
}

.rightmenu {

  padding: 2%;
  padding-right: 260px;
}

.avatar {
  width: 100px;
  height: 100px
}

.on600 {
  display: none;
}

.curbtn {
  border: 0.2px solid rgba(150, 150, 150, 0.3) !important;
}

.half2 {
  padding-left: 20%
}

.chatbox {
  width: 45%;
}

.notchat {
  width: 55%;
}


@media only screen and (max-width: 1100px) {
  .lists {
    width: 92%;
  }



}

@media only screen and (max-width: 899px) {
  .chatbox {
    width: 65%;
  }

  .notchat {
    width: 35%;
  }

  .css-vurnku {
    width: 120%
  }

  .smalltext {
    font-size: 9px;
  }

  .half2 {
    padding-left: 10%;
    padding-right: 10%;
  }

  .stick {
    border-radius: 10px;
  }

  .userbar {
    width: 200px;
  }

  .half {
    width: 100%;
    text-align: center;
  }

  .modal-vue3-content {
    width: 90% !important;
    top: 10% !important;
  }

  .text-half {
    padding: 2%
  }

  .text-half input {
    width: 75%
  }

  .text-half button {
    width: 25%;
    text-align: center;
  }

  .mobimage {
    width: 100%;
    margin-left: 0px;
  }

  .notphone {
    display: none;
    width: 0
  }

  .onphone {
    display: block
  }

  .hundred {
    width: 95% !important;
    margin: auto
  }


}



@media only screen and (max-width:600px) {
  .chatbox {
    width: 100%;
  }

  .notchat {
    width: 0%;
  }

  .css-vurnku {
    width: 110%
  }

  .avatar {
    width: 50px;
    height: 50px
  }

  .not600 {
    display: none;
  }

  .on600 {
    display: block;
  }

  .rightmenu {
    padding-right: 0
  }
}

@media only screen and (max-width:500px) {
  .css-vurnku {
    width: 140%
  }


}

@media only screen and (max-width:400px) {
  .stick {
    border-radius: 5px;
  }

  .css-vurnku {
    width: 185%
  }

  .half {
    width: 100%;
    text-align: center;
  }

  .text-half {
    padding: 2%
  }

  .text-half input {
    width: 65%
  }

  .text-half button {
    width: 35%;
  }


}

@media only screen and (max-width:300px) {
  .css-vurnku {
    width: 210%
  }


}


/* width */


::-webkit-scrollbar {
  width: 0px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.dark ::-webkit-scrollbar-track {
  background: #888;
}

/* Handle */
.dark ::-webkit-scrollbar-thumb {
  background: #f1f1f1;
}

/* Handle on hover */
.dark ::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.noscrollbar ::-webkit-scrollbar {
  background: transparent;
  display: none !important;
}


.noscrollbar ::-webkit-scrollbar-track {
  background: transparent;
  display: none !important;
}

/* Handle */
.noscrollbar ::-webkit-scrollbar-thumb {
  background: transparent;
  display: none !important;
}

/* Handle on hover */
.noscrollbar ::-webkit-scrollbar-thumb:hover {
  background: transparent;
  display: none !important;
}

.navdark {
  background-color: white;
}

.navlight {
  background-color: rgb(15, 28, 46);
  color: rgb(229, 240, 255);
}

.dark .navlight {
  background-color: white;
}

.dark .navdark {
  background-color: rgb(15, 28, 46);
  color: rgb(229, 240, 255);
}

.dark .navdark a {
  color: rgb(229, 240, 255);
}

.dark .navlight a {
  color: #052B61 !important;
}

.navlight a {
  color: rgb(229, 240, 255);
}


.navdark a {
  color: #052B61;
}

.buttongrey {
  color: rgb(5, 43, 97) !important;
}


.dark .buttongrey {
  color: rgb(226, 233, 243) !important;
}


.modal-vue3-wrap {
  z-index: 100000000000000000 !important;
  position: relative
}


@import'~bootstrap/dist/css/bootstrap.css'
</style>
