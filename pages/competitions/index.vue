<script lang="ts" setup>
import { ref, onMounted } from 'vue';
// import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from 'pinia';
import { useFiltersStore } from '~/stores/filters';

// const currentUser = useAuthUser();

// const initFilterData = ref(false);
const selectedCity = ref();
const filterPopular = ref(false);
const filterNew = ref(false);
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
]);

const filtersStore = useFiltersStore();
const { initFilterData, showFilters } = storeToRefs(filtersStore); // make filters state reactive

// const { authenticated } = storeToRefs(useFiltersStore()); // make authenticated state reactive

onMounted(async () => {
  await onFilterData();
});

const onFilterData = async () => {
  const result = await filtersStore.initFilters();
  console.log('onFilterData', result);
  if (result === 'success') {
    // нужно переделать для обновления в store
    filtersStore.onInitFilter(true);
    // initFilterData.value = true;
  }
};

const onFilterShow = (value) => {
  filtersStore.onShowFilter(value);
};
</script>

<template>
  <div class="all">
    <div class="page-title h2-title">Конкурсы</div>
    <div class="b-container">
      <aside class="aside hidden-lg">
        <FilterComp v-if="initFilterData" />
      </aside>
      <main class="content-body">
        <section class="section">
          <SearchBox :is-more="true" title-tags="Название конкурса" :is-special="true" />
        </section>
        <div class="result-content">
          <div class="result-content__header">
            <div class="result-filters">
              <div class="result-filters__item --select">
                <Select
                  v-model="selectedCity"
                  :options="cities"
                  option-label="name"
                  placeholder="Сначала ближайшие"
                  class="select-filter-sort"
                >
                  <template #dropdownicon>
                    <!-- Используем любую иконку, например, FontAwesome -->
                    <SvgIcon name="caret-down" class="fnone ic24"></SvgIcon>
                  </template>
                </Select>
              </div>
              <!--end result-filter__item -->
              <div class="result-filters__item visible-lg">
                <button class="btn-filter btn-filter-show" @click="onFilterShow(true)">
                  <SvgIcon name="faders-horizontal" class="fnone ic24"></SvgIcon>
                </button>
              </div>
            </div>
            <!--end result-filters -->
            <div class="filter-list-first">
              <div class="b-checkbox">
                <Checkbox v-model="filterPopular" :binary="true" input-id="popular" name="filterPopular" />
                <label for="popular">Популярные</label>
              </div>
              <div class="b-checkbox">
                <Checkbox v-model="filterNew" :binary="true" input-id="filterNew" name="filterNew" />
                <label for="filterNew">Новые</label>
              </div>
            </div>
            <!--end filter-list-first -->
          </div>
          <div class="result-content__body">
            <div class="event-list --list-3-column">
              <div v-for="(item, index) in 9" :key="index" class="event-item">
                <CompetentionBox url="a1" />
              </div>
            </div>
            <!--end populars-list -->
            <div class="more-load --align-center">
              <button class="btn btn--second">
                <span class="btn-label">Еще 9 конкурсов из 150</span>
                <SvgIcon name="caret-circle-down" class="fnone ic24"></SvgIcon>
              </button>
            </div>
          </div>
        </div>
        <!--end result-content -->
      </main>
      <!--end content-body -->
    </div>
    <div v-if="showFilters" class="filter-mobile">
      <FilterMobile v-if="initFilterData" />
    </div>
    <!-- end filter-mobile-->
    <div class="filter-mobile --single">
      <!-- FilterMobileFull v-if="initFilterData" / -->
    </div>
    <!-- end filter-mobile-->
  </div>
  <!-- /.all -->
</template>
