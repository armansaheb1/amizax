<template>
    <div style="padding: 2%;">

        <h4 class="d-flex flex-wrap justify-content-between align-items-center pt-3 mb-4">
        </h4>

        <div class="navdark card">
            <div class="card-header">
                <h4>واریز ریالی</h4>
            </div>
            <div class="card-body">
                <h5 class="alert alert-danger" v-for="error in errors" v-bind:key="error">{{ error }}</h5>
                <form id="form" @submit.prevent="submited()">
                    <b-form-group label="">
                        <input class="form-control" required style="width:80%;float:left; text-align: center"
                            v-model="amount" placeholder="" /><label style="width:20%">مبلغ</label>
                    </b-form-group>
                    <br><br>
                    <div style="clear:both"></div>
                    <b-form-group>
                        <label style="width:20%">کارت بانکی</label>
                        <select required name="card" style="float:left;width:80%; text-align: center;" plain
                            v-model="cardnumber" class="form-control">
                            <option disabled selected value="">کارت بانکی را انتخاب کنید</option>
                            <option v-for="item in options" v-bind:key="item"
                                :value="item.replace('-', '').replace('-', '').replace('-', '')">{{ item }}</option>
                        </select>
                        <div style="clear:both"></div>
                    </b-form-group><br>
                    <a href="/addcard" style="float:left;color: white" class="btn btn-success">اضافه کردن کارت
                        بانکی</a>
                    <div style="clear:both"></div><br>
                    <button class="btn buttonblue" type="submit" style="float:left" variant="dark">انتقال به درگاه
                        بانک</button>
                </form>
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
        document.title = ' AMIZAX Exchange | شارژ حساب '
        this.checklevel()
        this.check()
        this.getc()
        this.alert()
    },
    data: () => ({
        options: [],
        amount: 0.0,
        cardnumber: '',
        errors: []
    }),
    methods: {
        async checklevel() {
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
        check() {
            if (!this.$store.state.isAuthenticated) {
                const toPath = this.$route.query.to || '/login'
                this.$router.push(toPath)
            }
        },
        alert() {
            this.$swal.fire({
                title: 'توجه',
                text: "کاربر گرامی توجه داشته باشید در صورتی که واریز شما با کارتی غیر از کارت انتخاب شده باشد مبلغ بلوکه شده و نهایتا پس از ۷۲ ساعت به حساب باز میگردد",
                icon: 'warning',
            })
        },
        async getc() {
            var itemm
            await axios
                .get('/bankcards')
                .then(response => {
                    for (itemm of response.data) {
                        var no = String(itemm.number)
                        var result = no.slice(0, 4) + '-' + no.slice(4, 8) + '-' + no.slice(8, 12) + '-' + no.slice(12, 16)
                        this.options.push(result)
                    }
                })
        },
        async submited() {
            if (this.amount && this.cardnumber) {
                await axios
                    .post('/request/', { amount: parseInt(this.amount), card: parseInt(this.cardnumber) })
                    .then(response => {
                        this.link = response.data
                        let a = document.createElement("a");
                        document.body.appendChild(a);
                        a.style = "display: none";
                        a.href = this.link;
                        a.click();
                    })
            }
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

.error {
    color: red
}
</style>
  