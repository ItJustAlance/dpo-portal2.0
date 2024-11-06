<template>
  <div class="news-item">
    <div class="news-item__wrapper">
      <div class="img"></div>
      <div class="top">
        <div class="mini-info --blue">
          <div class="mini-info__ico">
            <SvgIcon name="bookmarks" class="fnone ic16"></SvgIcon>
          </div>
          <div class="mini-info__text">Анонсы</div>
        </div>
        <div class="date">
          <SvgIcon name="calendar-blank" class="fnone ic16"></SvgIcon>
          20.08.2023
        </div>
      </div>
      <a href="#" class="title"
        >Информация для учителей информатики, технологии, робототехники, физики, педагогов дополнительного
        образования</a
      >
      <a href="#" class="text"
        >По просьбам педагогов АНО «НЦИО» открывает набор на курс повышения квалификации "Основы программирования
        робототехнического контроллера ArduinoТехнолаб"</a
      >
      <div class="bottom">
        <div class="links">
          <a href="#" class="mini-info --clear">
            <span class="mini-info__ico">
              <SvgIcon name="link" class="fnone ic16"></SvgIcon>
            </span>
            <span class="mini-info__text">шифр 04369</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!--end popular-item-->
</template>
<script setup lang="ts">
interface Props {
  url?: string;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(), {
  url: '',
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
