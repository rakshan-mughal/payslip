import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Payslip } from "../../types";
import { mockPayslips } from "../../utils/mockPayslips";
import { RootState } from "../store";

interface PayslipState {
    payslips: Payslip[],
    selectedPayslip: Payslip | null
}

const initialState: PayslipState = {
    payslips: mockPayslips,
    selectedPayslip: null
}

const payslipSlice = createSlice({
    name: "payslip",
    initialState,
    reducers: {
        setSelectedPayslip: (state, action: PayloadAction<string>) => {
            state.selectedPayslip = state.payslips.find((p) => p.id === action.payload) || null;
        }
    }
})
export const selectedPayslip = (state: RootState) => state.payslip.payslips
export const { setSelectedPayslip } = payslipSlice.actions
export default payslipSlice.reducer