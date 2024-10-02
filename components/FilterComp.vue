<script lang="ts" setup>
import { ref } from "vue";
// import {onMounted} from "vue/dist/vue";

const filterResultData = ref([]);
// const sliderValue = ref([20, 40]);

// const sliderFilters = ref([
//   { id: "fafda1", type: "slider", name: "от", value: 20 },
//   { id: "fafda2", type: "slider", name: "до", value: 40 },
//   ]
//
// );

const popularFilters = ref([
  { id: "f1", type: "checkbox", name: "Популярные", value: false },
  { id: "f2", type: "checkbox", name: "Новые", value: false },
  { id: "fafda1", type: "slider", pos: "to", name: "от", value: 20 },
  { id: "fafda2", type: "slider", pos: "from", name: "от", value: 40 },
]);

const directionFilters = ref([
  { id: "f223", type: "checkbox", name: "Воспитательная работа", value: false },
  { id: "f224", type: "checkbox", name: "Государственная итоговая аттестация (9 и 11 кл.)", value: true },
  { id: "f225", type: "checkbox", name: "Математика", value: false },
  { id: "f226", type: "checkbox", name: "Русский язык", value: false },
  { id: "f227", type: "checkbox", name: "Литература", value: false },
  { id: "f228", type: "checkbox", name: "История", value: false },
  { id: "f229", type: "checkbox", name: "Обществознание", value: false },
  { id: "f230", type: "checkbox", name: "Физика", value: false },
  { id: "f231", type: "checkbox", name: "Химия", value: false },
  { id: "f232", type: "checkbox", name: "Биология", value: false },
  { id: "f233", type: "checkbox", name: "География", value: false },
]);

const costFilters = ref([
  { id: "f116", type: "checkbox", name: "Бюджетный", value: false },
  { id: "f117", type: "checkbox", name: "Городская субсидия", value: false },
]);

const durationFilters = ref([
  { id: "d1", type: "checkbox", name: "1 час", value: false },
  { id: "d2", type: "checkbox", name: "2 часа", value: false },
  { id: "d3", type: "checkbox", name: "3 часа", value: false },
  { id: "d4", type: "checkbox", name: "4 часа", value: false },
  { id: "d5", type: "checkbox", name: "5 часов", value: false },
  { id: "d6", type: "checkbox", name: "6 часов", value: false },
  { id: "d7", type: "checkbox", name: "7 часов", value: false },
  { id: "d8", type: "checkbox", name: "8 часов", value: false },
  { id: "d9", type: "checkbox", name: "9 часов", value: false },
  { id: "d10", type: "checkbox", name: "10 часов", value: false },
]);

const educationFormFilters = ref([
  { id: "ef1", type: "checkbox", name: "Очная", value: false },
  { id: "ef2", type: "checkbox", name: "Заочная", value: false },
  { id: "ef3", type: "checkbox", name: "Дистанционная", value: false },
  { id: "ef4", type: "checkbox", name: "Очно-заочная", value: false },
  { id: "ef5", type: "checkbox", name: "Семейное образование", value: false },
  { id: "ef6", type: "checkbox", name: "Индивидуальное обучение", value: false },
  { id: "ef7", type: "checkbox", name: "Групповое обучение", value: false },
  { id: "ef8", type: "checkbox", name: "Колледж", value: false },
  { id: "ef9", type: "checkbox", name: "Университет", value: false },
  { id: "ef10", type: "checkbox", name: "Другое", value: false },
]);

