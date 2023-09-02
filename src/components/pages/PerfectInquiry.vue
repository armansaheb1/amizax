<template>
    <div>
        <div style="clear:both"></div><br>
        <div class="card navdark">
            <div class="card-header">
                <h4>استعلام ووچر پرفکت مانی</h4>
            </div>
            <br>
            <div class="card-body">
                <h5 class="alert alert-danger" v-for="error in errors" v-bind:key="error">{{ error }}</h5>
                <div>
                    <form>
                        <div class="alert alert-success">
                            {{ result }}
                        </div>
                        <div style="width: 80%; margin:auto; padding: 1%" class="card navdark">
                            <div class="input-group mb-3" style="direction:ltr ; margin:0">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">شماره ووچر</span>
                                </div>
                                <input class="form-control navdark" autocomplete="off" requiredtype="text"
                                    v-model="amount" />
                            </div>
                        </div>

                        <button class="btn buttonblue" style="margin:auto" id="submit" type="submit" variant="dark">
                            استعلام</button>
                        <br><br>
                    </form>
                </div>
            </div><br><br>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios'
import bFormSlider from 'vue-bootstrap-slider/es/form-slider';
import 'bootstrap-slider/dist/css/bootstrap-slider.css'
import './tv'
export default {
    name: 'pages-forums-list',
    metaInfo: {
        title: 'کیف ها'
    },
    updated() {
        this.getrial()
        this.tv(true)
    },
    mounted() {
        document.title = ' AMIZAX Exchange | شارژ حساب '
        this.getalert()
        this.checklevel()
        this.check()
        this.getc()
        this.getlev()
        this.getuserfee()

    },
    data: () => ({
        number: '',
        result: '',
    }),
    methods: {
        async getalert() {
            await axios
                .post('/perfect-inquiry', { number: this.number })
                .then(response => {
                    this.result = response.data
                })
        },
    },
}
</script>
<style>
.cent {
    text-align: center;
}

.btnfont {
    font-size: 12px;
    padding: 9px;
    margin: 2px;
}

.error {
    color: red
}
</style>
  