<script>
export default {
   computed: {

        fontColor: {
            get() {

                return this.$store.getters.userInfo;
            },
            set(val) {

                this.$store.dispatch('login/setUserInfo', val);

            }
        },
        
    },
};
</script>