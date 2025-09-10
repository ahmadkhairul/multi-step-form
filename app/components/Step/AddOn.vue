<script setup lang="ts">
const addon = defineModel<{ name: string; price: number }[]>("addon", {
  default: [],
});

const subscribe = defineModel<{ name: string; modifier: number }>("subscribe", {
  default: { name: "Monthly", modifier: 1 },
});

const addons = [
  { name: "Online service", desc: "Access to multiplayer games", price: 1 },
  { name: "Larger storage", desc: "Extra 1TB of cloud save", price: 2 },
  {
    name: "Customizable profile",
    desc: "Custom theme on your profile",
    price: 2,
  },
];

function toggleAddon(item: { name: string; price: number }) {
  const index = addon.value.findIndex((a) => a.name === item.name);
  if (index === -1) {
    addon.value.push(item);
  } else {
    addon.value.splice(index, 1);
  }
}

function isChecked(item: { name: string }) {
  return addon.value.some((a) => a.name === item.name);
}
</script>

<template>
  <section class="form-section">
    <h2 class="form-title">Pick add-ons</h2>
    <p class="form-subtitle">Add-ons help enhance your gaming experience.</p>

    <div class="addons">
      <label
        v-for="item in addons"
        :key="item.name"
        class="addon-card"
        :class="{ active: isChecked(item) }"
      >
        <input
          type="checkbox"
          :checked="isChecked(item)"
          @change="toggleAddon(item)"
        />
        <div>
          <div>
            <p>{{ item.name }}</p>
            <p>{{ item.desc }}</p>
          </div>
          <p>
            +${{ item.price * subscribe.modifier }}/{{ subscribe.modifier === 1 ? "mo" : "yr" }}
          </p>
        </div>
      </label>
    </div>
  </section>
</template>

<style scoped>
.addons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: var(--font-family);
  font-size: var(--font-size-body);
}

.addon-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--color-purple-200);
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: var(--color-white);
  gap: 1rem;
}

.addon-card:hover {
  border-color: var(--color-purple-600);
}

.addon-card.active {
  background-color: var(--color-blue-100);
  border-color: var(--color-purple-600);
}

.addon-card input[type="checkbox"] {
  width: 20px;
  height: 20px;
  accent-color: var(--color-purple-600);
  cursor: pointer;
  flex-shrink: 0;
}

.addon-card div {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.addon-card div > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
}

.addon-card p {
  margin: 0;
}

.addon-card > div > div > p:nth-child(1) {
  font-weight: var(--font-weight-bold);
  color: var(--color-blue-950);
  font-size: 16px;
}

.addon-card > div > div > p:nth-child(2) {
  font-size: 0.875rem;
  color: var(--color-grey-500);
}

/* price */
.addon-card > div > p {
  font-weight: var(--font-weight-bold);
  color: var(--color-purple-600);
  white-space: nowrap;
  font-size: 0.875rem;
}
</style>
