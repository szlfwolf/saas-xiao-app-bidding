<template>
<view class="flex-col page">
  <view class="flex-col flex-1 group_2">
    <view class="flex-col justify-start items-start relative section_5">
      <text class="text_3">千家中标案例教你安全投标</text>
      <view class="flex-col justify-start items-start group_3 pos_3">
        <text class="text_4">看案例 学经验</text>
        <image
          class="image_7 pos_4"
          src="/static/case/46380864c5fe231039e159718c5e7d01.png"
        />
      </view>
      <view class="flex-row pos_5">
        <view class="flex-col justify-start items-center text-wrapper button">
          <text class="font_2 text_5">经典案例</text>
        </view>
        <view class="flex-col justify-start items-center text-wrapper button ml-5">
          <text class="font_2 text_6">详细剖析</text>
        </view>
        <view class="flex-col justify-start items-center text-wrapper button ml-5">
          <text class="font_2 text_7">重点解读</text>
        </view>
      </view>
    </view>
    <view class="flex-col line-tabs">
      <view class="flex-col justify-start items-start self-stretch section_6">
        <view class="flex-row items-baseline group_4">
          <text class="font text_8">最新案例</text>
          <text class="font_3 text_9 ml-19">热门案例</text>
        </view>
      </view>
      <view class="flex-col self-stretch">
        <view class="flex-col self-stretch list-item section_7" v-for="(item, index) in items" :key="index">
		<navigator url="/pages/case/case_detail/case_detail">
          <text class="self-start font_4">招标前，节能环保清单不在公布，意味着什么？</text>
          <text class="self-stretch font_3 mt-11">
            “节能产品政府采购清单”和“环境标志产品政府采购清单”不再发布了！从2019年4月1日起，对政府采购节...
          </text>
          <view class="flex-row justify-between items-center self-stretch mt-11">
            <view class="flex-col justify-start items-center button_2"><text class="font_5">工程类</text></view>
            <view class="flex-row items-center group_5">
              <image
                class="shrink-0 image_8"
                src="@/static/index/clock.png"
              />
              <text class="ml-6 font_6">2021-11-11</text>
            </view>
          </view>
		</navigator>
        </view>
      </view>
      <view class="self-start divider"></view>
    </view>
    <view class="self-start divider"></view>
  </view>
</view>
</template>

<script setup>
const items= [null, null, null,null,null];
</script>

<style scoped lang="scss">
.ml-5 {
  margin-left: 10rpx;
}
.ml-19 {
  margin-left: 38rpx;
}
.mt-11 {
  margin-top: 22rpx;
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
      padding: 76rpx 0 260rpx;
      background-image: linear-gradient(295.6deg, #255ef6 0%, #4189f7 100%);
      .text_3 {
        margin-left: 20rpx;
        color: #ffffff;
        font-size: 24rpx;
        font-family: Source Han Sans CN;
        line-height: 22.34rpx;
        letter-spacing: 6.96rpx;
      }
      .group_3 {
        padding: 84rpx 0 140rpx;
        .text_4 {
          color: #ffffff;
          font-size: 64rpx;
          font-family: Source Han Sans CN;
          font-weight: 800;
          line-height: 61.88rpx;
          letter-spacing: 2.56rpx;
          text-shadow: 4rpx 2rpx 2rpx #00000040;
        }
        .image_7 {
          width: 318rpx;
          height: 286rpx;
        }
        .pos_4 {
          position: absolute;
          right: 0;
          bottom: 0;
        }
      }
      .pos_3 {
        position: absolute;
        left: 19.08rpx;
        right: 13.14rpx;
        top: 58rpx;
      }
      .pos_5 {
        position: absolute;
        left: 18rpx;
        top: 236rpx;
        .text-wrapper {
          flex: 1 1 120rpx;
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
        .button {
          padding: 12rpx 0;
          background-color: #ffffff33;
          border-radius: 64rpx;
          height: 40rpx;
        }
      }
    }
    .line-tabs {
      padding-bottom: 158rpx;
      .section_6 {
        padding: 48rpx 0;
        background-color: #ffffff;
        border-bottom: solid 1rpx #0000001a;
        .group_4 {
          margin-left: 32rpx;
          .font {
            font-size: 32rpx;
            font-family: PingFang SC;
            font-weight: 700;
          }
          .text_8 {
            color: #1890ff;
            line-height: 30.02rpx;
          }
          .text_9 {
            line-height: 26.1rpx;
          }
        }
      }
      .list-item {
        margin-top: 20rpx;
        padding: 28rpx 32rpx 20rpx;
        background-color: #ffffff;
        .font_4 {
          font-size: 28rpx;
          font-family: PingFang SC;
          line-height: 28.56rpx;
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
            line-height: 22.04rpx;
            color: #ffffff;
          }
        }
        .group_5 {
          margin-right: 20rpx;
          .image_8 {
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
      }
      .section_7 {
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
}
</style>