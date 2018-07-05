<template>
	<div class="product">
		<div class="info" xs-flex="9">
			<h4 class="title">{{title}}</h4>
			<div class="quantity"><span class="amount">{{amount}}</span><span class="measure">{{measure}}</span></div>
			<div class="expiration"><i class="fo clock"></i><span class="date">{{expiration}}</span></div>
		</div>
		<div class="item-manage" xs-flex="3">
			<a href="" class="edit" @click.prevent="editProduct(prod)"><i class="fo pencil"></i></a>
			<a href="" class="delete" @click.prevent="removeProduct(prod)"><i class="fo trash"></i></a>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    title: {
      type: String,
      required: true
    },
    amount: {
      type: String,
      required: false
    },
    measure: {
      type: String,
      required: false
    },
    expiration: {
      type: String,
      required: false
    }
  }
}
</script>

<style src="../assets/style.css">
</style>