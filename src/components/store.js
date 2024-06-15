import { create } from "zustand";
import { POD_TYPE } from "./utils";

const useStore = create((set) => ({

  type: POD_TYPE.A,
  setType: (v) => {
    set({ type: v });
  },

  colors: {
    exterior: {
      name: "Signal White",
      value: "#ecece7"
    },
    interior: {
      name: "Signal White",
      value: "#ecece7"
    },
    seating: {
      name: "Light grey",
      value: "#c5c7c4"
    },
  },

  setColors: (v) => {
    set({ colors: v });
  },

  texturesUrl: {
    exterior: {
      name: "",
      color: "textures/Exterior/ST-02.png",
    },
    interior: {
      name: "",
      color: "textures/INTERIOR/DK-22.png",
    },
    seating: {
      name: "",
      color: "textures/Carpet/YL_817.png",
    },
  },

  setTexureUrl: (v) => {
    set({ texturesUrl: v });
  },


}));

export default useStore;
