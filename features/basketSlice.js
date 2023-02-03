import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id)

        let newBasket = [...state.items]

        if (index >= 0) {
            newBasket.splice(index, 1)
        } else {
            console.warn(`Cant remove product (id: ${action.payload.id}) as its not in basket`)
        }

        state.items = newBasket
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state) => state.basket.items

export const selectBasketItemsWithId = (state, id) => state.basket.items.filter((item) => item.id === id);

export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0)

export default basketSlice.reducer




// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// export interface CounterState {
//   value: number
// }

// const initialState: CounterState = {
//   value: 0,
// }

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action: PayloadAction<number>) => {
//       state.value += action.payload
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer