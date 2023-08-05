import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Room {
  id: number;
  name: string;
  price: number;
}

interface RooDetails extends Room {
  QTY: number;
}

interface BookingState {
  products: Room[];
  room: RooDetails[];
  total: number;
  amount: number;
}

const initialState: BookingState = {
  products: [],
  room: [],
  total: 0,
  amount: 0,
};

const featuresSlice = createSlice({
  name: 'e-booking',
  initialState,
  reducers: {
    collectProducts: (state, action: PayloadAction<Room[]>) => {
      state.products = action.payload;
    },
    // addToRoom: (state, action: PayloadAction<Room>) => {
    //   const check = state.room.findIndex((item) => item.id === action.payload.id);
    //   if (check >= 0) {
    //     state.room[check].QTY += 1;
    //   } else {
    //     const newItem: RooDetails = { ...action.payload, QTY: 1 };
    //     state.room.push(newItem);
    //   }
    // },
    removeItem: (state, action: PayloadAction<Room>) => {
      state.room = state.room.filter((item) => item.id !== action.payload.id);
      let total = 0;
      let amount = 0;
      state.room.forEach((item) => {
        amount += item.QTY;
        total += item.QTY * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
    // clearCart: (state) => {
    //   state.room = [];
    //   state.total = 0;
    //   state.amount = 0;
    // },
    updateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.room.forEach((item) => {
        amount += item.QTY;
        total += Math.floor(item.QTY * item.price);
      });
      state.amount = amount;
      state.total = total;
    },
    addToRoom: (state, action: PayloadAction<Room>) => {
      const roomToAdd = state.room.find((item) => item.id === action.payload.id);
      if (roomToAdd) {
        roomToAdd.QTY += 1;
      } else {
        const newItem: RooDetails = { ...action.payload, QTY: 1 };
        state.room.push(newItem);
      }
      // Recalculate total and amount after adding/removing rooms
      state.amount = state.room.reduce((acc, item) => acc + item.QTY, 0);
      state.total = state.room.reduce((acc, item) => acc + item.QTY * item.price, 0);
    },

    minusRoom: (state, action: PayloadAction<Room>) => {
      const roomToRemove = state.room.find((item) => item.id === action.payload.id);
      if (roomToRemove) {
        if (roomToRemove.QTY > 1) {
          roomToRemove.QTY -= 1;
        } else {
          state.room = state.room.filter((item) => item.id !== action.payload.id);
        }
        // Recalculate total and amount after adding/removing rooms
        state.amount = state.room.reduce((acc, item) => acc + item.QTY, 0);
        state.total = state.room.reduce((acc, item) => acc + item.QTY * item.price, 0);
      }
    },
  },
});

export const { collectProducts, addToRoom, removeItem, updateTotal, minusRoom } = featuresSlice.actions;

export default featuresSlice.reducer;
