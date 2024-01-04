<template>
<view class="flex-col page">
  <view class="flex-col flex-1 group">
    <view class="flex-row section_5">
      <image
        class="self-center image_7"
        src="/static/user/3f22133883cbe76cf616a7b10eeba089.png"
      />
      <view class="ml-16 flex-col items-start flex-1 self-start group_2">
        <text class="text_3">Katie moss</text>
        <text class="text_4 mt-13">150****5589</text>
      </view>
    </view>
    <view class="flex-row equal-division section_6">
      <view class="flex-col items-center equal-division-item" @click="gotoPage('/pages/user/history/history')">
        <text class="font_2 text_5">15</text>
        <text class="mt-10 font_3">浏览历史</text>
      </view>
      <view class="flex-col items-center group_3 equal-division-item" @click="gotoPage('/pages/user/collect/collect')">
        <text class="font_2">8</text>
        <text class="mt-10 font_3 text_7">我的收藏</text>
      </view>
      <view class="flex-col items-center group_4 equal-division-item" @click="gotoPage('/pages/user/mytask/mytask')">
        <text class="font_2">3</text>
        <text class="mt-10 font_3 text_8">我的发布</text>
      </view>
      <view class="flex-col items-center group_5 equal-division-item" @click="gotoPage('/pages/user/download/download')">
        <text class="font_2 text_6">1</text>
        <text class="mt-10 font_3 text_9">我的下载</text>
      </view>
    </view>
    <view class="flex-col group_6">
      <view class="flex-row justify-between items-center" @click="gotoPage('/pages/user/mytask/mytask')">
        <view class="flex-row items-center">
          <image
            class="shrink-0 image_8"
            src="/static/user/07756e2ca8a647d5bd223282a61e6d93.png"
          />
          <text class="font_4 ml-9">我的发布</text>
        </view>
        <image
          class="image_9"
          src="/static/user/b7010c985efcdd953a2ed889d8d517c4.png"
        />
      </view>
      <view class="flex-row justify-between items-center group_7" @click="gotoPage('/pages/user/message/message')">
        <view class="flex-row items-center">
          <image
            class="shrink-0 image_8"
            src="/static/user/818420b7d27763aac86ef12b879b7205.png"
          />
          <text class="font_4 text_10 ml-9">消息通知</text>
        </view>
        <image
          class="image_9"
          src="/static/user/b7010c985efcdd953a2ed889d8d517c4.png"
        />
      </view>
      <view class="flex-row justify-between items-center group_8">
        <view class="flex-row items-center">
          <image
            class="shrink-0 image_8"
            src="/static/user/e7b3029e29699073ab145f1d2ebea905.png"
          />
          <text class="font_4 ml-9">客服服务</text>
        </view>
        <image
          class="image_9"
          src="/static/user/b7010c985efcdd953a2ed889d8d517c4.png"
        />
      </view>
      <view class="flex-row justify-between items-center group_9">
        <view class="flex-row items-center">
          <image
            class="shrink-0 image_8"
            src="/static/user/4ddc45fca9bb1bd699e93bd2df27f891.png"
          />
          <text class="font_4 text_11 ml-9">公司介绍</text>
        </view>
        <image
          class="image_9"
          src="/static/user/b7010c985efcdd953a2ed889d8d517c4.png"
        />
      </view>
      <view class="flex-row justify-between items-center group_10" @click="gotoPage('/pages/user/feedback/feedback')">
        <view class="flex-row items-center">
          <image
            class="shrink-0 image_8"
            src="/static/user/1311bfa14795315d29953364bd2af7da.png"
          />
          <text class="font_4 text_12 ml-9">意见反馈</text>
        </view>
        <image
          class="image_9"
          src="/static/user/b7010c985efcdd953a2ed889d8d517c4.png"
        />
      </view>
      <view class="flex-row justify-between items-center group_11">
        <view class="flex-row items-center">
          <image
            class="shrink-0 image_8"
            src="/static/user/cbe0fa2234a8ea8d2c9546ada7a272c6.png"
          />
          <text class="font_4 ml-9">安全退出</text>
        </view>
        <image
          class="image_9"
          src="/static/user/b7010c985efcdd953a2ed889d8d517c4.png"
        />
      </view>
    </view>
  </view>
</view>
</template>

<script setup>
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
.mt-13 {
  margin-top: 26rpx;
}
.ml-9 {
  margin-left: 18rpx;
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
  .group {
    padding-bottom: 266rpx;
    overflow-y: auto;
    .section_5 {
      padding: 20rpx 44rpx 128rpx;
      background-color: #1890ff;
      border-radius: 0rpx 0rpx 36rpx 36rpx;
      .image_7 {
        border-radius: 50%;
        width: 140rpx;
        height: 140rpx;
      }
      .group_2 {
        margin-top: 28rpx;
        .text_3 {
          color: #ffffff;
          font-size: 40rpx;
          font-family: PingFang SC;
          font-weight: 700;
          line-height: 29.52rpx;
          text-transform: capitalize;
        }
        .text_4 {
          color: #ffffff;
          font-size: 28rpx;
          font-family: PingFang SC;
          line-height: 20.78rpx;
        }
      }
    }
    .equal-division {
      position: relative;
      margin: -88rpx 32rpx 0;
      .equal-division-item {
        padding: 8rpx 0;
        width: 157.7rpx;
        .text_5 {
          line-height: 26.2rpx;
        }
      }
      .group_3 {
        .text_7 {
          line-height: 18.42rpx;
        }
      }
      .font_2 {
        font-size: 36rpx;
        font-family: PingFang SC;
        line-height: 26.72rpx;
        font-weight: 700;
        color: #1890ff;
      }
      .group_4 {
        position: absolute;
        right: 176.1rpx;
        top: 50%;
        transform: translateY(-50%);
        .text_8 {
          line-height: 18.54rpx;
        }
      }
      .group_5 {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        .text_6 {
          line-height: 25.7rpx;
        }
        .text_9 {
          line-height: 18.48rpx;
        }
      }
    }
    .section_6 {
      padding: 40rpx 0;
      background-color: #ffffff;
      border-radius: 32rpx;
    }
    .group_6 {
      margin-top: 32rpx;
      padding: 0 48rpx;
      .image_8 {
        width: 44rpx;
        height: 44rpx;
      }
      .font_4 {
        font-size: 32rpx;
        font-family: PingFang SC;
        line-height: 29.66rpx;
        color: #333333;
      }
      .image_9 {
        width: 32rpx;
        height: 32rpx;
      }
      .group_7 {
        margin-top: 68rpx;
        .text_10 {
          line-height: 29.6rpx;
        }
      }
      .group_8 {
        margin-top: 68rpx;
      }
      .group_9 {
        margin-top: 68rpx;
        .text_11 {
          line-height: 29.6rpx;
        }
      }
      .group_10 {
        margin-top: 68rpx;
        .text_12 {
          line-height: 29.86rpx;
        }
      }
      .group_11 {
        margin-top: 88rpx;
      }
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
      .image_10 {
        width: 54rpx;
        height: 54rpx;
      }
      .font_5 {
        font-size: 20rpx;
        font-family: PingFang SC;
        line-height: 18.64rpx;
        color: #666666;
      }
      .text_13 {
        line-height: 18.54rpx;
      }
      .text_14 {
        line-height: 18.46rpx;
      }
      .text_15 {
        color: #1890ff;
        font-weight: 700;
        line-height: 18.68rpx;
      }
    }
  }
  .font_3 {
    font-size: 20rpx;
    font-family: PingFang SC;
    line-height: 18.64rpx;
    color: #00000080;
  }
}
</style>