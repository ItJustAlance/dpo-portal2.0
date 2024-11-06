<template>
  <div class="filter-mobile__wrapper">
    <div class="filter-mobile__header">
      <div class="filter-close">
        <SvgIcon name="menu-close" class="ic42"></SvgIcon>
      </div>
    </div>
    <div class="filter-mobile__body">
      <div class="filter-mobile__title">Фильтры <span class="num">4</span></div>

      <!-- FilterGroup
        v-for="filterGroup in filterGroups"
        :key="filterGroup.title"
        :title="filterGroup.title"
        :filter-name="filterGroup.name"
        :filters="filterGroup.filters"
        :searchable="filterGroup.searchable"
        :show-toggle="filterGroup.showToggle"
        :filterResultData="filterResultData"
        :slider-data="filterGroup.sliderData"
        :show-full="['directionFilters']"
        @init-filter-update="initFilterUpdate"
        @update-filter-data="updateFilterData"
      / -->
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref, computed, onMounted, watch } from "vue";

// function onClose() {
//   isLkOpen.value = false;
//   isMenuOpen.value = false;
//   document.body.classList.toggle("lock", false);
// }
</script>
