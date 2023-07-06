<template>
    <div style="padding: 2%">

        <h4 class="d-flex flex-wrap justify-content-between align-items-center pt-3 mb-4">
            <div class="col-12 col-md-3 p-0 ">
            </div>
        </h4>

        <div class="card navdark">

            <div class="card-header">
                <h4>برداشت</h4>
            </div>
            <div class="card-body">
                <br><br>
                <h5 class="alert alert-danger" v-for="error in errors" v-bind:key="error">{{ error }}</h5>

                <h5 style="float:right" v-if="currencies.amount">موجودی : <a @click="balanceset()" class="btn btn-dark"
                        style="font:12px 'UD'; padding:5px 20px">{{ parseInt(currencies.amount) }}</a> ریال </h5><br>
                <div style="clear: both"></div>
                <fieldset class="demo-vertical-spacing-sm">
                    <form action="">
                        <b-form-group label=" مبلغ">
                            <input class="form-control center" required type="number" v-model="amount"
                                placeholder=" مبلغ " />
                        </b-form-group><br>
                        <b-form-group label=" حساب بانکی ">
                            <select class="form-control center " v-model="cardnumber">
                                <option disabled selected value="">کارت بانکی را انتخاب کنید</option>
                                <option v-for="item in options" v-bind:key="item" :value="item.id">{{ item.shebac }}
                                </option>
                            </select>
                        </b-form-group>
                        <br>
                        <router-link class="btn btn-success" style="float:left" to="/addcard">اضافه کردن
                            حساب</router-link><br><br>
                        <button class="btn buttonblue" @click="submit()" variant="dark" style="float:left">ثبت
                            درخواست</button>
                    </form>
                </fieldset>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios'
export default {
    name: 'pages-forums-list',
    metaInfo: {
        title: 'کیف ها'
    },
    mounted() {
        this.getw()
        this.geta()
        this.checklevel()
    },
    data: () => ({
        value: '',
        size: 200,
        currencies: {},
        amount: 0,
        cardnumber: '',
        options: [],
        wallets: []
    }),
    forumPath: [
        { text: 'کیف ها', active: true }
    ],
    methods: {
        balanceset() {
            this.amount = parseFloat(this.currencies.amount)
        },
        async checklevel(id) {
            await axios
                .get('/userinfo')
                .then(response => {
                    if (response.data.level === 0) {
                        this.$swal.fire({
                            title: 'توجه',
                            text: 'برای استفاده از این بخش ابتدا احراز هویت را کامل کنید',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'شروع تایید هویت',
                            cancelButtonText: 'بعدا انجام میدهم'
                        }).then(result => {
                            if (result.isConfirmed) {
                                const toPath = this.$route.query.to || '/user-level'
                                this.$router.push(toPath)
                            } else {
                                const toPath = this.$route.query.to || '/dashboard'
                                this.$router.push(toPath)
                            }
                        })
                    }
                })
        },
        async getc() {
            const id = this.$route.params.id
            await axios
                .get(`/currencies/1`)
                .then(response => {
                    this.currencies = response.data[0]
                    this.currencies.amount = 0
                    this.currencies.amount = this.wallets[0].amount
                })
        },
        async geta() {
            var itemm
            await axios
                .get('/bankaccounts')
                .then(response => {
                    for (itemm of response.data) {
                        this.options = response.data
                    }
                })
        },
        async getw() {
            const id = this.$route.params.id
            await axios
                .get(`/wallet/1`)
                .then(response => {
                    this.wallets = response.data
                }).then(() => {
                    this.getc()
                })
        },
        async submit() {
            await axios
                .post(`/withdraw`, { amount: parseInt(this.amount), bankaccount: this.cardnumber })
                .then(response => {
                    this.wallets = response.data
                }).then(() => {
                    this.$swal('<div class="swal2-header"><ul class="swal2-progress-steps" style="display: none;"></ul><div class="swal2-icon swal2-success swal2-icon-show" style="display: flex;"><div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div><span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span><div class="swal2-success-ring"></div> <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div><div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div></div><img class="swal2-image" style="display: none;"><button type="button" class="swal2-close" aria-label="Close this dialog" style="display: none;">×</button></div>' + '<h5>درخواست برداشت ریالی شما با موفقیت ثبت شد</h5>')
                    this.getw()
                }).catch(error => {
                })
        },
    }
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

.wallets:hover {
    background: #efefff;
}

.qr {
    width: 20%;
    margin-right: 40%;
    margin-top: 20px;
}

.address {
    margin: auto;
    text-align: center;
    margin-top: 10px;
    height: 65px;
    padding: 0;
}

.address h3 {
    padding: 14px;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    height: 100%;
}

.addressbtn {
    float: left;
    height: 100%;
}

.address h3::-webkit-scrollbar {
    width: 1px;
}

.address h3::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    width: 3px;
    border-radius: 1px;
}

.address h3::-webkit-scrollbar-thumb {
    border-radius: 1px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    width: 3px;
}

.cent {
    margin: auto;
    text-align: center;
}
</style>
  