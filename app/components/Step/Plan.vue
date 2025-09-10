<script setup lang="ts">
const plan = defineModel<{ name: string; price: number }>("plan", {
  default: { name: "Arcade", price: 9 },
});

const subscribe = defineModel<{ name: string; modifier: number }>("subscribe", {
  default: { name: "Monthly", modifier: 1 },
});

const plans = [
  { name: "Arcade", image: "/images/icon-arcade.svg", price: 9 },
  { name: "Advanced", image: "/images/icon-advanced.svg", price: 12 },
  { name: "Pro", image: "/images/icon-pro.svg", price: 15 },
];

const isYearly = computed({
  get: () => subscribe.value.modifier === 10,
  set: (val: boolean) => {
    subscribe.value = val
      ? { name: "Yearly", modifier: 10 }
      : { name: "Monthly", modifier: 1 };
  },
});
</script>

<template>
  <section class="form-section">
    <h2 class="form-title">Select Plan</h2>
    <p class="form-subtitle">
      You have the option of monthly or yearly billing.
    </p>

    <div class="plans">
      <label
        v-for="p in plans"
        :key="p.name"
        class="plan-card"
        :class="{ active: plan.name === p.name }"
      >
        <input type="radio" name="plan" :value="p" v-model="plan" />
        <NuxtImg :src="p.image" :alt="p.name" width="40" height="40" />
        <div class="plan-description">
          <div class="plan-title">{{ p.name }}</div>
          <div class="plan-price">
            ${{ p.price * subscribe.modifier }}/{{
              subscribe.modifier === 1 ? "mo" : "yr"
            }}
          </div>
          <div v-if="subscribe.modifier === 10" class="plan-bonus">
            2 months free
          </div>
        </div>
      </label>
    </div>

    <div class="subscribe-toggle">
      <span :class="{ active: !isYearly }">Monthly</span>
      <label class="switch">
        <input type="checkbox" v-model="isYearly" />
        <div class="slider round"></div>
      </label>
      <span :class="{ active: isYearly }">Yearly</span>
    </div>
  </section>
</template>

<style scoped>
.plans {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.plan-card {
  padding: 1rem;
  border: 1px solid var(--color-purple-200);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  font-family: var(--font-family);
  background-color: var(--color-white);
}

.plan-card:hover {
  border-color: var(--color-purple-600);
}

.plan-card input {
  display: none;
}

.plan-card.active {
  border-color: var(--color-purple-600);
  background-color: var(--color-blue-100);
}

.plan-description {
  margin: 3rem 0 0 0;
}

.plan-title {
  font-weight: var(--font-weight-bold);
  color: var(--color-blue-950);
  margin: 0 0 0.25rem 0;
}

.plan-price {
  font-size: 14px;
  color: var(--color-grey-500);
  margin: 0 0 0.25rem 0;
}

.plan-bonus {
  font-size: 14px;
  color: var(--color-blue-950);
}

.subscribe-toggle {
  background-color: var(--color-blue-100);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  font-family: var(--font-family);
}

.subscribe-toggle span {
  font-weight: var(--font-weight-medium);
  color: var(--color-grey-500);
  transition: color 0.25s ease-in-out;
}

.subscribe-toggle span.active {
  color: var(--color-blue-950);
  font-weight: var(--font-weight-bold);
}

.switch {
  display: inline-block;
  height: 24px;
  position: relative;
  width: 50px;
}

.switch input {
  display: none;
}

.slider {
  background-color: var(--color-blue-950);
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.3s;
}

.slider:before {
  background-color: var(--color-white);
  bottom: 3px;
  content: "";
  height: 18px;
  left: 3px;
  position: absolute;
  transition: 0.3s;
  width: 18px;
}

input:checked + .slider {
  background-color: var(--color-blue-950);
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 24px;
}

.slider.round:before {
  border-radius: 50%;
}

@media (max-width: 768px) {
  .plan-card {
    display: flex;
  }

  .plan-description {
    margin: 0 1rem;
  }
}
</style>
