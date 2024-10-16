"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const BookingForm = ({ calLink }: { calLink: string }) => {
  useEffect(() => {
    (async function () {
      const Cal = await getCalApi();
      Cal("ui", {
        layout: "column_view",
        hideEventTypeDetails: true,
        // More CSS variables are defined here
        // https://github.com/calcom/cal.com/blob/b0ca7dae1a17f897e34b83c990f30ab65f615ee0/packages/config/tailwind-preset.js#L69
        cssVarsPerTheme: {
          light: {
            "cal-brand": "hsl(0 0% 9%)", // primary
            "cal-text": "hsl(0 0% 3.9%)", // foreground
            "cal-text-emphasis": "hsl(0 0% 9%)", // accent-foreground
            "cal-text-muted": "hsl(0 0% 45.1%)", // muted-foreground
            "cal-bg": "hsl(0 0% 100%)", // background
            "cal-bg-emphasis": "hsl(0 0% 96.1%)", // accent
            "cal-bg-muted": "hsl(0 0% 96.1%)", // muted
            "scrollbar": "rounded",
          },
          dark: {
            "cal-brand": "hsl(0 0% 98%)", // primary
            "cal-text": "hsl(0 0% 98%)", // foreground
            "cal-text-emphasis": "hsl(0 0% 98%)", // accent-foreground
            "cal-text-muted": "hsl(0 0% 63.9%)", // muted-foreground
            "cal-bg": "hsl(0 0% 3.9%)", // background
            "cal-bg-emphasis": "hsl(0 0% 14.9%)", // accent
            "cal-bg-muted": "hsl(0 0% 14.9%)", // muted
            "scrollbar": "dark",
          },
        },
      });
    })();
  }, []);

  return (
    <>
      <Cal calLink={calLink} />
    </>
  );
};
