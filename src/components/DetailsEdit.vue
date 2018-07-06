<template>
  <section id="single-recipe">
    <div class="single-recipe single-recipe-edit" v-for="rcp in reciepts" v-if="rcp.ID==$route.params.id">
      <div class="container">
        <div class="recipe-manage a-right">
          <a href="" class="save btn1"><i class="fo ok"></i></a>
          <a href="" class="delete btn1"><i class="fo trash"></i></a>
          <router-link :to="{ name:'details', params: {id: rcp.ID} }" class="cancel btn1"><i class="fo cancel"></i></router-link>
        </div>
        <div class="flex flex-row">
          <div class="recipe-cooking" md-flex="6" sm-flex="6">
            <h2>Рецепт</h2>
            <div class="cooking"><textarea name="cooking" v-model='RecipeTitle'></textarea></div>
            <div class="cooking_time">
              <span class="time">Время готовки</span>
              <i class="fo clock"></i>
              <span class="time"><input name="cooking_time" value="" v-model='RecipeCTime'></span>
            </div>
          </div>
          <div md-flex="6" sm-flex="6">
            <h2>Ингредиенты</h2>
            <div class="product-list flex flex-row">
              
              <div class="product-wrapper" v-for="(prod, prodi) in rcp.products">
                <div class="product">
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
              
              <div class="product-wrapper" v-show="addProductFormShow">
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
                        <input name="measure" v-model='newProductMeasure' placeholder="Мера измерения">
                      </span>
                    </div>
                  </div>
                  <div class="item-manage" xs-flex="3">
                    <a href="" class="save" @click.prevent="addProduct"><i class="fo ok"></i></a>
                    <a href="" class="cancel" @click.prevent="addProductFormShowChange"><i class="fo cancel"></i></a>
                  </div>
                </div>
              </div>

              <div class="a-right">
                <a href="" class="btn1" @click.prevent="addProductFormShowChange">
                  <i class="fo plus"></i>
                </a>
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

  mounted () {
    store.dispatch('pageTitleChange', 'Редактор рецепта')
  },

  methods: {
    addRecipe () {
      /* let n = {
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
      this.addProductFormReset() */
    },
    editRecipe (n) {
      /* this.newProductAmount = n.amount
      this.newProductMeasure = n.measure
      this.newProductTitle = n.title
      this.newProductExpiration = n.expiration
      this.addProductFormShowChange()
      this.EditProductFlag = true */
    },
    removeRecipe (n, i) {
      // store.dispatch('removeProduct', [n, i])
    },
    addProductFormShowChange () {
      this.addProductFormShow = !this.addProductFormShow
      console.log('addProductFormShowChange', this.addProductFormShow)
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