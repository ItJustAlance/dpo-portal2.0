<template>
  <div class="box-filter">
    <div class="title">{{ title }}</div>
    <div v-if="searchable" class="box-filter__search">
      <div v-if="filters.length > 4" class="b-input">
        <input v-model="searchQuery" type="text" placeholder="Поиск" class="b-input__input" />
      </div>
    </div>
    <div class="filter-list">
      <div v-for="filter in displayedFilters" :key="filter.id" class="filter-item">
        <div v-if="filter.type !== 'slider'" class="b-checkbox">
          <Checkbox
            v-model="filter.value"
            :binary="true"
            :input-id="filter.id"
            :name="filter.name"
            @change="updateFilterData(filter.id, $event.target.checked)"
          />
          <label :for="filter.id">{{ filter.name }} {{ filter.id }}</label>
        </div>
      </div>
    </div>
    <div v-if="showToggle && filters.length > 4 && searchQuery === ''" class="row-toggle">
      <button class="btn btn--inline btn-toggle" @click="showAllFilters = !showAllFilters">
        <span class="btn-label">{{ showAllFilters ? "Скрыть" : `Еще ${filters.length} направлений` }}</span>
        <SvgIcon name="caret-circle-down" class="fnone ic24"></SvgIcon>
      </button>
    </div>
    <div v-if="sliderData" class="filter-slider">
      <div class="filter-row">
        <div class="filter-col1">
          <div class="slider__slider">
            <Slider v-model="sliderDataResult" :min="0" :max="250" range />
          </div>
        </div>
      </div>
      <div class="filter-row">
        <div class="filter-col2">
          <div class="title-inp">От</div>
          <InputText v-model.number="sliderDataResult[0]" />
        </div>
        <div class="filter-col2">
          <div class="title-inp">До</div>
          <InputText v-model.number="sliderDataResult[1]" />
        </div>
      </div>
    </div>
    <!--end filter-slider-->
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from "vue";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    filterName: {
      type: String,
      default: "",
    },
    filters: {
      type: Array,
      default: () => [],
    },
    searchable: {
      type: Boolean,
      default: false,
    },
    showToggle: {
      type: Boolean,
      default: false,
    },
    sliderData: {
      type: Boolean,
      default: false,
    },
    filterResultData: {
      type: Array,
      default: () => [],
    }, // Получите filterResultData как проп
  },
  emits: ["update-filter-data", "init-filter-update"],
  setup(props, { emit }) {
    const sliderDataResult = ref([2, 400]);
    const searchQuery = ref("");
    const showAllFilters = ref(false);
    const initFilterResultData = () => {
      console.log("props.filters", props.filters);
      props.filters.forEach((filter) => {
        if (filter.value) {
          emit("init-filter-update", filter);
        }
      });
      console.log("props.sliderData", props.sliderData);
      // передача данных слайдеру
      if (props.sliderData) {
        const sliderTo = props.filters.find((el) => el.pos === "to");
        const sliderFrom = props.filters.find((el) => el.pos === "from");
        console.log("sliderTo", sliderTo);
        sliderDataResult.value = [sliderTo.value, sliderFrom.value];
        console.log("sliderDataResult", sliderDataResult.value);
      } else {
        sliderDataResult.value = [2, 400]; // default value
      }
    };

    onMounted(() => {
      initFilterResultData();
    });

    const filteredFilters = computed(() => {
      return props.filters.filter((filter) => filter.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
    });

    const displayedFilters = computed(() => {
      if (showAllFilters.value) {
        return filteredFilters.value;
      } else {
        return filteredFilters.value.slice(0, 4);
      }
    });

    const updateFilterData = (id, value) => {
      console.log("updateFilterDataGroup", id, value, props.filters);
      const filter = props.filters.find((filter) => filter.id === id);
      if (filter) {
        filter.value = value;
        // Добавьте или удалите фильтр из filterResultData
        // if (value) {
        //   if (!props.filterResultData.includes(filter)) {
        //     props.filterResultData.push(filter);
        //   }
        // } else {
        //   const index = props.filterResultData.indexOf(filter);
        //   if (index !== -1) {
        //     props.filterResultData.splice(index, 1);
        //   }
        // }
        emit("update-filter-data", props.filterResultData, props.filterName, filter);
      }
    };
    watch(sliderDataResult, (newValue) => {
      console.log("newValue", newValue);
      const sliderTo = props.filters.find((el) => el.pos === "to");
      const sliderFrom = props.filters.find((el) => el.pos === "from");
      console.log("watch sliderTo", sliderTo, sliderFrom);
      const sliderDataObject = {
        id: sliderTo?.id,
        name: sliderTo?.name,
        value: sliderTo?.value,
      };
      console.log("ffffff", sliderDataObject, "aa", props.sliderData);
      if (props.sliderData) {
        // emit("update-filter-data", props.sliderData?.id, newValue[0]);
        updateFilterData(sliderTo.id, newValue[0]);
        updateFilterData(sliderFrom.id, newValue[1]);
      }

      // props.filterResultData.push(sliderDataObject);
      // emit("update-filter-data", props.filterResultData, props.filterName, filter);
    });
    return {
      searchQuery,
      showAllFilters,
      displayedFilters,
      updateFilterData,
      sliderDataResult,
      // filterResultData, // Return filterResultData
    };
  },
};
</script>
