<template>
<view class="flex-col page">
  <view class="flex-col flex-1 group_2">
    <view class="flex-row justify-between items-center self-stretch group_3">
      <text class="font text_3">选择类型</text>
      <view class="flex-row items-center">
        <text class="font text_4">工程类/通信标书</text>
        <image
          class="shrink-0 image_7 ml-1"
          src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=9cbb0f0bdfb605b3fc38ad981f6e229d.png"
        />
      </view>
    </view>
    <view class="mt-30 flex-col self-stretch">
      <view class="flex-col section_5">
        <view class="flex-col">
          <view class="flex-row justify-between items-center">
            <view class="flex-row">
              <view class="shrink-0 section_6"></view>
              <text class="font ml-5">需要类型</text>
            </view>
            <view class="flex-row items-center">
              <image
                class="shrink-0 image_7"
                src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=60db9abf1d8cbcdd46451c5d3c340177.png"
              />
              <text class="ml-6 text_5">了解电子标流程</text>
            </view>
          </view>
          <view class="flex-row mt-11">
            <view class="flex-col justify-start text-wrapper"><text class="font_2 text_6">电子标书</text></view>
            <view class="ml-10 flex-col justify-start text-wrapper"><text class="font_2 text_7">纸质标书</text></view>
          </view>
        </view>
        <view class="flex-col mt-25">
          <view class="flex-col">
            <text class="self-start font text_8">项目名称</text>
            <view class="mt-14 flex-col justify-start items-start self-stretch text-wrapper_2 view">
              <text class="font_3 text_9">请输入项目名称</text>
            </view>
          </view>
          <view class="flex-col mt-25">
            <text class="self-start font text_10">项目编号</text>
            <view class="mt-14 flex-col justify-start items-start self-stretch text-wrapper_2 view_2">
              <text class="font_3 text_9">请输入项目编号</text>
            </view>
          </view>
        </view>
      </view>
      <view class="mt-10 flex-col section_5">
        <view class="flex-col">
          <text class="self-start font text_11">联系人姓名</text>
          <view class="mt-14 flex-col justify-start items-start self-stretch text-wrapper_3">
            <text class="font_3 text_12">输入联系人姓名</text>
          </view>
        </view>
        <view class="flex-col mt-25">
          <text class="self-start font text_13">联系电话</text>
          <view class="mt-14 flex-col justify-start items-start self-stretch text-wrapper_3">
            <text class="font_3 text_12">请输入联系人电话</text>
          </view>
        </view>
        <view class="flex-col mt-25">
          <text class="self-start font text_14">超大文件联系邮箱</text>
          <view class="mt-14 flex-col justify-start items-start self-stretch text-wrapper_2">
            <text class="font_3 text_9 text_15">请输入邮箱地址</text>
          </view>
        </view>
        <view class="flex-col mt-25">
          <text class="self-start font text_16">纸质标书收取地址</text>
          <view class="mt-14 flex-col justify-start items-start self-stretch text-wrapper_2">
            <text class="font_3 text_9 text_17">请输入详细的地址</text>
          </view>
        </view>
      </view>
    </view>
    <view class="mt-30 flex-col justify-start items-center button text-wrapper_4" v-on:click="goNext()">
      <text class="text_18">下一步</text>
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

  methods: {
	  goNext(){
		  uni.navigateTo({
		  	url: '/pages/bidproxy/bidproxy_confirm/bidproxy_confirm'
		  })
	  }
  },
};
</script>

