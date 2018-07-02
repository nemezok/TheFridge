<template>
	<section id="user-products">
		<div class="container">Мои продукты
			<div class="product-list-manage">
				<a href="" class="btn1 scanQR"><i class="fo qrcode"></i><span>Сканировать QR - код</span></a>
				<a href="" class="btn1 addproduct"><i class="fo plus"></i><span>Добавить продукты</span></a>
			</div>
			<div class="product-list flex flex-row">
				<div class="product-wrapper" md-flex="4" sm-flex="6">
					<div class="product expired"> <!-- Классы: epxired, expires-soon -->
						<div class="info" xs-flex="9">
							<h4 class="title">Название продукта</h4>
							<div class="quantity"><span class="amount">15,8</span><span class="measure">кг</span></div>
							<div class="expiration"><i class="fo clock"></i><span class="date">10 июля 2018</span></div>
						</div>
						<div class="item-manage" xs-flex="3">
							<a href="" class="edit"><i class="fo pencil"></i></a>
							<a href="" class="delete"><i class="fo trash"></i></a>
						</div>
					</div>
				</div>
				<div md-flex="4" sm-flex="6">
					<div class="product expired">
						<div class="info" xs-flex="9">
							<h4 class="title">Название продукта</h4>
							<div class="quantity"><span class="amount">15,8</span><span class="measure">кг</span></div>
							<div class="expiration"><i class="fo clock"></i><span class="date">10 июля 2018</span></div>
						</div>
						<div class="item-manage" xs-flex="3">
							<a href="" class="edit"><i class="fo pencil"></i></a>
							<a href="" class="delete"><i class="fo trash"></i></a>
						</div>
					</div>
				</div>
				<div md-flex="4" sm-flex="6">
					<div class="product expires-soon">
						<div class="info" xs-flex="9">
							<h4 class="title">Название продукта</h4>
							<div class="quantity"><span class="amount">15,8</span><span class="measure">кг</span></div>
							<div class="expiration"><i class="fo clock"></i><span class="date">10 июля 2018</span></div>
						</div>
						<div class="item-manage" xs-flex="3">
							<a href="" class="edit"><i class="fo pencil"></i></a>
							<a href="" class="delete"><i class="fo trash"></i></a>
						</div>
					</div>
				</div>
				<div md-flex="4" sm-flex="6">
					<div class="product">
						<div class="info" xs-flex="9">
							<h4 class="title">Название продукта</h4>
							<div class="quantity"><span class="amount">15,8</span><span class="measure">кг</span></div>
							<div class="expiration"><i class="fo clock"></i><span class="date">10 июля 2018</span></div>
						</div>
						<div class="item-manage" xs-flex="3">
							<a href="" class="edit"><i class="fo pencil"></i></a>
							<a href="" class="delete"><i class="fo trash"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>	
	</section>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Products',
  mounted () {
    const productRef = firebase.database().ref('Product')
    console.log(productRef)
    productRef.once('value').then(this.GetName).catch((error) => console.log(error))
  },
  methods: {
    GetName: function (snapshot) {
      console.log(snapshot.val())
    }
  }
}
</script>

<style src="../assets/style.css">
</style>