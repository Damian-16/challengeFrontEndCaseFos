import {create} from 'zustand';

const useStore = create((set,get) => ({
  facilities: [],
  reservations: [],
  setFacilities: (newFacilities) => set({ facilities: newFacilities }),
  setReservations: (newReservations) => set({ reservations: newReservations }),
//   confirmReservation: function (newReservation) {
//     console.log({newReservation})
//     const apartment = get().reservations
//     const index = apartment.findIndex(function (item) {
//         return item.name === newReservation.name
//     })
//     if(index > -1){
//         apartment[index] = apartment[index]
//         set((state) => ({
        
//             reservations: [...state.reservations, newReservation],
//           }));
//     }
   
//   },

confirmReservation:function (newReservation) {
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
