import { reactive } from 'vue';

export const userState = reactive({
  user: null // { id, name, email, role } or null for guest
});
