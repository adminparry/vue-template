<template>
  <div class="main-view">
    <!-- 头部 -->
    <h2 class="header">{{ userInfo.user }}</h2>

    <!-- 主视图 -->
    <router-view class="content-view" />

  </div>
</template>
<script>

import { mapGetters } from "vuex";
export default {

  computed: {
    ...mapGetters(["userInfo"])
  },
};
</script>

<style>
.header{
  text-align: center;
}
.main-view {
  height: 100%;
  min-height: 100%;
  background-color: #f0f2f5;
}

.content-view {

  min-height: 100vh;

}
.content-view-small{
  margin-left: 65px;
}
.menu-container {
  /* 固定定位流出header位置 */
  position: fixed;
  left: 0;
  top: 50px;
  bottom: 0;
  width: 200px;
  height: 100%;
  overflow: hidden;
  transition: width .3s;
}
.menu-container-small {
  width: 64px;
}
/* 去掉html标签默认margin */
html,
body {
  margin: 0;
}
</style>


