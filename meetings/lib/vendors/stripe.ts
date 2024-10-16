import { env } from "@/env.mjs";

const stripe = require("stripe")(env.STRIPE_API_SECRET);

export default stripe;
