<template>
	<div id="app">
		<Header />
		<under-construction />
	</div>
</template>

<script>
import UnderConstruction from "./components/UnderConstruction.vue";
import Header from "./components/Header.vue";

export default {
	name: "App",
	components: {
		Header,
		UnderConstruction,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	/* margin-top: 60px; */
}
</style>
