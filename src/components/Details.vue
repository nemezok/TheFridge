<template>
  <section id="single-recipe">
    <div class="single-recipe" v-for="rcp in reciepts" v-if="rcp.ID==$route.params.id">
      <div class="container">
        <h1>{{rcp.title}}</h1>
        <div class="recipe-manage a-right">
          <router-link :to="{ name:'DetailsEdit', params: {id: rcp.ID} }" class="edit btn1"><i class="fo pencil"></i></router-link>
        </div>
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
            <div class="a-right"><a href="">Добавить в список покупок</a></div>
          </div>
        </div>
      </div>
    </div>

    <div class="single-recipe single-recipe-edit" v-for="rcp in reciepts" v-if="rcp.ID==$route.params.id" v-show="editRecieptFormShow">
      <div class="container">
        <div class="recipe-manage a-right">
          <a href="" class="save btn1"><i class="fo ok"></i></a>
          <a href="" class="delete btn1"><i class="fo trash"></i></a>
          <a href="" class="cancel btn1"><i class="fo cancel"></i></a>
        </div>
        <div class="flex flex-row">
          <div class="recipe-cooking" md-flex="6" sm-flex="6">
            <h2>Рецепт</h2>
            <div class="cooking"><textarea name="cooking">{{rcp.cooking}}</textarea></div>
            <div class="cooking_time">
              <span class="time">Время готовки</span>
              <i class="fo clock"></i>
              <span class="time"><input name="cooking_time" value=""></span>
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
                  <div class="item-manage" xs-flex="3">
                    <a href="" class="delete"><i class="fo trash"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="a-right"><a href="" class="btn1"><i class="fo plus"></i></a></div>
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

  mounted () {
    store.dispatch('pageTitleChange', 'Детали')
  },

  data () {
    return {
      editRecieptFormShow: false
    }
  },

  methods: {
    editRecieptFormShowChange () {
      this.editRecieptFormShow = !this.editRecieptFormShow
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