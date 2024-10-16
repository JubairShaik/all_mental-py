import { auth } from "@/auth"
import * as z from "zod"

import authConfig from "@/auth.config"
import { db } from "@/lib/db"
import { formPatchSchema } from "@/lib/validations/form"

const routeContextSchema = z.object({
  params: z.object({
    formId: z.string(),
  }),
})

export async function DELETE(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    // Validate the route params.
    const { params } = routeContextSchema.parse(context)

    // Check if the user has access to this post.
    if (!(await verifyCurrentUserHasAccessToForm(params.formId))) {
      return new Response(null, { status: 403 })
    }

    // Delete the form.
    await db.form.delete({
      where: {
        id: params.formId as string,
      },
    })

    return new Response(null, { status: 204 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
      // Validate route params.
      const { params } = routeContextSchema.parse(context);

      const session = await auth();

      // Check if the user has access to this form.
      if (!(await verifyCurrentUserHasAccessToForm(params.formId))) {
          return new Response(null, { status: 403 });
      }

      // Get the request body and validate it.
      const json = await req.json();
      const body = formPatchSchema.parse(json);

      // Update the post.
      // TODO: Implement sanitization for content.
      await db.completedForm.update({
          where: {
              userId_formId: {
                  userId: session?.user?.id as string,
                  formId: params.formId,
              },
          },
          data: {
              form: {
                  update: {
                      title: body.title,
                      description: body.description,
                      status: body.status,
                  },
              },
          },
      });

      return new Response(null, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}

async function verifyCurrentUserHasAccessToForm(formId: string) {
    const session = await auth()
  const count = await db.completedForm.count({
    where: {
      formId: formId,
      userId: session?.user?.id,
    },
  })

  return count > 0
}