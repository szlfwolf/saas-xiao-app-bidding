<template>
<view class="flex-col page">
  <view class="flex-col flex-1 group_2">
    <view class="flex-col group_3">
      <view class="flex-col group_4">
        <view class="flex-col self-stretch">
          <view class="flex-row justify-between">
            <text class="self-start font_2 text_3">任务信息</text>
            <view class="flex-col justify-start items-center button"><text class="font_3 text_4">已完成</text></view>
          </view>
          <view class="flex-row group_5">
            <text class="font_2 text_5">项目名称</text>
            <text class="ml-10 font_2 text_6">洛阳黄河同力水泥有限责任公司绿色新...</text>
          </view>
          <view class="flex-row items-baseline group_6">
            <text class="font_2 text_7">项目编号</text>
            <text class="ml-10 font_4">ZTW-12109196R</text>
          </view>
          <view class="flex-row items-baseline group_7">
            <text class="font_2 text_8">下单时间</text>
            <text class="font_4 ml-11">2021-10-20</text>
          </view>
        </view>
        <text class="self-start font_2 text_9 mt-27">已上传信息</text>
      </view>
      <view class="flex-col mt-15">
        <view class="flex-row list-item" v-for="(item, index) in items" :key="index">
          <view class="flex-row items-center flex-1">
            <image
              class="shrink-0 image_7"
              src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=7ddcc7b95b82432d6aaf12286317656e.png"
            />
            <text class="font_2 text_10">标准土木工程机械设备采购招.docx</text>
            <text class="font_3 text_11">856KB</text>
          </view>
          <image
            class="ml-20 shrink-0 image_7"
            src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=b10a2836e1f0cc63b5d37a6d17a6b24d.png"
          />
        </view>
      </view>
    </view>
    <view class="flex-col group_4 mt-25">
      <view class="flex-col">
        <text class="self-start font_5 text_15">已上传图像</text>
        <view class="flex-col self-stretch mt-15">
          <view class="flex-row justify-between equal-division">
            <image
              class="equal-division-item"
              src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=24371da5f8c0df549bc6b6a311c6cc99.png"
            />
            <image
              class="equal-division-item"
              src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=844058768ec087faab781a2d967c945a.png"
            />
            <image
              class="equal-division-item"
              src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=226f96bb308a6db6d9920f34c3fef4e2.png"
            />
            <image
              class="equal-division-item"
              src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=22d5e42df406d4355639370170a61a4c.png"
            />
          </view>
          <image
            class="mt-10 self-start equal-division-item"
            src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=24371da5f8c0df549bc6b6a311c6cc99.png"
          />
        </view>
      </view>
      <view class="flex-col group_8">
        <text class="self-start font_2 text_16">任务进度</text>
        <view class="flex-col self-stretch group_9">
          <view class="flex-row items-center">
            <image
              class="image_8"
              src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=4779f7745fb5ee5f0b1158a8a52d5f11.png"
            />
            <text class="font_6 text_17 ml-13">新建任务</text>
          </view>
          <view class="flex-row items-center relative group_10">
            <view class="flex-col justify-start items-center relative group_11">
              <view class="section_5"></view>
              <image
                class="image_8 pos_3"
                src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=4779f7745fb5ee5f0b1158a8a52d5f11.png"
              />
              <image
                class="image_8 pos_4"
                src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=4779f7745fb5ee5f0b1158a8a52d5f11.png"
              />
              <image
                class="image_8 pos_5"
                src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=4779f7745fb5ee5f0b1158a8a52d5f11.png"
              />
            </view>
            <view class="flex-col items-start ml-13">
              <text class="font_6 text_18">您的任务已建立，资料正在人工审核中</text>
              <text class="font text_19">2021-10-20 13:25</text>
              <text class="font_6 text_20">资料审核</text>
              <text class="font_6 text_21">您的资料已经审核完毕</text>
              <text class="font text_22">2021-10-21 10:58</text>
              <text class="font_6 text_23">支付预付金</text>
              <text class="font_6 text_24">您已成功支付预付金</text>
              <text class="font text_25">2021-10-21 16:45</text>
              <text class="font_6 text_26">标书制作</text>
              <text class="font_6 text_27">您的标书任务已完成，请查阅验收</text>
              <text class="font text_28">2021-10-25 11:45</text>
            </view>
          </view>
          <view class="flex-row items-center">
            <image
              class="image_8"
              src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=263b50178faf2852f604f78f5b76a8f3.png"
            />
            <text class="font_2 text_29 ml-13">任务完成</text>
          </view>
        </view>
        <text class="self-start font_5 text_30">您的任务已结束</text>
        <text class="self-start font text_31">2021-10-26 09:38</text>
      </view>
      <view class="flex-row justify-end items-center group_12">
        <image
          class="image_9"
          src="https://ide.code.fun/api/image?token=659129ee1bf67f00113d0f95&name=abc3fbe37d830c85c79e9af27ae8186b.png"
        />
        <text class="font_2 text_32 ml-11">删除任务</text>
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
.mt-27 {
  margin-top: 54rpx;
}
.mt-15 {
  margin-top: 30rpx;
}
.mt-25 {
  margin-top: 50rpx;
}
.ml-13 {
  margin-left: 26rpx;
}
.ml-11 {
  margin-left: 22rpx;
}
.page {
  background-color: #ffffff;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .group_2 {
    padding-bottom: 168rpx;
    overflow-y: auto;
    .group_3 {
      padding-top: 28rpx;
      .list-item {
        padding: 24rpx 32rpx;
        background-color: #ffffff;
        border-bottom: solid 1rpx #0000001a;
        .image_7 {
          width: 32rpx;
          height: 32rpx;
        }
        .text_10 {
          margin-left: 16rpx;
        }
        .text_11 {
          margin-left: 36rpx;
          text-transform: capitalize;
        }
      }
      .font_3 {
        font-size: 24rpx;
        font-family: PingFang SC;
        line-height: 17.8rpx;
        color: #00000080;
      }
    }
    .group_4 {
      padding: 0 32rpx;
      .text_3 {
        line-height: 25.98rpx;
      }
      .button {
        padding: 12rpx 0;
        background-color: #52c41a;
        border-radius: 24rpx;
        filter: drop-shadow(2rpx 2rpx 4rpx #52c41a40);
        width: 112rpx;
        height: 44rpx;
        .text_4 {
          color: #ffffff;
          line-height: 22.2rpx;
        }
      }
      .group_5 {
        margin-top: 20rpx;
        .text_5 {
          line-height: 25.88rpx;
        }
        .text_6 {
          line-height: 26.12rpx;
        }
      }
      .group_6 {
        margin-top: 36rpx;
        .text_7 {
          line-height: 25.88rpx;
        }
      }
      .group_7 {
        margin-top: 36rpx;
        .text_8 {
          line-height: 25.82rpx;
        }
      }
      .font_4 {
        font-size: 28rpx;
        font-family: PingFang SC;
        line-height: 20.78rpx;
        color: #333333;
      }
      .text_9 {
        line-height: 26.16rpx;
      }
      .font_5 {
        font-size: 28rpx;
        font-family: PingFang SC;
        line-height: 25.9rpx;
        color: #4f4f4f;
      }
      .text_15 {
        line-height: 26.1rpx;
      }
      .equal-division {
        align-self: stretch;
      }
      .equal-division-item {
        border-radius: 8rpx;
        filter: drop-shadow(0rpx 2rpx 1rpx #00000040);
        width: 156rpx;
        height: 156rpx;
      }
      .group_8 {
        margin-top: 48rpx;
        .text_16 {
          line-height: 25.92rpx;
        }
        .group_9 {
          margin-top: 36rpx;
          padding: 0 6rpx;
          .image_8 {
            width: 20rpx;
            height: 20rpx;
          }
          .font_6 {
            font-size: 28rpx;
            font-family: PingFang SC;
            line-height: 25.9rpx;
            color: #00000080;
          }
          .text_17 {
            line-height: 26.12rpx;
          }
          .group_10 {
            margin-top: -8rpx;
            .group_11 {
              width: 20rpx;
              .section_5 {
                background-color: #e6e6e6;
                width: 4rpx;
                height: 626rpx;
              }
              .pos_3 {
                position: absolute;
                left: 0;
                right: 0;
                top: 142rpx;
              }
              .pos_4 {
                position: absolute;
                left: 0;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
              }
              .pos_5 {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 144rpx;
              }
            }
            .text_18 {
              line-height: 27.42rpx;
            }
            .text_19 {
              margin-top: 24rpx;
            }
            .text_20 {
              margin-top: 40rpx;
              line-height: 26.06rpx;
            }
            .text_21 {
              margin-top: 24rpx;
            }
            .text_22 {
              margin-top: 24rpx;
            }
            .text_23 {
              margin-top: 40rpx;
              line-height: 26.02rpx;
            }
            .text_24 {
              margin-top: 24rpx;
              line-height: 25.84rpx;
            }
            .text_25 {
              margin-top: 24rpx;
            }
            .text_26 {
              margin-top: 40rpx;
              line-height: 25.88rpx;
            }
            .text_27 {
              margin-top: 24rpx;
              line-height: 27.3rpx;
            }
            .text_28 {
              margin-top: 24rpx;
            }
          }
          .text_29 {
            color: #1890ff;
          }
        }
        .text_30 {
          margin-left: 52rpx;
          margin-top: 24rpx;
          line-height: 25.7rpx;
        }
        .font {
          font-size: 28rpx;
          font-family: PingFang SC;
          line-height: 20.78rpx;
          color: #00000080;
        }
        .text_31 {
          margin-left: 52rpx;
          margin-top: 24rpx;
          color: #4f4f4f;
        }
      }
      .group_12 {
        margin-top: 80rpx;
        padding: 0 16rpx;
        .image_9 {
          opacity: 0.8;
          width: 44rpx;
          height: 44rpx;
        }
        .text_32 {
          color: #ff4d4f;
          line-height: 25.7rpx;
          opacity: 0.8;
        }
      }
    }
    .font_2 {
      font-size: 28rpx;
      font-family: PingFang SC;
      line-height: 25.9rpx;
      color: #333333;
    }
  }
}
</style>