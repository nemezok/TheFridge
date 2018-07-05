<template>
	<section id="premium">
		<div class="container">
			<h1>Премиум версия</h1>
      <ul>
        <li>Дополнительный пакет вкусных рецептов</li>
        <li>Возможность настраивать напоминания о покупке продуктов</li>
        <li>Гарантированное отсутствие рекламы</li>
        <li>Возможность создавать список продуктов сканированием QR кода с чека</li>
      </ul>
		</div>
	</section>
</template>

<script>

import store from '../store/store'

export default {
  name: 'Premium',

  mounted () {
    store.dispatch('pageTitleChange', 'Премиум версия')
  }
}
</script>

<style src="../assets/style.css">
</style>