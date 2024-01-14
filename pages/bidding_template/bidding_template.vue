<template>
<view class="flex-col page">
  <view class="flex-col justify-start flex-1 group_2">
    <view class="flex-col">
      <view class="flex-col section_5">
        <view class="flex-row justify-between items-center self-stretch group_3">
          <text class="font text_3">全部</text>
          <text class="font_2 text_4">工程类</text>
          <text class="font_2 text_5">服务类</text>
          <text class="font_2">采购类</text>
        </view>
        <view class="self-start section_6"></view>
      </view>
      <view class="flex-col list">
        <view class="flex-col list-item mt-11" v-for="(item, index) in items" :key="index"  
		@click="gotoPage('/pages/bidding_template/bidding_template_detail/bidding_template_detail?sno'+item.sno)">
          <view class="flex-row items-center">
            <image
              class="shrink-0 image_7"
              src="@/static/template/c7e88cfaf2bca456b4a1698ba32907d2.png"
            />
            <text class="flex-1 font_3 text_6 ml-5">{{item.title}}</text>
          </view>
          <view class="mt-10 flex-row justify-between items-center group_4">
            <view class="flex-row items-center">
              <image
                class="shrink-0 image_9"
                src="@/static/template/d9a77ebad1ae28d4eee5187e9d134e91.png"
              />
              <text class="ml-6 font_4">2021-10-31</text>
            </view>
            <image
              class="image_8 button"
              src="@/static/template/8e79416997d3970e8eae81ad16461b87.png"
            />
          </view>
        </view>
      </view>
    </view>
  </view>
</view>
</template>

<script setup>
const items = [ {"sno":"001","title":"标准土木工程机械设备采购招标文件出版（2020）.docx"},{"sno":"002","title":"标准土木工程机械设备采购招标文件出版（2021）.docx"}]
const tabUrl = ['/pages/bidproxy/bidproxy']
			
const gotoPage = (pageUrl) => {
	if( tabUrl.indexOf(pageUrl) >= 0 ){
		uni.switchTab({
			url: pageUrl
		});
	}else{
		uni.navigateTo({
			url: pageUrl
		});	
	}	
};
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
    .section_5 {
      padding: 0 64rpx 20rpx 80rpx;
      background-color: #ffffff;
      .group_3 {
        padding: 28rpx 0 16rpx;
        .font {
          font-size: 32rpx;
          font-family: PingFang SC;
          line-height: 31.72rpx;
          font-weight: 700;
        }
        .text_3 {
          color: #1890ff;
          line-height: 29.82rpx;
        }
        .font_2 {
          font-size: 28rpx;
          font-family: PingFang SC;
          line-height: 25.78rpx;
          color: #333333;
        }
        .text_4 {
          line-height: 25.7rpx;
        }
        .text_5 {
          line-height: 25.82rpx;
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
      padding-bottom: 540rpx;
      .list-item {
        padding: 20rpx 20rpx 20rpx 32rpx;
        background-color: #ffffff;
        border-bottom: solid 1rpx #0000001a;
        &:first-child {
          margin-top: 0;
        }
        .image_7 {
          width: 72rpx;
          height: 72rpx;
        }
        .font_3 {
          font-size: 28rpx;
          font-family: PingFang SC;
          line-height: 44rpx;
          color: #4f4f4f;
        }
        .text_6 {
          text-align: justify;
        }
        .group_4 {
          padding: 0 8rpx;
          .image_9 {
            width: 32rpx;
            height: 32rpx;
          }
          .font_4 {
            font-size: 24rpx;
            font-family: PingFang SC;
            line-height: 17.8rpx;
            color: #00000080;
          }
          .image_8 {
            margin-right: 8rpx;
          }
          .button {
            filter: drop-shadow(0rpx 2rpx 2rpx #005cb240);
            border-radius: 20rpx;
            width: 84rpx;
            height: 40rpx;
          }
        }
      }
    }
  }
}
</style>