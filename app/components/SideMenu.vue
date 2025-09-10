<script setup lang="ts">
const active = defineModel("active", { type: Number });
const menu = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

const isActive = (num: number) => {
  if ((active.value === 3 || active.value === 4) && num === 3) return true;
  return active.value === num;
};
</script>

<template>
  <section class="side-menu">
    <ul class="steps">
      <li
        v-for="(item, index) in menu"
        :key="index"
        class="tab"
        :class="{ active: isActive(index) }"
      >
        <span class="step-circle">{{ index + 1 }}</span>
        <div class="step-text">
          <span class="step-label">Step {{ index + 1 }}</span>
          <span class="step-title">{{ item }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.side-menu {
  border-radius: 12px;
  background-image: url("/images/bg-sidebar-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 2rem 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 580px;

  font-family: var(--font-family);
  color: var(--color-white);
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.tab {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
}

.step-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid var(--color-white);
  font-weight: var(--font-weight-bold);
  font-size: 14px;
  color: var(--color-white);
  background: transparent;
}

.step-text {
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
}

.step-label {
  font-size: 12px;
  color: var(--color-blue-300);
  font-weight: var(--font-weight-medium);
  letter-spacing: 1px;
}

.step-title {
  font-size: 14px;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.5px;
  color: var(--color-white);
}

.tab.active .step-circle {
  background: var(--color-blue-200);
  color: var(--color-blue-950);
  border-color: var(--color-blue-200);
}

@media (max-width: 768px) {
  .side-menu {
    background: transparent;
    padding: 0;
    min-height: auto;
    justify-content: center;
  }

  .steps {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }

  .tab {
    flex-direction: column;
    gap: 0.3rem;
  }

  .step-text {
    display: none;
  }
}
</style>
