<template>
  <div class="auth-info-wrapper">
    <div v-click-out-side="hide" class="auth-info" :class="{ show: show }">
      <div class="auth-info__label" @click="show = !show">
        <div class="auth-info__label-ico">
          <img src="/img/avatar.svg" alt="">
        </div>

        <div class="auth-info__label-name">Администратор</div>

        <div class="auth-info__label-arr">
          <SvgIcon name="menu-arr" class="ic16"></SvgIcon>
        </div>
      </div>

      <div class="auth-info__dropdown">
        <div class="auth-info__user-info">
          <div class="ava"><img src="/img/avatar.svg" alt=""></div>
          <div class="right">
            <div class="name">Батрудинов Л. М.</div>
            <div class="office">Методист ЦГУ</div>
          </div>
        </div>
        <ul class="auth-info__list">
          <li>
            <NuxtLink class="link-box" to="/">
              <span class="link-box__icon"><SvgIcon name="chat-circle" class="fnone ic20"></SvgIcon></span>
              <span class="link-box__label">Уведомления</span>
              <span class="num">3</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link-box" to="/">
              <span class="link-box__icon"><SvgIcon name="heart" class="fnone ic20"></SvgIcon></span>
              <span class="link-box__label">Избранное</span>
              <span class="num">32</span>
            </NuxtLink>
          </li>
        </ul>
        <div class="auth-info__title">КАБИНЕТ СЛУШАТЕЛЯ</div>
        <ul class="auth-info__list">
          <li>
            <NuxtLink class="link-box" to="/">
              <span class="link-box__label">План развития</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link-box" to="/">
              <span class="link-box__label">Курсы</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="link-box" to="/">
              <span class="link-box__label">Мероприятия</span>
            </NuxtLink>
          </li>

        </ul>
        <div class="auth-info__bottom">
          <button class="link-box link--red" @click="onLogoutClick">
            <span class="link-box__icon"><SvgIcon name="sign-out" class="fnone ic20"></SvgIcon></span>
            <div class="link-box__label">Выйти</div>
          </button>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import clickOutSide from '@mahdikhashan/vue3-click-outside';
import { useAuthUser } from '@/composables/useAuthUser';
import { useAuth } from '@/composables/useAuth';
export default {
  name: 'AuthInfo',
  components: {},
  directives: {
    clickOutSide,
  },
  data() {
    return {
      user: {
        pending: false,
      },
      show: false,
    };
  },
  computed: {
    useAuth() {
      const authUser = useAuthUser();
      console.log('useAuthUser', authUser);
      return authUser;
    },
  },
  async mounted() {
    // await store.dispatch('auth/init');
    // this.popupItem = this.$el
  },
  methods: {
    async onLogoutClick() {
      try {
        this.user.pending = true;
        const auth = useAuth();
        await auth.logout();
        await navigateTo('/');
      } catch (error) {
        console.error(error);
      } finally {
        this.user.pending = false;
      }
    },
    hide() {
      console.log('hidee');
      this.show = false;
    },
  },
};
</script>

<style scoped></style>
