### nbVoiceRecord概述
 - 这是个基于uni-app 符合uni_modules 的插件
 - 无任何依赖、纯css动画
 - nb是NeverBug的意思

### 主要功能
 - 长按组件后弹出录音弹窗，松手完成录音，手指向上滑动可取消；
 - 支持各种自定义，如弹窗高度、宽度、各处文字甚至声纹波形的尺寸和颜色；
 - 已完成多端适配，自动根据授权情况提示完成授权、已获得授权才开始录音
 - endRecord回调事件附带录音文件

### 动画预览

 - 默认样式
 
![默认样式](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-613ff9e2-568b-4845-987f-93626e21bcde/84cf3c4f-f4f2-41e6-bb82-1414465a944d.gif)

 - 自定义按钮为圆形(红背景、白字)、弹窗为正方形

![正方形](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-613ff9e2-568b-4845-987f-93626e21bcde/893bf1d6-593f-40e6-aeff-12afe4ebbc37.gif)

### 基本用法：

```
<template>
	<view>
		<nb-voice-record @startRecord="start" @endRecord="end" @cancelRecord="cancel"></nb-voice-record>
	</view>
</template>

<script>
	methods: {
		start() {
			// 开始录音
		},
		end(event) {
			// 结束录音并处理得到的录音文件
			// event中，app端仅有tempFilePath字段，微信小程序还有duration和fileSize两个字段
		},
		cancel() {
			// 用户取消录音
		}
	}
</script>

```

### 全部支持参数

| 参数名			| 类型		| 默认值			| 作用						| 注意事项																												|
| -----				| -----		| ------			| -------					| ---																													|
| recordOptions		| Object	| {duration:60000}	| 录音配置					|各端支持情况不同，请自行查看[官方说明](https://uniapp.dcloud.net.cn/api/media/record-manager.html#getrecordermanager)	|
| btnStyle			| Object	| 请查看源码		| 按钮样式					|对象格式																												|
| btnHoverFontcolor	| String	| #000				| 按钮长按时文字颜色		|																														|
| btnHoverBgcolor	| String	| whitesmoke		| 按钮长按时背景颜色		|																														|
| btnDefaultText	| String	| 长按开始录音		| 初始按钮文字				|																														|
| btnRecordingText	| String	| 录音中			|  录制时按钮文字			|																														|
| vibrate			| Boolean	| 正在录制音频		|  开始时是否震动			|仅支持app/小程序																										|
| popupTitle		| String	| 正在录制音频		|  弹窗顶部文字				|																														|
| popupDefaultTips	| String	| 松手完成录音		| 录制时弹窗底部提示		|																														|
| popupCancelTips	| String	| 松手取消录音		|  滑动取消时弹窗底部提示	|																														|
| popupMaxWidth		| Number	| 600				|  弹窗展开后宽度			|注意这里几个单位都是rpx																								|
| popupMaxHeight	| Number	| 300				|  弹窗展开后高度			|																														|
| popupFixBottom	| Number	| 200				|   弹窗展开后距底部高度	|																														|
| popupBgColor		| String	| whitesmoke		|   弹窗背景颜色			|																														|
| lineHeight		| Number	| 50				|  声波高度					|																														|
| lineStartColor	| String	| royalblue			|  声波波谷时颜色色值		| 色值或者颜色名均可																									|
| lineEndColor		| String	| indianred			| 声波波峰时颜色色值		|																														|

### 作者其他插件

 - [bwinBrand多端自适应企业官网、uniCloud云端一体【用户端】](https://ext.dcloud.net.cn/plugin?id=7821)
 - [bwinBrand多端自适应企业官网、uniCloud云端一体【管理端】](https://ext.dcloud.net.cn/plugin?id=7822)
 - [bwinAgent多端、多项目全民经纪人、uniCloud云端一体【经纪人端】](https://ext.dcloud.net.cn/plugin?id=8606)
 - [bwinAgent多端、多项目全民经纪人、uniCloud云端一体【管理员端】](https://ext.dcloud.net.cn/plugin?id=8607)
 - [必闻优学，教育培训机构模板（单校区版，纯模板）](https://ext.dcloud.net.cn/plugin?id=7709)
 
### 一个有趣的社区

 - [NeverBug.cn 弹幕式互动社区](https://neverbug.cn)
 
### 联系作者
 - QQ：123060128
 - Email：karma.zhao@gmail.com
 - 官网：https://brand.neverbug.cn

