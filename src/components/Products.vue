<template>
	<section id="user-products">
		<div class="container">Мои продукты
			<div class="product-list-manage">
				<a href="" class="btn1 scanQR"><i class="fo qrcode"></i><span>Сканировать QR - код</span></a>
				<a href="" class="btn1 addproduct" @click.prevent="addProductFormShowChange"><i class="fo plus"></i><span>Добавить продукты</span></a>
			</div>

			<div class="product-wrapper" md-flex="4" sm-flex="6" v-show="addProductFormShow">
				<div class="product editing"> <!-- Классы: epxired, expires-soon -->
					<div class="info" xs-flex="9">
						<h4 class="title">Название продукта</h4>
						<div class="quantity"><span class="amount">15,8</span><span class="measure">кг</span></div>
						<div class="expiration"><i class="fo clock"></i><span class="date">10 июля 2018</span></div>
					</div>
					<div class="edit-info" xs-flex="9">
						<input name="title" type="text" value="" placeholder="Название продукта" v-model='newProductTitle'>
						<div class="quantity">
							<span class="amount"><input name="amount" type="number" value="" step="0.01" placeholder="Количество" v-model='newProductAmount'></span>
							<span class="measure">
								<select name="measure" v-model='newProductMeasure'>
									<option disabled selected>Ед.измерения</option>
									<option value="кг">килограмм</option>
									<option value="л">литр</option>
									<option value="шт">штука</option>
								</select>
							</span>
						</div>
						<input name="expiration" type="date" value="" step="0.01" >
					</div>
					<div class="item-manage" xs-flex="3">
						<a href="" class="edit" @click.prevent="addProduct"><i class="fo pencil"></i></a>
						<a href="" class="delete"><i class="fo trash"></i></a>
					</div>
				</div>
			</div>

			<div class="product-list flex flex-row">
				<div class="product-wrapper" md-flex="4" sm-flex="6">
					<div class="product edit-product">
						<div class="info" xs-flex="9">
							<div class="pe-title">
								<input name="title" type="text" value="" placeholder="Название продукта">
							</div>
							<div class="pe-quantity">
								<span class="pe-amount">
									<input name="amount" type="number" value="" step="0.01" placeholder="Количество">
								</span>
								<span class="pe-measure">
									<select name="measure">
										<option disabled selected>Ед.измерения</option>
										<option value="кг">килограмм</option>
										<option value="л">литр</option>
										<option value="шт">штука</option>
									</select>
								</span>
							</div>
							<div class="pe-expiration">
								<input name="expiration" type="date" value="" step="0.01" >
							</div>
						</div>
						<div class="item-manage" xs-flex="3">
							<a href="" class="save"><i class="fo ok"></i></a>
						</div>
					</div>
				</div>

				<div class="product-wrapper" md-flex="4" sm-flex="6" v-for="prod in products">
					<div class="product expired">
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

  data () {
    return {
      addProductFormShow: false,
      newProductTitle: '',
      newProductAmount: '',
      newProductMeasure: '',
      newProductDate: ''
    }
  },

  computed: {
    products () {
      return store.getters.Products
    }
  },

  methods: {
    addProduct () {
      let n = {
        amount: this.newProductAmount,
        measure: this.newProductMeasure,
        title: this.newProductTitle
      }
      store.dispatch('addProduct', n)
    },
    removeProduct (n) {
      store.dispatch('removeProduct', n)
    },
    addProductFormShowChange () {
      this.addProductFormShow = !this.addProductFormShow
    }
  }
}
</script>

<style src="../assets/style.css">
</style>