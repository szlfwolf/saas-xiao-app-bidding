<template>
<view class="flex-col page">
  <view class="flex-col flex-1 group_2">
    <view class="flex-row justify-end self-stretch section_5">
      <view class="flex-col self-center relative group_3">
        <image
          class="self-start image_7"
          src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=aa0fce47bab6c0f8078f494125ac9c70.png"
        />
        <view class="flex-col self-stretch section_6">
          <image
            class="shrink-0 self-end image_12"
            src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=c492441e1650e010e99044fddedf0122.png"
          />
          <view class="flex-row items-end self-stretch relative group_5">
            <image
              class="image_16 image_17"
              src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=7794d261cb1682a693dde4bf1f775552.png"
            />
            <image
              class="image_14 ml-3"
              src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=9742282452ded95608590236fc2490bb.png"
            />
          </view>
        </view>
        <image
          class="image_11 pos_6"
          src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=6b3e0af2fc17a5faff56d1b178146b02.png"
        />
        <image
          class="image_10 pos_5"
          src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=5b98e6ec9a48c4b7947b2f33b3593ac8.png"
        />
        <image
          class="image_13 pos_7"
          src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=63bd9e21fc751e47368f71939ee6a2e5.png"
        />
        <image
          class="image_15 pos_8"
          src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=1cfbf99d43bf91296501bcbd95bc8791.png"
        />
        <image
          class="image_9 pos_4"
          src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=2df399c27e04c3ed664ad6506c9a6a16.png"
        />
        <image
          class="image_8 pos_3"
          src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=b7a8984316231173189085af29474548.png"
        />
        <image
          class="image_16 pos_9"
          src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=aa03714926d54e5c0fef1ca2be055e29.png"
        />
      </view>
      <view class="flex-col self-start group_4">
        <text class="self-start text_3">法律法律先知晓</text>
        <text class="mt-18 self-stretch text_4">读政策 守法规</text>
        <view class="mt-18 flex-row self-stretch">
          <view class="flex-col justify-start items-center button"><text class="font_2 text_5">金典案例</text></view>
          <view class="flex-col justify-start items-center button ml-5">
            <text class="font_2 text_6">详细剖析</text>
          </view>
          <view class="flex-col justify-start items-center button ml-5">
            <text class="font_2 text_7">重点解读</text>
          </view>
        </view>
      </view>
    </view>
    <view class="flex-col justify-start items-start self-stretch section_7">
      <view class="flex-row items-baseline group_6">
        <text class="font text_8">政策法规</text>
        <text class="font_3 text_9 ml-19">政策解读</text>
      </view>
    </view>
    <view class="flex-col self-stretch">
      <view class="flex-col self-stretch list-item section_8" v-for="(item, index) in items" :key="index">
        <view class="flex-col">
          <text class="font_4">关于在政府采购活动中落实平等对待内外资企业有关政策的通知</text>
          <text class="mt-12 font_3">
            各中央预算单位，各省、自治区、直辖市、计划单列市财政厅（局），新疆生产建设兵团财政局：为构建统...
          </text>
        </view>
        <view class="mt-10 flex-row justify-between items-center">
          <view class="flex-col justify-start items-center button_2"><text class="font_5">国家级</text></view>
          <view class="flex-row items-center">
            <image
              class="shrink-0 image_18"
              src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=4297be9602057c3456c0cfe6ad178c61.png"
            />
            <text class="ml-8 font_6">2021-11-08</text>
            <text class="ml-8 font_6">13:04</text>
          </view>
        </view>
      </view>
    </view>
    <view class="self-start divider"></view>
  </view>
