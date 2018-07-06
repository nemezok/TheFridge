<template>
  <div>
  	<section id="notifications">
		<div class="container">Оповещения
			<a href="" class="btn1 note recipes" title="Рецепты быстро и легко"><i class="fo book"></i><span>Рецепты быстро и легко</span></a>
			<a href="" class="btn1 note expired active" title="У вас есть испортившиеся продукты"><i class="fo trash"></i><span>Испортившиеся продукты</span></a>
			<a href="" class="btn1 note expires-soon" title="У вас есть продукты, которые скоро испортятся"><i class="fo trash"></i><span>Продукты, которые скоро испортятся</span></a>
		</div>
	</section>
  	<section id="products-to-purchase">
		<div class="container">Список покупок
			<div class="product-list-manage">
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
				<div md-flex="4" sm-flex="6" v-for="(prod, prodi) in products">
					<div class="product">
						<div class="info" xs-flex="9">
							<h4 class="title">{{prod.title}}</h4>
							<div class="quantity">
								<span class="amount">{{prod.amount}}</span>
								<span class="measure">{{prod.measure}}</span>
							</div>
							<div class="quantity">{{prodi}}</div>
						</div>
						<div class="item-manage" xs-flex="3">
							<a href="" class="buy" @click.prevent="buyProduct(prod, prodi)"><i class="fo plus"></i></a>
							<!--<a href="" class="edit" @click.prevent="editProduct(prod, prodi)"><i class="fo pencil"></i></a>-->
							<a href="" class="delete" @click.prevent="removeProduct(prod, prodi)"><i class="fo trash"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  </div>
</template>

<script>

import store from '../store/store'

export default {
  name: 'Home',

  mounted () {
    store.dispatch('pageTitleChange', 'Список покупок')
  },

  computed: {
    products () {
      return store.getters.UserData.productsP
    }
  },

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

  methods: {
    addProduct () {
      let n = {
        amount: this.newProductAmount,
        measure: this.newProductMeasure,
        title: this.newProductTitle,
        expiration: this.newProductExpiration
      }
      if (this.EditProductFlag === true) {
        store.dispatch('editProductP', n)
        this.EditProductFlag = false
        this.addProductFormShowChange()
      } else {
        store.dispatch('addProductP', [this.$session.get('uid'), n])
      }
      console.log(this.$session.get('uid'))
      this.addProductFormReset()
      this.checkSession()
    },
    editProduct (n, i) {
      this.newProductAmount = n.amount
      this.newProductMeasure = n.measure
      this.newProductTitle = n.title
      this.newProductExpiration = n.expiration
      this.addProductFormShowChange()
      this.EditProductFlag = true
    },
    removeProduct (n, i) {
      store.dispatch('removeProductP', [this.$session.get('uid'), i, n])
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
    },
    buyProduct (n, i) {
      store.dispatch('removeProductP', [this.$session.get('uid'), i, n])
      store.dispatch('addProduct', [this.$session.get('uid'), n])
    },
    checkSession: function () {
      console.log(this.$session.getAll())
    }
  }
}

/* function eventFire (el, etype) {
  if (el.fireEvent) {
    el.fireEvent('on' + etype)
  } else {
    var evObj = document.createEvent('Events')
    evObj.initEvent(etype, true, false)
    el.dispatchEvent(evObj)
  }
}
function prodtuch () {
  var prod = null
  var startTS = 0
  var moovedX = 0
  var startX = 0
  function prodsearch (ifprod) {
    console.log(ifprod)
    if (ifprod.className === 'product') return ifprod
    return prodsearch(ifprod.parentElement)
  }
  document.addEventListener('touchstart', function (e) {
    startTS = e.timeStamp
    startX = e.changedTouches[0].clientX
  })
  document.addEventListener('touchmove', function (e) {
    console.log(e)
    prod = prodsearch(e.target)
    console.log(prod)
    if (prod) {
      moovedX = e.changedTouches[0].clientX - startX
      var speedX = moovedX / (e.timeStamp - startTS)
      console.log(speedX)
      if (speedX >= 2) { eventFire(prod.getElementsByClassName('buy')[0], 'click') }
    }
  })
}
prodtuch()
document.addEventListener('click', function (e) {
  console.log(e)
}) */
</script>

<style src="../assets/style.css">
</style>