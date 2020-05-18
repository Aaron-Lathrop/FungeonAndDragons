<template>
	<div class="compendium">
		<div class="container">
			<div class="title">Compendium</div>
			<div class="content">
				<ul>
					<li>Bestiary</li>
					<li>Items</li>
					<li>Locations</li>
				</ul>
			</div>
			<under-construction />
		</div>
	</div>
</template>

<script>
import UnderConstruction from "../components/UnderConstruction";
export default {
	name: "Compendium",
	components: {
		UnderConstruction,
	},
};
</script>

<style lang="less" scoped>
@import "../styles/mixins.less";
ul {
	margin: auto;
	text-align: center;
	list-style-type: none;
}
</style>
