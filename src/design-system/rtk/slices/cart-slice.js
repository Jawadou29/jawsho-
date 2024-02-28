import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice(({
  name: "cartSlice",
  initialState: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  reducers: {
    addToCart: (state, action) => {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([action.payload]));
      }
      else{
        let cheker = false;
        let localSCart = JSON.parse(localStorage.getItem("cart"));
        localSCart.forEach((product) => {
          if (action.payload.prod.id === product.prod.id) {
            product.counter += action.payload.counter;
            cheker = true;
          }
        })
        if (!cheker) {
          localSCart.push(action.payload);
        }
        localStorage.setItem("cart", JSON.stringify(localSCart));
      }
      state = JSON.parse(localStorage.getItem("cart"));
      return state

    },

    removeFromCart: (state, action) => {
      let localSCart = JSON.parse(localStorage.getItem("cart"));
      localSCart = state.filter((product) => {
        return product.prod.id !== action.payload.prod.id;
      })
      localStorage.setItem("cart", JSON.stringify(localSCart))
      state = JSON.parse(localStorage.getItem("cart"));
      return state
    },
    updateCounter: (state, action) => {
      let localSCart = JSON.parse(localStorage.getItem("cart"));
      action.payload.forEach((product) => {
        localSCart.forEach(prod2 => {
          if (product.id === prod2.prod.id) {
              prod2.counter = +(product.newCounter);
          }
        });
      })
      localStorage.setItem("cart", JSON.stringify(localSCart))
      state = JSON.parse(localStorage.getItem("cart"));
      return state
    },
    clearCart: (state, action) => {
      localStorage.setItem("cart", "[]")
      state = [];
      return state;
    }
  }
}))

export const { addToCart, removeFromCart, updateCounter, clearCart } = cartSlice.actions;
export default cartSlice.reducer;