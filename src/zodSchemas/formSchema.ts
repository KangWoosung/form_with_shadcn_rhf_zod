/*  2024-04-09 07:23:13


*/

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
});

export type FormSchemaType = z.infer<typeof formSchema>;
