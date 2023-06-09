import { create } from "zustand";

interface ModelStore {
  isOpen: boolean;
  openModel: () => void;
  closeModel: () => void;
}

export const useModelStore = create<ModelStore>((set) => ({
  isOpen: false,
  openModel: () => set({ isOpen: true }),
  closeModel: () => set({ isOpen: false }),
}));
