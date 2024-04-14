/*  2024-04-12 12:00:48


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
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";

export const SwitchField: React.FC<FormFieldProps> = ({
  name,
  label,
  placeholder,
  description,
  fetching,
  formControl,
  errors,
}) => {
  // const errorMessage = errors[body]?.message as string;

  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
          <FormControl>
            <Switch disabled={fetching ? true : undefined} {...field} />
          </FormControl>
          <FormLabel>{label}</FormLabel>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SwitchField;
