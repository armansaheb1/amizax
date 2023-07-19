<template>
    <div style="padding: 2%">
        <div class="card darkalert" v-if="alert">
            <div class="card-body" style="text-align: right;">
                <h5 class="lightertext">{{ alert.title }}</h5><br>
                <p class="normaltext" style="font-size: 14px">{{ alert.text }}</p>
            </div>
        </div>

        <div class="card navdark">

            <div class="card-body" style="padding: 3%;">
                <table style="width: 100%; direction: rtl;">
                    <tr v-if="request" style="">
                        <td style="font-size: 8px; width: 5%;text-align: center;">
                            <img class="" :src="`/color/${request.currency_name.toLowerCase()}.svg`"
                                :onerror="`javascript:this.src='/color/${request.currency_name.toLowerCase()}.png';`"
                                style="height: 30px" alt="">

                        </td>
                        <td style="font-size: 8px; text-align: right;;padding-right: 15px">
                            <h6 style="font-size: 12px" class="normaltext"> حداقل فروش </h6>

                        </td>
                        <td style="font-size: 8px; text-align: left;">
                            <h6 style="font-size: 12px">4 USDT</h6>

                        </td>
                        <td style="font-size: 8px; text-align: right;;padding-right: 15px">
                            <h6 style="font-size: 12px" class="normaltext">قیمت واحد </h6>

                        </td>
                        <td style="font-size: 8px; text-align: left;">
                            <h6 style="font-size: 12px">65,513 <a class="notphone">تومان</a></h6>

                        </td>
                    </tr>
                    <tr v-if="request" style="">
                        <td style="font-size: 10px; width: 5%;text-align: center;">

                            {{ request.get_user }}
                        </td>
                        <td style="font-size: 8px;text-align: right;;padding-right: 15px">
                            <h6 style="font-size: 12px" class="normaltext">موجودی </h6>

                        </td>
                        <td style="font-size: 8px; text-align: left;">
                            <h6 style="font-size: 12px">747 USDT</h6>

                        </td>
                        <td style="font-size: 8px; text-align: right;padding-right: 15px;">
                            <h6 style="font-size: 12px" class="normaltext">نوع شبکه </h6>

                        </td>
                        <td style="font-size: 8px; text-align: left;">
                            <h6 style="font-size: 12px">BEP20</h6>

                        </td>
                    </tr>
                    <tr>
                        <th style="width: 100%;text-align: center;" colspan="6">
                            <hr style="margin: 5px">
                            حداکثر زمان انتقال
                            15 دقیقه
                        </th>
                    </tr>


                </table>
                <hr style="margin: 5px">
                <step-progress style="font-size: 20px!important;direction: rtl;" size="small" :steps="mySteps"
                    :current-step="currentStep" active-color="#333399" passive-color="grey" active-thickness="2"
                    passive-thickness="2" line-thickness="2" icon-class="fa fa-check"></step-progress>

            </div>
        </div><br>

        <div class="card navdark">

            <div class="card-body" style="padding: 5%;">
                <div style="width: 30%; margin: auto; text-align: right;">
                    <label for="">مقدار ارز درخواستی</label>
                    <input v-model="amount" type="text" class="form-control bg">
                </div><br><br>

                <div style="width: 100%; margin: auto; text-align: right; margin-top: 50px">
                    <div class="step-progress__wrapper-before"
                        style="background-color: grey; height: 2px;width: 80%; margin-left: 10%; ; margin-top: 15px"></div>
                    <div style=";width: 33.3%; float: right ">
                        <div style="width: 90%;margin-right: 7.5%;position: relative;; float: left ;top: -70px;text-align: center;"
                            class="navdark">
                            <label for=""
                                style="width: 100%;font-size: 12px;position: relative;  text-align: center;padding: 0px">قیمت
                                ارز</label>
                            <label for="" class="normaltext"
                                style="width: 100%;font-size: 12px;position: relative;  text-align: center;padding: 0px; margin-top: 10px">
                                2,527,500
                            </label>
                        </div>
                    </div>
                    <div style=";width: 33.3%; float: right ">
                        <div style="width: 90%;margin-right: 7.5%;position: relative;; float: left ;top: -70px;text-align: center;"
                            class="navdark">
                            <label for=""
                                style="width: 100%;font-size: 12px;position: relative;  text-align: center;padding: 0px">کمیسیون</label>
                            <label for="" class="normaltext"
                                style="width: 100%;font-size: 12px;position: relative;  text-align: center;padding: 0px; margin-top: 10px">12,638</label>
                        </div>
                    </div>
                    <div style=";width: 33.3%; float: left ">
                        <div style="width: 90%;margin-right: 7.5%;position: relative; float: right ;top: -70px;text-align: center;"
                            class="navdark">
                            <label for=""
                                style="width: 100%;font-size: 12px;position: relative;  text-align: center;padding: 0px">قابل
                                پرداخت</label>
                            <label for="" class="normaltext"
                                style="width: 100%;font-size: 12px;position: relative;  text-align: center;padding: 0px; margin-top: 10px">2,540,138</label>
                        </div>
                    </div>
                </div><br><br>
                <button @click="submit()" class="btn buttonblue">ثبت‌ درخواست</button>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios'
import StepProgress from 'vue-step-progress';

