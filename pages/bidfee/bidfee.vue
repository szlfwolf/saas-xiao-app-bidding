<template>
<view class="flex-col page">
  <view class="flex-col flex-1 group_2">
    <view class="flex-col">
      <view class="flex-row justify-between items-center section_5">
        <text class="font text_3">选择预算行业</text>
        <view class="flex-row items-center">
          <text class="font_2 text_4">土建</text>
          <image
            class="shrink-0 image_7 ml-3"
            src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=e058bf7d2b5307229d9f5dce289ab2b5.png"
          />
        </view>
      </view>
      <view class="flex-col justify-start section_6">
        <view class="flex-col section_7">
          <view class="flex-row justify-between self-stretch">
            <view class="flex-col justify-start items-center text-wrapper">
              <text class="font_3 text_5">土建</text>
            </view>
            <view class="flex-col justify-start items-center text-wrapper"><text class="font_2">市政</text></view>
            <view class="flex-col justify-start items-center text-wrapper">
              <text class="font_2 text_6">幕墙</text>
            </view>
            <view class="flex-col justify-start items-center text-wrapper"><text class="font_2">装修</text></view>
          </view>
          <view class="mt-10 flex-row justify-between self-stretch">
            <view class="flex-col justify-start items-center text-wrapper">
              <text class="font_2 text_7">消防</text>
            </view>
            <view class="flex-col justify-start items-center text-wrapper"><text class="font_2">门窗</text></view>
            <view class="flex-col justify-start items-center text-wrapper">
              <text class="font_2 text_8">电力</text>
            </view>
            <view class="flex-col justify-start items-center text-wrapper">
              <text class="font_2 text_9">水利</text>
            </view>
          </view>
          <view class="mt-10 flex-row justify-between self-stretch">
            <view class="flex-col justify-start items-center text-wrapper">
              <text class="font_2 text_10">水运</text>
            </view>
            <view class="flex-col justify-start items-center text-wrapper">
              <text class="font_2 text_11">劳务</text>
            </view>
            <view class="flex-col justify-start items-center text-wrapper">
              <text class="font_2 text_12">园林</text>
            </view>
            <view class="flex-col justify-start items-center text-wrapper">
              <text class="font_2 text_13">公路</text>
            </view>
          </view>
          <view class="mt-10 flex-row justify-between self-stretch">
            <view class="flex-col justify-start items-center text-wrapper">
              <text class="font_2 text_14">通信</text>
            </view>
            <view class="flex-col justify-start items-center text-wrapper">
              <text class="font_2 text_15">电信</text>
            </view>
            <view class="flex-col justify-start items-center text-wrapper">
              <text class="font_2 text_16">房建</text>
            </view>
            <view class="flex-col justify-start items-center text-wrapper">
              <text class="font_2 text_17">设备</text>
            </view>
          </view>
          <view class="mt-10 flex-row justify-between self-stretch">
            <view class="flex-col justify-start items-center text-wrapper">
              <text class="font_2 text_18">绿化</text>
            </view>
            <view class="flex-col justify-start items-center text-wrapper">
              <text class="font_2 text_19">桥梁</text>
            </view>
            <view class="flex-col justify-start items-start text-wrapper_2">
              <text class="font_2 text_20">钢结构网架</text>
            </view>
            <view class="flex-col justify-start items-start text-wrapper_2">
              <text class="font_2 text_21">铁路工程</text>
            </view>
          </view>
          <view class="mt-10 flex-col justify-start items-center self-start text-wrapper_3">
            <text class="font_2">其他</text>
          </view>
        </view>
      </view>
      <view class="flex-col section_8">
        <view class="flex-row self-stretch group_3">
          <view class="section_9"></view>
          <text class="font text_22 ml-5">上传资料</text>
        </view>
        <view class="flex-col justify-start items-center self-stretch text-wrapper_4">
          <text class="font_3 text_23">点击上传文件</text>
        </view>
        <text class="self-start text_24">提示: 支持&lt;20MB的文件</text>
      </view>
      <view class="flex-col section_10">
        <text class="self-start font text_25">备注</text>
        <view class="mt-14 flex-col justify-start items-start input text-wrapper_5">
          <text class="font_2 text_26">请输入备注或留言</text>
        </view>
      </view>
    </view>
    <view class="flex-col justify-start items-center button mt-113"><text class="text_27">提交</text></view>
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
.ml-3 {
  margin-left: 6rpx;
}
.ml-5 {
  margin-left: 10rpx;
}
.mt-113 {
  margin-top: 226rpx;
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
      padding: 40rpx 32rpx;
      background-color: #ffffff;
      border-bottom: solid 1rpx #0000001a;
      .text_3 {
        line-height: 25.92rpx;
      }
      .text_4 {
        line-height: 25.48rpx;
      }
      .image_7 {
        width: 32rpx;
        height: 32rpx;
      }
    }
    .section_6 {
      padding: 20rpx 0;
      background-color: #ffffff;
      .section_7 {
        margin: 0 32rpx;
        padding: 0 20rpx;
        background-color: #ffffff;
        .text-wrapper {
          padding: 12rpx 0;
          background-color: #ffffff;
          border-radius: 4rpx;
          width: 96rpx;
          height: 52rpx;
          .text_5 {
            line-height: 25.48rpx;
          }
          .text_6 {
            line-height: 25.7rpx;
          }
          .text_7 {
            line-height: 25.88rpx;
          }
          .text_8 {
            line-height: 25.6rpx;
          }
          .text_9 {
            line-height: 25.78rpx;
          }
          .text_10 {
            line-height: 25.84rpx;
          }
          .text_11 {
            line-height: 25.82rpx;
          }
          .text_12 {
            line-height: 25.64rpx;
          }
          .text_13 {
            line-height: 25.7rpx;
          }
          .text_14 {
            line-height: 25.98rpx;
          }
          .text_15 {
            line-height: 25.98rpx;
          }
          .text_16 {
            line-height: 26.1rpx;
          }
          .text_17 {
            line-height: 26.1rpx;
          }
          .text_18 {
            line-height: 25.88rpx;
          }
          .text_19 {
            line-height: 25.68rpx;
          }
        }
        .text-wrapper_2 {
          padding: 12rpx 0;
          background-color: #ffffff;
          border-radius: 4rpx;
          height: 52rpx;
          .text_20 {
            margin-left: -20rpx;
            line-height: 25.7rpx;
          }
          .text_21 {
            margin-left: -8rpx;
            line-height: 25.9rpx;
          }
        }
        .text-wrapper_3 {
          padding: 12rpx 0;
          background-color: #ffffff;
          border-radius: 4rpx;
          width: 96rpx;
        }
      }
    }
    .font_2 {
      font-size: 28rpx;
      font-family: PingFang SC;
      line-height: 25.96rpx;
      color: #00000080;
    }
    .section_8 {
      margin-top: 20rpx;
      padding: 0 32rpx 28rpx;
      background-color: #ffffff;
      .group_3 {
        padding: 28rpx 0;
        .section_9 {
          background-color: #1890ff;
          border-radius: 4rpx;
          width: 4rpx;
          height: 24rpx;
        }
        .text_22 {
          line-height: 25.98rpx;
        }
      }
      .text-wrapper_4 {
        padding: 40rpx 0;
        border-radius: 8rpx;
        border-left: dotted 2rpx #1890ff;
        border-right: dotted 2rpx #1890ff;
        border-top: dotted 2rpx #1890ff;
        border-bottom: dotted 2rpx #1890ff;
        .text_23 {
          line-height: 26.1rpx;
        }
      }
      .text_24 {
        margin-top: 28rpx;
        color: #00000080;
        font-size: 24rpx;
        font-family: PingFang SC;
        line-height: 22.28rpx;
        text-transform: capitalize;
      }
    }
    .font {
      font-size: 28rpx;
      font-family: PingFang SC;
      line-height: 25.96rpx;
      color: #333333;
    }
    .font_3 {
      font-size: 28rpx;
      font-family: PingFang SC;
      line-height: 25.96rpx;
      color: #1890ff;
    }
    .section_10 {
      margin-top: 20rpx;
      padding: 28rpx 32rpx 20rpx;
      background-color: #ffffff;
      .text_25 {
        line-height: 26.02rpx;
      }
      .input {
        align-self: stretch;
        .text_26 {
          margin-left: 32rpx;
          color: #c3c4c7;
          line-height: 25.9rpx;
        }
      }
      .text-wrapper_5 {
        padding: 24rpx 0;
        border-radius: 8rpx;
        overflow: hidden;
        border-left: solid 2rpx #0000001a;
        border-right: solid 2rpx #0000001a;
        border-top: solid 2rpx #0000001a;
        border-bottom: solid 2rpx #0000001a;
      }
    }
    .button {
      padding: 32rpx 0;
      background-image: linear-gradient(330.4deg, #255ef6 0%, #4189f7 100%);
      box-shadow: 0rpx 4rpx 4rpx #1890ff26;
      .text_27 {
        color: #ffffff;
        font-size: 32rpx;
        font-family: PingFang SC;
        line-height: 29.64rpx;
      }
    }
  }
}
</style>