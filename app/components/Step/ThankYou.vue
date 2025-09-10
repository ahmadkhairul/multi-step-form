<script setup></script>
<template>
  <section class="thanks">
    <NuxtImg src="/images/icon-thank-you.svg" width="65" height="65" />
    <h2>Thank you!</h2>
    <p>
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremgaming.com.
    </p>
  </section>
</template>

<style scoped>
.thanks {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1rem;
  height: 100%;
}

.thanks h2 {
  font-size: 24px;
  color: var(--color-blue-950);
  text-align: center;
  margin: 0.5rem 0 0 0;
}

.thanks p {
  font-size: 16px;
  color: var(--color-grey-500);
  text-align: center;
  margin: 0;
}
</style>

