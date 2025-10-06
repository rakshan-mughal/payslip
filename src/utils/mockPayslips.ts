import { Payslip } from "../types";

export const mockPayslips: Payslip[] = [
  {
    id: "1",
    fromDate: "2025-03-01",
    toDate: "2025-03-31",
    file: require("../assets/Payslip_Image_1.png"),
    fileName: "Payslip_Image_1.png",
  },
  {
    id: "2",
    fromDate: "2025-04-01",
    toDate: "2025-04-30",
    file: require("../assets/Payslip_Image_2.png"),
    fileName: "Payslip_Image_2.png",
  },
  {
    id: "3",
    fromDate: "2025-05-01",
    toDate: "2025-05-31",
    file: require("../assets/Payslip_Image_3.png"),
    fileName: "Payslip_Image_3.png",
  },
  {
    id: "4",
    fromDate: "2025-01-01",
    toDate: "2025-01-31",
    file: require("../assets/Dummy_Payslip_John.pdf"),
    fileName: "Dummy_Payslip_John.pdf",
  },
  {
    id: "5",
    fromDate: "2025-02-01",
    toDate: "2025-02-28",
    file: require("../assets/Dummy_Payslip_Sarah.pdf"),
    fileName: "Dummy_Payslip_Sarah.pdf",
  },
];
