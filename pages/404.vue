<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <div class="card">
    <div class="col-12 mt-10 text-center">
      <img src="/img/logo.svg" alt="Sakai logo" />
    </div>
    <main class="px-4 py-10 text-center text-teal-700 text-8xl">
      <div>
        <p class="text-8xl text-red-600">
          1232133
          <span class="i-codicon-error inline-block" />
        </p>
      </div>
    </main>
    <div style="alignment: center">
      <h1 class="font-bold text-5xl text-2xl text-center">Page not found ...444</h1>
      <div class="col-12 mt-5 text-center">
        <Button icon="pi pi-arrow-left" label="Back to home" @click="router.push('/')" />
      </div>
    </div>
  </div>
</template>
