<template>
	<nav class="nav">
		<ul class="container">
			<li class="nav-logo">Fungeon & Dragons</li>
			<li class="nav-link">Adventures</li>
			<li class="nav-link">Characters</li>
			<li class="nav-link">About</li>
			<mobile-menu />
		</ul>
	</nav>
</template>

<script>
import MobileMenu from "./MobileMenu.vue";
export default {
	name: "NavBar",
	components: {
		MobileMenu,
	},
};
</script>

<style lang="less" scoped>
.nav {
	margin: auto;
	padding: 15px;
	color: #cbf2ca;
	background-color: #090809;
	box-shadow: 0px 2px 11px #ccc;

	& ul {
		display: flex;
		display: -ms-flexbox;
		align-items: center;
		list-style-type: none;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

		& .nav-link {
			display: none;
		}

		& .nav-logo {
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
			flex: 1;
			font-size: 20px;
			font-weight: bold;
			margin-right: 55px;
			/* min-width: 236.141px; */
		}

		& .nav-link {
			margin-right: 25px;
		}
	}
}

@media only screen and (min-width: 600px) {
	.nav {
		& ul {
			display: flex;
			align-items: center;
			list-style-type: none;
			font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

			& .nav-link {
				display: inline-flex;
			}

			& .nav-logo::before {
				content: url(/assets/favicon/favicon-32x32.png);
				margin-right: 15px;
			}
		}
	}
}
</style>
