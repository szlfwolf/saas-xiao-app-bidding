<template>
	<view class="flex-col page">
		<view class="flex-col flex-1 group_3">
			<view class="flex-col">
				<view class="flex-row items-center section_2">
					<image class="shrink-0 image_6" src="/static/index/plus.png" />
					<view class="ml-16 flex-row justify-evenly items-center flex-1 section_3">
						<image class="image_7" src="/static/index/search.png" />
						<text class="font_2 text_3 text_5">搜索你想知道的内容</text>
					</view>
					<navigator url="/pages/help/help">
						<image class="ml-16 shrink-0 image_6" src="/static/index/help.png" />
					</navigator>
				</view>
				<view class="flex-col">
					<!-- banner 轮播图 -->
					<view class="swiper" v-if="slideShows.length">
						<swiper indicator-dots="true" :autoplay="true" :circular="circular" :interval="interval"
							:duration="duration" indicator-color="rgba(255,255,255,0.6)" indicator-active-color="#fff">
							<block v-for="(item,index) in slideShows" :key="index">
								<swiper-item>
									<navigator :url='item.url' class='slide-navigator acea-row row-between-wrapper'
										hover-class='none'>
										<image :src="item.picUrl" class="banner-img" lazy-load></image>
									</navigator>
								</swiper-item>
							</block>
						</swiper>
					</view>
					<!-- <image class="banner-img" src="@/static/index/banner1.png" /> -->
					<view class="flex-row equal-division">
						<view class="flex-col items-center group_7 equal-division-item"
							v-on:click="gotoPage('/pages/bidproxy/bidproxy')">
							<image class="image_16" src="@/static/index/mid1.png" />
							<text class="mt-10 font_2 text_7">代写标书</text>
						</view>
						<view class="flex-col items-center group_7 equal-division-item"
							v-on:click="gotoPage('/pages/bidfee/bidfee')">
							<image class="image_16" src="@/static/index/mid2.png" />
							<text class="mt-10 font_2 text_7">代做预算</text>
						</view>
						<view class="flex-col items-center group_7 equal-division-item"
							v-on:click="gotoPage('/pages/bidding_template/bidding_confirm/bidding_confirm')">
							<image class="image_16" src="@/static/index/mid3.png" />
							<text class="mt-10 font_2 text_7">标书审核</text>
						</view>
						<view class="flex-col items-center group_7 equal-division-item"
							v-on:click="gotoPage('/pages/bidding_template/bidding_template')">
							<image class="image_16" src="@/static/index/mid4.png" />
							<text class="mt-10 font_2 text_7">标书模板</text>
						</view>
						<view class="flex-col items-center group_7 equal-division-item"
							v-on:click="gotoPage('/pages/winbidding/winbidding')">
							<image class="image_16" src="@/static/index/mid5.png" />
							<text class="mt-10 font_2 text_7">中标信息</text>
						</view>
					</view>
					<view class="flex-row group_8">
						<view class="flex-col justify-start items-center shrink-0 relative section_6">
							<navigator url="/pages/flow/flow">
								<image class="image_17" src="/static/index/flow1.png" />
								<image class="image_21 pos_15" src="/static/index/flow2.png" />
								<text class="font_4 pos_11">服务流程</text>
								<text class="font_5 text_7 text_9 pos_13">优质服务 保驾护航</text>
							</navigator>
						</view>
						<view class="ml-8 flex-col flex-1">
							<view class="flex-col justify-start items-end relative section_7">
								<navigator url="/pages/case/case">
									<image class="image_19 image_20" src="/static/index/case2.png" />
									<image class="image_18 pos_10" src="/static/index/case1.png" />
									<text class="font_5 text_7 text_10 pos_14">看案例 学经验</text>
									<text class="font_4 text_8 pos_12">经典案例</text>
								</navigator>
							</view>
							<view class="mt-8 flex-col justify-start section_8">
								<navigator url="/pages/rule/rule">
									<view class="flex-row justify-between items-center section_9">
										<view class="flex-col items-start">
											<text class="font_4 text_11">法规前瞻</text>
											<text class="mt-8 font_5 text_7 text_12">懂法规 守纪律</text>
										</view>
										<image class="image_19" src="/static/index/rule.png" />
									</view>
								</navigator>
							</view>
						</view>
					</view>
					<view class="flex-row justify-between group_9 view" v-if="login">
						<text class="font text_13">我的发布</text>
						<view class="flex-row items-center" v-on:click="gotoPage('/pages/user/mytask/mytask')">
							<text class="font_2 text_7 text_14">更多</text>
							<image class="shrink-0 image_7" src="/static/index/more.png" />
						</view>
					</view>
				</view>
				<view class="flex-col list" v-if="login">
					<view class="flex-col relative mt-10 list-item" v-for="(item, index) in items" :key="index">
						<view class="flex-row items-center group_10"
							v-on:click="gotoPage('/pages/user/mytask_detail/mytask_detail')">
							<text class="font text_15">{{item.title}}</text>
							<image class="ml-2 shrink-0 image_22" src="/static/index/deploy1.png" />
						</view>
						<view class="flex-col items-start group_11">
							<text class="font_6">项目编号：{{item.sno}}</text>
							<text class="font_6 text_16 mt-13">项目类型：{{item.type}}</text>
						</view>
						<view class="flex-row justify-between items-center group_12">
							<view class="flex-col justify-start items-center text-wrapper"
								v-bind:class="[item.done ? doneStyle : checkStyle ]">
								<text class="font_5 text_17">{{item.status}}</text>
							</view>
							<view class="flex-row items-center">
								<image class="shrink-0 image_23" src="/static/index/message.png" />
								<text class="font_6 text_18">发消息</text>
								<image class="shrink-0 image_23 image_24" src="/static/index/call.png" />
								<text class="font_6 text_19">打电话</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="mt-24 flex-col group_13">
				<view class="flex-row justify-between group_9">
					<text class="font text_23">我的订阅</text>
					<view class="flex-row items-center">
						<text class="font_2 text_7 text_14">更多</text>
						<image class="shrink-0 image_7" src="/static/index/more.png" />
					</view>
				</view>
				<view class="mt-14 flex-col">
					<view class="flex-col justify-start relative group_14" v-for="(item, index) in subItems"
						:key="index">
						<view class="flex-col relative section_10">
							<text class="self-stretch font_7 text_25">
								{{item.title}}
							</text>
							<view class="self-stretch divider mt-9"></view>
							<text class="self-center font_8 text_26 mt-9">
								项目基本情况 1、项目编号：{{item.sno}} 2、项目...
							</text>
							<view class="flex-row items-center self-stretch group_15 mt-9">
								<image class="image_7" src="/static/index/position.png" />
								<text class="font_2 text_27">{{item.city}}</text>
								<image class="image_7 image_25" src="/static/index/clock.png" />

								<text class="font_2 text_28">{{item.date}}</text>
							</view>
						</view>
						<view class="flex-col justify-start items-center text-wrapper_2 button_2">
							<text class="font_5 text_24">工程类</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import {
		ref
	} from 'vue';
	import { onShow, onHide, onLoad } from '@dcloudio/uni-app'
	import * as IndexApi from '@/api/index'
	import * as UserApi from '@/api/user'

	const slideShows = ref([]); // 轮播图
	const circular = ref(true);
	const interval = ref(3000);
	const duration = ref(500);
	const items = ref([]);
	const subItems = ref([]);
	const login = ref(false)
	onShow(() => {
		console.log('index show')
		const user = uni.getStorageSync("user");
		login.value = user ? true : false;
		items.value = UserApi.getDeployTask();
		subItems.value = UserApi.getSubscribeTask();
	})
	onLoad(() => {
		console.log('index Load')
		slideShows.value = IndexApi.getBanners();
	});

	const doneStyle = ref("text-wrapper-done");
	const checkStyle = ref("text-wrapper-check");

	const tabUrl = ['/pages/bidproxy/bidproxy'];
	const gotoPage = (pageUrl : String) => {
		if (tabUrl.indexOf(pageUrl) >= 0) {
			uni.switchTab({
				url: pageUrl
			});
		} else {
			uni.navigateTo({
				url: pageUrl
			});
		}
	};
