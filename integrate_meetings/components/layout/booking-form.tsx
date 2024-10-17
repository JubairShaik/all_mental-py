"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const BookingForm = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "15min" });
            cal("ui", {
                layout: "month_view",
                hideEventTypeDetails: true,
                // More CSS variables are defined here
                // https://github.com/calcom/cal.com/blob/b0ca7dae1a17f897e34b83c990f30ab65f615ee0/packages/config/tailwind-preset.js#L69
                cssVarsPerTheme: {
                    light: {
                        "cal-brand": "hsl(198.6 88.7% 48.4%)", // primary
                        "cal-text": "hsl(198.6 5% 0%)", // foreground
                        "cal-text-emphasis": "hsl(198.6 5% 10%)", // accent-foreground
                        "cal-text-muted": "hsl(198.6 5% 35%)", // muted-foreground
                        "cal-bg": "hsl(198.6 100% 95%)", // background
                        "cal-bg-emphasis": "hsl(160.6 30% 80%)", // accent
                        "cal-bg-muted": "hsl(160.6 30% 85%)", // muted
                        scrollbar: "rounded",
                    },
                    dark: {
                        "cal-brand": "hsl(198.6 88.7% 48.4%)", // primary
                        "cal-text": "hsl(198.6 5% 0%)", // foreground
                        "cal-text-emphasis": "hsl(198.6 5% 10%)", // accent-foreground
                        "cal-text-muted": "hsl(198.6 5% 35%)", // muted-foreground
                        "cal-bg": "hsl(198.6 100% 95%)", // background
                        "cal-bg-emphasis": "hsl(160.6 30% 80%)", // accent
                        "cal-bg-muted": "hsl(160.6 30% 85%)", // muted
                        scrollbar: "rounded",
                    },
                },
            });
        })();
    }, []);

    return (
        <>
            <Cal
                namespace="15min"
                config={{ layout: "month_view" }}
                calLink="therapistfelesia/15min"
            />
        </>
    );
};
