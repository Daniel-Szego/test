<template>
    <div class="flex-1 flex">
        <div class="flex-1 flex items-center justify-center px-5">
            <div class="flex-1 flex flex-col" style="max-width: 445px">
                <img src="images/logo.svg"
                     alt="Logo"
                     style="width: 350px;"
                     class="mb-12">

                <div class="flex items-center mb-12">
                    <i class="w-16 h-16 fa fa-sign-in-alt rounded-lg border-2 border-pale-grey-three text-2xl text-ocean-blue inline-flex items-center justify-center mr-3"></i>

                    <h1 class="text-dark-blue-gray text-4xl font-bold">Sign in to Galaxis</h1>
                </div>


                <form @submit.prevent="submit">

                    <div class="mb-5">
                        <label class="text-dark-grey-blue-two text-base font-bold leading-none">E-mail Address</label>

                        <input type="email"
                               class="input"
                               placeholder="Email"
                               v-model="form.email"
                               :disabled="loading"
                               @keyup="error = ''">
                    </div>

                    <div class="mb-5">
                        <label class="text-ultramarine text-base font-bold leading-none">Password</label>

                        <input type="password"
                               class="input"
                               placeholder="Password"
                               v-model="form.password"
                               :disabled="loading"
                               @keyup="error = ''">
                    </div>

                    <div v-if="error" class="mb-5">
                        <small>{{ error }}</small>
                    </div>

                    <div class="flex items-center">
                        <button type="submit" class="button bg-ultramarine text-white mr-3 inline-flex items-center">
                            <i v-if="loading" class="fa fa-spin fa-circle-notch mr-2"></i>
                            Sign In
                        </button>

                        <div class="flex items-center">
                            <span class="text-dark-blue-gray text-base mr-2">Request access?</span>
                            <a href="#" class="text-ocean-blue text-base underline">Click Here</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import AuthFactory from "../services/Auth/AuthFactory";

    export default {
        data() {
            return {
                loading: false,
                form: {
                    email: '',
                    password: ''
                },
                error: ''
            }
        },

        methods: {
            async submit() {
                const Auth = AuthFactory.create();
                const email = this.form.email;
                const password = this.form.password;

                try {
                    this.loading = true;
                    await Auth.login(email, password);
                    this.loading = false;

                    await this.$router.push({path: '/'});
                } catch (error) {
                    this.loading = false;
                    this.error = error;
                }
            }
        }
    }
</script>
