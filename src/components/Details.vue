<template>
  <section id="single-recipe">
    <div class="single-recipe" v-for="rcp in reciepts" v-if="rcp.ID==$route.params.id">
      <div class="container">
        <div class="flex flex-row">
          <div class="recipe-cooking" md-flex="6" sm-flex="6">
            <h2>Рецепт</h2>
            <!--{{rcp.author}}-->
            <article class="cooking">{{rcp.cooking}}</article>
            <div class="cooking_time">
              <span class="time">Время готовки</span>
              <i class="fo clock"></i>
              <span class="time">{{rcp.cooking_time}}</span>
            </div>
          </div>
          <div md-flex="6" sm-flex="6">
            <h2>Ингредиенты</h2>
            <div class="product-list flex flex-row">
              <div class="product-wrapper" v-for="prod in rcp.products">
                <div class="product expired">
                  <div class="info" xs-flex="9">
                    <h4 class="title">{{prod.title}}</h4>
                    <div class="quantity">
                      <span class="amount">{{prod.amount}}</span>
                      <span class="measure">{{prod.measure}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import Header from './Header'
import Footer from './Footer'

import store from '../store/store'

export default {
  name: 'Details',

  computed: {
    reciepts () {
      return store.getters.Reciepts
    }
  },

  components: {
    Header,
    Footer
  }
}
</script>

<style>
</style>