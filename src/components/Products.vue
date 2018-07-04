<template>
	<section id="user-products">
		<div class="container">
			<div class="product-list-manage">
				<a href="" class="btn1 scanQR"><i class="fo qrcode"></i><span>Сканировать QR - код</span></a>
				<a href="" class="btn1 addproduct" @click.prevent="addProductFormShowChange"><i class="fo plus"></i><span>Добавить продукты</span></a>
			</div>
            
            <div class="product-wrapper" md-flex="4" sm-flex="6" v-show="addProductFormShow">
				<div class="product edit-product">
					<div class="info" xs-flex="9">
						<div class="pe-title">
							<input name="title" type="text" value="" placeholder="Название продукта" v-model='newProductTitle'>
						</div>
						<div class="pe-quantity">
							<span class="pe-amount">
								<input name="amount" type="number" value="" step="0.01" placeholder="Количество" v-model='newProductAmount'>
							</span>
							<span class="pe-measure">
								<select name="measure" v-model='newProductMeasure' placeholder="Ед. измерения">
									<option  selected>Ед.измерения</option>
									<option value="кг">килограмм</option>
									<option value="л">литр</option>
									<option value="шт">штука</option>
								</select>
							</span>
						</div>
						<div class="pe-expiration">
							<input name="expiration" type="date" value="" v-model='newProductExpiration' placeholder="Срок годности">
						</div>
					</div>
					<div class="item-manage" xs-flex="3">
						<a href="" class="save" @click.prevent="addProduct"><i class="fo ok"></i></a>
						<a href="" class="cancel" @click.prevent="addProductFormShowChange"><i class="fo cancel"></i></a>
					</div>
				</div>
			</div>
			

			<div class="product-list flex flex-row">
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
      newProductExpiration: ''
    }
  },

  computed: {
    products () {
      return store.getters.Products
    }
  },

  mounted () {
    store.dispatch('pageTitleChange', 'Продукты')
  },

  methods: {
    addProduct () {
      let n = {
        amount: this.newProductAmount,
        measure: this.newProductMeasure,
        title: this.newProductTitle,
        expiration: this.newProductExpiration
      }
      store.dispatch('addProduct', n)
      this.newProductAmount = ''
      this.newProductMeasure = ''
      this.newProductTitle = ''
      this.newProductExpiration = ''
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