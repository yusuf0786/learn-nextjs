import { create } from "zustand";

export const userStore = create(set => ({
    user: {
        name: "user",
        age: 18,
    },
    updateUser: (newUser) => set(state => ({
        user: {...state.user, ...newUser}
    }))
}))