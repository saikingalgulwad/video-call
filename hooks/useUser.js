import { create } from "zustand";

const useUser = create((set) => ({
    fullname: "",
    setFullName: (name) => set({ fullname: name }),
}));

export default useUser;
