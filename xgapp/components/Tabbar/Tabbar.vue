<template>
	<view class="tab-box" :style="{
			height:tabBarHeight+'rpx'
		}">
		<view class="tab-item" v-for="(item,index) in list" :key="index" :class="item.id===active?'active':null"
			@click="chooseTabs(index)" :style="{
				width:(100/list.length)+'%'
			}">
      <view style="margin: 38rpx auto">
        <view>
          <i class="iconfont tab-iconfont" v-html="item.iconPath"></i>
        </view>
        <view class="tab-title">{{item.text}}</view>
      </view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "Tabbar",
		props: {
			active: {
				type: String,
				default: "index",
			},
		},

		data() {
			return {
				"list": [{
						"iconPath": "&#xe64d;",
						// "iconPath": "/static/tabbar/index_order1.png",
						"selectedIconPath": "",
						// "selectedIconPath": "/static/tabbar/index_order2.png",
						"pagePath": "pages/base/index/index",
						"text": "首页",
						"id": "index"
					},
					{
						"iconPath": "&#xe681;",
						"selectedIconPath": "",
						"pagePath": "pages/base/login/login",
						"text": "我的",
						"id": "mine"
					},
				],
				tabBarHeight: 140,
			};
		},
		methods: {
			/**
			 * @param {Object} index
			 * 切换选项卡
			 */
			chooseTabs(index) {
				// if (index === 4 && !uni.getStorageSync('token')) {
				// 	uni.reLaunch({
				// 		url: '/pages/base/login/login'
				// 	})
				// } else {
					let path = this.list[index].pagePath;
					uni.reLaunch({
						url: '/' + path,
					})
					uni.switchTab({
						url: '/' + path,
					})
				// }
			},

		}
	}
</script>

<style scoped lang="scss">
	.tab-box {
		position: fixed;
		z-index: 99999;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		//box-shadow: 0 -20rpx 20rpx rgba(0, 0, 0, .2);
	}

	.tab-item {
		height: 100%;
		text-align: center;
		font-size: 21rpx;
		color: #666;
		// width: ;
	}

	.tab-item.active {
		color: #00479d;
	}

	.tab-icon {
		width: 36rpx;
		height: 36rpx;
		object-fit: contain;
		display: block;
		margin: 16rpx auto 7rpx;
	}

  .tab-iconfont {
    font-size: 50rpx;
  }

  .tab-title {
    font-size: 20rpx;
    margin-top: 10rpx;
  }
</style>
