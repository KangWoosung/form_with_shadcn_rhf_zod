/*  2024-04-09 23:23:06



*/

import React from "react";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { FormFieldProps } from "./SignupForm";
import { Textarea } from "./ui/textarea";

export const TextareaField: React.FC<FormFieldProps> = ({
  name,
  label,
  placeholder,
  description,
  // fetching,
  formControl,
  errors,
}) => {
  // const errorMessage = errors[body]?.message as string;

  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              // disabled={fetching ? true : undefined}
              placeholder={placeholder}
              className="resize-none"
              defaultValue={field.value as string}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextareaField;
