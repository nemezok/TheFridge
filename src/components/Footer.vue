<template>
  <footer id="m-footer">
  <div class="container">
				<nav>
					<ul class="menu">
						<li>
							<router-link  :to="{ name: 'Home'}">
								<i class="fo home"></i>
								<span>Главная</span>
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'Calendar'}">
								<i class="fo calendar"></i>
								<span>План блюд</span>
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'Products'}">
								<i class="fo cart"></i>
								<span>Продукты</span>
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'Book'}">
								<i class="fo book"></i>
								<span>Рецепты</span>
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'Qrcode'}">
								<i class="fo qrcode"></i>
								<span>QR-код</span>
							</router-link>
						</li>
					</ul>
				</nav>
  </div>
  </footer>
</template>

<script>
	export default {
	  name: 'Footer'
	}
</script>

<style src="../assets/style.css">
</style>