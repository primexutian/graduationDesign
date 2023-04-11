
/**
 * 此js文件管理关于当前设备的机型系统信息
 */
const systemInfo = function() {
	/****************** 所有平台共有的系统信息 ********************/
	// 设备系统信息
	let systemInfomations = uni.getSystemInfoSync()
	// 机型适配比例系数
	let scaleFactor = 750 / systemInfomations.windowWidth
	// 当前机型-屏幕高度
	let windowHeight = systemInfomations.windowHeight * scaleFactor //rpx
	// 当前机型-屏幕宽度
	let windowWidth = systemInfomations.windowWidth * scaleFactor //rpx
	// 状态栏高度
	let statusBarHeight = (systemInfomations.statusBarHeight) * scaleFactor //rpx
	
	// console.log(systemInfomations.statusBarHeight,scaleFactor,systemInfomations.windowWidth)
 

	return {
		scaleFactor,
		windowHeight,
		windowWidth,
		statusBarHeight,
		statusBarHeightPx:systemInfomations.statusBarHeight
	}

}
 
export {
	systemInfo
}