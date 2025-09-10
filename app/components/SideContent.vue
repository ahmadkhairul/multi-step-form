<script setup>
const active = defineModel("active", { type: Number });
const { yourname, email, phone, errors, plan, subscribe, addon, validate } =
  useForm();

function handleNext() {
  if (validate()) {
    active.value = active.value + 1;
  }
}

function handlePrev() {
  active.value = active.value - 1;
}
</script>
<template>
  <StepInfo
    v-show="active === 0"
    v-model:yourname="yourname"
    v-model:email="email"
    v-model:phone="phone"
    :errors="errors"
  />
  <StepPlan
    v-show="active === 1"
    v-model:plan="plan"
    v-model:subscribe="subscribe"
  />
  <StepAddOn
    v-show="active === 2"
    v-model:subscribe="subscribe"
    v-model:addon="addon"
  />
  <StepSummary
    v-show="active === 3"
    v-model:active="active"
    v-model:plan="plan"
    v-model:subscribe="subscribe"
    v-model:addon="addon"
  />
  <StepThankYou v-show="active === 4" />
  <div class="btn-action">
    <div class="left">
      <button
        class="btn outline"
        v-if="active > 0 && active < 4"
        @click="handlePrev"
      >
        Go Back
      </button>
    </div>

    <div class="right">
      <button
        class="btn"
        v-if="active < 4"
        @click="handleNext"
        :class="{ confirm: active === 3 }"
      >
        {{ active === 3 ? "Confirm" : "Next Step" }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.btn-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}

.left,
.right {
  flex: 1;
  display: flex;
}

.left {
  justify-content: flex-start;
}

.right {
  justify-content: flex-end;
}

.btn {
  padding: 1rem 2rem;
  background-color: var(--color-blue-950);
  font-family: var(--font-family);
  border-radius: 12px;
  color: var(--color-white);
  font-size: 16px;
  font-weight: var(--font-weight-medium);
  border: none;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
}

.btn.confirm {
  background-color: var(--color-purple-600);
}

.btn.outline {
  color: var(--color-grey-500);
  background-color: var(--color-white);
  border: 1px solid var(--color-purple-200);
  transition: all 0.25s ease-in-out;
}

@media (max-width: 768px) {
  .btn-action {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--color-white);
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
    z-index: 50;
  }

  .left {
    flex: none;
  }

  .right {
    flex: 1;
  }

  .btn {
    font-size: 14px;
    border-radius: 6px;
    padding: 1rem 1.5rem;
  }

  .btn.outline {
    padding: 1rem 0;
    border: none;
  }
}

@media (hover: hover) and (pointer: fine) {
  .btn:hover {
    background-color: var(--color-purple-600);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  .btn.confirm:hover {
    background-color: var(--color-blue-300);
  }

  .btn.outline:hover {
    color: var(--color-white);
    background-color: var(--color-blue-950);
    border-color: var(--color-blue-950);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
}
</style>
