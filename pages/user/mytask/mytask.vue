<template>
<view class="flex-col page">
  <view class="flex-col justify-start flex-1 group_2">
    <view class="flex-col">
      <view class="flex-col section_5">
        <view class="flex-row justify-between items-center self-stretch group_3">
          <text class="font text_3">全部</text>
          <text class="font_2 text_4">待审核</text>
          <text class="font_2 text_5">制作中</text>
          <text class="font_2 text_6">已完成</text>
        </view>
        <view class="self-start section_6"></view>
      </view>
      <view class="flex-col list">
        <view class="flex-row items-center list-item mt-11" v-for="(item, index) in items" :key="index">
          <view class="flex-col flex-1">
            <text class="font_3">洛阳黄河同力水泥有限责任公司绿色新...</text>
            <view class="flex-row items-center mt-13">
              <text class="font_5 text_8">类型:服务标书</text>
              <text class="font_6 text_8 ml-21">2021-10-24</text>
            </view>
          </view>
          <view class="ml-20 flex-col justify-start items-center button text-wrapper">
			<navigator url="/pages/user/mytask_detail/mytask_detail">
            <text class="font_4 text_7">待审核</text>
			</navigator>
          </view>
        </view>
      </view>
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
      items: [null, null, null],
    };
  },

  methods: {},
};
</script>

<style scoped lang="scss">
.mt-11 {
  margin-top: 22rpx;
}
.mt-13 {
  margin-top: 26rpx;
}
.ml-21 {
  margin-left: 42rpx;
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
      padding: 0 60rpx 20rpx;
      background-color: #ffffff;
      .group_3 {
        padding: 28rpx 0 16rpx;
        .font {
          font-size: 32rpx;
          font-family: PingFang SC;
          line-height: 29.82rpx;
          font-weight: 700;
        }
        .text_3 {
          color: #1890ff;
        }
        .font_2 {
          font-size: 28rpx;
          font-family: PingFang SC;
          line-height: 26.18rpx;
          color: #333333;
        }
        .text_4 {
          line-height: 26.02rpx;
        }
        .text_5 {
          line-height: 26.04rpx;
        }
        .text_6 {
          margin-right: 24rpx;
          line-height: 25.9rpx;
        }
      }
      .section_6 {
        margin-left: 4rpx;
        background-color: #1890ff;
        border-radius: 2rpx;
        width: 52rpx;
        height: 4rpx;
      }
    }
    .list {
      padding-bottom: 912rpx;
      .list-item {
        padding: 28rpx 32rpx;
        background-color: #ffffff;
        border-radius: 4rpx;
        border-bottom: solid 1rpx #0000001a;
        &:first-child {
          margin-top: 0;
        }
        .font_3 {
          font-size: 28rpx;
          font-family: PingFang SC;
          line-height: 26.18rpx;
          color: #4f4f4f;
        }
        .font_5 {
          font-size: 24rpx;
          font-family: PingFang SC;
          line-height: 22.04rpx;
          color: #4f4f4f;
        }
        .text_8 {
          text-transform: capitalize;
        }
        .font_6 {
          font-size: 24rpx;
          font-family: PingFang SC;
          line-height: 17.8rpx;
          color: #4f4f4f;
        }
        .button {
          flex-shrink: 0;
          .font_4 {
            font-size: 24rpx;
            font-family: PingFang SC;
            line-height: 22.04rpx;
            color: #ffffff;
          }
          .text_7 {
            line-height: 22.3rpx;
          }
        }
        .text-wrapper {
          padding: 12rpx 0;
          background-color: #fa9014;
          border-radius: 24rpx;
          width: 112rpx;
          height: 44rpx;
        }
      }
    }
  }
}
</style>