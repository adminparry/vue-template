<template>
  <div class="us-container">
    <p>你需要这个工具来获取你想要的东西</p>
    <p class="bash">npm install -g makati</p>
    <p>你需要免配置的工具来运行你的web前端应用</p>
    <p class="bash">npm install -g webpack-rv</p>
    <p>使用简单 不需要那么多解释 <a target="_blank" href="https://adminparry.github.io/makati/">去选择你想要的东西</a></p>
  </div>
</template>
<script>
export default {
  name: 'aboutUs',
  created(){
    this.sendCode();
  },
  methods: {
    sendCode(code) {

      this.$store.dispatch('app/setUserInfo', {user: '良好的开端等于成功的一半'});
     
    }
  }
}
</script>
<style>
.us-container{
  padding: 0 50px;
}
.us-container p {
  padding: 20px 0;
}
.bash{
  background: black;
  border-radius: 5px;
  color: greenyellow;
}
</style>


