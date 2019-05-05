<template>
  <div class="orderList">
    <van-nav-bar title="服务管理" fixed border />
    <div class="tab-nav">
      <span>未完成</span>
      <span>已完成</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "orderList",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.orderList{
    position: absolute;width: 100%;height: 100%;top:0;left: 0;box-sizing: border-box;background-color: #ededed;padding-top:46px;
    .tab-nav{
        width: 350px;margin: 20px auto;display: flex;
        span{
            font-size:12px;color: #c7c7c7;flex: 1;
        }
    }
}
</style>


