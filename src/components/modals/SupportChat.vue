<template>
    <div v-if="false" class="s-chat-box card navdark" style="position: fixed; z-index: 10000;">
        <div style=" height: 100%; position: absolute; top: 0; left: 0; z-index: 1000;width: 100%">
            <div class="card navdark" style="height: 100%;width: 100%">
                <div class="card-header bg2" style="height: 56px; padding: 17px;">
                    <h6 style="float: right; margin-left: 15px;font-size: 14px; font-weight: bold;">پشتیبانی آمیزاکس</h6>
                    <button @click="$store.state.chatside = false"
                        style="float: left;cursor: pointer;border: none;border-radius: 5px;padding: 3px 8px;margin-top: -8px">X</button>


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


                <div class="card-header bg2" style="bottom: 0;position: absolute;width: 100%;">
                    <input v-model="text" type="text" style="font-size: 12px;text-align: right;width: 100%; padding: 15px"
                        class="form-control bg" placeholder=" ... جستجو کاربران" name="" id="">
                    <button @click="send()" class="btn light" style="bottom: 10px;position: absolute;left: 15px"><i
                            class="material-symbols-outlined" style="transform: rotate(220deg);">
                            send</i></button>
                </div>
                <br>

            </div><br><br>
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

.s-chat-box {
    width: 400px;
    height: 98%;
    top: 1%;
    left: 1%
}

@media only screen and (max-width:600px) {

    .s-chat-box {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0
    }

}
</style>
