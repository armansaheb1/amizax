<template>
  <div style=" overflow: hidden;width: 100%; position: relative; top: -5px; height: 100%">
    <div style="height: 120px;width: 100%">
      <div class="avatar" style="float: right; ">
        <img src="/person.png"
          style="width: 70%; height: 70%; margin: 10%; float: right;padding: 0; border: solid 1px rgba(150,150,150, .5); border-radius: 50%;"
          alt="">
      </div>
      <div class="userbar" style="float: right; height: 100px; padding: 2%">
        <h6 class="lightertext" style="float: right;text-align: right;width: 100%">{{ user.email }}</h6>
        <h6 class="lightertext" style="float: right;text-align: right;width: 120px">
          <p class="normaltext" style="margin-bottom: 8px;">شناسه کاربر</p>
          {{ user.id }}
        </h6>
        <h6 class="lightertext notphone" style="float: right;text-align: right;width: 100px">
          <p class="normaltext" style="margin-bottom: 8px;">سطح کاربر</p>
          {{ user.level }}
        </h6>
      </div>
    </div>
    <div style="clear: both"></div>

    <div style="width: 100%;padding: 2%; " class="navdark">
      <div v-if="user.level === 5"
        style="text-align: right;width: 100%; border-radius: 10px; background-color: rgba(150,150,150, .3);padding: 4%">
        <b style="text-align: right!important;width: 100% ; font-size: 18px">تایید هویت را انجام دهید</b><br>
        <p>برای استفاده از تمامی امکانات حساب کاربری خود را تایید کنید</p>
        <br><br>

        <button class="buttonblue form-control">تایید حساب</button>
      </div>
      <br><br>

      <h5 style="text-align: right">دارایی حدودی</h5><br>
      <h2 style="text-align: right;text-decoration: dotted;">0.00 USDT

      </h2>

    </div>

  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      user: [],
    }
  },
  methods: {
    async getUSer() {
      await axios
        .get('userinfo')
        .then(response => response.data)
        .then(response => {
          this.user = response
          console.log(response)
        })
    },

  },
  created() {
    this.getUSer()


  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.svgs {
  fill: currentColor
}

.positive {
  background: #E5FAF3;
  text-decoration: none !important
}

.dark .positive {
  background: rgb(33, 34, 52);
  text-decoration: none !important
}

.negative {
  background: #FFEBEE;
  text-decoration: none !important
}

.dark .negative {
  background: rgb(22, 42, 56);
  text-decoration: none !important
}

.dark .h1 {
  color: rgb(229, 240, 255)
}
</style>