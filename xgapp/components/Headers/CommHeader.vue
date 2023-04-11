<template>
	<view>
		<view class="index-header" :style="{
			height:navBarHeight+'rpx',
		}">
			<!-- 通用header -->
			<i v-if="showBack" class="iconfont icon-31fanhui1" @click="backEvent" :style="{
					color:textColor,
			}">&#xe600;</i>
			<view class="header-title" :style="{
				fontSize:textFontSize+'rpx',
				color:textColor,
			}">{{title}}</view>
		</view>
		<view :style="{height:navBarHeight+'rpx'}"></view>
	</view>
	
</template>

<script>
	import {
		systemInfo
	} from '@/utils/systemInfo.js'
	export default {
		name: "HeadView",
		props: {
			title:{
				type:String,
				default:'设备管理'
			},
			textFontSize:{
				type: Number,
				default: 32 //px
				// default: 30 //px
			},
			textColor:{
				type: String,
				default: '#fff' //px
				// default: '#2e2e2e' //px
			},
      showBack: {
        type: Boolean,
        default: true
      }
		},
		computed: {
			
		},
		data() {
			return {
				statusBarHeight: 20, //状态栏高度
				navBarHeight:0,
			};
		},
		methods: {
			backEvent() {
				uni.navigateBack({
					delta: 1
				})
			}
		},
		created() {
			const SystemInfomations = systemInfo()
			this.statusBarHeight = SystemInfomations.statusBarHeight||0 //状态栏高度
			this.navBarHeight = this.statusBarHeight+88
			// this.navBarHeight = this.statusBarHeight+70
		},
		mounted(){
			
			
			
		}
	}
</script>

<style scoped lang="scss">
	.index-header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99999;
		background-color: #00479d;
		//background-color: #fff;
	}
	.iconfont{
		// color: #fff;
		// margin-left: 35rpx;
		// margin-top: 45rpx;
		position: absolute;
		left: 30rpx;
		bottom: 50%;
    transform: translateY(50%);
		font-size: 32rpx;
		display: block;
	}
	.header-title{
		width: 500rpx;
		position: absolute;
		left: 125rpx;
		bottom: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: center;
		float: left;
		//line-height: 70rpx;
		line-height: 88rpx;

	}
</style>
