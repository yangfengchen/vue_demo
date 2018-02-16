<template>
    <div class="welcome" :class="{hide:hide}">
    
    </div>
</template>
<script>
export default {
    data() {
            return {
                hide: false
            }
        },
        mounted() {
            setTimeout(() => {
                //this.hide = true
                let redirect = decodeURIComponent(this.$route.query.redirect || '/login');
                this.$router.push({
                  path: redirect
                });
            }, 500);
        }
}
</script>
<style type="text/css">
  @import '../assets/styles/welcome.css'
</style>