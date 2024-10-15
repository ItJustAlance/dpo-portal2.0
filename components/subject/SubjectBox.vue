<script setup lang="ts">
interface Props {
  data?: object;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  data: {},
});
</script>

<template>
  <div class="subject-item__wrapper">
    <div class="top">
      <div class="img">
        <a href="#"><img src="/img/program-logo.png" alt="" /></a>
      </div>
      <a class="title" href="#">{{ data?.title }}</a>
    </div>
    <div class="bottom">
      <div class="links">
        <span class="mini-info --clear">
          <span class="mini-info__ico">
            <SvgIcon name="link" class="fnone ic16"></SvgIcon>
          </span>
          <span class="mini-info__text">Программы (8)</span>
        </span>
        <span class="mini-info --blue">
          <span class="mini-info__ico">
            <SvgIcon name="link" class="fnone ic16"></SvgIcon>
          </span>
          <span class="mini-info__text">Курсы (4)</span>
        </span>
      </div>
    </div>
  </div>
</template>
