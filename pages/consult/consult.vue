<template>
<view class="flex-col page">
  <view class="flex-col flex-1 group_2">
    <view class="flex-col self-stretch">
      <image
        class="image_7"
        src="@/static/consult/9d5cc2f89e81b18ed01e7a3abd1b6c0d.png"
      />
      <view class="flex-col mt-25">
        <view class="flex-col group_4">
          <view class="flex-col">
            <view class="flex-row">
              <view class="section_6"></view>
              <text class="font_3 ml-5">选择标书类型</text>
            </view>
            <view class="mt-12 flex-row group_1">
              <view class="flex-col justify-start items-center text-wrapper button_2">
                <text class="font_4">采购类标书</text>
              </view>
              <view class="ml-10 flex-col justify-start items-center text-wrapper button_3">
                <text class="font_5 text_7">服务类标书</text>
              </view>
            </view>
            <view class="mt-12 flex-row group_1">
              <view class="flex-col justify-start items-center button_3 view">
                <text class="font_5 text_7">工程类标书</text>
              </view>
              <view class="ml-10 flex-col justify-start items-center view_2">
                <text class="font_5 text_9">专业类标书</text>
              </view>
            </view>
          </view>
          <view class="flex-col mt-25">
            <view class="flex-row">
              <view class="section_6"></view>
              <text class="font_3 text_10 ml-5">是否有招标文件</text>
            </view>
            <view class="flex-col group_1 mt-15">
              <view class="flex-row">
                <view class="flex-col justify-start items-center text-wrapper text-wrapper_1">
                  <text class="font_4 text_11">我现在有</text>
                </view>
                <view class="ml-10 flex-col justify-start items-center text-wrapper text-wrapper_4">
                  <text class="font_5 text_12">目前没有</text>
                </view>
              </view>
              <view class="mt-10 flex-row">
                <view class="flex-col justify-start items-center text-wrapper text-wrapper_5">
                  <text class="font_5 text_13">不清楚</text>
                </view>
                <view class="ml-10 flex-col justify-start items-center text-wrapper text-wrapper_6">
                  <text class="font_5">其他情况</text>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="flex-col section_7">
          <text class="self-start font_3 text_14">联系人姓名</text>
          <view class="mt-14 flex-col justify-start items-start text-wrapper_2 input">
            <text class="font_6 text_1 text_21">输入联系人姓名</text>
          </view>
          <text class="mt-14 self-start font_3 text_16">联系电话</text>
          <view class="mt-14 flex-col justify-start items-start text-wrapper_2 input">
            <text class="font_6 text_1 text_22">请输入联系人电话</text>
          </view>
        </view>
      </view>
    </view>
    <view class="mt-30 flex-col justify-start items-center button_4 text-wrapper_3">
      <text class="text_17">免费咨询</text>
    </view>
  </view>
  <view class="flex-row tab-bar">
    <view class="flex-col items-center section_8">
      <image
        class="shrink-0 image_8"
        src="@/static/consult/3a9b102abfa3c042033903f903181d34.png"
      />
      <text class="font_7 text_18 mt-5">首页</text>
    </view>
    <view class="flex-col items-center section_1 ml-19">
      <image
        class="shrink-0 image_8"
        src="@/static/consult/8be6f652e25a8061911f7ce2d0f72b9c.png"
      />
      <text class="mt-4 font_7 text_19">免费咨询</text>
    </view>
    <view class="flex-col items-center section_9 ml-19">
      <image
        class="shrink-0 image_8"
        src="@/static/consult/38c8751606990a99070ea16817aca429.png"
      />
      <text class="font_7 text_20 mt-5">标书代理</text>
    </view>
    <view class="flex-col items-center section_10 ml-19">
      <image
        class="shrink-0 image_8"
        src="@/static/consult/54eae24f506ca316a4c216506f48a42c.png"
      />
      <text class="font_7 mt-5">个人中心</text>
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
.mt-5 {
  margin-top: 10rpx;
}
.ml-19 {
  margin-left: 38rpx;
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
    .image_7 {
      width: 100vw;
      height: 48vw;
    }
    .group_4 {
      padding: 0 32rpx 40rpx;
      .section_6 {
        background-color: #1890ff;
        border-radius: 4rpx;
        width: 4rpx;
        height: 24rpx;
      }
      .group_1 {
        padding: 0 2rpx;
        .text-wrapper {
          flex: 1 1 330rpx;
          .font_4 {
            font-size: 28rpx;
            font-family: PingFang SC;
            line-height: 25.82rpx;
            color: #ffffff;
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
          padding: 25.02rpx 0 25.18rpx;
          background-color: #1890ff;
          border-radius: 8rpx;
          height: 76rpx;
        }
        .button_3 {
          padding: 25.06rpx 0 21.22rpx;
          border-radius: 8rpx;
          height: 76rpx;
          border-left: solid 2rpx #0000001a;
          border-right: solid 2rpx #0000001a;
          border-top: solid 2rpx #0000001a;
          border-bottom: solid 2rpx #0000001a;
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
        .text_7 {
          line-height: 25.7rpx;
        }
        .view_2 {
          padding: 25.04rpx 0 20.92rpx;
          flex: 1 1 330rpx;
          border-radius: 8rpx;
          height: 76rpx;
          border-left: solid 2rpx #0000001a;
          border-right: solid 2rpx #0000001a;
          border-top: solid 2rpx #0000001a;
          border-bottom: solid 2rpx #0000001a;
          .text_9 {
            line-height: 26.04rpx;
          }
        }
        .text-wrapper_1 {
          padding: 24.92rpx 0 25.12rpx;
          background-color: #1890ff;
          border-radius: 8rpx;
          height: 76rpx;
        }
        .text-wrapper_4 {
          padding: 24.98rpx 0 21.14rpx;
          border-radius: 8rpx;
          height: 76rpx;
          border-left: solid 2rpx #0000001a;
          border-right: solid 2rpx #0000001a;
          border-top: solid 2rpx #0000001a;
          border-bottom: solid 2rpx #0000001a;
        }
        .text-wrapper_5 {
          padding: 25.18rpx 0 21.14rpx;
          border-radius: 8rpx;
          height: 76rpx;
          border-left: solid 2rpx #0000001a;
          border-right: solid 2rpx #0000001a;
          border-top: solid 2rpx #0000001a;
          border-bottom: solid 2rpx #0000001a;
        }
        .text-wrapper_6 {
          padding: 24.98rpx 0 21.2rpx;
          border-radius: 8rpx;
          height: 76rpx;
          border-left: solid 2rpx #0000001a;
          border-right: solid 2rpx #0000001a;
          border-top: solid 2rpx #0000001a;
          border-bottom: solid 2rpx #0000001a;
        }
      }
      .text_10 {
        line-height: 25.98rpx;
      }
    }
    .section_7 {
      padding: 29.02rpx 32rpx 20rpx;
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
        .text_1 {
          line-height: 25.84rpx;
        }
        .text_21 {
          margin-left: 33.26rpx;
        }
        .text_22 {
          margin-left: 33.24rpx;
        }
      }
      .input {
        padding: 25.1rpx 0 21.06rpx;
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
        font-size: 32rpx;
        font-family: PingFang SC;
        font-weight: 700;
        line-height: 30.02rpx;
      }
    }
    .text-wrapper_3 {
      padding: 25.54rpx 0 24.44rpx;
      background-image: linear-gradient(328.3deg, #255ef6 0%, #4189f7 100%);
      border-radius: 58rpx;
      width: 562rpx;
    }
  }
  .tab-bar {
    padding: 0 14rpx;
    filter: drop-shadow(0rpx 2rpx 3rpx #00000026);
    .section_8 {
      padding: 9rpx 0 7.94rpx;
      flex: 1 1 152rpx;
      background-color: #ffffff00;
      overflow: hidden;
      height: 98rpx;
      .text_18 {
        line-height: 18.54rpx;
      }
    }
    .section_1 {
      padding: 9rpx 0 7.78rpx;
      flex: 1 1 152rpx;
      background-color: #ffffff00;
      overflow: hidden;
      height: 98rpx;
      .text_19 {
        color: #1890ff;
        font-weight: 700;
        line-height: 18.76rpx;
      }
    }
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
    .section_9 {
      padding: 9rpx 0 7.96rpx;
      flex: 1 1 152rpx;
      background-color: #ffffff00;
      overflow: hidden;
      height: 98rpx;
      .text_20 {
        line-height: 18.46rpx;
      }
    }
    .section_10 {
      padding: 9rpx 0 7.86rpx;
      flex: 1 1 152rpx;
      background-color: #ffffff00;
      overflow: hidden;
      height: 98rpx;
    }
  }
}
</style>