const organizerFilters = ref([
  { id: "o1", type: "checkbox", name: "Учебное заведение", value: false },
  { id: "o2", type: "checkbox", name: "Тренинг-центр", value: false },
  { id: "o3", type: "checkbox", name: "Курсы", value: false },
  { id: "o4", type: "checkbox", name: "Консалтинговая компания", value: false },
  { id: "o5", type: "checkbox", name: "Бизнес-школа", value: false },
  { id: "o6", type: "checkbox", name: "Онлайн-платформа", value: false },
  { id: "o7", type: "checkbox", name: "Общественная организация", value: false },
  { id: "o8", type: "checkbox", name: "Частное лицо", value: false },
  { id: "o9", type: "checkbox", name: "Государственная организация", value: false },
  { id: "o10", type: "checkbox", name: "Другое", value: false },
]);

const filterGroups = ref([
  {
    title: "Популярные",
    filters: popularFilters,

    name: "popularFilters",
    searchable: true,
    showToggle: true,
    filterResultData,
    sliderData: true,
  },
  {
    title: "Направления",
    filters: directionFilters,

    name: "directionFilters",
    searchable: true,
    showToggle: true,
    filterResultData,
  },
  {
    title: "Стоимость",
    filters: costFilters,

    name: "directionFilters",
    searchable: true,
    showToggle: true,
    filterResultData,
    // sliderData: sliderValue
  },
  {
    title: "Длительность, часов",
    filters: durationFilters,

    name: "durationFilters",
    searchable: true,
    showToggle: true,
    filterResultData,
  },
  {
    title: "Форма обучения",
    filters: educationFormFilters,

    name: "educationFormFilters",
    searchable: true,
    showToggle: true,
    filterResultData,
  },
  {
    title: "Организатор",
    filters: organizerFilters,

    name: "organizerFilters",
    searchable: true,
    showToggle: true,
    filterResultData,
  },
]);

const initFilterUpdate = (filter) => {
  if (!filterResultData.value.includes(filter)) {
    filterResultData.value.push(filter);
  }
};

function updateFilterData(filterCategory, id, value) {
  console.log("updateFilterData вызван сa:", filterCategory, "1", id, "2", value);

  const filterData = filterResultData.value.find((filter) => filter.id === value.id);
  console.log("aasd filterData", filterData);
  // if (filterData) {
  if (value.value) {
    // Добавляем фильтр в filterResultData, если он там еще не существует
    if (!filterResultData.value.includes(value)) {
      filterResultData.value.push(value);
    }
  } else {
    // Удаляем фильтр из filterResultData, если он там существует
    const index = filterResultData.value.indexOf(value);
    if (index !== -1) {
      filterResultData.value.splice(index, 1);
    }
  }
  // }
  //
  // // Проверяем, является ли filterCategory массивом
  // if (!Array.isArray(filterCategory)) {
  //   console.error("filterCategory не является массивом:", filterCategory);
  //   return;
  // }
  //
  // const filterData = filterCategory.find((filter) => filter.id === id);
  // console.log("filterData:", filterData);
  //
  // if (filterData) {
  //   console.log("обновляем filterData.value до:", value);
  //   filterData.value = value;
  //
  //   if (value) {
  //     // Добавляем фильтр в filterResultData, если он там еще не существует
  //     if (!filterResultData.value.includes(value)) {
  //       filterResultData.value.push(value);
  //     }
  //   } else {
  //     // Удаляем фильтр из filterResultData, если он там существует
  //     const index = filterResultData.value.indexOf(value);
  //     if (index !== -1) {
  //       filterResultData.value.splice(index, 1);
  //     }
  //   }
  // } else {
  //   console.log("filterData не найден");
  // }
}
</script>

<template>
  <div class="filters">
    {{ filterResultData }}
    <FilterGroup
      v-for="filterGroup in filterGroups"
      :key="filterGroup.title"
      :title="filterGroup.title"
      :filter-name="filterGroup.name"
      :filters="filterGroup.filters"
      :searchable="filterGroup.searchable"
      :show-toggle="filterGroup.showToggle"
      :filterResultData="filterResultData"
      :slider-data="filterGroup.sliderData"
      @init-filter-update="initFilterUpdate"
      @update-filter-data="updateFilterData"
    />
  </div>
</template>
