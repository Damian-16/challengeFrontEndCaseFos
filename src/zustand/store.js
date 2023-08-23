import { create } from "zustand";

const useStore = create((set, get) => ({
  user: {
    name: "Maximo Cosseti",
    apartment: "Apartamento 105",
    dateTime: null,
  },
  facilities: [],
  reservations: [],
  setFacilities: (newFacilities) => set({ facilities: newFacilities }),
  setReservations: (newReservations) => set({ reservations: newReservations }),

  updateReservationDateTime: function (newDateTime) {
    set((state) => ({
      user: {
        ...state.user,
        dateTime: newDateTime,
      },
    }));
  },
  confirmReservation: function (newReservation) {
    console.log("🚀 ~ file: store.js:23 ~ useStore ~ newReservation:", newReservation)
    const updatedFacilities = get().facilities.map((facility) => {
      if (facility.title === newReservation.title) {
        return {
          ...facility,
          reservation: [...facility.reservation, newReservation],
        };
      } else {
        return facility;
      }
    });

    set((state) => ({
      facilities: updatedFacilities,
      reservations: [...state.reservations, newReservation],
    }));
  },
}));

export default useStore;
