<template>
    <div class="proListWrap">
        <!-- 产品列表 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="proList">
                <van-row type="flex" v-for='(item,index) in proList' :key='index'>
                    <van-col span="8">
                        <img src='@/assets/images/home-pro.jpg' alt="" class="pro-img">
                    </van-col>
                    <van-col span="12" class="container">
                        <h5>{{item.title}}</h5>
                        <p>￥{{item.price}}起步</p>
                    </van-col>
                    <van-col span="4">
                        <van-button plain type="danger" size='small'>选规格</van-button>
                    </van-col>
                </van-row>
            </div>
        </van-pull-refresh>
        <!-- 选择规格 -->
        <van-popup v-model="isShow">
            <van-icon name="cross" size="24px" color='#c9c7c7' class="close" @click="closeMask"/>
            <h5>联想Lecoo R1智能指纹锁 </h5>
            <ul class="specList">
                <li>
                    <p>锁体规格：</p>
                    <span>标 准</span>
                    <span>王 力</span>
                    <span>霸 王</span>
                </li>
                <li>
                    <p>锁体规格：</p>
                    <span>标 准</span>
                    <span>王 力</span>
                    <span>霸 王</span>
                </li>
                <li>
                    <p>锁体规格：</p>
                    <span>标 准</span>
                    <span>王 力</span>
                    <span>霸 王</span>
                </li>
            </ul>
            <div class="count">
                <p>数量</p>
                <van-stepper v-model="count" />
            </div>
            <div class="prize">
                <span>￥950.0</span>
                <van-button type="warning" size='small' style="background:#fb2812;">加入购物车</van-button>
            </div>
        </van-popup>

    </div>
</template>
<script>
var proList = [
    {
        image:'@/assets/images/home-pro.jpg',
        title:'R1智能指纹锁',
        price:'950.00',
    },
    {
        image:'@/assets/images/home-pro.jpg',
        title:'R1智能指纹锁',
        price:'950.00',
    },
    {
        image:'@/assets/images/home-pro.jpg',
        title:'R1智能指纹锁',
        price:'950.00',
    },
    {
        image:'@/assets/images/home-pro.jpg',
        title:'R1智能指纹锁',
        price:'950.00',
    },
    {
        image:'@/assets/images/home-pro.jpg',
        title:'R1智能指纹锁',
        price:'950.00',
    },
    {
        image:'@/assets/images/home-pro.jpg',
        title:'R1智能指纹锁',
        price:'950.00',
    }
]

export default {
  data() {
    return {
        count: 0,
        isLoading: false,
        proList,
        isShow:false,// 是否显示选择规则层
        count:1,//数量
    }
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    // 关闭选择规格层
    closeMask(){
        var _this = this;
        _this.isShow = false;
    }
  }
}
</script>
<style scoped lang="scss">
.proListWrap{box-sizing: border-box;margin: 0 auto;padding-top:15px;}
.list-tab{box-sizing: border-box;display: flex;width: 350px;height: 32px;;margin: 0 auto;border:1px #e0e0e0 solid;background-color: #ffffff;border-radius: 10px;overflow: hidden;}
.list-tab li{flex: 1;text-align: center;font-size: 14px;height: 32px;line-height: 32px;color: #b7b7b7;}
.list-tab .active{background-color: #e73827;color: #ffffff;}
.proList{
    width: 350px;margin: 20px auto 0;padding-bottom:60px;
    .van-row{margin-top: 20px;}
    .pro-img{width: 100px;height: 100px;border-radius:10px;}
    .van-col{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        h5{font-size: 15px;color: #202020;font-weight: 500;}
        p{font-size:17px;color: #e73827;}
    }
}
// 选择规格
.van-popup{
    width: 320px;padding:35px 0 20px;
    .close{position: absolute;top:10px;right: 10px;}
    h5{
        font-size: 16px;text-align: center;
    }
    ul{
        width: 260px;margin: 10px auto 0;padding-bottom:20px;border-bottom:1px #e0e0e0 solid;
        li{
            display: flex;color:#202020;align-items:center;margin-top:20px;
            p{font-size: 14px;}
            span{padding: 5px 8px;background-color: #f7f7f7;border-radius: 6px;border:2px #ebebeb solid;font-size: 10px;margin-left: 10px;}
        }
    }
    .count{
        width: 260px;margin:15px auto 0;display: flex;justify-content: space-between;font-size: 14px;align-items: center;
    }
    .prize{
        width: 260px;margin:20px auto 0;display: flex;justify-content: space-between;font-size: 18px;color: #fb2812;align-items: center;
    }
    
}

</style>




