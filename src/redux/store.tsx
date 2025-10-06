import { configureStore } from "@reduxjs/toolkit";
import payslipReducer from "./slices/payslipSlice";


export const store = configureStore({
    reducer: {
        payslip: payslipReducer
    }
})

export type RootState = ReturnType<typeof store.getState>