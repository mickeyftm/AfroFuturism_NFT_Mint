<template>
    <div class="notification-slot"></div>
</template>

<script>
    export default {
        name: "notification",
        mounted() {
            if(this.$store.state.messageType && this.$store.state.messageContent)
                this.$toast[this.$store.state.messageType](this.$store.state.messageContent, {
                    position: "top-right",
                    timeout: 5000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: false,
                    icon: true,
                    rtl: false
                });
            this.$store.state.messageType = null
            this.$store.state.messageContent = null
        }
    }
</script>

<style scoped>
    .notification-slot {
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
    }
</style>