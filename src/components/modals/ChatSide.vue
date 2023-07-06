<template>
    <div style="position: fixed;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.5);top: 0;right:0; z-index: 1000;">
        <div v-if="$store.state.chatting" class="chatbox"
            style=" height: 100%; position: absolute; top: 0; left: 0; z-index: 1000;">
            <div class="card navdark" style="height: 100%">
                <div class="card-header" style="height: 56px; padding: 17px;">
                    <button @click="$store.state.chatting = ''"
                        style="float: left;cursor: pointer;border: none;border-radius: 5px;padding: 3px 8px;margin-top: -8px; background: none;"><i
                            class="material-symbols-outlined">
                            arrow_back_ios</i></button>
                    <button
                        style="float: left;cursor: pointer;border: none;border-radius: 5px;padding: 3px 8px;margin-top: -8px"><i
                            class="material-symbols-outlined">
                            person</i></button>
                    <h6 style="float: left; margin-left: 15px;font-size: 14px; font-weight: bold;">{{ $store.state.chatting
                    }}</h6>
                    <button @click="$store.state.chatside = false"
                        style="float: right;cursor: pointer;border: none;border-radius: 5px;padding: 3px 8px;margin-top: -8px">X</button>


                </div>
                <div class="card-body">

                    <div v-if="error" class="card bg lightertext" style="min-width: 95%;padding: 12px;text-align: center ;">
                        <p style="color: red; font-size: 12px;margin-bottom: 0;">{{ error }}</p>
                    </div>
                    <div v-for="item in chats">
                        <div v-if="$store.state.chatting === item.get_user"
                            style="float:right; border-radius: 5px; background: rgba(0,0,0,0.2);">
                            <div class="card bg lightertext"
                                style="min-height: 60px;min-width: 150px;padding: 7px;text-align: right ;">
                                {{ item.text }}
                                <br>
                                <div
                                    style="width:100%; height: 20px; position: relative;bottom: 0px; float: left;text-align: left;">
                                    <p style="font-size: 10px;" class="normaltext">{{ new
                                        Date(item.date).toLocaleDateString() + ' - ' + new
                                            Date(item.date).toLocaleTimeString() }}</p>
                                </div>



                            </div>
                        </div>

                        <div v-else style="float:left; border-radius: 5px; background: rgba(0,0,0,0.2);">
                            <div class="card bg2 lightertext"
                                style="min-height: 60px;min-width: 150px;padding: 7px;text-align: right ;">
                                {{ item.text }}
                                <br>
                                <div
                                    style="width:100%; height: 20px; position: relative;bottom: 0px; float: left;text-align: left;">
                                    <p style="font-size: 10px;" class="normaltext">{{ new
                                        Date(item.date).toLocaleDateString() + ' - ' + new
                                            Date(item.date).toLocaleTimeString() }}</p>
                                </div>



                            </div>
                        </div>
                        <div style="clear: both;height: 10px;"></div>
                    </div>
                </div>


                <div class="card-header" style="bottom: 0;position: absolute;width: 100%;">
                    <input v-model="text" type="text" style="font-size: 12px;text-align: right;width: 100%; padding: 15px"
                        class="form-control bg" placeholder=" ... جستجو کاربران" name="" id="">
                    <button @click="send()" class="btn light" style="bottom: 10px;position: absolute;left: 15px"><i
                            class="material-symbols-outlined" style="transform: rotate(220deg);">
                            send</i></button>
                </div>
                <br>

            </div><br><br>
        </div>

        <div class="chatbox" v-else style=" height: 100%; position: absolute; top: 0; left: 0; z-index: 1000;">
            <div class="card navdark" style="height: 100%">
                <div class="card-header" style="height: 56px; padding: 17px;">
                    <button @click="$store.state.chatside = false"
                        style="float: right;cursor: pointer;border: none;border-radius: 5px;padding: 3px 8px;margin-top: -8px">X</button>
                    <h6 style="float: right; margin-right: 15px;font-size: 14px;">گفتگو با کاربران</h6>

                </div>
                <div class="card-header">
                    <input @input="search()" v-model="searchtxt" type="text" style="font-size: 12px;text-align: right;"
                        class="form-control bg" placeholder=" ... جستجو کاربران" name="" id="">
                </div>
                <div class="card-body">
                    <div v-if="!rooms">
                        <img src="https://dashboard.bidarz.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fempty3D.bed21797.png&w=256&q=75"
                            alt="">

                        <p style="font-size: 12px;">.شما تاکنون با هیچ کاربری تماس نداشته اید</p>


                    </div>
                    <div v-else>
                        <div v-for="item in rooms" class="card-header lightertext"
                            style="width: 100%; min-height: 65px; background: none; padding: 0">
                            <a v-if="username === item.get_user1" @click="$store.state.chatting = item.get_user2"
                                style="width: 100%">
                                <i class="material-symbols-outlined" style="font-size: 44px; opacity: 30%;float: left;">
                                    account_circle</i>
                                <h5 style="float: left;padding: 6px; font-size: 12px;font-weight: bold;">{{ item.get_user2
                                }}</h5>

                                <h6
                                    style="float: right;padding: 10px; font-size: 9px; text-align: right;width: 38%; overflow: visible;">
                                    {{ new
                                        Date(item.date).toLocaleDateString() + ' - ' + new
                                            Date(item.date).toLocaleTimeString() }}
                                    <br><br>
                                    {{ item.last_message }}
                                </h6>
                            </a>
                            <a v-else @click="$store.state.chatting = item.get_user1">
                                <i class="material-symbols-outlined" style="font-size: 50px; opacity: 30%;float: left;">
                                    account_circle</i>
                                <h5 style="float: left;padding: 6px; font-size: 16px;">{{ item.get_user1 }}</h5>

                                <h6 style="float: right;padding: 10px; font-size: 10px; text-align: right;">
                                    {{ item.date }}
                                    <br><br>
                                    {{ item.last_message }}
                                </h6>
                            </a>



                        </div>
                    </div>

                </div>
            </div><br><br>
        </div>
        <div class="notchat" @click="$store.state.chatside = false"
            style=" height: 100%; position: absolute; top: 0; right: 0; z-index: 1000;">
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
            rooms: [],
            chats: [],
            username: '',
            text: '',
            roomsback: [],
            error: '',
            searchtxt: ''
        }
    },
    updated() {
        this.get_chats()
    },
    methods: {
        async getUSer() {
            await axios
                .get('userinfo')
                .then(response => response.data)
                .then(response => {
                    this.username = response.username
                    console.log(response)
                })
        },
        async get_rooms() {
            await axios
                .get('mychatrooms')
                .then(response => response.data)
                .then(response => {
                    this.rooms = response
                    this.roomsback = response
                })
        },
        async get_chats() {
            if (this.$store.state.chatting) {
                await axios
                    .get(`chattext/${this.$store.state.chatting}`)
                    .then(response => response.data)
                    .then(response => {
                        this.chats = response
                    })
            }
        },
        async send() {
            if (this.$store.state.chatting) {
                await axios
                    .post(`chattext/${this.$store.state.chatting}`, { text: this.text })
                    .then(response => response.data)
                    .then(response => {
                        if (response == false) {
                            this.error = 'نمیتواند به این کاربر پیام دهید'
                            setTimeout(() => {
                                this.error = ''
                            }, 3000);
                        }
                        this.chats = response
                    })
            }
        },
        search() {
            for (var item of this.roomsback) {
                this.rooms = []
                if ((item.get_user1.includes(this.searchtxt) && item.get_user1 !== this.username) | (item.get_user2.includes(this.searchtxt)) && item.get_user2 !== this.username) {
                    this.rooms.push(item)
                }
            }
        },


    },
    mounted() {
        this.getUSer()
        this.get_rooms()
        this.get_chats()
    },
    created() {
        this.getUSer()


    }
}
</script>
    
    <!-- Add " scoped" attribute to limit CSS to this component only -->
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
