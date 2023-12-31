<template>
<view class="flex-col page">
  <view class="flex-col flex-1 group_2">
    <view class="flex-col self-stretch">
      <view class="flex-col section_5">
        <view class="flex-row group_3">
          <view class="section_6"></view>
          <text class="font_2 text_3 ml-5">意见或建议</text>
        </view>
        <view class="flex-col justify-start items-start text-area">
          <text class="font_3 text_4">请输入您遇到的问题或宝贵的建议</text>
        </view>
      </view>
      <view class="mt-10 flex-col section_7">
        <view class="flex-row self-stretch group_3">
          <view class="section_6"></view>
          <text class="ml-6 font_2">图片上传</text>
        </view>
        <view class="flex-col justify-start items-center self-start text-wrapper">
          <text class="font_2 text_5">上传截图</text>
        </view>
        <text class="self-start text_6">提示：支持2MB内的JPEG、JPG、pNG、GIF格式的图片</text>
      </view>
      <view class="mt-10 flex-col justify-start section_8">
        <view class="flex-col input">
          <text class="self-start font_2">联系方式</text>
          <view class="mt-14 flex-col justify-start items-start self-stretch text-wrapper_2">
            <text class="font_3 text_7">请输入QQ、微信或手机号码方便与您联系</text>
          </view>
        </view>
      </view>
    </view>
    <view class="mt-84 flex-col justify-start items-center button text-wrapper_3">
      <text class="font text_8">提交反馈</text>
    </view>
  </view>
</view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },

  methods: {},
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
    padding-bottom: 344rpx;
    overflow-y: auto;
    .section_5 {
      padding: 0 32rpx 20rpx;
      background-color: #ffffff;
      .text-area {
        padding: 28rpx 0 152rpx;
        border-radius: 8rpx;
        overflow: hidden;
        border-left: solid 2rpx #0000001a;
        border-right: solid 2rpx #0000001a;
        border-top: solid 2rpx #0000001a;
        border-bottom: solid 2rpx #0000001a;
        .text_4 {
          margin-left: 20rpx;
          line-height: 25.98rpx;
        }
      }
    }
    .section_7 {
      padding: 0 32rpx 28rpx;
      background-color: #ffffff;
      .text-wrapper {
        padding: 68rpx 0 64rpx;
        border-radius: 8rpx;
        width: 160rpx;
        border-left: dotted 2rpx #1890ff;
        border-right: dotted 2rpx #1890ff;
        border-top: dotted 2rpx #1890ff;
        border-bottom: dotted 2rpx #1890ff;
        .text_5 {
          color: #1890ff;
        }
      }
      .text_6 {
        margin-top: 28rpx;
        color: #00000080;
        font-size: 24rpx;
        font-family: PingFang SC;
        line-height: 22.2rpx;
        text-transform: capitalize;
      }
    }
    .group_3 {
      padding: 28rpx 0;
      .section_6 {
        background-color: #1890ff;
        border-radius: 4rpx;
        width: 4rpx;
        height: 24rpx;
      }
      .text_3 {
        line-height: 26.04rpx;
      }
    }
    .font_2 {
      font-size: 28rpx;
      font-family: PingFang SC;
      line-height: 25.92rpx;
      color: #333333;
    }
    .section_8 {
      padding: 28rpx 0 20rpx;
      background-color: #ffffff;
      .input {
        margin: 0 32rpx;
        .text-wrapper_2 {
          padding: 24rpx 0;
          border-radius: 8rpx;
          overflow: hidden;
          border-left: solid 2rpx #0000001a;
          border-right: solid 2rpx #0000001a;
          border-top: solid 2rpx #0000001a;
          border-bottom: solid 2rpx #0000001a;
          .text_7 {
            margin-left: 32rpx;
            line-height: 25.98rpx;
          }
        }
      }
    }
    .font_3 {
      font-size: 28rpx;
      font-family: PingFang SC;
      line-height: 25.92rpx;
      color: #c3c4c7;
    }
    .button {
      align-self: center;
      .font {
        font-size: 32rpx;
        font-family: PingFang SC;
        line-height: 29.96rpx;
        font-weight: 700;
      }
      .text_8 {
        color: #f2f2f2;
      }
    }
    .text-wrapper_3 {
      padding: 24rpx 0;
      background-color: #1890ff;
      border-radius: 58rpx;
      width: 562rpx;
    }
  }
}
</style>