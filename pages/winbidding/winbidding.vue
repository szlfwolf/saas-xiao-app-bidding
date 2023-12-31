<template>
<view class="flex-col page">
  <view class="flex-col flex-1 group_2">
    <view class="flex-col section_5" v-for="(item, index) in items" :key="index">
		<navigator url="/pages/winbidding/winbidding_detail/winbidding_detail">
      <text class="self-stretch font">河南科技大学图书馆2021年图书、期刊采购项目-中标公告</text>
      <text class="self-start font_2 text_3 mt-15">项目编号：ZTW-12109196R</text>
      <view class="self-start group_3 mt-15">
        <text class="font_2">中标单位：</text>
        <text class="font_2 text_4">天择******公司</text>
      </view>
      <view class="flex-row justify-between items-center self-stretch mt-15">
        <view class="flex-col justify-start items-center button"><text class="font_3">中标</text></view>
        <view class="flex-row items-center group_4">
          <image
            class="shrink-0 image_7"
            src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=52ab038a28c3236874db311c746bc8e1.png"
          />
          <text class="font_4 text_5">河南省·郑州市</text>
          <image
            class="shrink-0 image_7 image_8"
            src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=d9a77ebad1ae28d4eee5187e9d134e91.png"
          />
          <text class="font_5 text_6">2021-11-11</text>
        </view>
      </view>
	  </navigator>
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
      items: [null, null, null, null, null],
    };
  },

  methods: {},
};
</script>

<style scoped lang="scss">
.mt-15 {
  margin-top: 30rpx;
}
.mt-11 {
  margin-top: 22rpx;
}
.page {
  background-color: #f7f7f7;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .group_2 {
    padding-bottom: 156rpx;
    overflow-y: auto;
    .section_5 {
      padding: 24rpx 32rpx;
      background-color: #ffffff;
      border-bottom: solid 1rpx #0000001a;
      .font {
        font-size: 28rpx;
        font-family: PingFang SC;
        line-height: 44rpx;
        font-weight: 700;
        color: #333333;
      }
      .font_2 {
        font-size: 28rpx;
        font-family: PingFang SC;
        line-height: 25.9rpx;
        color: #333333;
      }
      .text_3 {
        line-height: 25.88rpx;
      }
      .group_3 {
        line-height: 25.9rpx;
        .text_4 {
          line-height: 25.68rpx;
        }
      }
      .button {
        background-color: #52c41a;
        border-radius: 24rpx;
        filter: drop-shadow(2rpx 2rpx 4rpx #52c41a40);
        width: 94.3rpx;
        height: 24rpx;
        .font_3 {
          font-size: 24rpx;
          font-family: PingFang SC;
          line-height: 22.28rpx;
          color: #ffffff;
        }
      }
      .group_4 {
        margin-right: 20rpx;
        .image_7 {
          width: 32rpx;
          height: 32rpx;
        }
        .font_4 {
          font-size: 24rpx;
          font-family: PingFang SC;
          line-height: 22.28rpx;
          color: #333333;
        }
        .text_5 {
          margin-left: 8rpx;
        }
        .image_8 {
          margin-left: 24rpx;
        }
        .font_5 {
          font-size: 24rpx;
          font-family: PingFang SC;
          line-height: 17.8rpx;
          color: #333333;
        }
        .text_6 {
          margin-left: 12rpx;
        }
      }
    }
  }
}
</style>