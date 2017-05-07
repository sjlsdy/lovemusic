<template>
	<div>
		<div class="header">
			<div class="left">UPTV</div>
			<div class="right">search</div>
		</div>
		<Slider :items="items"></Slider>
		==
		<div class="slide-show">
			<ul>
				<li><img src="../assets/e48b590bdaf5000001250c94089f.jpg" /></li>
				<li><img src="../assets/e48b590bdaf5000001250c94089f.jpg" /></li>
				<li><img src="../assets/e48b590bdaf5000001250c94089f.jpg" /></li>
				<li><img src="../assets/e48b590bdaf5000001250c94089f.jpg" /></li>
				<li><img src="../assets/e48b590bdaf5000001250c94089f.jpg" /></li>
			</ul>
		</div>
		==
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
				<li>首页</li>
				<li>发现</li>
				<li>圈子</li>
				<li>消息</li>
				<li>我的</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Slider from '../components/Slider.vue'
	import recommendList from './movie/recommend.vue'
	export default {
		components: {
			Slider,
			recommendList
		},
		data() {
			return {
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