<script setup lang="ts">
const { errors } = defineProps<{
  errors?: {
    yourname?: string;
    email?: string;
    phone?: string;
  };
}>();

const yourname = defineModel("yourname", { type: String });
const email = defineModel("email", { type: String });
const phone = defineModel("phone", { type: String });
</script>

<template>
  <section class="form-section">
    <h2 class="form-title">Personal Info</h2>
    <p class="form-subtitle">
      Please provide your name, email address, and phone number.
    </p>

    <div class="form-group" :class="{ error: errors?.yourname }">
      <div class="form-label-row">
        <label for="yourname">Name</label>
        <span v-if="errors?.yourname" class="error-text">{{
          errors.yourname
        }}</span>
      </div>
      <input
        v-model="yourname"
        id="yourname"
        type="text"
        name="yourname"
        placeholder="e.g. Stephen King"
      />
    </div>

    <div class="form-group" :class="{ error: errors?.email }">
      <div class="form-label-row">
        <label for="email">Email Address</label>
        <span v-if="errors?.email" class="error-text">{{ errors.email }}</span>
      </div>
      <input
        v-model="email"
        id="email"
        type="email"
        name="email"
        placeholder="e.g. stephenking@lorem.com"
      />
    </div>

    <div class="form-group" :class="{ error: errors?.phone }">
      <div class="form-label-row">
        <label for="phone">Phone Number</label>
        <span v-if="errors?.phone" class="error-text">{{ errors.phone }}</span>
      </div>
      <input
        v-model="phone"
        id="phone"
        type="tel"
        name="phone"
        placeholder="e.g. +1 234 567 890"
      />
    </div>
  </section>
</template>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0rem 0rem 2rem 0rem;
}

.form-label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

label {
  font-size: 14px;
  font-weight: var(--font-weight-bold);
  color: var(--color-blue-950);
}

.error-text {
  font-size: 14px;
  font-weight: var(--font-weight-bold);
  color: var(--color-red-500);
}

input {
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-purple-200);
  border-radius: 8px;
  font-size: var(--font-size-body);
  font-family: var(--font-family);
  outline: none;
  transition: border-color 0.2s;
}

input:focus {
  border-color: var(--color-purple-600);
}

.form-group.error input {
  border-color: var(--color-red-500);
}
</style>
