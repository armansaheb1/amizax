<template>
    <div style="padding: 2%;">

        <div class="navdark card">
            <div class="card-header">
                <h4>تراکنشی ها</h4>
            </div>
            <div class="card-body">
                <div class="card">


                    <div class="card-body">
                        <table class="table table-striped" style="text-align: right;" v-if="transactions">
                            <thead>
                                <tr class="lightertext ">
                                    <th scope="col" style="text-align: left;">زمان</th>
                                    <th scope="col" class="notphone center col-4">نوع</th>
                                    <th scope="col" class="col-4">مقدار </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr class="normaltext" v-for="transaction in transactions" v-bind:key="transaction">
                                    <td scope="row" style="text-align: left;">{{ transaction.date }}</td>
                                    <td class="notphone center col-4" v-if="transaction.act === 1" style="color:green">
                                        {{ String(transaction.act).replace('1', 'واریز') }}</td>
                                    <td class="notphone center col-4" v-if="transaction.act === 2" style="color:red">
                                        {{ String(transaction.act).replace('2', 'برداشت') }}</td>
                                    <td class="col-4" v-if="transaction.act === 1" style="color:green">
                                        {{ transaction.amount }}</td>
                                    <td class="col-4" v-if="transaction.act === 2" style="color:red">
                                        {{ transaction.amount }}</td>

                                </tr>
                            </tbody>
                        </table>
                        <div v-if="!transactions" class="cent">
                            <h3>تراکنشی پیدا نشد</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from "axios";
export default {
    name: "pages-forums-list",
    metaInfo: {
        title: "Forum list - Pages",
    },
    data: () => ({
        transactions: [],
        forumPath: [{ text: " سفارشات باز", active: true }],

        sectionsData: [
            {
                title: " شناسه",
                forums: [
                    {
                        title: "Getting started",
                        threads: 12,
                        replies: 34,
                        lastUpdate: {
                            date: "1d",
                            thread: {
                                title:
                                    "Aliquam et velit vel nisi egestas pulvinar sit amet ac tellus",
                            },
                            user: { avatar: "btc.png", name: "Leon Wilson" },
                        },
                    },
                    {
                        title: "Announcements",
                        threads: 43,
                        replies: 112,
                        lastUpdate: {
                            user: { avatar: "btc.png", name: "Allie Rodriguez" },
                        },
                    },
                ],
            },
        ],
    }),
    mounted() {
        this.check();
        this.checklevel();
        this.gettransactions();
    },
    methods: {
        async checklevel(id) {
            await axios.get("/userinfo").then((response) => {
                if (response.data.level === 0) {
                    this.$swal
                        .fire({
                            title: "توجه",
                            text: "برای استفاده از این بخش ابتدا احراز هویت را کامل کنید",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "شروع تایید هویت",
                            cancelButtonText: "بعدا انجام میدهم",
                        })
                        .then((result) => {
                            if (result.isConfirmed) {
                                const toPath = this.$route.query.to || "/user-level";
                                this.$router.push(toPath);
                            } else {
                                const toPath = this.$route.query.to || "/dashboard";
                                this.$router.push(toPath);
                            }
                        });
                }
            });
        },
        async gettransactions(id) {
            await axios.get("/transactions").then((response) => {
                this.transactions = response.data;
            });
        },
        check() {
            if (!this.$store.state.isAuthenticated) {
                const toPath = this.$route.query.to || "/login";
                this.$router.push(toPath);
            }
        },
    },
};
</script>
<style>
.cent {
    text-align: center;
}
</style>
  