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

const handleChange = () => active.value = 1;
</script>

<template>
  <div>
    <h2>Finishing up</h2>
    <p>Double-check everything looks OK before confirming.</p>

    <div>
      <div>
        <p>{{ plan.name }} ({{ subscribe.name }})</p>
        <p @click="handleChange">Change</p>
        <p>
          ${{ plan.price * subscribe.modifier }}/
          {{ subscribe.modifier === 1 ? "mo" : "yr" }}
        </p>
      </div>

      <div v-if="addon.length">
        <div v-for="a in addon" :key="a.name">
          <p>{{ a.name }}</p>
          <p>
            +${{ a.price * subscribe.modifier }}/{{
              subscribe.modifier === 1 ? "mo" : "yr"
            }}
          </p>
        </div>
      </div>

      <div>
        <p>Total (per {{ subscribe.modifier === 1 ? "month" : "year" }})</p>
        <p>${{ total }}/{{ subscribe.modifier === 1 ? "mo" : "yr" }}</p>
      </div>
    </div>
  </div>
</template>
