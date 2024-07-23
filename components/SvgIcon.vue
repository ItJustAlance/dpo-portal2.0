<script setup>
import { defineAsyncComponent } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  count: String

})
const className = `svg-icon  svg-icon--${props.name}`
//const inheritAttrs = false;

const icon = defineAsyncComponent(() =>
  import(`~/assets/svg/${props.name}.svg`)
)
</script>

<template>
  <component :is="icon"  :class="className" />
</template>
