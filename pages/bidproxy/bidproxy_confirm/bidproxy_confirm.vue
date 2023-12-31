<template>
<view class="flex-col page">
  <view class="flex-col flex-1 group_2">
    <view class="flex-col">
      <view class="flex-col section_5">
        <view class="flex-row self-stretch group_3">
          <view class="section_6"></view>
          <text class="font text_3 ml-5">上传资料</text>
        </view>
        <view class="flex-col justify-start items-center self-stretch text-wrapper">
          <text class="font_2 text_4">点击上传文件</text>
        </view>
        <view class="self-start group_4 view">
          <text class="font_3 text_5 text_6">提示：支持&lt;20MB以下的</text>
          <text class="font_3 text_5 text_7">word、excle、PDF</text>
          <text class="font_3 text_5">文件格式</text>
        </view>
      </view>
      <view class="mt-10 flex-col section_5">
        <view class="flex-row self-stretch group_3">
          <view class="section_6"></view>
          <text class="ml-6 font">图片上传</text>
        </view>
        <view class="flex-col justify-start items-center self-start text-wrapper_2">
          <text class="font_2">上传图片</text>
        </view>
        <text class="self-start font_3 text_5 group_4 text_8">提示：支持2MB内的JPEG、JPG、pNG、GIF格式的图片</text>
      </view>
      <view class="mt-10 flex-col justify-start section_7">
        <view class="flex-col input">
          <text class="self-start font text_9">备注</text>
          <view class="mt-14 flex-col justify-start items-start self-stretch text-wrapper_3">
            <text class="font text_10">请输入备注或留言</text>
          </view>
        </view>
      </view>
    </view>
    <view class="flex-col justify-start items-center button mt-233"><text class="text_11">提交</text></view>
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
.mt-233 {
  margin-top: 466rpx;
}
.page {
  background-color: #ffffff;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .group_2 {
    overflow-y: auto;
    .section_5 {
      padding: 0 32rpx 28rpx;
      background-color: #ffffff;
      .group_3 {
        padding: 28rpx 0;
        .section_6 {
          background-color: #1890ff;
          border-radius: 4rpx;
          width: 4rpx;
          height: 24rpx;
        }
        .text_3 {
          line-height: 25.98rpx;
        }
      }
      .text-wrapper {
        padding: 40rpx 0;
        border-radius: 8rpx;
        border-left: dotted 2rpx #1890ff;
        border-right: dotted 2rpx #1890ff;
        border-top: dotted 2rpx #1890ff;
        border-bottom: dotted 2rpx #1890ff;
        .text_4 {
          line-height: 26.1rpx;
        }
      }
      .group_4 {
        margin-top: 28rpx;
        .text_6 {
          line-height: 22.12rpx;
        }
        .text_7 {
          color: #fa9014;
          line-height: 20rpx;
        }
      }
      .view {
        line-height: 22.28rpx;
      }
      .text-wrapper_2 {
        padding: 68rpx 0 64rpx;
        border-radius: 8rpx;
        width: 160rpx;
        border-left: dotted 2rpx #1890ff;
        border-right: dotted 2rpx #1890ff;
        border-top: dotted 2rpx #1890ff;
        border-bottom: dotted 2rpx #1890ff;
      }
      .font_2 {
        font-size: 28rpx;
        font-family: PingFang SC;
        line-height: 25.92rpx;
        color: #1890ff;
      }
      .font_3 {
        font-size: 24rpx;
        font-family: PingFang SC;
        line-height: 22.28rpx;
        color: #00000080;
      }
      .text_5 {
        text-transform: capitalize;
      }
      .text_8 {
        line-height: 22.2rpx;
      }
    }
    .section_7 {
      padding: 28rpx 0 20rpx;
      background-color: #ffffff;
      .input {
        margin: 0 32rpx;
        .text_9 {
          line-height: 26.02rpx;
        }
        .text-wrapper_3 {
          padding: 24rpx 0;
          border-radius: 8rpx;
          overflow: hidden;
          border-left: solid 2rpx #0000001a;
          border-right: solid 2rpx #0000001a;
          border-top: solid 2rpx #0000001a;
          border-bottom: solid 2rpx #0000001a;
          .text_10 {
            margin-left: 32rpx;
            color: #c3c4c7;
            line-height: 25.9rpx;
          }
        }
      }
    }
    .font {
      font-size: 28rpx;
      font-family: PingFang SC;
      line-height: 25.92rpx;
      color: #333333;
    }
    .button {
      padding: 32rpx 0;
      background-image: linear-gradient(330.4deg, #255ef6 0%, #4189f7 100%);
      box-shadow: 0rpx 4rpx 4rpx #1890ff26;
      .text_11 {
        color: #ffffff;
        font-size: 32rpx;
        font-family: PingFang SC;
        line-height: 29.64rpx;
      }
    }
  }
}
</style>