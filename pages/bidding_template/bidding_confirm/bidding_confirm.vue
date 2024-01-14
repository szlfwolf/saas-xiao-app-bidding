<template>
<view class="flex-col page">
  <view class="flex-col flex-1 group_2">
    <view class="flex-col">
      <view class="flex-col section_5">
        <view class="flex-col">
          <text class="self-start font text_3">项目名称</text>
          <view class="mt-14 flex-col justify-start items-start self-stretch text-wrapper">
            <text class="font_2 text_4 text_5">请输入项目名称</text>
          </view>
        </view>
        <view class="flex-col mt-25">
          <text class="self-start font">项目编号</text>
          <view class="mt-14 flex-col justify-start items-start self-stretch text-wrapper">
            <text class="font_2 text_6 text_7">请输入项目编号</text>
          </view>
        </view>
      </view>
      <view class="mt-10 flex-col section_6">
        <view class="flex-row self-stretch group_3">
          <view class="section_7"></view>
          <text class="font text_8 ml-5">上传标书文件</text>
        </view>
        <view class="flex-col justify-start items-center self-stretch text-wrapper_2">
          <text class="font text_9">点击上传文件</text>
        </view>
        <view class="self-start group_4">
          <text class="font_3 text_10 text_11">提示：支持小于20MB以下的</text>
          <text class="font_3 text_10 text_12">word、excle、PDF</text>
          <text class="font_3 text_10">文件格式</text>
        </view>
      </view>
      <view class="mt-10 flex-col section_5">
        <view class="flex-col">
          <text class="self-start font text_13">联系人姓名</text>
          <view class="mt-14 flex-col justify-start items-start self-stretch text-wrapper_3">
            <text class="font_2 text_14 text_4">输入联系人姓名</text>
          </view>
        </view>
        <view class="flex-col mt-25">
          <text class="self-start font text_15">联系电话</text>
          <view class="mt-14 flex-col justify-start items-start self-stretch text-wrapper_3">
            <text class="font_2 text_14 text_6">请输入联系人电话</text>
          </view>
        </view>
      </view>
      <view class="mt-10 flex-col section_5">
        <text class="text-area font">备注</text>
        <view class="mt-14 flex-col justify-start items-start self-stretch text-wrapper">
          <text class="font_2 text_16">请输入备注或留言</text>
        </view>
      </view>
      <view class="mt-10 flex-col section_5">
        <text class="self-start font">审核模式：</text>
        <view class="flex-col self-stretch mt-15">
          <view class="flex-col self-stretch group_5">
            <text class="self-start font_4">1.数据服务</text>
            <text class="mt-10 self-stretch font_4">
              标书审核在提交文件后24小时内由专业制作员进行初步检查，一对一服务并由大数据支撑。
              <br />
            </text>
            <text class="mt-10 self-start font_4">2.查漏陷阱</text>
            <text class="mt-10 self-stretch font_4">
              严格规避招标文件中的陷阱，检查投标书规格、目录、排版和内容是否合规。
              <br />
            </text>
            <text class="mt-10 self-start font_4">3.专家指点</text>
            <text class="mt-10 self-stretch font_4">
              由专家对标书内容做指导，内容点对点应答，迎合评标委员会和甲方的最高标准，指导修改。
              <br />
            </text>
            <text class="mt-10 self-start font_4">4.审核反馈</text>
          </view>
          <text class="mt-10 self-start font_4">审核结束后由专业标书经理联系，提供审核结果。</text>
        </view>
      </view>
    </view>
    <view class="flex-col justify-start items-center button mt-109"><text class="text_17">提交</text></view>
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
.ml-5 {
  margin-left: 10rpx;
}
.mt-15 {
  margin-top: 30rpx;
}
.mt-109 {
  margin-top: 218rpx;
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
      padding: 28rpx 32rpx 20rpx;
      background-color: #ffffff;
      .text_3 {
        line-height: 25.96rpx;
      }
      .text-wrapper {
        padding: 24rpx 0;
        border-radius: 8rpx;
        overflow: hidden;
        border-left: solid 2rpx #0000001a;
        border-right: solid 2rpx #0000001a;
        border-top: solid 2rpx #0000001a;
        border-bottom: solid 2rpx #0000001a;
        .text_5 {
          line-height: 25.88rpx;
        }
        .text_7 {
          line-height: 25.88rpx;
        }
        .text_16 {
          margin-left: 32rpx;
          line-height: 25.9rpx;
        }
      }
      .text_13 {
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
        .text_14 {
          line-height: 25.84rpx;
        }
      }
      .font_2 {
        font-size: 28rpx;
        font-family: PingFang SC;
        line-height: 26.02rpx;
        color: #c3c4c7;
      }
      .text_4 {
        margin-left: 32rpx;
      }
      .text_15 {
        line-height: 25.76rpx;
      }
      .text_6 {
        margin-left: 32rpx;
      }
      .text-area {
        align-self: flex-start;
      }
      .group_5 {
        margin-right: 8rpx;
      }
      .font_4 {
        font-size: 28rpx;
        font-family: PingFang SC;
        line-height: 56rpx;
        color: #333333;
      }
    }
    .section_6 {
      padding: 0 32rpx 28rpx;
      background-color: #ffffff;
      .group_3 {
        padding: 28rpx 0;
        .section_7 {
          background-color: #1890ff;
          border-radius: 4rpx;
          width: 4rpx;
          height: 24rpx;
        }
        .text_8 {
          line-height: 26.1rpx;
        }
      }
      .text-wrapper_2 {
        padding: 40rpx 0;
        border-radius: 8rpx;
        border-left: dotted 2rpx #1890ff;
        border-right: dotted 2rpx #1890ff;
        border-top: dotted 2rpx #1890ff;
        border-bottom: dotted 2rpx #1890ff;
        .text_9 {
          color: #1890ff;
          line-height: 26.1rpx;
        }
      }
      .group_4 {
        margin-top: 28rpx;
        line-height: 22.28rpx;
        .font_3 {
          font-size: 24rpx;
          font-family: PingFang SC;
          line-height: 22.28rpx;
          color: #00000080;
        }
        .text_10 {
          text-transform: capitalize;
        }
        .text_11 {
          line-height: 22.12rpx;
        }
        .text_12 {
          color: #fa9014;
          line-height: 20rpx;
        }
      }
    }
    .font {
      font-size: 28rpx;
      font-family: PingFang SC;
      line-height: 26.02rpx;
      color: #333333;
    }
    .button {
      padding: 32rpx 0;
      background-image: linear-gradient(330.4deg, #255ef6 0%, #4189f7 100%);
      box-shadow: 0rpx 4rpx 4rpx #1890ff26;
      .text_17 {
        color: #ffffff;
        font-size: 32rpx;
        font-family: PingFang SC;
        line-height: 29.64rpx;
      }
    }
  }
}
</style>