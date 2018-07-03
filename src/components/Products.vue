<template>
	<section id="user-products">
		<div class="container">Мои продукты
			<div class="product-list-manage">
				<a href="" class="btn1 scanQR"><i class="fo qrcode"></i><span>Сканировать QR - код</span></a>
				<a href="" class="btn1 addproduct"><i class="fo plus"></i><span>Добавить продукты</span></a>
			</div>
			<div class="product-list flex flex-row">
				<div class="product-wrapper" md-flex="4" sm-flex="6" v-for="prod in products">
					<div class="product expired"> <!-- Классы: epxired, expires-soon -->
						<div class="info" xs-flex="9">
							<h4 class="title">{{prod.title}}</h4>
							<div class="quantity"><span class="amount">{{prod.amount}}</span><span class="measure">{{prod.measure}}</span></div>
							<div class="expiration"><i class="fo clock"></i><span class="date">{{prod.expiration}}</span></div>
						</div>
						<div class="item-manage" xs-flex="3">
							<a href="" class="edit"><i class="fo pencil"></i></a>
							<a href="" class="delete" @click.prevent="removeProduct(prod)"><i class="fo trash"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

import store from '../store/store'

export default {
  name: 'Products',

  computed: {
    products () {
      return store.getters.Products
    }
  },

  methods: {
    removeProduct (n) {
      store.dispatch('removeProduct', n)
    }
  }
}
</script>

<style src="../assets/style.css">
</style>