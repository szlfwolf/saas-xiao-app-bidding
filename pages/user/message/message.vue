<template>
<view class="flex-col page">
  <view class="flex-col justify-start flex-1 group_2">
    <view class="flex-col">
      <view class="flex-col list-item mt-11" v-for="(item, index) in items" :key="index">
        <view class="flex-row justify-between items-baseline">
          <text class="font">更新公告</text>
          <text class="font_2 text_3">2021-10-27</text>
        </view>
        <view class="group_3 mt-15">
          <text class="font_3 text_4">
            新版发布，全新功能上线，能查企业商业信息，找采购、找产品、找供应商、找服务商；还有结构化数据导出，高级字段提取，做分析做报告都不是问题；还有招标预测...
          </text>
          <text class="font_4">查看详情</text>
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
.mt-15 {
  margin-top: 30rpx;
}
.page {
  background-color: #f7f7f7;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .group_2 {
    padding-bottom: 660rpx;
    overflow-y: auto;
    .list-item {
      padding: 28rpx 40rpx 16rpx;
      background-color: #ffffff;
      border-bottom: solid 1rpx #0000001a;
      &:first-child {
        margin-top: 0;
      }
      .font {
        font-size: 28rpx;
        font-family: PingFang SC;
        line-height: 26.26rpx;
        font-weight: 700;
        color: #333333;
      }
      .font_2 {
        font-size: 24rpx;
        font-family: PingFang SC;
        line-height: 17.8rpx;
        color: #00000080;
      }
      .text_3 {
        margin-right: 4rpx;
        text-transform: capitalize;
      }
      .group_3 {
        line-height: 36rpx;
        .font_3 {
          font-size: 28rpx;
          font-family: PingFang SC;
          line-height: 36rpx;
          color: #00000080;
        }
        .text_4 {
          text-align: justify;
        }
        .font_4 {
          font-size: 28rpx;
          font-family: PingFang SC;
          line-height: 36rpx;
          color: #1890ff;
        }
      }
    }
  }
}
</style>