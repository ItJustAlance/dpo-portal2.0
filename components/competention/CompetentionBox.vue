<template>
  <div class="event-item-wrapper">
    <div class="img"><img src="/img/event1.png" alt="" /></div>
    <div class="event-row">
      <div class="mini-info date --clear">
        <div class="mini-info__ico">
          <SvgIcon name="calendar-blank" class="fnone ic16"></SvgIcon>
        </div>
        <div class="mini-info__text">10.07.2023 – 26.07.2023</div>
      </div>
    </div>
    <div class="title">
      <NuxtLink class="link" :to="`/competitions/${props.url}`"
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
