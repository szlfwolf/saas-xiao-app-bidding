<template>
<view class="flex-col page">
  <view class="flex-col flex-1 group_2">
    <view class="flex-col group_3">
      <view class="flex-row justify-between items-center self-stretch group_4">
        <text class="font_2 text_3">上传时间:2021-10-22</text>
        <view class="flex-col justify-start button"><text class="font_2 text_4">已收藏</text></view>
      </view>
      <text class="self-start font text_5 mt-11">标准土木工程机械设备采购招标文件</text>
    </view>
    <view class="flex-col group_5">
      <text class="self-start font_3">使用说明</text>
      <text class="self-stretch font_3 text_6">
        一、《标准设备采购招标文件》适用于设备采购招标。
        <br />
      </text>
      <text class="self-stretch font_3 text_7">
        二、《标准设备采购招标文件》用相同序号标示的章、节、条、款、项、目，供招标人和投标人选择使用；以空格标示的由招标人填写的内容，招标人应根据招标项目具体特点和实际需要具体化，确实没有需要填写的，在空格中用“/”标示。
        <br />
      </text>
      <text class="self-stretch font_3 text_8">
        三、招标人按照《标准设备采购招标文件》第一章的格式发布招标公告或发出投标邀请书后，将实际发布的招标公告或实际发出的投标邀请书编入出售的招标文件中，作为投标邀请。其中，招标公告应同时注明发布所在的所有媒介名称。
      </text>
    </view>
    <view class="flex-row group_6">
      <view class="flex-col justify-start items-center button_2 section_5">
        <view class="flex-col">
          <text class="self-start font_2">文档信息</text>
          <view class="mt-6 flex-row self-stretch">
            <text class="font_4">共1725页</text>
            <text class="ml-16 font_4 text_10">大小:18.68MB</text>
            <text class="ml-16 font_4 text_11">类型:Word</text>
          </view>
        </view>
      </view>
      <view class="flex-row items-center button_3 section_6">
        <image
          class="shrink-0 image_7"
          src="/static/user/download/download.png"
        />
        <text class="text_9 ml-5">下载文档</text>
      </view>
    </view>
  </view>
</view>
</template>

<script setup>

</script>

<style scoped lang="scss">
.mt-11 {
  margin-top: 22rpx;
}
.ml-5 {
  margin-left: 10rpx;
}
.page {
  background-color: #ffffff;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .group_2 {
    overflow-y: auto;
    .group_3 {
      padding: 20rpx 0;
      border-bottom: solid 1rpx #0000001a;
      .group_4 {
        padding: 0 32rpx;
        .text_3 {
          color: #4f4f4f;
          line-height: 18.68rpx;
        }
        .button {
          padding: 8rpx 0;
          background-color: #eb5757;
          border-radius: 4rpx;
          height: 36rpx;
          .text_4 {
            margin-left: 8rpx;
            margin-right: 4rpx;
            line-height: 18.38rpx;
          }
        }
      }
      .font {
        font-size: 32rpx;
        font-family: PingFang SC;
        line-height: 30.14rpx;
        font-weight: 700;
      }
      .text_5 {
        margin-left: 32rpx;
        color: #4f4f4f;
      }
    }
    .group_5 {
      margin-top: 28rpx;
      padding-left: 40rpx;
      padding-right: 28rpx;
      .font_3 {
        font-size: 28rpx;
        font-family: PingFang SC;
        line-height: 60rpx;
        color: #4f4f4f;
      }
      .text_6 {
        text-align: justify;
      }
      .text_7 {
        text-align: justify;
      }
      .text_8 {
        text-align: justify;
      }
    }
    .group_6 {
      margin-top: 344rpx;
      .button_2 {
        flex: 1 1 0;
        .font_4 {
          font-size: 24rpx;
          font-family: PingFang SC;
          line-height: 22.2rpx;
          color: #ffffff;
        }
        .text_10 {
          line-height: 22.06rpx;
        }
        .text_11 {
          line-height: 22.04rpx;
        }
      }
      .section_5 {
        padding: 24rpx 0;
        background-color: #fa9014;
        height: 98rpx;
      }
      .button_3 {
        flex-shrink: 0;
        .image_7 {
          width: 32rpx;
          height: 32rpx;
        }
        .text_9 {
          color: #ffffff;
          font-size: 28rpx;
          font-family: PingFang SC;
          font-weight: 700;
          line-height: 26.3rpx;
        }
      }
      .section_6 {
        padding: 32rpx 44rpx 32rpx 50rpx;
        background-image: linear-gradient(300.6deg, #255ef6 0%, #4189f7 100%);
        height: 98rpx;
      }
    }
    .font_2 {
      font-size: 20rpx;
      font-family: PingFang SC;
      line-height: 18.6rpx;
      color: #ffffff;
    }
  }
}
</style>