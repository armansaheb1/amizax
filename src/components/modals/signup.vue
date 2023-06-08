<template>
    <div>

        <!-- Header -->
        <div class="container login" style="overflow: hidden;">
            <div no-body class="card">
                <div class="bg-transparent card-header" style="border-style:none; padding: 0"><br>
                    <img src="/img/logo.png" style="width:10%;margin-left:45%;margin-right:40%; clear:both" alt="">
                </div>
                <div class="card-body" style="text-align: right!important;padding: 5%">
                    <ul class="nav nav-tabs" style="direction: rtl;">
                        <li class="nav-item">
                            <a @click="vorood = true" class="nav-link" :class="{ active: vorood }">ورود</a>
                        </li>
                        <li class="nav-item">
                            <a @click="vorood = false" class="nav-link" :class="{ active: !vorood }">ثبت نام</a>
                        </li>
                    </ul>
                    <b-tab v-if="vorood" style="padding:10% 0">

                        <div class="text-center text-muted mb-4">
                        </div>
                        <form class="my-1" @submit.prevent="submitForm()">
                            <label style="text-align: right!important;;">نام کاربری</label>
                            <input v-model="username" class="form-control username" />
                            <div class="invalid-tooltip">{{ utool }}</div>


                            <label>کلمه عبور</label>
                            <input type="password" v-model="password" class="form-control pass" />
                            <div class="invalid-tooltip">{{ ptool }}</div>
                            <br>

                            <button class="btn btn-dark form-control" id="submit">ورود</button>

                            <div style="width:100%"><br>
                                <b-col>
                                    <router-link style="color:#444;float:right" to="/forgetpassword">رمز عبور خود را
                                        فراموش کرده اید ؟</router-link>
                                </b-col>
                                <b-col class="text-right">
                                    <a @click="vorood = false" style="color:#444;float:left"> ثبت نام
                                        کنید</a>
                                </b-col>
                            </div>
                        </form>
                    </b-tab>

                    <b-tab v-if="!vorood" style="padding:7% 0">
                        <form class="my-1" @submit.prevent="RsubmitForm()">
                            <label>ایمیل</label>
                            <input v-model="Remail" class="form-control Remail" />
                            <div class="invalid-tooltip">{{ Retool }}</div>

                            <b-form-group>
                                <label>کلمه عبور</label>
                                <input type="password" v-model="Rpassword" class="form-control Rpass" />
                                <div class="invalid-tooltip">{{ Rptool }}</div>
                                <p style="font-size:10px;margin:0">برای امنیت بیشتر توصیه میشود از سمبل ها استفاده
                                    کنید (#,@,&,...)</p>
                            </b-form-group>
                            <b-form-group>
                                <label>تکرار کلمه عبور</label>
                                <input type="password" v-model="Rrepassword" class="form-control Rrepass" />
                                <div class="invalid-tooltip">{{ Rreptool }}</div>
                            </b-form-group>

                            <div>
                                <div class="form-check form-switch" style="margin-top: 15px">
                                    <input @input="Rchecked()" style="float: right;margin-left: 20px"
                                        class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                    <label style="float: right;" class="form-check-label" for="flexSwitchCheckDefault">من
                                        بیش از ۱۸ سال سن
                                        دارم</label>
                                </div>
                                <br>
                                <button class="btn btn-dark form-control" type="button" id="submit2" disabled>ثبت
                                    نام</button>


                            </div>
                        </form><br>
                        <a @click="vorood = true" style="color:#444;text-align:center;width:100%; display: block;">وارد
                            شوید</a>

                    </b-tab>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'pages-authentication-login-v1',
    metaInfo: {
        title: 'Login v1 - Pages'
    },
    data: () => ({
        errors: [],
        errors2: [],
        ptool: '',
        utool: '',
        username: '',
        vorood: false,
        password: '',
        isShow: false,
        Rerrors: [],
        Rerrors2: [],
        Remail: '',
        Retool: '',
        Rutool: '',
        Rpassword: '',
        Rptool: '',
        Rrepassword: '',
        Rreptool: '',
        RisShow: false
    }),
    mounted() {
        document.title = ' AMIZAX Exchange | ورود '
    },
    methods: {
        Rsubmit() {
            this.RisShow = true;
        },

        RonSuccess(msg) {
            this.RisShow = false;
            this.RsubmitForm()
        },
        RonClose() {
            this.RisShow = false;
        },
        async Rsendmail() {
            await axios
                .post('/regemailverify/', { username: this.Remail.toLowerCase() })
                .then(response => {
                    this.Rsendmail()
                    this.$swal('<div class="swal2-header"><ul class="swal2-progress-steps" style="display: none;"></ul><div class="swal2-icon swal2-success swal2-icon-show" style="display: flex;"><div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div><span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span><div class="swal2-success-ring"></div> <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div><div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div></div><img class="swal2-image" style="display: none;"><button type="button" class="swal2-close" aria-label="Close this dialog" style="display: none;">×</button></div>' + '<h5>ثبت نام شما با موفقیت انجام شد . لطفا برای تایید حساب ایمیل خود را چک کنید</h5>')
                })
        },
        Rchecked() {
            document.querySelector('#submit2').disabled = !document.querySelector('#submit2').disabled
        },
        async RsubmitForm() {
            this.Rerrors = []
            this.Rerrors2 = []
            this.Rutool = ''
            this.Rptool = ''
            this.Rreptool = ''
            this.Retool = ''
            document.querySelector('.Rpass').className = document.querySelector('.Rpass').className.replace(' is-invalid', '')
            document.querySelector('.Rrepass').className = document.querySelector('.Rrepass').className.replace(' is-invalid', '')
            document.querySelector('.Remail').className = document.querySelector('.Remail').className.replace(' is-invalid', '')
            axios.defaults.headers.common.Authorization = ''
            localStorage.removeItem('token')
            this.$store.commit('removeToken')
            if (this.Rpassword === '') {
                document.querySelector('.Rpass').className += ' is-invalid'
                this.Rerrors2.push('1')
                this.Rptool = ' کلمه عبور را وارد نکرده اید'
            }
            if (this.Remail === '') {
                this.Rerrors2.push('1')
                document.querySelector('.Remail').className += ' is-invalid'
                this.Retool = ' ایمیل را وارد نکرده اید'
            } else {
                var x = this.Remail
                var atposition = x.indexOf('@')
                var dotposition = x.lastIndexOf('.')
                if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
                    this.Rerrors2.push('1')
                    document.querySelector('.Remail').className += ' is-invalid'
                    this.Retool = 'فرمت ایمیل اشتباه است'
                } else {
                    var horoof = /[\u0600-\u06FF]/
                    if (horoof.test(this.username)) {
                        this.errors2.push('1')
                        document.querySelector('.Rusername').className += ' is-invalid'
                        this.Rutool = 'ایمیل نمیتواند فارسی باشد'
                    }
                }
            }
            if (this.Rrepassword === '') {
                this.errors2.push('1')
                document.querySelector('.Rrepass').className += ' is-invalid'
                this.Rreptool = ' تکرار کلمه عبور را وارد نکرده اید'
            }
            if (this.Rpassword !== '' && this.Rrepassword !== '' && this.Rpassword !== this.Rrepassword) {
                this.errors2.push('1')
                document.querySelector('.Rpass').className += ' is-invalid'
                document.querySelector('.Rrepass').className += ' is-invalid'
                this.Rptool = ' کلمه عبور با تکرار یکسان نیست'
                this.Rreptool = ' کلمه عبور با تکرار یکسان نیست'
            }
            if (this.Rerrors2.length === 0) {
                const formData = {
                    username: this.Remail.toLowerCase(),
                    email: this.Remail.toLowerCase(),
                    password: this.Rpassword
                }
                await axios
                    .post('/users/', formData)
                    .then(response => {
                        this.sendmail()
                        setTimeout(() => {

                            const toPath = this.$route.query.to || '/login'
                            this.$router.push(toPath)
                        }, 2000)
                    })
                    .catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                if (property === 'username') {
                                    this.errors.push('این ایمیل قبلا برای ثبت نام دیگری استفاده شده است')
                                } else if (property === 'password') {
                                    this.Rerrors.push(' کلمه عبور باید بیش از ۸ کاراکتر باشد ترکیبی از حروف و اعداد باشد و نمیتواند مشابه نام کاربری باشد')
                                } else {
                                    this.Rerrors.push(`${property}: ${error.response.data[property]}`)
                                }
                            }
                        } else if (error.message) {
                            this.Rerrors.push(error.message)
                        }
                    })
            }
            if (this.Rerrors.length) {
                var errors = this.errors
                var error = '<div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div><h5>'
                for (var er = 0; er < errors.length; er++) {
                    error += '\n' + errors
                }
                error += '</h5>'
                this.$swal(error)
            }
        },












        async smscode() {
            await axios
                .post('/loginsms', { 'username': this.username.toLowerCase(), code: parseInt(document.getElementById('code').value) })
                .then(response => {
                    setTimeout(() => {
                        this.submitForm()
                    }, 1000);
                })
                .catch(response => {
                    this.$swal(`<div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div><h5>${response.data}</h5>‍‍`)
                })
        },
        async submitForm() {
            document.querySelector('.username').className = document.querySelector('.username').className.replace(' is-invalid', '')
            document.querySelector('.pass').className = document.querySelector('.pass').className.replace(' is-invalid', '')
            this.errors = []
            axios.defaults.headers.common.Authorization = ''
            localStorage.removeItem('token')
            this.$store.commit('removeToken')
            this.errors = []
            if (this.username === '') {
                this.errors2.push('1')
                document.querySelector('.username').className += ' is-invalid'
                this.utool = 'نام کاربری را وارد نکرده اید'
            }
            if (this.password === '') {
                this.errors2.push('1')
                document.querySelector('.pass').className += ' is-invalid'
                this.ptool = ' کلمه عبور را وارد نکرده اید'
            } else if (this.password.length < 8) {
                this.ptool = ' کلمه عبور باید حداقل ۸ کاراکتر باشد '
            }
            if (this.errors2.length === 0) {
                this.username = this.username.replace(' ', '').replace(' ', '').replace(' ', '').replace(' ', '')
                const formData = {
                    username: this.username.toLowerCase(),
                    password: this.password
                }
                await axios
                    .post('/login', formData)
                    .then(response => {
                        if (response.data !== 1) {
                            console.log(response.data.auth_token)
                            const token = response.data.auth_token
                            this.$store.commit('setToken', token)
                            axios.defaults.headers.common.Authorization = 'Token ' + token
                            this.$store.state.isAuthenticated = true
                            localStorage.setItem('token', token)
                            const toPath = this.$route.go || '/dashboard'
                            this.$router.push(toPath)
                        }
                        else {
                            this.$swal({
                                html: '<h3 style="text-align:center">کد تایید ارسال شده </h3> <input autocomplete="off" type="number" class="form-control" id="code">',
                                confirmButtonClass: 'btn btn-success btn-fill',
                                buttonsStyling: false
                            }).then(() => {
                                this.smscode()
                            })
                        }
                    })
                    .catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                if (property === 'non_field_errors') {
                                    this.errors.push('نام کاربری یا کلمه عبور اشتباه است')
                                } else {
                                    this.errors.push(`${property}: ${error.response.data[property]}`)
                                }
                            }
                        } else if (error.message) {
                            this.errors.push(error.message)
                        }
                    })
            }
            if (this.errors.length) {
                var errors = this.errors
                var error = '<div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span></div><h5>'
                for (var er = 0; er < errors.length; er++) {
                    error += '\n' + errors[er]
                }
                error += '</h5>'
                this.$swal(error)
            }
        }
    }
}
</script>
<style>
.invalid-tooltip {
    position: relative;
    top: 0;
    background-color: rgba(0, 0, 0, 0);
    color: red;
    text-align: left;
}

.login a {
    color: #052B61 !important
}

.login .active {
    color: black !important
}

.form-check-input:checked {
    background-color: #000;
    border-color: #000;
}

.form-check-input {
    background-color: #e1dfdf;

}
</style>
  