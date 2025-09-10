<script setup lang="ts">
const active = defineModel<number>("active", {
  default: 0,
});
const plan = defineModel<{ name: string; price: number }>("plan", {
  default: { name: "Arcade", price: 9 },
});

const addon = defineModel<{ name: string; price: number }[]>("addon", {
  default: [],
});

const subscribe = defineModel<{ name: string; modifier: number }>("subscribe", {
  default: { name: "Monthly", modifier: 1 },
});

const total = computed(() => {
  const planTotal = plan.value.price * subscribe.value.modifier;
  const addonTotal = addon.value.reduce(
    (sum, a) => sum + a.price * subscribe.value.modifier,
    0
  );
  return planTotal + addonTotal;
});

const handleChange = () => (active.value = 1);
</script>

<template>
  <section class="form-section">
    <h2 class="form-title">Finishing up</h2>
    <p class="form-subtitle">
      Double-check everything looks OK before confirming.
    </p>

    <div class="summaries">
      <div class="summary-plan">
        <div>
          <p>{{ plan.name }} ({{ subscribe.name }})</p>
          <p @click="handleChange">Change</p>
        </div>
        <p>
          ${{ plan.price * subscribe.modifier }}/{{ subscribe.modifier === 1 ? "mo" : "yr" }}
        </p>
      </div>

      <div class="summary-addon" v-if="addon.length">
        <div v-for="a in addon" :key="a.name">
          <p>{{ a.name }}</p>
          <p>
            +${{ a.price * subscribe.modifier }}/{{
              subscribe.modifier === 1 ? "mo" : "yr"
            }}
          </p>
        </div>
      </div>
    </div>

    <div class="summary-total">
      <p>Total (per {{ subscribe.modifier === 1 ? "month" : "year" }})</p>
      <p>${{ total }}/{{ subscribe.modifier === 1 ? "mo" : "yr" }}</p>
    </div>
  </section>
</template>

<style scoped>
.summaries {
  padding: 1rem;
  background-color: var(--color-blue-50);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.summary-plan {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.15rem solid var(--color-grey-200);
  padding-bottom: 1rem;
}

.summary-plan > div {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.summary-plan p:first-child {
  font-weight: var(--font-weight-bold);
  color: var(--color-blue-950);
  margin: 0.15rem 0;
}

.summary-plan p:last-child {
  font-weight: var(--font-weight-bold);
  color: var(--color-blue-950);
  margin: 0.15rem 0;
}

.summary-plan div p:last-child {
  color: var(--color-grey-500);
  font-size: 0.9rem;
  cursor: pointer;
  text-decoration: underline;
}

.summary-addon {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.summary-addon > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.summary-addon p:first-child {
  color: var(--color-grey-500);
  margin: 0.5rem 0;
}

.summary-addon p:last-child {
  color: var(--color-blue-950);
  margin: 0.5rem 0;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.summary-total p:first-child {
  color: var(--color-grey-500);
}

.summary-total p:last-child {
  color: var(--color-purple-600);
  font-weight: var(--font-weight-bold);
  font-size: 1.2rem;
}
</style>
