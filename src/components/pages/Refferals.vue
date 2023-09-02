<template>
  <div style="padding: 2%;text-align: right;">
    <div class="card navdark">
      <div class="card-header">
        <h3>لینک دعوت دوستان</h3>
      </div>
      <div style="direction:rtl" class="input-group mb-3 card-body">
        <div class="input-group-prepend">
          <button class="btn btn-outline-warning" type="button">copy</button>
        </div>
        <input style="text-align:center" :value="referalid" type="text" class="form-control" placeholder="" aria-label=""
          aria-describedby="basic-addon1">
      </div>
    </div><br><br>
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
      referalid: [],
    }
  },
  methods: {
    async getUSer() {
      await axios
        .get('userinfo')
        .then(response => response.data)
        .then(response => {
          this.referalid = response.get_referal
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