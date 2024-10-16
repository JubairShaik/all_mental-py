"use server";

import stripe from "../vendors/stripe";
import Stripe from "stripe";

const calculateDonationAmount = (amount: number) => {
    return amount * 100;
};

export const createPaymentIntent = async (
    amount: number,
    email: string,
    name: string
) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateDonationAmount(amount),
        currency: "usd",
        receipt_email: email,
        metadata: {
            customerName: name,
        },
    });
    const clientSecret: string = paymentIntent.client_secret;
    return clientSecret;
};

// export const getTotalSuccessfulPayments = async () => {
//     let allCharges: Stripe.Charge[] = [];
//     let lastChargeId = null;
//     let totalAmount: number = 0;

//     // Keep making requests until all pages have been traversed
//     while (true) {
//         const params: Stripe.ChargeListParams = {
//             limit: 100, // Max limit per request
//         };

//         if (lastChargeId) {
//             params.starting_after = lastChargeId;
//         }

//         try {
//             const charges = await stripe.charges.list(params);

//             // Filter for successful payments
//             const successfulCharges = charges.data.filter(
//                 (charge: Stripe.Charge) =>
//                     charge.paid === true && charge.status === "succeeded"
//             );
//             allCharges = allCharges.concat(successfulCharges);

//             if (charges.data.length === params.limit) {
//                 lastChargeId = charges.data[charges.data.length - 1].id;
//             } else {
//                 break; // Exit loop if last page
//             }
//         } catch (error) {
//             console.error("Error retrieving charges:", error);
//             break; // Exit loop in case of an error
//         }
//     }

//     allCharges.forEach((charge) => {
//         totalAmount += charge.amount / 100;
//     });

//     const goal = 50000;
//     const progress = Math.round((totalAmount / goal) * 100);
//     const percentage: number = progress < 100 ? progress : 100;
//     return percentage;
// };
