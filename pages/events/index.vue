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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const result = await filtersStore.initFilters();
  console.log('onFilterData', result);
  if (result == 'success') {
    // нужно переделать для обновления в store
    filtersStore.onInitFilter(true);
    // initFilterData.value = true;
  }
};

const onFilterShow = async (value) => {
  filtersStore.onShowFilter(value);
};
</script>

<template>
  <div class="all">
    <div class="page-title h2-title">Мероприятия</div>
    <div class="b-container">
      <aside class="aside hidden-lg">
        <FilterComp v-if="initFilterData" />
      </aside>
      <main class="content-body">
        <section class="section">
          <SearchBox :is-more="true" title-tags="Тип мероприятия" :is-special="true" />
          <div class="search-box --special">
            <div class="title h4-title">Тип мероприятия</div>
            <ul class="list-search-tags">
              <li class="item-tag">
                <NuxtLink class="item-tag__link" to="/">Воспитательная работа</NuxtLink>
              </li>
              <li class="item-tag">
                <NuxtLink class="item-tag__link" to="/">Государственная итоговая аттестация (9-11 кл)</NuxtLink>
              </li>
              <li class="item-tag">
                <NuxtLink class="item-tag__link" to="/">Дошкольное образование</NuxtLink>
              </li>
              <li class="item-tag">
                <NuxtLink class="item-tag__link" to="/"
                  >Дополнительное образование и внеурочная деятельность детей</NuxtLink
                >
              </li>
              <li class="item-tag">
                <NuxtLink class="item-tag__link" to="/">Духовно-нравственное воспитание, ОРКСЭ</NuxtLink>
              </li>

              <li class="item-tag last-item">
                <NuxtLink class="item-tag__link tag-active" to="/">Все направления</NuxtLink>
              </li>
            </ul>
            <div class="search-box__more">
              <button class="btn btn--border-inline">
                <span class="btn-label">Еще 8 типов мероприятий</span>
                <SvgIcon name="caret-circle-down" class="fnone ic24"></SvgIcon>
              </button>
            </div>
          </div>
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
            <div class="event-list">
              <div class="event-item" v-for="item in 9">
                <EventBox url="a1" />
              </div>
            </div>
            <!--end populars-list -->
            <div class="more-load --align-center">
              <button class="btn btn--second">
                <span class="btn-label">Еще 9 мероприятий из 150</span>
                <SvgIcon name="caret-circle-down" class="fnone ic24"></SvgIcon>
              </button>
            </div>
          </div>
        </div>
        <!--end result-content -->
      </main>
      <!--end content-body -->
    </div>
    <div class="filter-mobile" v-if="showFilters">
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
