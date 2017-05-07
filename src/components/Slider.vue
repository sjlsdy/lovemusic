<template>
	<div>
		<div v-on:touchstart="myTouch">123123</div>
	</div>
</template>

<script>
	export default {
		methods: {
			myTouch() {
				console.log($event)
			}
		}
	}
</script>

<style>
</style>