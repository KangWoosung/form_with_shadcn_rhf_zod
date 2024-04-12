/*  2024-04-09 23:22:26



*/

import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { FormFieldProps } from "./SignupForm";

const RadioGroupField: React.FC<FormFieldProps> = ({
  name,
  label,
  radioData,
  fetching,
  formControl,
  errors,
}) => {
  const errorMessage = errors[name]?.message as string;

  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup
              disabled={fetching ? true : undefined}
              {...field}
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              {radioData?.map((item, idx) => (
                <FormItem
                  key={idx}
                  className="flex items-center space-x-3 space-y-0"
                >
                  <FormControl>
                    <RadioGroupItem value={item.val} />
                  </FormControl>
                  <FormLabel className="font-normal">{item.descr}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RadioGroupField;
