<template>
    <div class="github-callback">
        <div>
          <p>{{'success' | capitalize}}</p>
          <p><a href="/">返回</a></p>
        </div>
    </div>
</template>
<style>
.github-callback{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>

export default {
  
  created() {
    const { code } = this.$route.query;
    this.sendCode(code);
  },
  methods: {
    sendCode(code) {

      this.$store.dispatch('app/setUserInfo', {user: '很好你已经看了这个示例了'});
     
    }
  }
};
</script>
