/*  2024-04-12 08:41:15


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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { BasicFormFieldType } from "./SignupForm";

type SelectFormFieldType = BasicFormFieldType & {
  selectData: { val: string }[];
};

const SelectField: React.FC<SelectFormFieldType> = ({
  name,
  label,
  placeholder,
  selectData,
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
            <Select
              disabled={fetching ? true : undefined}
              onValueChange={field.onChange}
              defaultValue={field.value as string}
              //   disabled={field.disabled}
              {...field}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {selectData?.map((item, idx) => (
                  <SelectItem key={idx} value={item.val}>
                    {item.val}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectField;
