<script setup>
const active = ref(0);
</script>

<template>
  <section class="container">
    <div class="sidebar">
      <SideMenu v-model:active="active" />
    </div>
    <div class="content">
      <SideContent v-model:active="active" />
    </div>
  </section>
</template>

<style>
@font-face {
  font-family: "Ubuntu";
  src: url("/fonts/Ubuntu-Regular.ttf") format("ttf");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Ubuntu";
  src: url("/fonts/Ubuntu-Medium.ttf") format("ttf");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Ubuntu";
  src: url("/fonts/Ubuntu-Bold.ttf") format("ttf");
  font-weight: 700;
  font-style: normal;
}

:root {
  --color-blue-950: hsl(213, 96%, 18%);
  --color-purple-600: hsl(243, 100%, 62%);
  --color-blue-300: hsl(228, 100%, 84%);
  --color-blue-200: hsl(206, 94%, 87%);
  --color-red-500: hsl(354, 84%, 57%);

  --color-grey-500: hsl(231, 11%, 63%);
  --color-purple-200: hsl(229, 24%, 87%);
  --color-blue-100: hsl(218, 100%, 97%);
  --color-blue-50: hsl(231, 100%, 99%);
  --color-white: hsl(0, 100%, 100%);

  --font-family: "Ubuntu", sans-serif;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --font-size-body: 16px;
}

body {
  background-color: var(--color-grey-500);
  font-family: var(--font-family);
  font-size: var(--font-size-body);
}

.container {
  display: flex;
  background: var(--color-white);
  padding: 0rem;
  border-radius: 12px;
  max-width: 900px;
  margin: 3rem auto;
  box-shadow: 0 4px 12px var(--color-blue-950);
}

.sidebar {
  flex: 1;
  max-width: 250px;
  border-radius: 10px;
  margin: 1rem;
  color: var(--color-white);
}

.content {
  flex: 2;
  background: var(--color-white);
  border-radius: 10px;
  margin: 1rem;
  padding: 3rem 4rem;
}

.form-section {
  display: flex;
  flex-direction: column;
  font-family: var(--font-family);
}

.form-title {
  font-size: 2.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-blue-950);
  margin: 0;
}

.form-subtitle {
  font-size: var(--font-size-body);
  color: var(--color-grey-500);
  margin: 0.5rem 0rem 3rem 0rem;
}
</style>
