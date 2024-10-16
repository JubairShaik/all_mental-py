"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { createPaymentIntent } from "@/lib/actions/donate";
import { toast } from "sonner";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { track } from "@vercel/analytics/react";
import { Icons } from "../ui/icons";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { Switch } from "../ui/switch";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    amount: z.string().min(1),
    customAmount: z.number().min(10, { message: "Minimum custom amount is $10" }).optional(),
    recurring: z.boolean().default(false),
});

export default function DonateForm() {
    type DonationFormSchema = z.infer<typeof formSchema>;

    const form = useForm<DonationFormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            amount: "25",
            recurring: false,
        },
    });

    const watchDonationAmount = form.watch("amount");
    const watchRecurring = form.watch("recurring");

    async function handleSubmit(form: DonationFormSchema) {
        try {
            const { name, email, amount, customAmount, recurring } = form;

            let donationAmount = parseInt(amount);
            if (amount === "custom" && customAmount) {
                donationAmount = customAmount;
            }

            // TODO: add recurring to payment intent server action
            const clientSecret = await createPaymentIntent(
                donationAmount,
                email,
                name
            );

            console.log(clientSecret);
        } catch (error: any) {
            toast.error(`An unexpected error occurred: ${error.message}`);
        }
    }

    return (
        <>
            <CardContent>
                <Form {...form}>
                    <form
                        className="space-y-4"
                        onSubmit={form.handleSubmit(handleSubmit)}
                    >
                        <FormField
                            control={form.control}
                            name="recurring"
                            render={({ field }) => (
                                <FormItem className="flex items-center justify-between">
                                    <FormControl>
                                        <Switch
                                            {...field}
                                            value={
                                                field.value ? "true" : "false"
                                            }
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Choose between one-time and monthly
                                        recurring donation.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="amount"
                            render={({ field }) => (
                                <FormItem className="flex items-center justify-between">
                                    <FormControl>
                                        <RadioGroup
                                            {...field}
                                            className="grid grid-cols-2 gap-4"
                                            value={field.value.toString()}
                                        >
                                            {["10", "25", "50", "100"].map(
                                                (value) => (
                                                    <div key={value}>
                                                        <RadioGroupItem
                                                            value={value}
                                                            id={`amount-${value}`}
                                                            className="peer sr-only"
                                                        />
                                                        <Label
                                                            htmlFor={`amount-${value}`}
                                                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                                        >
                                                            ${value}
                                                        </Label>
                                                    </div>
                                                )
                                            )}
                                            <div className="col-span-2">
                                                <RadioGroupItem
                                                    value="custom"
                                                    id="amount-custom"
                                                    className="peer sr-only"
                                                />
                                                <Label
                                                    htmlFor="amount-custom"
                                                    className="flex items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                                >
                                                    <span className="mr-2">
                                                        Custom amount:
                                                    </span>
                                                    <Input {...field} />
                                                </Label>
                                            </div>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
            </CardContent>
            <CardFooter>
                <Button className="w-full" type="submit">
                    {form.getValues("recurring")
                        ? "Start Monthly Donation"
                        : "Donate Now"}
                </Button>
            </CardFooter>
        </>
    );
}
