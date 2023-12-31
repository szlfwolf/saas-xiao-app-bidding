<template>
<view class="flex-col page">
  <view class="flex-col flex-1 group_2">
    <view class="flex-col section_5">
      <view class="flex-row justify-between items-center self-stretch">
        <text class="font">发布日期：2021-11-11 17:58</text>
        <view class="flex-col justify-start items-center button"><text class="text_3">收藏</text></view>
      </view>
      <text class="self-start font text_4">发布机构：河南安创工程招标管理有限公司</text>
      <text class="self-start font text_5">浏览次数：1190</text>
      <text class="self-stretch text_6">河南科技大学图书馆2021年图书、期刊采购项目-中标公告</text>
    </view>
    <view class="flex-col group_3">
      <text class="self-start font_2 text_7">
        一、项目基本情况
        <br />
      </text>
      <text class="self-start font_2 text_8">1、采购项目编号：豫财招标采购-2021-1106</text>
      <text class="self-stretch font_2 text_9">
        2、采购项目名称：河南科技大学图书馆2021年图书、期刊采购项目
        <br />
      </text>
      <text class="self-start font_2">3、采购方式：公开招标</text>
      <text class="self-start font_2">4、招标公告发布日期：2021年10月09日</text>
      <text class="self-start font_2">5、评审日期：2021年11月10日</text>
      <text class="self-stretch font_2 text_10">
        二、采购项目用途、数量、简要技术要求、合同履行日期：
        <br />
      </text>
      <text class="self-start font_2">1）项目编号：洛驻政采招标(2021)0057号</text>
      <text class="self-stretch font_2 text_11">
        2）包1、包2、包3为自科图书，包4、包5为社科图书；自科、社科划分依据中图法，A-K类图书为自科、N-Z类图书为社科。
        <br />
      </text>
      <view class="flex-col self-stretch relative">
        <text class="font_2 text_12">
          3）投标供应商必须按采购人的要求为采购的图书分类、编目、加盖馆藏章、粘贴条形码、粘贴磁条、加贴书标、加贴色标、典藏上架并保证加工质量。
          <br />
        </text>
        <text class="font_2 text_13">
          4）本次项目投标供应商所提供书源要求来自正规渠道，所供图书要求内容健康、学术研究性强，必须是正规的、大型的、权威的出版社的出版物。
        </text>
        <image
          class="image_7 pos_3"
          src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=b150a353e65e80fa00971b5502dceb96.png"
        />
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
    return {};
  },

  methods: {},
};
</script>

<style scoped lang="scss">
.page {
  background-color: #ffffff;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .group_2 {
    overflow-y: auto;
    .section_5 {
      padding: 20rpx 32rpx 40rpx;
      background-color: #ffffff;
      border-bottom: solid 1rpx #0000001a;
      .font {
        font-size: 28rpx;
        font-family: PingFang SC;
        line-height: 25.84rpx;
        color: #333333;
      }
      .button {
        padding: 8rpx 0;
        background-color: #ededed;
        border-radius: 4rpx;
        width: 76rpx;
        height: 36rpx;
        .text_3 {
          color: #00000080;
          font-size: 20rpx;
          font-family: PingFang SC;
          line-height: 18.38rpx;
        }
      }
      .text_4 {
        margin-top: 16rpx;
      }
      .text_5 {
        margin-top: 20rpx;
        line-height: 25.98rpx;
      }
      .text_6 {
        margin-top: 32rpx;
        color: #333333;
        font-size: 32rpx;
        font-family: PingFang SC;
        font-weight: 700;
        line-height: 44rpx;
      }
    }
    .group_3 {
      margin-bottom: -16rpx;
      padding: 20rpx 32rpx 0;
      height: 1161.02rpx;
      .font_2 {
        font-size: 28rpx;
        font-family: PingFang SC;
        line-height: 60rpx;
        color: #333333;
      }
      .text_7 {
        text-align: justify;
      }
      .text_8 {
        margin-top: -12rpx;
      }
      .text_9 {
        text-align: justify;
      }
      .text_10 {
        text-align: justify;
      }
      .text_11 {
        text-align: justify;
      }
      .text_12 {
        text-align: justify;
      }
      .text_13 {
        text-align: justify;
      }
      .image_7 {
        filter: drop-shadow(2rpx 4rpx 4rpx #1890ff40);
        border-radius: 80rpx;
        width: 88rpx;
        height: 88rpx;
      }
      .pos_3 {
        position: absolute;
        right: 2.8rpx;
        bottom: 119.02rpx;
      }
    }
  }
}
</style>