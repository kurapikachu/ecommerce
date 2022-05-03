<template>
  <header class="header container flex">
    <nav class="nav">
      <ul class="nav__menu flex" :class="{ show: showMenu }">
        <li v-for="(item, index) in menu" :key="index" class="nav__item">
          <nuxt-link :to="item.slug" class="nav__link">{{
            item.name
          }}</nuxt-link>
        </li>
        <button class="btn btn--flex nav__close" @click="closeNav">x</button>
      </ul>
    </nav>
    <div class="header__logo">
      <img
        src="~/assets/images/placeholder.jpg"
        class="header__img"
        alt="logo"
      />
    </div>
    <div class="header__buttons flex">
      <e-commerce-header-search
        class="header__search"
      ></e-commerce-header-search>
      <nuxt-link to="/login" class="header__login"
        ><i class="bx bx-user"></i
      ></nuxt-link>

      <div class="nav__toggle" @click="showNav">
        <i class="bx bx-menu"></i>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      showMenu: false,
    }
  },
  computed: mapState({
    menu: (state) => state.menu.menu,
  }),
  created() {
    this.$store.dispatch('menu/getMenu')
  },
  methods: {
    showNav() {
      this.showMenu = true
    },
    closeNav() {
      this.showMenu = false
    },
  },
}
</script>

<style scoped lang="less">
.header {
  padding-top: 1rem;
  justify-content: center;
  align-items: center;
  row-gap: 0.5rem;
  .nav {
    height: @header-height;
    &__menu {
      position: fixed;
      right: -100%;
      top: 0;
      row-gap: 1rem;
      flex-direction: column;
      justify-content: center;
      padding: 2rem 5rem 1rem 2rem;
      background-color: @white;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

      &.show {
        right: 0;
      }
    }

    &__close {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
    }
    &__link {
      text-transform: capitalize;
      transition: 0.3s;
      &:hover {
        color: @primary-color;
      }
    }

    &__close,
    &__toggle {
      .desktop({
        display: none;
      });
    }
  }

  &__img {
    height: 50px;
    width: auto;
    max-width: 100%;
    object-fit: contain;
  }

  &__buttons {
    width: 100%;
    align-items: center;
  }

  &__login {
    flex: 1;
  }

  &__search {
    flex: 1;
  }
}
</style>
