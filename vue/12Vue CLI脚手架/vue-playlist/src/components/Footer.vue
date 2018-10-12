<template>
	<footer>
		<p>{{ copyright }} {{ title }}</p>
	</footer>
</template>

<script>
	export default {
		name: 'app-footer',
		props: {
			title: {
				type: String
			}
		},
		data() {
			return {
				copyright: "Copyright 2017 Vue Demo"
			}
		}
	}
</script>

<style scoped="scoped">
	footer {
		background: plum;
		padding: 6px;
	}
</style>