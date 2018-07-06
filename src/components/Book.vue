<template>
  <section id="recipe-catalog">
		<div class="container">
			<form action="" method="get" class="filters flex flex-row flex-center">
				<div class="search"><input name="search" type="text" value="" placeholder="Искать" v-model='searchNamePattern'></div>
				<div class="time" xs-flex="8"><input name="cookingtime" type="text" value="" placeholder="Время приготовления" v-model='searchTimePattern'></div>
				<div class="reset" xs-flex="4"><a href="" class="btn1" @click.prevent="resetPattern">Сброс</a></div>
			</form>
        <div class="a-right">
          <a href="" class="btn1 addproduct">
            <i class="fo plus"></i>
            <span>Добавить продукты</span>
          </a>
        </div>
			<div class="recipe-list flex flex-row">
				<div class="recipe-wrapper" md-flex="4" sm-flex="6" v-for="(rcp, id) in reciepts" v-if="matchTitle(rcp.title) && matchTime(rcp.cooking_time)">
					<div class="recipe">
						<div class="info" xs-flex="9">
							<router-link :to="{ name:'details', params: {id: rcp.ID} }">
								<h4 class="title">{{rcp.title}}</h4>
								<div class="cooking-time">
                  <i class="fo clock"></i>
                  <span class="time">{{rcp.cooking_time}} мин.</span>
                </div>
							</router-link>
						</div>
						<!-- <div class="item-manage" xs-flex="3">
							<a href="" class="edit"><i class="fo pencil"></i></a>
							<a href="" class="delete" @click.prevent="removeReciept(rcp)"><i class="fo trash"></i></a>
						</div> -->
					</div>
				</div>
			</div>
		</div>
	</section>
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

  mounted () {
    store.dispatch('pageTitleChange', 'Рецепты')
  },

  methods: {
    removeReciept (n) {
      store.dispatch('removeReciept', n)
    },

    matchTitle (n) {
      if (this.searchNamePattern === '') return true
      if (n.toLowerCase().match(this.searchNamePattern.toLowerCase()) != null) return true
      return false
    },

    matchTime (n) {
      if (this.searchTimePattern === '') return true
      if (this.searchTimePattern <= n - 1) return false
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