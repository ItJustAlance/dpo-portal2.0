<template>
  <div class="popular-item-wrapper">
    <div class="popular-item__header">
      <div class="img"><img src="/img/populare1.png" alt="" /></div>
      <div class="right">
        <ul class="info-list">
          <li>
            <div class="mini-info">
              <div class="mini-info__ico">
                <SvgIcon name="ic-clock" class="fnone ic16"></SvgIcon>
              </div>
              <div class="mini-info__text">32 часа</div>
            </div>
          </li>
          <li>
            <div class="mini-info">
              <div class="mini-info__ico"><SvgIcon name="ic-tag" class="fnone ic16"></SvgIcon></div>
              <div class="mini-info__text">6 450 ₽</div>
            </div>
          </li>
          <li>
            <div class="mini-info">
              <div class="mini-info__ico"><SvgIcon name="ic-monitor" class="fnone ic16"></SvgIcon></div>
              <div class="mini-info__text">Очно-заочная с ДОТ</div>
            </div>
          </li>
          <li>
            <div class="mini-info">
              <div class="mini-info__ico">
                <SvgIcon name="ic-calendar-check" class="fnone ic16"></SvgIcon>
              </div>
              <div class="mini-info__text">Старт: 1 сентября</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--end popular-item__header -->
    <div class="popular-item__content">
      <div class="small-label">
        <div class="small-label__icon">
          <SvgIcon name="barcode" class="fnone ic16"></SvgIcon>
        </div>
        04868-22/23-Б-ЗД
      </div>
      <NuxtLink class="popular-item__bottom-link" :to="`/courses/${props.url}`">
        <span class="title">
          Организация деятельности учащихся, ориентированная на обеспечение информационной безопасности в сети интернет
        </span>
        <span class="text"> Дополнительное образование и внеурочная деятельность детей </span>
      </NuxtLink>
    </div>
    <!--end popular-item__content -->
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
