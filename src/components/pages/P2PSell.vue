<template>
    <div style="padding: 2%">
        <div class="card darkalert" v-if="alert">
            <div class="card-body" style="text-align: right;">
                <h5 class="lightertext">{{ alert.title }}</h5><br>
                <p class="normaltext" style="font-size: 14px">{{ alert.text }}</p>
            </div>
        </div><br>

        <div class="card navdark">

            <div class="card-header">
                <h4 class="lightertext"> فروش کاربر به کاربر</h4>
            </div>
            <div class="card-body" style="padding: 7%;">
                <h5 class="alert alert-danger" v-for="error in errors" v-bind:key="error">{{ error }}</h5>

                <div style="clear: both"></div>
                <fieldset class="demo-vertical-spacing-sm">
                    <form v-if="process == 0" @submit.prevent="process = 1" style="text-align: right;">
                        <label class="lightertext">ارزی که میفروشید</label>
                        <button class=" curbtn" onMouseOver="this.style.background='rgba(150, 150, 150, 0.4)'"
                            onMouseOut="this.style.background='rgba(0,0,0,0)'" type="button"
                            style="border-radius: 5px;width: 100%;margin: auto;height:55px; background: none ;border-style: none; border-bottom: solid .2px rgba(150,150,150, .3) !important ;border-shadow:none margin:0 ; font: 13px 'UD'!important"
                            @click="listshow()" selected>
                            <img style="width:32px;height:32px; margin-bottom: 5px" :src="`/color/${sym.toLowerCase()}.svg`
                                " :onerror="`javascript:this.src='/color/${sym.toLowerCase()}.png';`" alt=""><br>{{ sym
    }}
                        </button>


                        <div class="list card navdark" hidden>
                            <div class=" navdark" style="height:245px">
                                <div class=" navdark card-body"
                                    style="position: absolute; width: 100%; background:rgba(200, 200, 200, .3); ;z-index: 100; margin: auto;overflow-y:scroll;height:245px">
                                    <input @input="search()" type="text" class="form-control navdark list"
                                        placeholder="نام ارز" v-model="searchtxt"
                                        style="width: 95%;margin: auto;border-radius: 5px ; border-color:#999!important; border: 0.2px solid rgba(150, 150, 150, 0.3) !important;text-align: center!important;margin: 2.5%">
                                    <div style="width: 100%;margin: auto; overflow-x:hidden  ;  border-radius: 0 0 5px 5px; font-size: 13px!important"
                                        id="my-list-id">
                                        <button v-if="'USDT'.includes(searchtxt.toUpperCase())" class=" "
                                            onMouseOver="this.style.background='rgba(150, 150, 150, 0.4)'"
                                            onMouseOut="this.style.background='rgba(0,0,0,0)'" type="button"
                                            style="height:55px; width: 100% ;color: black; background: none ;border-style: none; border-bottom: solid .2px rgba(150,150,150, .3) !important ;border-shadow:none margin:0 ; font: 13px 'UD'!important"
                                            @click="buttonchange('USDT')" selected><img
                                                style="width:32px;height:32px; margin-bottom: 5px" :src="`/color/usdt.svg`"
                                                :onerror="`javascript:this.src='/color/usdt.png';`" alt=""><br>USDT
                                        </button>
                                        <button class=" " onMouseOver="this.style.background='rgba(150, 150, 150, 0.4)'"
                                            onMouseOut="this.style.background='rgba(0,0,0,0)'"
                                            v-for="( value, key ) in  leverage " v-bind:key="'n' + key" :id="key"
                                            type="button"
                                            style="height:55px; width: 100% ;color: black; background: none ;border-style: none; border-bottom: solid .2px rgba(150,150,150, .3) !important ;border-shadow:none margin:0 ; font: 13px 'UD'!important"
                                            @click="buttonchange(key.replace('USDT', ''))" selected><img
                                                style="width:32px;height:32px; margin-bottom: 5px" :src="`/color/${key
                                                    .replace('USDT', '')
                                                    .toLowerCase()}.svg`
                                                    " :onerror="`javascript:this.src='/color/${key
        .replace('USDT', '')
        .toLowerCase()}.png';`
        " alt=""><br>{{ key.replace('USDT', '') }} </button>
                                    </div>
                                    <br><br>
                                </div>
                            </div>
                        </div>
                        <br><br>

                        <div style="width: 48%; margin: auto; float: right;">
                            <label class="lightertext">مقدار
                                موجودی شما برای فروش</label>
                            <input :style="[balance_error ? { 'border-color': 'red!important' } : {}]" min="0.000001"
                                step="0.000001" class="form-control bg center lightertext" required type="number"
                                v-model="balance" placeholder=" " /><br>
                            <p style="color: red;font-size: 9px ;margin-top: -20px;">{{ balance_error }}</p>
                        </div>
                        <div style="width: 48%; margin: auto; float: left;">
                            <label class="lightertext">حداقل
                                مقدار قابل فروش</label>
                            <input :style="[min_amount_error ? { 'border-color': 'red!important' } : {}]" min="0.000001"
                                step="0.000001" class="form-control bg center lightertext" required type="number"
                                v-model="minimum_amount" placeholder="  " /><br>
                            <p style="color: red;font-size: 9px ;margin-top: -20px;">{{ min_amount_error }}</p>
                        </div><br>
                        <div style="clear: both;"></div><br>
                        <p class="lightertext">

                            لطفا شبکه مورد نظر را انتخاب کنید:</p>
                        <p class="normaltext">
                            در صورتیکه ارز خود را به فرمت شبکه اشتباهی ارسال کنید امکان بازیابی آن به هیچ عنوان وجود ندارد.
                        </p>
                        <div>

                            <br>
                            <div :style="[chain_error ? { 'border': 'solid red 1px !important' } : {}]"
                                class="btn-group btn-group-toggle" data-toggle="buttons" style="float:left">
                                <label @click="chain_error = ''" v-for="item in chains" v-bind:key="item"
                                    class="btn btn-primary" style="width: 80px"
                                    :class="[chain === `${item.chain}` ? 'active' : '']">
                                    <input @click="currency = item.id" required v-model="chain" :value="item.chain" hidden
                                        type="radio" name="options" autocomplete="off"> {{ item.chain }}
                                </label>

                            </div>
                            <div style="clear:both"></div><br>
                            <p style="color: red;font-size: 9px ;margin-top: -20px;float: left;">{{ chain_error }}</p>
                        </div>




                        <div style="clear: both;"></div><br>
                        <p class="lightertext"><a style="color: red">توجه: </a> هرچه زمان انتقال ارز را کمتر انتخاب کنید
                            پیشنهادات
                            بیشتری دریافت خواهید کرد. بنابراین، در
                            انتخاب حداکثر زمان مورد نیاز جهت انتقال ارز دقت کنید. اگر نتوانید پس از قبول درخواست خریدار
                            در
                            زمانی که مشخص کرده‌اید ارز را انتقال دهید امتیاز منفی خواهید گرفت و طبق قوانین سایت، جریمه
                            خواهید شد.</p>
                        <br><br>
                        <div style="width: 48%; margin: auto">
                            <label class="lightertext">حداکثر زمان جهت انتقال ارز</label>
                            <select v-model="maximum_time" required class="form-control bg lightertext"
                                style="text-align: center;" name="" id="">
                                <option value="15">15 دقیقه</option>
                                <option value="30">30 دقیقه</option>
                                <option value="45">45 دقیقه</option>
                                <option value="60">60 دقیقه</option>
                            </select>
                        </div><br><br>
                        <button @click="checkchain()" class="btn btn-primary" variant="dark"
                            style="margin: auto; width: 20%; margin-right: 40%">ادامه</button>
                    </form>

                    <form v-if="process == 1" @submit.prevent="process = 1" style="text-align: center;">


                        <p style="font-size: 14px;text-align: right"><a style="color: red">توجه: </a> لطفا قیمت یک
                            واحد از
                            ارزی که ثبت کرده
                            اید را مشخص کنید، نه قیمت
                            موجودی را. مثال: اگر قصد فروش ۰.۱ بیت کوین را دارید شما باید قیمت پیشنهادی خود را بر مبنای یک
                            واحد بیت کوین مشخص کنید.</p>


                        <div style="clear: both;"></div><br>

                        <div style="width: 90%; margin : auto; ">
                            <button disabled class="normaltext alert alert-secondary form-control"
                                style="margin: 10px; padding: 25px 15px ;background: rgba(200,200,200, .1)" variant="dark">
                                <h5 style="float: right">
                                    قیمت پیشنهادی آمیزاکس برای ۱ واحد
                                </h5>
                                <h5 class="lightertext" style="float: left">
                                    {{ world_price }} تومان
                                </h5>
                            </button>
                        </div><br><br>

                        <div :style="[chain_error ? { 'border': 'solid red 1px !important' } : {}]"
                            class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-primary" :class="[price_type === `auto` ? 'active' : '']">
                                <input required v-model="price_type" :value="'auto'" hidden type="radio" name="options"
                                    autocomplete="off"> قیمت پیشنهادی آمیزاکس
                            </label>
                            <label class="btn btn-primary" :class="[price_type === `custom` ? 'active' : '']">
                                <input required v-model="price_type" :value="'custom'" hidden type="radio" name="options"
                                    autocomplete="off"> قیمت پیشنهادی شما
                            </label>

                        </div><br><br><br>

                        <div style="clear: both;"></div>

                        <div style="width: 90%; margin : auto; ">
                            <button disabled class="normaltext alert alert-secondary form-control"
                                style="margin: 10px; padding: 25px 15px ;background: rgba(200,200,200, .1)" variant="dark">
                                <h5 style="float: right">
                                    مجموع ارزش موجودی
                                </h5>
                                <h5 class="lightertext" style="float: left">
                                    <a v-if="myprice">
                                        {{ myprice * balance }}
                                    </a>
                                    <a v-else>
                                        {{ world_price * balance }}
                                    </a>
                                </h5>
                                <div style="clear: both;"></div>
                                <br>
                                <div v-if="price_type === 'custom'">
                                    <h5 style="float: right">
                                        قیمت پیشنهادی شما
                                    </h5>
                                    <h5 class="lightertext" style="float: left">
                                        <a v-if="myprice">
                                            {{ myprice }}
                                        </a>
                                        <a v-else>
                                            {{ world_price }}
                                        </a>
                                    </h5>
                                    <div style="clear: both;"></div>
                                    <br><br>

                                    <div style="width: 50%; margin: auto;">
                                        <label for="" style="float: right;">قیمت پیشنهادی شما</label>
                                        <input v-model="myprice" class="form-control" type="text">
                                    </div>

                                    <br>
                                    <label type="number" step="any" v-if="parseFloat(world_price) > parseFloat(myprice)">
                                        قیمت پیشنهادی شما
                                        <a style="color:red">
                                            {{ ((parseFloat(world_price) - parseFloat(myprice)) /
                                                parseFloat(world_price) * 100).toFixed(2) }}</a>
                                        درصد از قیمت جهانی <a style="color:red">کمتر</a>
                                        است</label>
                                    <label v-if="parseFloat(world_price) < parseFloat(myprice)"> قیمت پیشنهادی شما

                                        <a style="color:green">{{ (
                                            (myprice * 100 / world_price) - 100).toFixed(2) }}</a>
                                        درصد از
                                        قیمت جهانی <a style="color:green">بیشتر</a>
                                        است</label>
                                </div>
                            </button>

                        </div><br><br>
                        <hr>
                        <div v-if="price_type !== 'auto'">
                            <p style="text-align: right;float: right;font-size: 14px">آیا مایلید قیمت پیشنهادی شما نسبت به
                                نوسانات جهانی تغییر
                                کند؟</p>

                            <div :style="[chain_error ? { 'border': 'solid red 1px !important' } : {}]"
                                class="btn-group btn-group-toggle" data-toggle="buttons" style="float: left;">
                                <label class="btn btn-primary" :class="[change_world ? 'active' : '']">
                                    <input required v-model="change_world" :value="true" hidden type="radio" name="options"
                                        autocomplete="off">بله
                                </label>
                                <label class="btn btn-primary" :class="[!change_world ? 'active' : '']">
                                    <input required v-model="change_world" :value="false" hidden type="radio" name="options"
                                        autocomplete="off">خیر
                                </label>

                            </div>
                            <div style="clear: both;"></div><br>
                        </div>
                        <div>
                            <hr>
                            <p style="text-align: right;float: right;font-size: 14px">آیا آیا مایلید برای پیشنهاد فروش خود
                                محدودیت تعیین کنید؟
                            </p>

                            <p style="text-align: right;float: right;font-size: 12px ; width: 75%;">با تعیین محدودیت، اگر
                                قیمت
                                جهانی ارز از
                                میزان حداقل یا
                                حداکثری که انتخاب می‌کنید فراتر برود، فروش شما به‌صورت موقت از لیست پیشنهادات حذف خواهد شد.
                            </p>

                            <div :style="[chain_error ? { 'border': 'solid red 1px !important' } : {}]"
                                class="btn-group btn-group-toggle" data-toggle="buttons" style="float: left;">
                                <label class="btn btn-primary" :class="[limit_world ? 'active' : '']">
                                    <input required v-model="limit_world" :value="true" hidden type="radio" name="options"
                                        autocomplete="off">بله
                                </label>
                                <label class="btn btn-primary" :class="[!limit_world ? 'active' : '']">
                                    <input required v-model="limit_world" :value="false" hidden type="radio" name="options"
                                        autocomplete="off">خیر
                                </label>

                            </div><br><br>
                            <div v-if="limit_world" style="width: 40%; float: left; text-align: right;">
                                <label for="">حداقل قیمت</label>
                                <input v-model="limit_min" step="any" type="number" class="form-control bg">
                                <label for="">حداکثر قیمت</label>
                                <input v-model="limit_max" step="any" type="number" class="form-control bg" name="" id="">
                            </div>
                        </div>

                        <div style="clear: both;"></div><br><br>
                        <button @click="process = 0" class="btn btn-outline-danger" style="margin: 10px"
                            variant="dark">بازگشت</button>
                        <button @click="submit()" class="btn btn-primary" style=" margin: 10px " variant="dark">ثبت
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
        this.checklevel()
        this.getlev()
        this.getalert()
        this.get_chains()
        this.getprice()
    },
    data: () => ({
        value: '',
        min_amount_error: '',
        sym: 'USDT',
        searchtxt: '',
        leverage: [],
        alert: '',
        price: 0,
        myprice: 0,
        world_price: 0,
        p: 0,
        rialprice: 0,
        maximum_time: 15,
        balance: '',
        minimum_amount: '',
        process: 0,
        chain: '',
        chains: [],
        currency: '',
        chain_error: '',
        price_type: 'auto',
        change_world: false,
        limit_world: false,
        limit_min: '',
        limit_max: ''
    }),
    forumPath: [
        { text: 'کیف ها', active: true }
    ],

    methods: {
        async getprice() {
            await axios
                .post('/cp_ticker', { sym: this.sym })
                .then(response => {
                    this.world_price = response.data.rial.toFixed(4)
                    this.price = response.data.rial.toFixed(4)
                })
        },
        checkchain() {
            if (this.chain === '') {
                this.chain_error = 'انتخاب شبکه الزامیست'
            } else {
                this.chain_error = ''
            }
            if (this.balance === '') { this.balance_error = 'مقدار موجودی فروش نمیتواند خالی باشد' }
            else { this.balance_error = '' }

            if (this.minimum_amount === '') { this.min_amount_error = 'مقدار قابل فروش نمیتواند خالی باشد' }
            else { this.min_amount_error = '' }
        },
        async getalert() {
            await axios
                .post('/alert', { page: 'p2psell' })
                .then(response => {
                    this.alert = response.data
                })
        },
        buttonchange(key) {
            this.chain_error = ''
            this.chain = ''
            this.chains = []
            this.searchtxt = ''
            document.querySelector('.list').hidden = true
            this.sym = key
            this.get_chains()
        },
        async getlev() {
            await axios
                .get('/cp_wallets2')
                .then(response => {
                    this.leverage = response.data
                    this.leverageback = response.data
                    this.leverage2 = response.data
                    this.leverageback2 = response.data
                    this.search()
                })
        },
        async get_chains() {
            await axios
                .post('/chains', { brand: this.sym })
                .then(response => response.data)
                .then(response => {
                    this.chains = response
                    if (response.length === 1) {
                        this.chain = response[0].chain
                    }
                })
        },
        search() {
            if (this.searchtxt) {
                document.querySelector('.list').hidden = false
            }
            this.leverage = {}
            for (const [key, value] of Object.entries(this.leverageback)) {
                if (key !== this.sym2) {
                    if (key.includes(this.searchtxt.toUpperCase())) {
                        this.leverage[key] = value
                    }
                }
            }
        },
        listshow() {
            document.querySelector('.list').hidden = false
            this.amount = 0
            this.getting = 0
            this.rial = 0
            this.price = []
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
        async submit() {
            var price = this.price
            if (!this.myprice) {
                price = this.myprice
            }
            await axios
                .post(`/p2prequests`, {
                    "currency": this.currency,
                    "price": price,
                    "balance": this.balance,
                    "minimum_amount": this.minimum_amount,
                    "maximum_time": this.maximum_time,
                    "chain": this.chain,
                    "limit_world": this.limit_world,
                    "limit_min": this.limit_min,
                    "limit_max": this.limit_max,
                    "change_world": this.change_world
                })
                .then(response => {
                    this.wallets = response.data
                }).then(() => {
                    this.$swal('<div class="swal2-header"><ul class="swal2-progress-steps" style="display: none;"></ul><div class="swal2-icon swal2-success swal2-icon-show" style="display: flex;"><div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div><span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span><div class="swal2-success-ring"></div> <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div><div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div></div><img class="swal2-image" style="display: none;"><button type="button" class="swal2-close" aria-label="Close this dialog" style="display: none;">×</button></div>' + '<h5>درخواست برداشت ریالی شما با موفقیت ثبت شد</h5>')
                    this.getw()
                }).catch(error => {
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
  