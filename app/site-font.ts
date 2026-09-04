import localFont from "next/font/local";

/** Shared font configuration for the current root layout and future locale layouts. */
export const siteFont = localFont({
  src: [
    {
      path: "./fonts/peyda/PEYDA-THIN.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/peyda/PEYDA-EXTRALIGHT.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/peyda/PEYDA-LIGHT.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/peyda/PEYDA-REGULAR.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/peyda/PEYDA-MEDIUM.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/peyda/PEYDA-SEMIBOLD.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/peyda/PEYDA-BOLD.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/peyda/PEYDA-EXTRABOLD.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/peyda/PEYDA-BLACK.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-peyda",
  display: "swap",
});
