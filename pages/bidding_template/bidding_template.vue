<template>
<view class="flex-col page">
  <view class="flex-col justify-start flex-1 group_2">
    <view class="flex-col">
      <view class="flex-col section_5">
        <view class="flex-row justify-between items-center self-stretch group_3">
          <text class="font text_3">全部</text>
          <text class="font_2 text_4">工程类</text>
          <text class="font_2 text_5">服务类</text>
          <text class="font_2">采购类</text>
        </view>
        <view class="self-start section_6"></view>
      </view>
      <view class="flex-col list">
        <view class="flex-row items-center mt-10 list-item" v-for="(item, index) in items" :key="index" v-on:click="goDetail(index)">
          <image
            class="shrink-0 image_7"
            src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=c7e88cfaf2bca456b4a1698ba32907d2.png"
          />
          <text class="flex-1 font_3 text_6 ml-5">标准土木工程机械设备采购招标文件出版（2020）.docx</text>
        </view>
      </view>
    </view>
  </view>
</view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      items: [null, null, null, null, null, null, null, null],
    };
  },

  methods: {
	  goDetail(index){
		  console.log(index)
		  uni.navigateTo({
		  	url: "/pages/bidding_template/bidding_template_detail/bidding_template_detail"
		  })
	  }
  },
};
</script>

<style scoped lang="scss">
.ml-5 {
  margin-left: 10rpx;
}
.page {
  background-color: #f7f7f7;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .group_2 {
    overflow-y: auto;
    .section_5 {
      padding: 0 64rpx 20rpx 80rpx;
      background-color: #ffffff;
      .group_3 {
        padding: 28rpx 0 16rpx;
        .font {
          font-size: 32rpx;
          font-family: PingFang SC;
          line-height: 31.72rpx;
          font-weight: 700;
        }
        .text_3 {
          color: #1890ff;
          line-height: 29.82rpx;
        }
        .font_2 {
          font-size: 28rpx;
          font-family: PingFang SC;
          line-height: 25.78rpx;
          color: #333333;
        }
        .text_4 {
          line-height: 25.7rpx;
        }
        .text_5 {
          line-height: 25.82rpx;
        }
      }
      .section_6 {
        margin-left: 4rpx;
        background-color: #1890ff;
        border-radius: 2rpx;
        width: 52rpx;
        height: 4rpx;
      }
    }
    .list {
      padding: 20rpx 0 168rpx;
      .list-item {
        padding: 20rpx 20rpx 20rpx 32rpx;
        background-color: #ffffff;
        border-bottom: solid 1rpx #0000001a;
        &:first-child {
          margin-top: 0;
        }
        .image_7 {
          width: 72rpx;
          height: 72rpx;
        }
        .font_3 {
          font-size: 28rpx;
          font-family: PingFang SC;
          line-height: 44rpx;
          color: #4f4f4f;
        }
        .text_6 {
          text-align: justify;
        }
      }
    }
  }
}
</style>