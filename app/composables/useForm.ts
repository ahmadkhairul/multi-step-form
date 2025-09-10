import { ref } from "vue";

export function useForm() {
  const yourname = ref("Stephen");
  const email = ref("stephen@gmail.com");
  const phone = ref("+62555444333");
  const plan = ref({ name: "Arcade", price: 9 });
  const subscribe = ref({ name: "Monthly", modifier: 1 });
  const addon = ref([]);

  const errors = ref<{ yourname?: string; email?: string; phone?: string }>({});

  const validate = () => {
    errors.value = {};

    if (!yourname.value) {
      errors.value.yourname = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value) {
      errors.value.email = "Email is required";
    } else if (!emailRegex.test(email.value)) {
      errors.value.email = "Invalid email format";
    }

    const phoneRegex = /^\+?\d{9,15}$/;
    if (!phone.value) {
      errors.value.phone = "Phone is required";
    } else if (!phoneRegex.test(phone.value)) {
      errors.value.phone = "Invalid phone number";
    }

    return Object.keys(errors.value).length === 0;
  };

  return {
    yourname,
    email,
    phone,
    errors,
    plan,
    subscribe,
    addon,
    validate,
  };
}
