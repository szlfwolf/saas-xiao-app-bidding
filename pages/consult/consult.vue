<template>
<view class="flex-col page">
  <view class="flex-col flex-1 group_2">
    <view class="flex-col self-stretch">
      <view class="flex-col relative section_5">
        <text class="self-start font text_3">专属一对一服务·质量保障</text>
        <view class="flex-row self-stretch group_3">
          <view class="flex-col justify-start items-center button"><text class="font_2">免费咨询</text></view>
          <view class="flex-col justify-start items-center button ml-5">
            <text class="font_2 text_5">模拟标准</text>
          </view>
          <view class="flex-col justify-start items-center button ml-5">
            <text class="font_2 text_6">专家指点</text>
          </view>
        </view>
        <view class="flex-col justify-start items-end pos_3">
          <image
            class="image_7"
            src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=5b45d7913bc0cdac56a2595d99d2daa8.png"
          />
          <text class="text_4 pos_4">做标书怕麻烦？</text>
        </view>
      </view>
      <view class="flex-col mt-25">
        <view class="flex-col group_4">
          <view class="flex-col">
            <view class="flex-row">
              <view class="section_6"></view>
              <text class="font_3 ml-5">选择标书类型</text>
            </view>
            <view class="mt-12 flex-row">
              <view class="flex-col justify-start items-center text-wrapper button_2">
                <text class="font_4">采购类标书</text>
              </view>
              <view class="ml-10 flex-col justify-start items-center text-wrapper button_3">
                <text class="font_5 text_7">服务类标书</text>
              </view>
            </view>
            <view class="mt-12 flex-row">
              <view class="flex-col justify-start items-center button_3 view">
                <text class="font_5 text_8">工程类标书</text>
              </view>
              <view class="ml-10 flex-col justify-start items-center button_3 view_2">
                <text class="font_5 text_9">专业类标书</text>
              </view>
            </view>
          </view>
          <view class="flex-col mt-25">
            <view class="flex-row">
              <view class="section_6"></view>
              <text class="font_3 text_10 ml-5">是否有招标文件</text>
            </view>
            <view class="flex-col mt-15">
              <view class="flex-row">
                <view class="flex-col justify-start items-center text-wrapper button_2">
                  <text class="font_4 text_11">我现在有</text>
                </view>
                <view class="ml-10 flex-col justify-start items-center text-wrapper button_3">
                  <text class="font_5 text_12">目前没有</text>
                </view>
              </view>
              <view class="mt-10 flex-row">
                <view class="flex-col justify-start items-center text-wrapper button_3">
                  <text class="font_5 text_13">不清楚</text>
                </view>
                <view class="ml-10 flex-col justify-start items-center text-wrapper button_3">
                  <text class="font_5">其他情况</text>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="flex-col section_7">
          <text class="self-start font_3 text_14">联系人姓名</text>
          <view class="mt-14 flex-col justify-start items-start text-wrapper_2 input">
            <text class="font_6 text_15">输入联系人姓名</text>
          </view>
          <text class="mt-14 self-start font_3 text_16">联系电话</text>
          <view class="mt-14 flex-col justify-start items-start text-wrapper_2 input">
            <text class="font_6 text_15">请输入联系人电话</text>
          </view>
        </view>
      </view>
    </view>
    <view class="mt-30 flex-col justify-start items-center button_4 text-wrapper_3">
      <text class="font text_17">免费咨询</text>
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
.mt-25 {
  margin-top: 50rpx;
}
.mt-15 {
  margin-top: 30rpx;
}
.ml-5 {
  margin-left: 10rpx;
}
.ml-19 {
  margin-left: 38rpx;
}
.mt-5 {
  margin-top: 10rpx;
}
.page {
  background-color: #ffffff;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .group_2 {
    padding-bottom: 62rpx;
    overflow-y: auto;
    .section_5 {
      padding: 64rpx 32rpx;
      background-image: linear-gradient(295.6deg, #255ef6 0%, #4189f7 100%);
      .text_3 {
        color: #ffffff;
        line-height: 29.92rpx;
        font-weight: unset;
      }
      .group_3 {
        margin-top: 160rpx;
        .button {
          padding: 12rpx 0;
          background-color: #ffffff33;
          border-radius: 64rpx;
          width: 120rpx;
          height: 40rpx;
          .font_2 {
            font-size: 20rpx;
            font-family: Source Han Sans CN;
            line-height: 18.56rpx;
            color: #ffffff;
          }
          .text_5 {
            line-height: 18.38rpx;
          }
          .text_6 {
            line-height: 18.6rpx;
          }
        }
      }
      .pos_3 {
        position: absolute;
        left: 32.9rpx;
        right: 12rpx;
        top: 0;
        .image_7 {
          margin-left: 392rpx;
          width: 314rpx;
          height: 360rpx;
        }
        .text_4 {
          color: #ffffff;
          font-size: 64rpx;
          font-family: Source Han Sans CN;
          font-weight: 700;
          line-height: 60.16rpx;
          letter-spacing: 2.56rpx;
          text-shadow: 4rpx 2rpx 2rpx #00000040;
        }
        .pos_4 {
          position: absolute;
          left: 0;
          top: 137.54rpx;
        }
      }
    }
    .group_4 {
      padding: 0 32rpx 40rpx;
      .section_6 {
        background-color: #1890ff;
        border-radius: 4rpx;
        width: 4rpx;
        height: 24rpx;
      }
      .text-wrapper {
        flex: 1 1 330rpx;
        .font_4 {
          font-size: 28rpx;
          font-family: PingFang SC;
          line-height: 25.82rpx;
          color: #ffffff;
        }
        .text_7 {
          line-height: 25.7rpx;
        }
        .text_11 {
          line-height: 25.96rpx;
        }
        .text_12 {
          line-height: 25.88rpx;
        }
        .text_13 {
          line-height: 25.68rpx;
        }
      }
      .button_2 {
        padding: 24rpx 0;
        background-color: #1890ff;
        border-radius: 8rpx;
        height: 76rpx;
      }
      .button_3 {
        padding: 24rpx 0;
        border-radius: 8rpx;
        height: 76rpx;
        border-left: solid 2rpx #0000001a;
        border-right: solid 2rpx #0000001a;
        border-top: solid 2rpx #0000001a;
        border-bottom: solid 2rpx #0000001a;
        .text_8 {
          line-height: 25.7rpx;
        }
        .text_9 {
          line-height: 26.04rpx;
        }
      }
      .view {
        flex: 1 1 330rpx;
      }
      .font_5 {
        font-size: 28rpx;
        font-family: PingFang SC;
        line-height: 25.82rpx;
        color: #00000080;
      }
      .view_2 {
        flex: 1 1 330rpx;
      }
      .text_10 {
        line-height: 25.98rpx;
      }
    }
    .section_7 {
      padding: 28rpx 32rpx 20rpx;
      background-color: #ffffff;
      .text_14 {
        line-height: 25.92rpx;
      }
      .text-wrapper_2 {
        align-self: stretch;
        .font_6 {
          font-size: 28rpx;
          font-family: PingFang SC;
          line-height: 25.82rpx;
          color: #c3c4c7;
        }
        .text_15 {
          margin-left: 32rpx;
          line-height: 25.84rpx;
        }
      }
      .input {
        padding: 24rpx 0 20rpx;
        border-radius: 8rpx;
        overflow: hidden;
        border-left: solid 2rpx #0000001a;
        border-right: solid 2rpx #0000001a;
        border-top: solid 2rpx #0000001a;
        border-bottom: solid 2rpx #0000001a;
      }
      .text_16 {
        line-height: 25.76rpx;
      }
    }
    .font_3 {
      font-size: 28rpx;
      font-family: PingFang SC;
      line-height: 25.82rpx;
      color: #333333;
    }
    .button_4 {
      align-self: center;
      .text_17 {
        color: #f2f2f2;
      }
    }
    .text-wrapper_3 {
      padding: 24rpx 0;
      background-image: linear-gradient(328.3deg, #255ef6 0%, #4189f7 100%);
      border-radius: 58rpx;
      width: 562rpx;
    }
    .font {
      font-size: 32rpx;
      font-family: PingFang SC;
      line-height: 30.02rpx;
      font-weight: 700;
    }
  }
  .tab-bar {
    padding: 0 14rpx;
    filter: drop-shadow(0rpx 2rpx 3rpx #00000026);
    .section_8 {
      flex: 1 1 152rpx;
      padding: 8rpx 0;
      background-color: #ffffff00;
      overflow: hidden;
      height: 98rpx;
      .image_8 {
        width: 54rpx;
        height: 54rpx;
      }
      .font_7 {
        font-size: 20rpx;
        font-family: PingFang SC;
        line-height: 18.56rpx;
        color: #666666;
      }
      .text_18 {
        line-height: 18.54rpx;
      }
      .text_19 {
        color: #1890ff;
        font-weight: 700;
        line-height: 18.76rpx;
      }
      .text_20 {
        line-height: 18.46rpx;
      }
    }
  }
}
</style>