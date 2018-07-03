<template>
  <div>
	<section id="recipe-catalog">
				<div class="container">Каталог рецептов
					<form action="" method="get" class="recipe-list-filter flex flex-row flex-center">
						<div class="search"><input name="search" type="text" value="" placeholder="Искать" v-model='searchNamePattern'></div>
						<div class="time" xs-flex="8"><input name="cookingtime" type="text" value="" placeholder="Время приготовления" v-model='searchTimePattern'></div>
						<div class="reset" xs-flex="4"><a href="" class="btn1" @click.prevent="resetPattern">Сброс</a></div>
					</form>
					<div class="recipe-list flex flex-row">
						<div class="recipe-wrapper" md-flex="4" sm-flex="6" v-for="(rcp, id) in reciepts" v-if="matchTitle(rcp.title) && matchTime(rcp.cooking_time)">
							<div class="recipe"> <!-- Классы: epxired, expires-soon -->
								<div class="info" xs-flex="9">
									<router-link :to="{ name:'details', params: {id: rcp.ID} }">
										<h4 class="title">{{rcp.title}}</h4>
										<div class="cooking-time"><i class="fo clock"></i><span class="time">{{rcp.cooking_time}} мин.</span></div>
									</router-link>
								</div>
								<div class="item-manage" xs-flex="3">
									<a href="" class="edit"><i class="fo pencil"></i></a>
									<a href="" class="delete" @click.prevent="removeReciept(rcp)"><i class="fo trash"></i></a>
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
  name: 'Book',

  data () {
    return {
      searchNamePattern: '',
      searchTimePattern: ''
    }
  },

  computed: {
    reciepts () {
      return store.getters.Reciepts
    }
  },

  methods: {
    removeReciept (n) {
      store.dispatch('removeReciept', n)
    },

    matchTitle (n) {
      if (this.searchNamePattern === '') return true
      if (n.match(this.searchNamePattern) != null) return true
      return false
    },

    matchTime (n) {
      if (this.searchTimePattern === '') return true
      if (this.searchTimePattern <= n) return false
      return true
    },

    resetPattern () {
      this.searchNamePattern = ''
      this.searchTimePattern = ''
    }
  }
}
</script>

<style src="../assets/style.css">
</style>