<style scoped lang="scss">
.ml-5 {
  margin-left: 10rpx;
}
.ml-1 {
  margin-left: 2rpx;
}
.mt-11 {
  margin-top: 22rpx;
}
.mt-25 {
  margin-top: 50rpx;
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
    padding: 40rpx 0 62rpx;
    overflow-y: auto;
    .group_3 {
      padding: 0 32rpx;
      .text_3 {
        line-height: 25.76rpx;
      }
      .text_4 {
        color: #00000080;
        line-height: 25.98rpx;
      }
    }
    .section_5 {
      padding: 28rpx 32rpx 20rpx;
      background-color: #ffffff;
      .section_6 {
        background-color: #1890ff;
        border-radius: 4rpx;
        width: 4rpx;
        height: 24rpx;
      }
      .text_5 {
        color: #fa9014;
        font-size: 24rpx;
        font-family: PingFang SC;
        line-height: 22.48rpx;
      }
      .text-wrapper {
        padding: 16rpx 0;
        background-color: #1890ff1a;
        border-radius: 8rpx;
        height: 60rpx;
        .font_2 {
          font-size: 28rpx;
          font-family: PingFang SC;
          line-height: 25.88rpx;
          color: #1890ff;
        }
        .text_6 {
          margin-left: 20rpx;
          line-height: 25.82rpx;
        }
        .text_7 {
          margin-left: 16rpx;
          margin-right: 12rpx;
          line-height: 25.9rpx;
        }
      }
      .text_8 {
        line-height: 25.96rpx;
      }
      .text-wrapper_2 {
        padding: 24rpx 0;
        border-radius: 8rpx;
        overflow: hidden;
        border-left: solid 2rpx #0000001a;
        border-right: solid 2rpx #0000001a;
        border-top: solid 2rpx #0000001a;
        border-bottom: solid 2rpx #0000001a;
        .text_9 {
          margin-left: 32rpx;
        }
        .text_15 {
          line-height: 25.98rpx;
        }
        .text_17 {
          line-height: 25.7rpx;
        }
      }
      .view {
        margin-right: 4rpx;
      }
      .text_10 {
        line-height: 26.02rpx;
      }
      .view_2 {
        margin-right: 4rpx;
      }
      .text_11 {
        line-height: 25.92rpx;
      }
      .text-wrapper_3 {
        padding: 24rpx 0 20rpx;
        border-radius: 8rpx;
        overflow: hidden;
        border-left: solid 2rpx #0000001a;
        border-right: solid 2rpx #0000001a;
        border-top: solid 2rpx #0000001a;
        border-bottom: solid 2rpx #0000001a;
        .text_12 {
          margin-left: 32rpx;
          line-height: 25.84rpx;
        }
      }
      .font_3 {
        font-size: 28rpx;
        font-family: PingFang SC;
        line-height: 25.88rpx;
        color: #c3c4c7;
      }
      .text_13 {
        line-height: 25.76rpx;
      }
      .text_14 {
        line-height: 26.16rpx;
      }
      .text_16 {
        line-height: 25.98rpx;
      }
    }
    .font {
      font-size: 28rpx;
      font-family: PingFang SC;
      line-height: 25.88rpx;
      color: #333333;
    }
    .image_7 {
      width: 32rpx;
      height: 32rpx;
    }
    .button {
      align-self: center;
      .text_18 {
        color: #f2f2f2;
        font-size: 32rpx;
        font-family: PingFang SC;
        font-weight: 700;
        line-height: 29.8rpx;
      }
    }
    .text-wrapper_4 {
      padding: 24rpx 0;
      background-image: linear-gradient(328.3deg, #255ef6 0%, #4189f7 100%);
      border-radius: 58rpx;
      width: 562rpx;
    }
  }
  .tab-bar {
    padding: 0 14rpx;
    filter: drop-shadow(0rpx 2rpx 3rpx #00000026);
    .section_7 {
      flex: 1 1 152rpx;
      padding: 8rpx 0;
      background-color: #ffffff00;
      overflow: hidden;
      height: 98rpx;
      .image_8 {
        width: 54rpx;
        height: 54rpx;
      }
      .font_4 {
        font-size: 20rpx;
        font-family: PingFang SC;
        line-height: 18.6rpx;
        color: #666666;
      }
      .text_19 {
        line-height: 18.54rpx;
      }
      .text_20 {
        line-height: 18.64rpx;
      }
      .text_21 {
        color: #1890ff;
        font-weight: 700;
      }
      .text_22 {
        line-height: 18.56rpx;
      }
    }
  }
}
</style>