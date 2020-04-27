<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <p>
      <router-link class="no-underline" :to="path">示例跳转</router-link>
    </p>
    
    <div style="padding-top: 50px;">

      <p>做的多了反反复复是否让你觉得感觉不好 那么你需要这个工具来应付</p>

      <p>你可以做到几分钟获得整个架构 你也可以做到几分钟做出好多东西</p>

      <p>现在开始你就应该用新的工作方式</p>
      <p>
      <router-link class="no-underline" :to="path1">开始使用</router-link>
      </p>
      
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'home',

  data(){
    return {

      path: '/callback',
      path1: 'about/us',
      
    }
  }
}
</script>
<style>

.home {
  text-align: center
}
</style>

