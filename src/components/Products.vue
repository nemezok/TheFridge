<template>
	<section id="user-products">
		<div class="container">
			<form action="" method="get" class="filters flex flex-row flex-center">
				<div class="search">
					<input name="search" type="text" value="" placeholder="Искать" v-model='searchNamePattern'>
				</div>
				<div class="time" xs-flex="8">
					<select name="filter1">
						<option value="" disabled selected>Срок годности</option>
						<option value="">Все</option>
						<option value="">Свежие</option>
						<option value="">Просроченные</option>
					</select>
				</div>
				<div class="reset" xs-flex="4">
					<a href="" class="btn1" @click.prevent="resetPattern">Сброс</a>
				</div>
			</form>

			<div class="product-list-manage">
				<a href="" class="btn1 scanQR">
					<i class="fo qrcode"></i>
					<span>Сканировать QR - код</span>
				</a>
				<a href="" class="btn1 addproduct" @click.prevent="addProductFormShowChange">
					<i class="fo plus"></i>
					<span>Добавить продукты</span>
				</a>
			</div>

			<div class="product-list flex flex-row">
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
									<select name="measure" v-model='newProductMeasure'>
										<option disabled selected>Ед.измерения</option>
										<option value="кг">килограмм</option>
										<option value="л">литр</option>
										<option value="шт">штука</option>
									</select>
								</span>
							</div>
						</div>
						<div class="item-manage" xs-flex="3">
							<a href="" class="save" @click.prevent="addProduct"><i class="fo ok"></i></a>
							<a href="" class="cancel" @click.prevent="addProductFormShowChange"><i class="fo cancel"></i></a>
						</div>
					</div>
				</div>
				<div class="product-wrapper" md-flex="4" sm-flex="6" v-for="prod in products">
					<div class="product">
						<div class="info" xs-flex="9">
							<h4 class="title">{{prod.title}}</h4>
							<div class="quantity"><span class="amount">{{prod.amount}}</span><span class="measure">{{prod.measure}}</span></div>
							<div class="expiration"><i class="fo clock"></i><span class="date">{{prod.expiration}}</span></div>
						</div>
						<div class="item-manage" xs-flex="3">
							<a href="" class="edit" @click.prevent="editProduct(prod)"><i class="fo pencil"></i></a>
							<a href="" class="delete" @click.prevent="removeProduct(prod)"><i class="fo trash"></i></a>
						</div>
					</div>
				</div>

				<!--<div class="product-wrapper" md-flex="4" sm-flex="6" v-for="prod in products">
					<Product
						:title="prod.title"
						:amount="prod.amount"
						:measure="prod.measure"
						:expiration="prod.expiration"
					></Product>
				</div>-->
			</div>
		</div>
	</section>
</template>

<script>

import store from '../store/store'
import Product from '@/components/Product'

export default {
  name: 'Products',

  data () {
    return {
      addProductFormShow: false,
      EditProductFlag: false,
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
    store.dispatch('pageTitleChange', 'Мои продукты')
    var x = document.getElementsByClassName('edit')
    x.onclick = function (prod) { this.removeProduct(prod) }
    console.log(x)
  },

  methods: {
    addProduct () {
      let n = {
        amount: this.newProductAmount,
        measure: this.newProductMeasure,
        title: this.newProductTitle,
        expiration: this.newProductExpiration
      }
      if (this.EditProductFlag === true) {
        store.dispatch('editProduct', n)
        this.EditProductFlag = false
        this.addProductFormShowChange()
      } else {
        store.dispatch('addProduct', n)
      }
      this.addProductFormReset()
    },
    editProduct (n) {
      this.newProductAmount = n.amount
      this.newProductMeasure = n.measure
      this.newProductTitle = n.title
      this.newProductExpiration = n.expiration
      this.addProductFormShowChange()
      this.EditProductFlag = true
    },
    removeProduct (n) {
      store.dispatch('removeProduct', n)
    },
    addProductFormShowChange () {
      this.addProductFormShow = !this.addProductFormShow
    },
    addProductFormReset () {
      this.newProductAmount = ''
      this.newProductMeasure = ''
      this.newProductTitle = ''
      this.newProductExpiration = ''
    },
    addProductFormCancel () {
      this.addProductFormReset()
      this.addProductFormShowChange()
    }
  },
  components: {
    'Product': Product
  }
}
</script>

<style src="../assets/style.css">
</style>