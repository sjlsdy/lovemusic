<template>
	<div>
		<div class="slider-frame" v-on:touchstart="touchstartFun" v-on:touchend="touchendFun" v-on:touchmove="touchmoveFun">
			<ul v-bind:style="silderStyle">
				<li v-for="val in pic">
					<img v-bind:src="val.src">
				</li>
			</ul>
		</div>
		<br />=====<br />sliderLeft: {{sliderLeft}}
		<br />=====<br />sliderMover: {{sliderMover}}
		<br />=====<br />silderStyle: {{silderStyle}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pic: [{
					href: "http://www.baidu.com",
					src: "http://img.zcool.cn/community/focus/af93591122690000015a1c6f0be5.jpg"
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
					transition: ''
				},
				startX: 0,
				startY: 0,
				endX: 0,
				endY: 0,
				countX: 0,
				mouseX: 0,
				mouseY: 0,
				sliderLeft: 0,
				sliderMover: 0
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
				var touch = event.targetTouches[0];
				this.endX = touch.pageX;
				this.endY = touch.pageY;

				this.sliderLeft = (this.sliderMover + this.endX - this.startX);
				this.silderStyle.left = this.sliderLeft + 'px';
			},
			touchendFun() {
				var sheets = this.sliderLeft / 320;
				var pn = this.sliderLeft < 0 ? -1 : 1;
				sheets = pn * sheets;
				sheets = Math.ceil(sheets)
				this.sliderLeft = pn * (sheets * 320)

				const t = setTimeout(() => {
					this.silderStyle.transition = "";
				}, 1000)

				this.silderStyle.left = this.sliderLeft + 'px';
				this.silderStyle.transition = "left 1s";
				this.sliderMover = this.sliderLeft;

				/*
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
				}*/
				//console.log("移动总距离:" + this.countX)
			},
			countSecond() {
				this.silderStyle.transition = "";
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