export default {
    name: 'pages-forums-list',
    metaInfo: {
        title: 'کیف ها'
    },
    mounted() {
        this.checklevel()
        this.get_request()
    },
    components: {
        'step-progress': StepProgress
    },
    data: () => ({
        mySteps: ['درخواست خرید', 'پرداخت امن', 'انتقال ارز دیجیتال', 'تایید نهایی'],
        currentStep: 0,
        value: '',
        min_amount_error: '',
        sym: 'USDT',
        alert: '',
        maximum_time: 15,
        balance: '',
        minimum_amount: '',
        process: 0,
        chain: '',
        chains: [],
        chain_error: '',
        price_type: 'auto',
        change_world: false,
        limit_world: false,
        request: ''
    }),
    forumPath: [
        { text: 'کیف ها', active: true }
    ],

    methods: {
        async getalert() {
            await axios
                .post('/alert', { page: 'p2psell' })
                .then(response => {
                    this.alert = response.data
                })
        },
        async get_request() {
            if (this.$route.params.id) {
                await axios
                    .post(`/p2pmyorders/${this.$route.params.id}`)
                    .then(response => response.data)
                    .then(response => {
                        this.request = response
                        this.currentStep = response.status
                    })
            }
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
                                const toPath = this.$route.query.to || '/'
                                this.$router.push(toPath)
                            }
                        })
                    }
                })
        },
        async submit() {
            await axios
                .post(`/p2pbuy/${this.$route.params.id}`, { amount: this.amount })
                .then(response => response.data)
                .then(response => {
                    this.$router.push(`/p2p/buypage/${response}`)
                })
        },
    },
    watch: {
        minimum_amount: {
            handler: function () {
                if (this.minimum_amount === 0) { this.min_amount_error = 'مقدار قابل فروش نمیتواند 0 باشد' }
                else {
                    if (this.minimum_amount > this.balance) { this.min_amount_error = 'حداقل مقدار قابل فروش نمیتواند از موجودی بیشتر باشد' }
                    else { this.min_amount_error = '' }
                }
            },
            deep: true
        },
        balance: {
            handler: function () {
                if (this.balance === 0) { this.balance_error = 'مقدار موجودی فروش نمیتواند 0 باشد' }
                else { this.balance_error = '' }
                if (this.minimum_amount > this.balance) { this.min_amount_error = 'حداقل مقدار قابل فروش نمیتواند از موجودی بیشتر باشد' }
                else { this.min_amount_error = '' }
            },
            deep: true
        },

    }
}

</script>
<style>
.cent {
    text-align: center;
}

label {
    font-size: 14px;
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
    width: 0px;
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

.step-progress__wrapper {
    margin: 0 auto;
    position: relative;
    width: 90%
}

.step-progress__wrapper-before {
    background-color: gray;
    transform: translateY(-50%) perspective(1000px)
}

.step-progress__wrapper-after,
.step-progress__wrapper-before {
    content: "";
    height: 12px;
    left: 0;
    position: absolute;
    top: 50%;
    width: 100%
}

.step-progress__wrapper-after {
    background-color: red;
    transform: scaleX(0) translateY(-50%) perspective(1000px);
    transform-origin: left center;
    transition: transform .5s ease
}

.step-progress__bar {
    align-items: center;
    display: flex;
    height: 100px;
    justify-content: space-between;
    margin-bottom: 40px;
    width: 100%;
    direction: ltr;
}

.step-progress__step {
    --activeColor: red;
    --passiveColor: gray;
    --activeBorder: 5px;
    --passiveBorder: 5px;
    position: relative;
    z-index: 2
}

.step-progress__step span {
    color: var(--passiveColor);
    display: block;
    font-size: 18px;
    font-weight: 900;
    opacity: 1;
    text-align: center;
    transform: translateZ(0) scale(1) perspective(1000px);
    transition: .3s ease
}

@media(max-width:767px) {
    .step-progress__step span {
        font-size: 22px
    }
}

.step-progress__step--active .step-progress__step-label,
.step-progress__step--active span {
    color: var(--activeColor)
}

.step-progress__step--active .step-progress__step-icon {
    opacity: 1
}

.step-progress__step--valid .step-progress__step-icon {
    opacity: 1;
    transform: translate3d(-50%, -50%, 0) scale(1) perspective(1000px)
}

.step-progress__step--valid span {
    color: var(--activeColor);
    opacity: 0;
    transform: translateZ(0) scale(2) perspective(1000px)
}

.step-progress__step--valid .step-progress__step-label {
    color: var(--activeColor)
}

.step-progress__step:after {
    background-color: #fff;
    border: var(--passiveBorder) solid var(--passiveColor);
    border-radius: 50%;
    content: "";
    height: 35px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) perspective(1000px);
    transition: .3s ease;
    width: 35px;
    z-index: -1
}

@media(max-width:767px) {
    .step-progress__step:after {
        height: 40px;
        width: 40px
    }
}

.step-progress__step--active:after,
.step-progress__step--valid:after {
    border: var(--activeBorder) solid var(--activeColor)
}

.step-progress__step--valid:after {
    background-color: var(--activeColor)
}

.step-progress__step-label {
    color: gray;
    font-size: 10px;
    font-weight: 600;
    left: 50%;
    position: absolute;
    top: calc(100% + 25px);
    transform: translateX(-50%) perspective(1000px);
    transition: .3s ease;
    white-space: nowrap
}

.step-progress__step-icon {
    color: #fff;
    font-size: 30px;
    left: 50%;
    opacity: 0;
    font-size: 20px;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%, -50%, 0) scale(0) perspective(1000px);
    transition: transform .3s ease
}

@media(max-width:767px) {
    .step-progress__step-icon {
        font-size: 22px
    }
}

/*# sourceMappingURL=main.css.map*/
</style>
  