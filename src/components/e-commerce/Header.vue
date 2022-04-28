<template>
  <header class="header container">
    <nav class="nav">
      <ul class="nav__menu">
        <li class="nav__item" v-for="(item, index) in menu" :key="index">
          <nuxt-link :to="item.slug">{{ item.name }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menu: [
        { name: 'home', slug: '/home' },
        { name: 'about us', slug: '/about' },
        { name: 'shop', slug: '/shop' },
        { name: 'blog', slug: '/blog' },
        { name: 'contact', slug: '/contact' },
      ],
    }
  },
}
</script>

<style></style>
