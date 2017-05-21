<template>
	<div>
		<div class="header">
			<div class="left">UPTV</div>
			<div class="right">
				<router-link :to="{name:'Search'}">Search</router-link>
			</div>
		</div>

		<wd-swipe :auto="6000" style="height:240px;">
			<wd-swipe-item v-for="(val,index) in pic"><img v-bind:src="val.src" style="width: 100%;height: 100%;"></wd-swipe-item>
		</wd-swipe>

		<div class="sources">
			<ul class="sources-title">
				<li>
					<router-link :to="{name:'Register'}">推荐</router-link>
				</li>
				<li>
					<router-link :to="{name:'Register'}">电影</router-link>
				</li>
				<li>
					<router-link :to="{name:'Register'}">电视剧</router-link>
				</li>
				<li>
					<router-link :to="{name:'Register'}">音乐</router-link>
				</li>
			</ul>
			<recommendList></recommendList>
		</div>
		<div class="footer">
			<ul>
				<li><router-link :to="{name:'Index'}">首页</router-link></li>
				<li>发现</li>
				<li>圈子</li>
				<li>消息</li>
				<li>我的</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import recommendList from './movie/recommend.vue'
	export default {
		components: {
			recommendList
		},
		data() {
			return {
				pic: [{
					href: "http://www.baidu2.com",
					src: "http://img.zcool.cn/community/focus/af93591122690000015a1c6f0be5.jpg"
				}, {
					href: "http://www.baidu3.com",
					src: "http://img.zcool.cn/community/focus/779e5911224b0000015a1cb23867.jpg"
				}, {
					href: "http://www.baidu4.com",
					src: "http://img.zcool.cn/community/focus/e25b5910f8b70000015a1c871cdc.jpg"
				}, {
					href: "http://www.baidu5.com",
					src: "http://img.zcool.cn/community/focus/21975910f89a0000015a1c15cd46.jpg"
				}],
				items: [{
						src: 'http://img.zcool.cn/community/focus/a48d590d06ca0000015a1c277185.jpg',
						alt: 'images-1'
					},
					{
						src: 'http://img.zcool.cn/community/focus/a48d590d06ca0000015a1c277185.jpg',
						alt: 'images-2'
					},
					{
						src: 'http://img.zcool.cn/community/focus/a48d590d06ca0000015a1c277185.jpg',
						alt: 'images-3'
					}
				]
			}
		}
	}
</script>

<style>

</style>