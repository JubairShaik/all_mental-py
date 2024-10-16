import { auth } from "@/auth";

import * as z from "zod";

import { db } from "@/lib/db";

const formCreateSchema = z.object({
    title: z.string(),
    description: z.string(),
    status: z.string().optional(),
    responses: z.array(
        z.object({
            text: z.string(),
        })
    ),
});

export async function GET() {
    try {
        const session = await auth();

        if (!session) {
            return new Response("Unauthorized", { status: 403 });
        }

        const { user } = session;

        const forms = db.completedForm.findMany({
            where: {
                userId: user?.id,
            },
        });

        return new Response(JSON.stringify(forms));
    } catch (error) {
        return new Response(null, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const session = await auth();

        if (!session) {
            return new Response("Unauthorized", { status: 403 });
        }

        const json = await req.json();
        const body = formCreateSchema.parse(json);

        const form = await db.form.create({
            data: {
                title: body.title,
                description: body.description,
            },
            select: {
                id: true,
            },
        });

        return new Response(JSON.stringify(form));
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 });
        }

        return new Response(null, { status: 500 });
    }
}
