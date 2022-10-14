<template>
    <nav-bar />
    <div>
        <Message
            :errorMsg="errorMsg"
            :successMsg="successMsg"
            :message="message"
        />
        <slot />
    </div>
</template>
<script>
import Message from "../components/Message.vue";

export default {
    props: ["errorMsg", "successMsg", "message"],
    components: {
        Message,
    },
};
</script>
