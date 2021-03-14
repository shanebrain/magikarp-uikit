import { Colors } from "./types";

export const baseColors = {
  failure: "#fe0000",
  primaryBright: "#e67e22",
  primaryDark: "#c0392b",
  secondary: "#983414",
  success: "#2ecc71",
  warning: "#f1c40f",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  primary: "#d35400",
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#983414",
  textDisabled: "#a4918b",
  textSubtle: "#983414",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ff6a6a",
  primary: "#d37a40",
  background: "#353231",
  backgroundDisabled: "#423a37",
  contrast: "#FFFFFF",
  invertedContrast: "#261813",
  input: "#59453e",
  primaryDark: "#0098A1",
  tertiary: "#474036",
  text: "#fcf5e2",
  textDisabled: "#706460",
  textSubtle: "#d4c7c3",
  borderColor: "#63524c",
  card: "#2b2725",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #5c4231 0%, #54352a 100%)",
  },
};
