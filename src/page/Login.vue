<template>
	<div>
		<form>
			<div>
				<input type="text" placeholder="Username" />
			</div>
			<div>
				<input type="text" placeholder="Password" />
			</div>
			<div>
				<button class="btn-link long">Sign in</button>
			</div>
			<div>
				<a class="btn-link long">Sign up</a>
			</div>
			<div>还没有帐户？
				<router-link :to="{name:'Register'}">注册一个</router-link>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		methods: {
			onValuesChange(picker, values) {
				if(values[0] > values[1]) {
					console.log(this)
					picker.setSlotValue(1, values[0]);
				}
			}
		},
		data() {
			return {
				slots: [{
					flex: 1,
					values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
					className: 'slot1',
					textAlign: 'right'
				}, {
					divider: true,
					content: '-',
					className: 'slot2'
				}, {
					flex: 1,
					values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
					className: 'slot3',
					textAlign: 'left'
				}]
			};
		}
	};
</script>

<style>

</style>