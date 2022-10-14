<template>
    <LayoutGuest
        :message="message"
        :errorMsg="errorMsg"
        :successMsg="successMsg"
    >
        <div class="flex items-center justify-center p-12">
            <div class="mx-auto w-full max-w-[550px]">
                <h1 class="text-xl font-bold text-center mb-">
                    Please Sign In
                </h1>
                <form @submit.prevent="submit">
                    <div class="mb-5">
                        <label
                            for="email"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            v-model="form.email"
                            placeholder="example@domain.com"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                            for="password"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            v-model="form.password"
                            placeholder="example@domain.com"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            class="hover:shadow-form rounded-md bg-[#6A64F1] w-full py-3 px-8 text-base font-semibold text-white outline-none"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </LayoutGuest>
</template>
<script>
import axios from "axios";
import LayoutGuest from "../layout/LayoutGuest.vue";

export default {
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
            errorMsg: false,
            successMsg: false,
            message: null,
        };
    },
    components: {
        LayoutGuest,
    },
    methods: {
        async submit() {
            this.message = null;
            this.errorMsg = false;
            this.successMsg = false;
            let data = {
                email: this.form.email,
                password: this.form.password,
            };
            console.log(data);
            await axios
                .post("/api/login", data)
                .then((res) => {
                    console.log(res);
                    this.successMsg = true;
                    this.message = res.data.message;
                })
                .catch((err) => {
                    console.log(err);
                    this.errorMsg = true;
                    this.message = err.response.data.message;
                });
        },
    },
};
</script>
