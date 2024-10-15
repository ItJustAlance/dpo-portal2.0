<script setup lang="ts">
interface Props {
  data?: object;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  data: {
    type: Object,
    default: () => ({}),
  },
});
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const props = withDefaults(defineProps<Props>(), {
//   isMore: false,
//   isSpecial: false,
//   titleTags: null,
// });

// props.foo; // string
// props.bar; // number | undefined
</script>

<template>
  <div class="program-item__wrapper">
    <div class="top">
      <div class="img">
        <a href="#"><img src="/img/program-logo.png" alt="" /></a>
      </div>
      <a class="title" href="#">{{ data?.title }}</a>
    </div>
    <div class="articul">
      <div class="mini-info --clear">
        <div class="mini-info__ico">
          <SvgIcon name="barcode" class="fnone ic16"></SvgIcon>
        </div>
        <div class="mini-info__text">{{ data?.articul }}</div>
      </div>
    </div>
    <div class="text">{{ data?.text }}</div>

    <div class="bottom">
      <div class="links">
        <a v-for="(tag, index) in data?.tags" :key="index" href="#" class="mini-info --blue">
          <span class="mini-info__ico">
            <SvgIcon name="link" class="fnone ic16"></SvgIcon>
          </span>
          <span class="mini-info__text">{{ tag }}</span>
        </a>
      </div>
    </div>
  </div>
</template>
