<template>
  <div class="orderDetails">
    <van-nav-bar title="订单详情" fixed border left-arrow/>
    <div class="banner">
      未完成
    </div>
    <div class="message">
      <p>
        <span></span>
        <span></span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "orderDetails",
  data() {
    return {
      
    };
  },
  mounted(){
    
  },
  methods:{
    
  }
};
</script>

<style scoped lang="scss">
.orderDetails{
    position: absolute;width: 100%;height: 100%;top:0;left: 0;box-sizing: border-box;background-color: #ededed;padding-top:46px;
    .banner{width: 375px;height: 75px;margin: 0 auto;background-color: #ff9600;text-align: center;font-size: 25px;color: #ffffff;line-height: 75px;}
    .message{width: 375px;box-sizing: border-box;padding: 20px 13px;border-top:1px #f0f0f0 solid;border-bottom:1px #f0f0f0 solid;}
}
</style>


