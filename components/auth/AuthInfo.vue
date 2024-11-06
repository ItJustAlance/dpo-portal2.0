<template>
  <div class="auth-info-wrapper">
    <div v-click-out-side="hide" class="auth-info" :class="{ show: show }">
      <div class="auth-info__label" @click="show = !show">
        <div class="auth-info__label-ico">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            class="svg-icon svg-icon--i-usercircle ic16"
            title=""
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5ZM1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8Z"
            ></path>

            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 5.5C6.89543 5.5 6 6.39543 6 7.5C6 8.60457 6.89543 9.5 8 9.5C9.10457 9.5 10 8.60457 10 7.5C10 6.39543 9.10457 5.5 8 5.5ZM5 7.5C5 5.84315 6.34315 4.5 8 4.5C9.65685 4.5 11 5.84315 11 7.5C11 9.15685 9.65685 10.5 8 10.5C6.34315 10.5 5 9.15685 5 7.5Z"
            ></path>

            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.99997 10.4995C7.26129 10.4995 6.53704 10.7041 5.9075 11.0905C5.27795 11.4769 4.7677 12.0301 4.43331 12.6887C4.3083 12.935 4.00735 13.0332 3.76113 12.9082C3.5149 12.7832 3.41663 12.4823 3.54164 12.236C3.95963 11.4127 4.59744 10.7212 5.38438 10.2382C6.17131 9.75519 7.07662 9.49951 7.99997 9.49951C8.92332 9.49951 9.82864 9.75519 10.6156 10.2382C11.4025 10.7212 12.0403 11.4127 12.4583 12.236C12.5833 12.4823 12.485 12.7832 12.2388 12.9082C11.9926 13.0332 11.6916 12.935 11.5666 12.6887C11.2322 12.0301 10.722 11.4769 10.0925 11.0905C9.4629 10.7041 8.73865 10.4995 7.99997 10.4995Z"
            ></path>
          </svg>
        </div>

        <div class="auth-info__label-name">Администратор</div>

        <div class="auth-info__label-arr">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="svg-icon svg-icon--chevron-down ic16"
            title=""
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.52858 5.52851C3.78892 5.26816 4.21103 5.26816 4.47138 5.52851L7.99998 9.05711L11.5286 5.52851C11.7889 5.26816 12.211 5.26816 12.4714 5.52851C12.7317 5.78886 12.7317 6.21097 12.4714 6.47132L8.47138 10.4713C8.21103 10.7317 7.78892 10.7317 7.52858 10.4713L3.52858 6.47132C3.26823 6.21097 3.26823 5.78886 3.52858 5.52851Z"
              fill="#424242"
            ></path>
          </svg>
        </div>
      </div>

      <div class="auth-info__dropdown">
        <div class="auth-info__user-info">
          <div class="ava"></div>
          <div class="right">
            <div class="name">Батрудинов Л. М.</div>
            <div class="office">Методист ЦГУ</div>
          </div>
        </div>
        <ul class="auth-info__list">
          <li>
            <a class="link-box" href="#">
              <span class="link-box__icon"><SvgIcon name="chat-circle" class="fnone ic20"></SvgIcon></span>
              <span class="link-box__label">Уведомления</span>
              <span class="num"></span>
            </a>
          </li>
          <li>
            <a class="link-box" href="#">
              <span class="link-box__icon"><SvgIcon name="heart" class="fnone ic20"></SvgIcon></span>
              <span class="link-box__label">Уведомления</span>
              <span class="num"></span>
            </a>
          </li>
        </ul>
        <div class="auth-info__title">КАБИНЕТ СЛУШАТЕЛЯ</div>
        <ul class="auth-info__list">
          <li>
            <a class="link-box" href="#">
              <span class="link-box__label">План развития</span>
            </a>
          </li>
          <li>
            <a class="link-box" href="#">
              <span class="link-box__label">Курсы</span>
            </a>
          </li>
          <li>
            <a class="link-box" href="#">
              <span class="link-box__label">Мероприятия</span>
            </a>
          </li>
          <li>
            <button class="link-box link--red" @click="onLogoutClick">
              <span class="link-box__icon"><SvgIcon name="sign-out" class="fnone ic20"></SvgIcon></span>
              <div class="link-box__label">Выйти</div>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <button class="btn btn--inline btn-logout" @click="onLogoutClick">
      <SvgIcon name="sign-out" class="fnone ic20"></SvgIcon>

      <span class="btn-label">Выйти</span>
    </button>

    <div style="display: none" class="auth-info-wrapper">
      <!-- aaa {{ useAuth }} -->

      .auth-info-wrapper(v-if="user?.first_name && isAuth") .auth-info(v-click-out-side="hide" :class="{show : show}")
      .auth-info__label(@click="show = !show") .auth-info__label-ico SvgIcon.ic16(name="i-usercircle" title="")
      .auth-info__label-name {{ user?.first_name }} .auth-info__label-arr SvgIcon.ic16(name="chevron-down" title="")
      .auth-info__dropdown .name {{ user?.first_name }} {{ user?.second_name }} {{ user?.last_name }} .text
      {{ user?.organization?.name }} ul.auth-info__list li a.link-box(href="#") SvgIcon.ic16(name="i-gearsix" title="")
      .link-box__label Техническая поддержка li a.link-box.link--red(href="#") SvgIcon.ic16(name="i-door" title="")
      .link-box__label Выйти button.btn.btn--inline.btn-logout(@click="logout") SvgIcon.ic16(name="i-door" title="")
      span.btn-label Выйти .auth-info-wrapper(v-else) button.btn(@click="logout") Авторизация {{ user?.first_name }} -->
      @click="onLogoutClick"
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
