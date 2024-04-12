/*  2024-04-09 07:23:13

CheckedState 

*/

import { CheckedState } from "@radix-ui/react-checkbox";
import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string()
    .email({ message: "must be email format YOU FOOL" })
    .default(""),
  username: z
    .string()
    .min(3, { message: "must be at least 2 chars YOU IDIOT" })
    .max(50)
    .default(""),
  password: z
    .string()
    .min(8, { message: "password must contain number YOU DUMB ASS?" })
    .default(""),
  notify: z.enum(["all", "mentions", "none"], {
    errorMap: (issue, ctx) => ({ message: "Select at least one radio" }),
  }),
  sendToEmail: z.string({
    required_error: "Please select an email to send.",
  }),
  // terms: z.boolean().default(false).optional(),
  // terms: z.boolean().default(false).optional() as CheckedState
  // .default(true, { message: "You must agree to the terms YOU BLOCKHEAD" })
});

export type FormSchemaType = z.infer<typeof formSchema>;
