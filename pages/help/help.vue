<template>
<view class="flex-col page">
  <view class="flex-col flex-1 group_2">
    <view class="flex-col section_5">
      <view class="flex-row">
        <view class="section_6"></view>
        <text class="font text_3 ml-5">新手指引</text>
      </view>
      <view class="flex-row justify-between items-center group_3">
        <text class="font text_4">如何进行标书咨询？</text>
        <image
          class="image_7"
          src="@/static/help/92729c3d9edee381614afc768d37c8db.png"
        />
      </view>
      <view class="flex-row justify-between items-center group_4">
        <text class="font text_5">如何上传突破图片、文件和压缩包？</text>
        <image
          class="image_7"
          src="@/static/help/92729c3d9edee381614afc768d37c8db.png"
        />
      </view>
      <view class="flex-row justify-between items-center group_5">
        <text class="font text_6">咨询后多久能收到回复？</text>
        <image
          class="image_7"
          src="@/static/help/92729c3d9edee381614afc768d37c8db.png"
        />
      </view>
      <view class="flex-row justify-between items-center group_6">
        <text class="font">不同类型的项目如何收费？</text>
        <image
          class="image_7"
          src="@/static/help/92729c3d9edee381614afc768d37c8db.png"
        />
      </view>
    </view>
    <view class="mt-10 flex-col section_5">
      <view class="flex-row">
        <view class="section_6"></view>
        <text class="font text_7 ml-5">常见问题</text>
      </view>
      <view class="flex-row justify-between items-center group_3">
        <text class="font text_8">图片或文件上传失败后怎么做？</text>
        <image
          class="image_7"
          src="@/static/help/92729c3d9edee381614afc768d37c8db.png"
        />
      </view>
      <view class="flex-row justify-between items-center group_4">
        <text class="font text_9">下载的标书模板为何打不开？</text>
        <image
          class="image_7"
          src="@/static/help/92729c3d9edee381614afc768d37c8db.png"
        />
      </view>
      <view class="flex-row justify-between items-center group_5">
        <text class="font text_10">文件审核流程和显示状态说明！</text>
        <image
          class="image_7"
          src="@/static/help/92729c3d9edee381614afc768d37c8db.png"
        />
      </view>
      <view class="flex-row justify-between items-center group_6">
        <text class="font text_11">如何查看我发布的任务进度？</text>
        <image
          class="image_7"
          src="@/static/help/92729c3d9edee381614afc768d37c8db.png"
        />
      </view>
      <view class="flex-row justify-between items-center group_7">
        <text class="font">可以使用其他方式发送文件么？</text>
        <image
          class="image_7"
          src="@/static/help/92729c3d9edee381614afc768d37c8db.png"
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
.ml-5 {
  margin-left: 10rpx;
}
.page {
  background-color: #f7f7f7;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .group_2 {
    padding-bottom: 432rpx;
    overflow-y: auto;
    .section_5 {
      padding: 28rpx 32rpx 40rpx;
      background-color: #ffffff;
      .section_6 {
        background-color: #1890ff;
        border-radius: 4rpx;
        width: 4rpx;
        height: 24rpx;
      }
      .font {
        font-size: 28rpx;
        font-family: PingFang SC;
        line-height: 26.04rpx;
        color: #333333;
      }
      .text_3 {
        line-height: 26.12rpx;
      }
      .group_3 {
        margin-top: 48rpx;
        .text_4 {
          line-height: 26.02rpx;
        }
        .text_8 {
          line-height: 26.1rpx;
        }
      }
      .group_4 {
        margin-top: 60rpx;
        .text_5 {
          line-height: 26.16rpx;
        }
        .text_9 {
          line-height: 25.92rpx;
        }
      }
      .image_7 {
        width: 32rpx;
        height: 32rpx;
      }
      .group_5 {
        margin-top: 60rpx;
        .text_6 {
          line-height: 26.02rpx;
        }
        .text_10 {
          line-height: 26.12rpx;
        }
      }
      .group_6 {
        margin-top: 60rpx;
        .text_11 {
          line-height: 25.98rpx;
        }
      }
      .text_7 {
        line-height: 25.96rpx;
      }
      .group_7 {
        margin-top: 60rpx;
      }
    }
  }
}
</style>