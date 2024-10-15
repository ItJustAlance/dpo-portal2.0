<script setup lang="ts">
interface Props {
  data?: object;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  // eslint-disable-next-line vue/require-valid-default-prop
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
        <NuxtLink :to="`/programs/test`"><img src="/img/program-logo.png" alt="" /></NuxtLink>
      </div>
      <NuxtLink class="title" :to="`/programs/test`">{{ data?.title }}</NuxtLink>
    </div>
    <div class="articul">
      <div class="mini-info --clear">
        <div class="mini-info__ico">
          <SvgIcon name="barcode" class="fnone ic16"></SvgIcon>
        </div>
        <div class="mini-info__text">{{ data?.articul }}</div>
      </div>
    </div>
    <NuxtLink :to="`/programs/test`" class="text">{{ data?.text }}</NuxtLink>

    <div class="bottom">
      <div class="links">
        <NuxtLink v-for="(tag, index) in data?.tags" :key="index" :to="`/programs/${index}`" class="mini-info --blue">
          <span class="mini-info__ico">
            <SvgIcon name="link" class="fnone ic16"></SvgIcon>
          </span>
          <span class="mini-info__text">{{ tag }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
