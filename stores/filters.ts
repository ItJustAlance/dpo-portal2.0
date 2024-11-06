import { defineStore } from 'pinia';

import { postSend } from '@/api/global';

export const useFiltersStore = defineStore('filters', {
  state: () => ({
    filters: [], // фильтры
    showFilters: false, // фильтры
    selectedFilters: [], // выбранные фильтры
    initFilterData: false, // инициализация фильтров
    currentFilterName: '', // выбранный фильтр для мобильной версии, в отдельном окне
  }),
  actions: {
    onShowFilter(value) {
      this.showFilters = value;
    },
    onInitFilter(value) {
      console.log('oninit', value);
      this.initFilterData = value;
    },
    async initFilters() {
      try {
        const result: any = await postSend('api/filters');
        this.filters = result.data;
        console.log('initFilters', result);
        return result.status;
      } catch (e) {}
    },
    onSelectedFilters(payload) {
      this.selectedFilters = payload;
    },
  },
});
