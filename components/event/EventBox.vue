<template>
  <div class="event-item-wrapper">
    <div class="img"><img src="/img/event1.png" alt="" /></div>
    <div class="event-row">
      <div class="mini-info date --clear">
        <div class="mini-info__ico">
          <SvgIcon name="calendar-blank" class="fnone ic16"></SvgIcon>
        </div>
        <div class="mini-info__text">20.08.2023</div>
      </div>
      <div class="mini-info price --clear">
        <div class="mini-info__ico">
          <SvgIcon name="ic-tag" class="fnone ic16"></SvgIcon>
        </div>
        <div class="mini-info__text">2000 р</div>
      </div>
    </div>
    <div class="title">
      <NuxtLink class="link" :to="`/${props.url}`"
        >Организация деятельности учащихся, ориентированная на обеспечение информационной безопасности...
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  url?: string | null;
}
const props = withDefaults(defineProps<Props>(), {
  url: null,
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