</script>

<style scoped lang="scss">
	.banner-img {
		margin: 0 32rpx;
		width: 91.4667vw;
		height: 42.6667vw;
	}

	.mt-13 {
		margin-top: 26rpx;
	}

	.mt-9 {
		margin-top: 18rpx;
	}

	.mt-5 {
		margin-top: 10rpx;
	}

	.page {
		background-color: #f7f7f7;
		width: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		height: 100%;

		.group_3 {
			overflow-y: auto;

			.section_2 {
				padding: 12rpx 32rpx 24rpx;
				background-color: #f7f7f7e6;
				backdrop-filter: blur(27.18rpx);

				.image_6 {
					width: 48rpx;
					height: 48rpx;
				}

				.section_3 {
					padding: 16rpx 132rpx;
					background-color: #f2f2f2;
					border-radius: 70rpx;
					height: 64rpx;

					.text_3 {
						text-transform: capitalize;
						opacity: 0.9;
					}

					.text_5 {
						color: #979797;
						line-height: 22.04rpx;
					}
				}
			}

			.section_4 {
				margin: 0 32rpx;
				padding: 68rpx 0 196rpx;
				background-image: linear-gradient(180deg, #396afc 0%, #2948ff 100%);
				border-radius: 16rpx;

				.font_3 {
					font-size: 48rpx;
					font-family: PingFang SC;
					line-height: 58rpx;
					font-weight: 800;
					color: #ffffff;
				}

				.text_6 {
					margin-left: 52rpx;
				}

				.group_4 {
					padding-top: 112rpx;

					.image-wrapper_2 {
						opacity: 0.1;
						border-radius: 36rpx;
						background-image: url('/static/index/banner_1_1.png');
						background-size: 100% 100%;
						background-repeat: no-repeat;

						.image_13 {
							opacity: 0.1;
							border-radius: 36rpx;
							width: 92vw;
							height: 21.3333vw;
						}
					}

					.pos_6 {
						position: absolute;
						left: 39.36rpx;
						top: 85.46rpx;
					}

					.group_5 {
						padding-bottom: 8rpx;
						opacity: 0.15;
						width: 294.84rpx;

						.image_9 {
							margin-right: 28rpx;
							width: 158rpx;
							height: 238rpx;
						}

						.group_6 {
							opacity: 0.8;
							width: 294.84rpx;

							.image_10 {
								margin-right: 28rpx;
								opacity: 0.8;
								width: 158rpx;
								height: 236rpx;
							}

							.section_5 {
								background-color: #ffffffcc;
								height: 11.44rpx;
							}
						}

						.pos_4 {
							position: absolute;
							left: 0;
							right: 0;
							top: 0;
							bottom: 0;
						}
					}

					.pos_3 {
						position: absolute;
						right: 21.16rpx;
						top: 50%;
						transform: translateY(-50%);
					}

					.image_14 {
						width: 38rpx;
						height: 144rpx;
					}

					.pos_8 {
						position: absolute;
						right: 12.92rpx;
						bottom: 16.56rpx;
					}

					.image_8 {
						width: 92.08rpx;
						height: 251.04rpx;
					}

					.pos_2 {
						position: absolute;
						right: 130.88rpx;
						top: 0;
					}

					.image_11 {
						width: 101.18rpx;
						height: 200.58rpx;
					}

					.pos_5 {
						position: absolute;
						right: 169.38rpx;
						bottom: 17.44rpx;
					}

					.image_12 {
						width: 240.38rpx;
						height: 162.8rpx;
					}

					.pos_7 {
						position: absolute;
						right: 49.3rpx;
						bottom: 17.44rpx;
					}

					.image_15 {
						width: 40rpx;
						height: 8rpx;
					}

					.pos_9 {
						position: absolute;
						left: 50%;
						bottom: 12rpx;
						transform: translateX(-50%);
					}
				}

				.pos {
					position: absolute;
					left: -4rpx;
					right: 0;
					top: 48rpx;
				}
			}

			.equal-division {
				margin-top: 22rpx;

				.group_7 {
					flex: 1 1 150rpx;

					.image_16 {
						width: 64rpx;
						height: 64rpx;
					}
				}

				.equal-division-item {
					padding: 8rpx 0;
				}
			}

			.font_2 {
				font-size: 24rpx;
				font-family: PingFang SC;
				line-height: 22.16rpx;
				color: #333333;
			}

			.group_8 {
				margin-top: 32rpx;
				padding: 0 32rpx;

				.section_6 {
					background-image: linear-gradient(133.2deg, #ffa20c 0%, #ff7500 100%);
					border-radius: 8rpx;
					box-shadow: 0rpx 20rpx 20rpx -14rpx #ff770026, 0rpx 14rpx 20rpx -16rpx #ff770080, 0rpx 0rpx 8rpx #ff950840;
					width: 266rpx;
					height: 250rpx;

					.image_17 {
						opacity: 0.6;
						width: 266rpx;
						height: 250rpx;
					}

					.image_21 {
						width: 124rpx;
						height: 124rpx;
					}

					.pos_15 {
						position: absolute;
						right: 34rpx;
						bottom: 12rpx;
					}

					.pos_11 {
						position: absolute;
						left: 25.48rpx;
						top: 23.38rpx;
					}

					.text_9 {
						line-height: 22.1rpx;
					}

					.pos_13 {
						position: absolute;
						left: 24.88rpx;
						top: 68.34rpx;
					}
				}

				.section_7 {
					padding: 24rpx 0;
					background-image: linear-gradient(106deg, #7d8ffd 0%, #2352ec 99.9%);
					border-radius: 8rpx;
					box-shadow: 0rpx 20rpx 20rpx -14rpx #798dfc26, 0rpx 14rpx 20rpx -16rpx #798cfc80, 0rpx 0rpx 8rpx #7a8dfc40;

					.image_20 {
						margin-right: 32rpx;
					}

					.image_18 {
						opacity: 0.6;
						width: 404rpx;
						height: 118rpx;
					}

					.pos_10 {
						position: absolute;
						left: 0;
						right: 0;
						top: 0;
						bottom: 0;
					}

					.text_10 {
						line-height: 22.18rpx;
					}

					.pos_14 {
						position: absolute;
						left: 33.08rpx;
						bottom: 26.6rpx;
					}

					.text_8 {
						line-height: 30.12rpx;
					}

					.pos_12 {
						position: absolute;
						left: 33.34rpx;
						top: 23.5rpx;
					}
				}

				.font_4 {
					font-size: 32rpx;
					font-family: PingFang SC;
					line-height: 30.02rpx;
					font-weight: 700;
					color: #ffffff;
				}

				.section_8 {
					background-image: linear-gradient(106.3deg, #ff5e5c -0.1%, #f91a47 100%);
					border-radius: 8rpx;
					box-shadow: 0rpx 20rpx 20rpx -14rpx #fe5a5b26, 0rpx 14rpx 20rpx -16rpx #fe5a5b80, 0rpx 0rpx 8rpx #fe5b5b40;
					height: 117rpx;

					.section_9 {
						padding: 24rpx 32rpx;
						background-image: url('/static/index/case1.png');
						background-size: 100% 100%;
						background-repeat: no-repeat;

						.text_11 {
							line-height: 29.96rpx;
						}

						.text_12 {
							line-height: 22.28rpx;
						}
					}
				}

				.image_19 {
					width: 72rpx;
					height: 72rpx;
				}
			}

			.text_7 {
				text-transform: capitalize;
			}

			.group_9 {
				padding-left: 32rpx;
				padding-right: 28rpx;

				.text_13 {
					line-height: 29.88rpx;
				}

				.text_14 {
					line-height: 21.86rpx;
				}

				.text_23 {
					line-height: 29.54rpx;
					font-weight: unset;
				}
			}

			.view {
				margin-top: 48rpx;
			}

			.image_7 {
				width: 32rpx;
				height: 32rpx;
			}

			.list {
				margin-top: 28rpx;

				.list-item {
					background-color: #ffffffe6;
					box-shadow: 0rpx 6rpx 14rpx -8rpx #00000026;

					&:first-child {
						margin-top: 0;
					}

					.group_10 {
						padding: 20rpx 32rpx;
						border-bottom: solid 1rpx #00000026;

						.text_15 {
							line-height: 30.08rpx;
						}

						.image_22 {
							width: 44rpx;
							height: 44rpx;
						}
					}

					.group_11 {
						padding: 28rpx 32rpx;
						border-bottom: solid 1rpx #00000026;

						.text_16 {
							line-height: 26.12rpx;
						}
					}

					.group_12 {
						padding: 20rpx 32rpx;

						.text-wrapper {
							padding: 12rpx 0;
							border-radius: 24rpx;
							filter: drop-shadow(2rpx 2rpx 4rpx #52c41a40);
							width: 112rpx;
							height: 44rpx;

							.text_17 {
								line-height: 22.2rpx;
							}
						}

						.text-wrapper-check {
							background-color: #ffaa00;
						}

						.text-wrapper-done {
							background-color: #52c41a;
						}

						.image_23 {
							width: 36rpx;
							height: 36rpx;
						}

						.text_18 {
							margin-left: 8rpx;
							line-height: 25.96rpx;
						}

						.image_24 {
							margin-left: 24rpx;
						}

						.text_19 {
							margin-left: 8rpx;
							line-height: 25.54rpx;
						}
					}

					.font_6 {
						font-size: 28rpx;
						font-family: PingFang SC;
						line-height: 25.88rpx;
						color: #333333;
					}
				}
			}

			.font {
				font-size: 32rpx;
				font-family: PingFang SC;
				line-height: 30.02rpx;
				font-weight: 700;
				color: #333333;
			}

			.font_5 {
				font-size: 24rpx;
				font-family: PingFang SC;
				line-height: 22.16rpx;
				color: #ffffff;
			}

			.group_13 {
				margin-bottom: -98rpx;

				.group_14 {
					padding-top: 24rpx;

					.section_10 {
						padding-top: 28rpx;
						background-color: #ffffff;
						box-shadow: 0rpx 6rpx 14rpx -8rpx #00000026;

						.divider {
							background-color: #00000026;
							height: 1rpx;
						}

						.group_15 {
							padding: 24rpx 32rpx;
							border-top: solid 1rpx #00000026;

							.text_27 {
								margin-left: 8rpx;
								line-height: 22.32rpx;
							}

							.image_25 {
								margin-left: 24rpx;
							}

							.text_28 {
								margin-left: 12rpx;
								line-height: 17.8rpx;
							}
						}
					}

					.text-wrapper_2 {
						position: absolute;
						left: 32rpx;
						top: 0;

						.text_24 {
							line-height: 22.04rpx;
						}
					}

					.button_2 {
						padding: 12rpx 0;
						background-color: #1890ff;
						border-radius: 8rpx 8rpx 0rpx 0rpx;
						filter: drop-shadow(2rpx 2rpx 4rpx #1890ff80);
						width: 112rpx;
					}

					.section_11 {
						padding-top: 28rpx;
						background-color: #ffffff;
						box-shadow: 0rpx 6rpx 14rpx -8rpx #00000026;
						height: 190rpx;

						.text-wrapper_3 {
							margin-bottom: -56rpx;
							padding-top: 24rpx;
							height: 111.3rpx;
							border-top: solid 1rpx #00000026;
						}
					}

					.font_7 {
						font-size: 28rpx;
						font-family: PingFang SC;
						line-height: 44rpx;
						font-weight: 700;
						color: #333333;
					}

					.text_25 {
						margin-left: 32rpx;
						margin-right: 44rpx;
					}

					.font_8 {
						font-size: 28rpx;
						font-family: PingFang SC;
						line-height: 44rpx;
						color: #333333;
					}

					.text_26 {
						width: 662rpx;
					}
				}
			}
		}

		.tab-bar {
			padding: 8rpx 48rpx;
			filter: drop-shadow(0rpx 2rpx 3rpx #00000026);
			background-color: #ffffff;
			backdrop-filter: blur(4rpx);

			.group_16 {
				width: 82rpx;
				height: 81.12rpx;

				.text_29 {
					color: #1890ff;
					font-weight: 700;
					line-height: 18.68rpx;
				}
			}

			.group_17 {
				height: 81.1rpx;

				.text_30 {
					line-height: 18.64rpx;
				}
			}

			.image_26 {
				width: 54rpx;
				height: 54rpx;
			}

			.font_9 {
				font-size: 20rpx;
				font-family: PingFang SC;
				line-height: 18.46rpx;
				color: #666666;
			}

			.group_18 {
				height: 81.04rpx;
			}

			.group_19 {
				height: 81.14rpx;

				.text_31 {
					line-height: 18.56rpx;
				}
			}
		}
	}
</style>