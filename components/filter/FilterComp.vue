<script lang="ts" setup>
import { ref, onMounted } from "vue";
// import {onMounted} from "vue/dist/vue";

import { storeToRefs } from "pinia";
import { useFiltersStore } from "~/stores/filters";

const filtersStore = useFiltersStore();
const { selectedFilters, filters } = storeToRefs(filtersStore); // make filters state reactive

const filterResultData = ref([]);

const filterGroups = ref([]);
const isLoadData = ref(false);

onMounted(async () => {
  await initData();
});

function initData() {
  console.log("filters", filters.value);
  filterGroups.value = filters.value;
}

const initFilterUpdate = (filter) => {
  if (!filterResultData.value.includes(filter)) {
    filterResultData.value.push(filter);
  }
};
function updateFilterData(filterCategory, id, value) {
  console.log("FilterComp updateFilterData вызван сa:", filterCategory, "1", id, "2", value);
  isLoadData.value = true;
  const filterData = filterResultData.value.find((filter) => filter.id === value.id);
  console.log("aasd filterData", filterData);

  // if (filterData) {
  if (value.value) {
    // Добавляем фильтр в filterResultData, если он там еще не существует
    if (!filterResultData.value.includes(value)) {
      console.log("filterResultData");
      filterResultData.value.push(value);
    }
  } else {
    // Удаляем фильтр из filterResultData, если он там существует
    const index = filterResultData.value.indexOf(value);
    if (index !== -1) {
      filterResultData.value.splice(index, 1);
    }
  }
  filtersStore.onSelectedFilters(filterResultData.value);
  isLoadData.value = false;

 
}
</script>

<template>
  <div class="filters">
    <div v-if="!isLoadData" class="ffdf">{{ selectedFilters }}</div>
    <div v-if="filterGroups.length > 0" class="filters-body">
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
        :show-full="['directionFilters']"
        @init-filter-update="initFilterUpdate"
        @update-filter-data="updateFilterData"
      />
    </div>
    <!-- end filters-body -->
    <div class="filters-bottom">
      <div class="col-2">
        <button class="btn btn--second btn--full">Очистить</button>
      </div>
      <div class="col-2">
        <button class="btn btn--full">Применить</button>
      </div>
    </div>
  </div>
</template>