</view>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      items: [null, null, null],
    };
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
.ml-19 {
  margin-left: 38rpx;
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
      padding: 54rpx 20rpx 36rpx 32rpx;
      background-image: linear-gradient(295.6deg, #255ef6 0%, #4189f7 100%);
      .group_3 {
        margin-right: -696rpx;
        .image_7 {
          margin-left: 24rpx;
          width: 74rpx;
          height: 44rpx;
        }
        .section_6 {
          margin-top: 64rpx;
          padding: 24rpx 12rpx 16rpx;
          background-image: url('https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=1ad9e72d9c26d4d6380992e232ef0816.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          .image_12 {
            margin-right: 28rpx;
            opacity: 0.2;
            width: 80rpx;
            height: 46rpx;
          }
          .group_5 {
            margin-top: -8rpx;
            .image_17 {
              margin-left: 68rpx;
            }
            .image_14 {
              margin-bottom: 4rpx;
              width: 90.54rpx;
              height: 81.22rpx;
            }
          }
        }
        .image_11 {
          width: 32rpx;
          height: 80rpx;
        }
        .pos_6 {
          position: absolute;
          right: 2.32rpx;
          bottom: 86.12rpx;
        }
        .image_10 {
          width: 26rpx;
          height: 66rpx;
        }
        .pos_5 {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        .image_13 {
          opacity: 0.2;
          width: 144rpx;
          height: 84rpx;
        }
        .pos_7 {
          position: absolute;
          left: 16.86rpx;
          bottom: 24.18rpx;
        }
        .image_15 {
          width: 36rpx;
          height: 73.48rpx;
        }
        .pos_8 {
          position: absolute;
          left: 0;
          bottom: 19.76rpx;
        }
        .image_9 {
          width: 137.04rpx;
          height: 157.54rpx;
        }
        .pos_4 {
          position: absolute;
          right: 14.44rpx;
          top: 4.46rpx;
        }
        .image_8 {
          width: 144.74rpx;
          height: 235.2rpx;
        }
        .pos_3 {
          position: absolute;
          left: 14.64rpx;
          top: 5.68rpx;
        }
        .image_16 {
          width: 86rpx;
          height: 52rpx;
        }
        .pos_9 {
          position: absolute;
          left: 83.8rpx;
          bottom: 20.08rpx;
        }
      }
      .group_4 {
        margin-right: 276rpx;
        margin-top: 16rpx;
        .text_3 {
          color: #ffffff;
          font-size: 24rpx;
          font-family: Source Han Sans CN;
          line-height: 22.18rpx;
          letter-spacing: 6.96rpx;
        }
        .text_4 {
          color: #ffffff;
          font-size: 64rpx;
          font-family: Source Han Sans CN;
          font-weight: 800;
          line-height: 61.96rpx;
          letter-spacing: 2.56rpx;
          text-shadow: 4rpx 2rpx 2rpx #00000040;
        }
        .button {
          padding: 12rpx 0;
          background-color: #ffffff33;
          border-radius: 64rpx;
          width: 120rpx;
          height: 40rpx;
          .font_2 {
            font-size: 20rpx;
            font-family: Source Han Sans CN;
            line-height: 17.8rpx;
            color: #ffffff;
          }
          .text_5 {
            line-height: 18.54rpx;
          }
          .text_6 {
            line-height: 18.46rpx;
          }
          .text_7 {
            line-height: 18.5rpx;
          }
        }
      }
    }
    .section_7 {
      padding: 48rpx 0;
      background-color: #ffffff;
      border-bottom: solid 1rpx #0000001a;
      .group_6 {
        margin-left: 32rpx;
        .font {
          font-size: 32rpx;
          font-family: PingFang SC;
          font-weight: 700;
        }
        .text_8 {
          color: #1890ff;
          line-height: 29.98rpx;
        }
        .text_9 {
          line-height: 26.26rpx;
        }
      }
    }
    .list-item {
      margin-top: 20rpx;
      padding: 24rpx 32rpx;
      background-color: #ffffff;
      .font_4 {
        font-size: 28rpx;
        font-family: PingFang SC;
        line-height: 34rpx;
        font-weight: 700;
        color: #333333;
      }
      .button_2 {
        padding: 12rpx 0;
        background-color: #1890ff;
        border-radius: 4rpx;
        filter: drop-shadow(2rpx 2rpx 4rpx #1890ff80);
        width: 112rpx;
        height: 44rpx;
        .font_5 {
          font-size: 24rpx;
          font-family: PingFang SC;
          line-height: 22.2rpx;
          color: #ffffff;
        }
      }
      .image_18 {
        width: 32rpx;
        height: 32rpx;
      }
      .font_6 {
        font-size: 24rpx;
        font-family: PingFang SC;
        line-height: 17.8rpx;
        color: #333333;
      }
    }
    .section_8 {
      margin-top: 0;
    }
    .font_3 {
      font-size: 28rpx;
      font-family: PingFang SC;
      line-height: 44rpx;
      color: #333333;
    }
    .divider {
      margin-left: 32rpx;
      background-color: #0000001a;
      width: 750rpx;
      height: 1rpx;
    }
  }
}
</style>