<template>
  <div>
		<section id="recipe-catalog">
				<div class="container">Каталог рецептов
					<form action="" method="get" class="recipe-list-filter flex flex-row flex-center">
						<div class="search"><input name="search" type="text" value="" placeholder="Искать"></div>
						<div class="time" xs-flex="8"><input name="cookingtime" type="text" value="" placeholder="Время приготовления"></div>
						<div class="reset" xs-flex="4"><a href="" class="btn1">Сброс</a></div>
					</form>
					<div class="recipe-list flex flex-row">
						<div class="recipe-wrapper" md-flex="4" sm-flex="6" v-for="i in 50">
							<div class="recipe"> <!-- Классы: epxired, expires-soon -->
								<div class="info" xs-flex="9">
									<h4 class="title">Название блюда</h4>
									<div class="cooking-time"><i class="fo clock"></i><span class="time">30 минут</span></div>
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
	  name: 'Calendar'
	}
</script>

<style src="../assets/style.css">
</style>