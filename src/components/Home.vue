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
				<a href="" class="btn1 addproduct"><i class="fo plus"></i><span>Добавить продукты</span></a>
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
				<div md-flex="4" sm-flex="6">
					<div class="product"> <!-- Классы: epxired, expires-soon -->
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
  </div>
</template>

<script>
	export default {
	  name: 'Home'
	}
</script>

<style src="../assets/style.css">
</style>