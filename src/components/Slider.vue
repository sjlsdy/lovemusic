<template>
	<div>
		<div class="slider-frame" v-on:touchstart="touchstartFun" v-on:touchend="touchendFun" v-on:touchmove="touchmoveFun">
			<ul v-bind:style="silderStyle">
				<li v-for="val in pic">
					<img v-bind:src="val.src">
				</li>
			</ul>
		</div>
		<br />=====<br />
		{{sliderLeft}}
		<br />=====<br />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pic: [{
					href: "http://www.baidu.com",
					src: "/static/img/e48b590bdaf5000001250c94089f.934f4fd.jpg"
				}, {
					href: "http://www.baidu.com",
					src: "http://img.zcool.cn/community/focus/af93591122690000015a1c6f0be5.jpg"
				}, {
					href: "http://www.baidu.com",
					src: "http://img.zcool.cn/community/focus/779e5911224b0000015a1cb23867.jpg"
				}, {
					href: "http://www.baidu.com",
					src: "http://img.zcool.cn/community/focus/e25b5910f8b70000015a1c871cdc.jpg"
				}, {
					href: "http://www.baidu.com",
					src: "http://img.zcool.cn/community/focus/21975910f89a0000015a1c15cd46.jpg"
				}, {
					href: "http://www.baidu.com",
					src: "http://img.zcool.cn/community/focus/21975910f89a0000015a1c15cd46.jpg"
				}],
				picNum: 300,
				silderStyle: {
					left: 0 + 'px',
					width: (320 * 5) + 'px',
					height: this.mapHeight + 'px',
					transition: 'left 1s'
				},
				startX: 0,
				startY: 0,
				endX: 0,
				endY: 0,
				countX: 0,
				mouseX: 0,
				mouseY: 0,
				sliderLeft: 0
			}
		},
		methods: {
			touchstartFun() {
				var touch = event.targetTouches[0];
				this.startX = touch.pageX;
				this.startY = touch.pageY;
				this.endX = touch.pageX;
				this.endY = touch.pageY;
				this.mouseX = touch.pageX;
				this.mouseY = touch.pageY;
			},
			touchmoveFun() {
				var mover = this.sliderLeft;
				console.log(mover)
				var touch = event.targetTouches[0];
				this.endX = touch.pageX;
				this.endY = touch.pageY;
				
				//console.log("开始点：" + this.startX + "，移动中：" +touch.pageX)
				mover = touch.pageX - this.startX;
				//console.log("移动距离:" + mover);
				
				this.countX = touch.pageX + this.startX;
				this.silderStyle.left = mover + 'px';
				this.sliderLeft = mover;
			},
			touchendFun() {
				var longbu = 0;
				this.countX = this.endX - this.startX;
				if(this.countX < 0) {
					longbu = Math.ceil(-this.countX / 320)
					this.sliderLeft = -(longbu * 320) + this.sliderLeft
					this.silderStyle.left = this.sliderLeft + 'px'
				} else {
					longbu = Math.ceil(this.countX / 320);
					this.sliderLeft = longbu * 320 + this.sliderLeft;
					this.sliderLeft = this.sliderLeft > 0 ? 0 : this.sliderLeft;
					this.silderStyle.left = this.sliderLeft + 'px';
				}
				//console.log("移动总距离:" + this.countX)
			}
		}
	}
</script>

<style>
	.slider-frame {
		width: 320px;
		height: 240px;
		overflow: hidden;
		position: relative;
		background: #F9F9F9;
	}
	
	.slider-frame ul {
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.slider-frame ul li {
		width: 320px;
		float: left;
	}
	
	.slider-frame ul li img {
		display: block;
		width: 100%;
		height: 240px;
	}
</style>