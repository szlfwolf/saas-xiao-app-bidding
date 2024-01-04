<template>
<view class="flex-col page">
  <view class="flex-col flex-1 group_2">
    <view class="flex-col">
      <view class="flex-row items-center list-item mt-11" v-for="(item, index) in items" :key="index">
        <image
          class="shrink-0 image_7"
          src="/static/user/download/e82b9f9f1d2f2f36a68f6cd7b14ada6d.png"
        />
        <view class="flex-col flex-1 ml-15">
          <text class="font">标准工程机械设备采购招标文件出版（202版...</text>
          <view class="flex-row items-baseline mt-13">
            <text class="font_2 text_3">2021-10-24</text>
            <text class="ml-24 font_3 text_3">大小:18.68MB</text>
          </view>
        </view>
      </view>
    </view>
    <view class="flex-col justify-start items-center image-wrapper_2 mt-266">
      <image
        class="image_8"
        src="/static/user/trush.png"
      />
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
.mt-11 {
  margin-top: 22rpx;
}
.ml-15 {
  margin-left: 30rpx;
}
.mt-13 {
  margin-top: 26rpx;
}
.mt-266 {
  margin-top: 532rpx;
}
.page {
  background-color: #f7f7f7;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .group_2 {
    overflow-y: auto;
    .list-item {
      padding: 28rpx 32rpx;
      background-color: #ffffff;
      border-radius: 4rpx;
      border-bottom: solid 1rpx #0000001a;
      &:first-child {
        margin-top: 0;
      }
      .image_7 {
        width: 48rpx;
        height: 48rpx;
      }
      .font {
        font-size: 28rpx;
        font-family: PingFang SC;
        line-height: 26.2rpx;
        color: #333333;
      }
      .font_2 {
        font-size: 24rpx;
        font-family: PingFang SC;
        line-height: 17.8rpx;
        color: #333333;
      }
      .text_3 {
        text-transform: capitalize;
      }
      .font_3 {
        font-size: 24rpx;
        font-family: PingFang SC;
        line-height: 21.88rpx;
        color: #333333;
      }
    }
    .image-wrapper_2 {
      padding: 24rpx 0;
      background-color: #f7f7f7;
      .image_8 {
        width: 44rpx;
        height: 48rpx;
      }
    }
  }
}
</style>