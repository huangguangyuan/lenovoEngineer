<template>
    <div class="installUploader">
        <van-nav-bar title="安装管理" left-arrow fixed @click-left="onClickLeft"/>
        <div class="upload-wrap">
            <h5>上传智能门全景照片</h5>
            <p>（示例图片）</p>
            <div class="container">
                <van-uploader name='panorama' :after-read="onRead">
                    <van-icon name="photograph" color="#d8d7d7" />
                    <p>添加包装图片</p>
                </van-uploader>
                <img :src="panoramaSrc" alt="" v-show='isShowPanorama'>
            </div>
            <van-button type="default" class="btn-custom" style="width:171px;">确认上传</van-button>
        </div>
        <div class="upload-wrap">
            <h5>上传设备显示识别码图片</h5>
            <p>（示例图片）</p>
            <div class="container">
                <van-uploader name='code' :after-read="onRead2">
                    <van-icon name="photograph" color="#d8d7d7" />
                    <p>添加包装图片</p>
                </van-uploader>
                <img :src="codeSrc" alt="" v-show='isShowCode'>
            </div>
            <van-button type="default" class="btn-custom" style="width:171px;">确认上传</van-button>
        </div>
    </div>
</template>
<script>
export default {
    name:'installUploader',
    data(){
        return{
            isShowPanorama:false,
            isShowCode:false,
            codeSrc:'',
            panoramaSrc:'',
        }
    },
    methods:{
        // 返回
        onClickLeft(){
            this.$router.go(-1);
        },
        // 读取图片
        onRead(file, detail) {
            var _this = this;
            _this.panoramaSrc = file.content;
            _this.isShowPanorama = true;
            
        },
        // 读取图片
        onRead2(file, detail) {
            var _this = this;
            _this.codeSrc = file.content;
            _this.isShowCode = true;
        },
    },
    
}
</script>
<style scoped lang="scss">
.installUploader{
    position: absolute;width: 100%;height: 100%;top:0;left: 0;box-sizing: border-box;background-color: #f7f7f7;padding-top:46px;
    .upload-wrap{
        width: 350px;height: 320px;box-sizing: border-box;border:1px #efefef solid;border-radius: 8px;margin:0 auto 15px;
        background-color: #ffffff;display: flex;flex-direction: column;justify-content: center;align-items: center;
        h5{font-size: 16px;font-weight: 500;}
        p{font-size: 12px;color: #fb2812;margin-top: 10px;}
        .container{
            width: 171px;height: 171px;box-sizing: border-box;border-radius: 8px;background-color: #f7f7f7;border:1px #e1e1e1 solid;margin-top: 10px;position: relative;display: flex;justify-content: center;align-items: center;color: #e0e0e0;text-align: center;margin-bottom: 10px;
            p{color: #e0e0e0;}
            img{position: absolute;width: 100%;height: 100%;top:0;left: 0;}
        }
    }
}
</style>


