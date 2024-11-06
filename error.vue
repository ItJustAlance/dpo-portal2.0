<template>
  <NuxtLayout name="error">
    <div class="page-error">
      <div v-if="0" class="page-error__code">
        {{ error.statusCode }}
      </div>

      <div v-show="error.statusCode === 404" class="page-error__info">
        <div class="page-error__title h2-title">Упс... страница не найдена</div>
        <div class="page-error__info-block">
          <div v-show="error.statusCode === 404" class="img">
            <img src="/img/error404.svg" alt="" />
          </div>
          <div class="b-btn">
            <NuxtLink class="btn" to="/">На главную</NuxtLink>
          </div>
        </div>
      </div>

      <div v-if="0" v-show="error.statusCode !== 404" class="page-error__info">
        <div class="page-error__info-message">
          {{ error.message }}
        </div>

        <AppHtml class="page-error__info-stack" :html="error.stack" />
      </div>
      <div class="page-error__bottom-img">
        <img src="/img/mountains.svg" alt="" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const error = useError();

// console.log(error);
</script>
