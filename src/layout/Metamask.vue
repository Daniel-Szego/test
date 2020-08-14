<template>
    <div class="flex-1 flex flex-col">

        <div v-if="user && !account" class="flex-1 flex flex-col">
            <div class="flex flex-1 items-center justify-center">-->
                <div>
                    <i class="fa fa-circle-notch fa-spin mr-2"></i>
                    <span>Please connect your Metamask account</span>
                </div>
            </div>
        </div>

        <router-view v-if="user && account && application" :user="user" :account="account" :application="application"></router-view>
    </div>
</template>

<script>
    import Web3Provider from "../services/Web3Provider";
    import AuthFactory from "../services/Auth/AuthFactory";
    import NetworkConfig from "../../network";
    import ApplicationFactory from "../services/ApplicationFactory";

    export default {
        data() {
            return {
                error: '',
                loading: false,
                user: null,
                account: null,
                application: null,
            }
        },

        async created() {
            let auth = AuthFactory.create();

            if (!auth.check()) {
                await this.$router.push({path: '/login'});
            }

            this.user = auth.user();

            let web3 = await (new Web3Provider(NetworkConfig.network)).retrieve();
            let account = (await web3.eth.getAccounts())[0];

            this.account = account;

            let application = await ApplicationFactory.create(web3);

            this.application = application;

            window.Application = application;

            if (window.ethereum) {
                window.ethereum.on('accountsChanged', (accounts) => {
                    console.log('Metamask -> Accounts Changed event');
                    console.log(accounts);

                    this.account = accounts[0];

                    this.account = null;
                    this.user = null;
                    auth.logout();
                    this.$router.push({path: '/login'});
                });
            }


            window.events.$on('logout', () => {
                this.account = null;
                this.user = null;
                auth.logout();
                this.$router.push({path: '/login'});
            });
        },
    }
</script>
