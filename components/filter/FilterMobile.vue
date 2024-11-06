<template>
  <div class="filter-mobile__wrapper">
    <div class="filter-mobile__header">
      <div class="filter-close" @click="onClose(false)">
        <SvgIcon name="menu-close" class="ic42"></SvgIcon>
      </div>
    </div>
    <div class="filter-mobile__body">
      <div class="filter-mobile__title">Фильтры <span class="num">4</span></div>
      <ul class="search-list-tags filter-active-list">
        <li class="search-tag-item">
          <div class="search-tag-item__wrap">
            <div class="search-tag-item__title">Воспитатель</div>
            <div class="search-tag-item__del"><SvgIcon name="xcircle" class="ic12"></SvgIcon></div>
          </div>
        </li>
        <li class="search-tag-item">
          <div class="search-tag-item__wrap">
            <div class="search-tag-item__title">Стоимость: 120р –120 000р</div>
            <div class="search-tag-item__del">
              <SvgIcon name="xcircle" class="fill-none ic12"></SvgIcon>
            </div>
          </div>
        </li>
        <li class="search-tag-item">
          <div class="search-tag-item__wrap">
            <div class="search-tag-item__title">Длительность: 168-320 часов</div>
            <div class="search-tag-item__del">
              <SvgIcon name="xcircle" class="fill-none ic12"></SvgIcon>
            </div>
          </div>
        </li>
      </ul>
      <FilterComp />
    </div>
  </div>
</template>

<script>
//import { ref, computed, onMounted, watch } from "vue";
import { storeToRefs } from 'pinia';
import { useFiltersStore } from '@/stores/filters';

export default {
  props: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props) {
    const filtersStore = useFiltersStore();
    const { showFilters } = storeToRefs(filtersStore); // make filters state reactive
    console.log('showFilters', showFilters);
    function onClose(value) {
      filtersStore.onShowFilter(value);
      document.body.classList.toggle('lock', false);
    }

    return {
      onClose, // expose the onClose function as a method of the component
    };
  },
};
</script>
