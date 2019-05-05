<template>
    <div class="footBar">
        <van-tabbar
            v-model="active"
            active-color="#fb2812"
        >
            <van-tabbar-item icon="apps-o">我的设备</van-tabbar-item>
            <van-tabbar-item icon="description">通知</van-tabbar-item>
            <van-tabbar-item icon="user-circle-o">个人设置</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active: 0
        }
    }
}
</script>
<style>

</style>



