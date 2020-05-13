<template>
	<header>
		<nav class="nav-bar">
			<ul class="container">
				<li class="nav-logo">Fungeon & Dragons</li>
				<li class="nav-link">Test</li>
				<li class="nav-link">Test</li>
				<li class="nav-link">Test</li>
				<li class="nav-link">Test</li>
				<li class="nav-link">Test</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	name: "Header",
};
</script>

<style scoped>
.nav-bar {
	margin: auto;
	padding: 15px;
	color: #cbf2ca;
	background-color: #090809;
}

.nav-bar ul {
	display: flex;
	align-items: center;
	list-style-type: none;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.nav-bar ul li {
	display: inline-flex;
}

.nav-logo {
	font-size: 20px;
	font-weight: bold;
	margin-right: 55px;
	/* min-width: 236.141px; */
}

.nav-logo::before {
	content: url(/assets/favicon/favicon-32x32.png);
	margin-right: 15px;
}

.nav-link {
	margin-left: 25px;
}
</style>
