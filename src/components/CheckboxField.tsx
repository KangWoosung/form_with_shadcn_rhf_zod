/*  2024-04-09 15:03:46

issues:
https://github.com/shadcn-ui/ui/discussions/869

2024-04-12 07:49:21
Checkbox 컴포넌트와의 타입 소통 문제를 해결하지 못하였다. 
zod 스키마에서부터 잘못된 것 같은데, 
지금은 넘기고 다음 과제로 넘어가자. 

*/

import { FormSchemaType } from "@/zodSchemas/formSchema";
import { Control, FieldErrors, FieldPath, FieldValues } from "react-hook-form";
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
import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

const CheckboxField: React.FC<FormFieldProps> = ({
  name,
  label,
  placeholder,
  description,
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
        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
          <FormControl>
            <Checkbox
              disabled={fetching ? true : undefined}
              // checked={field.value as boolean}
              onCheckedChange={
                field.onChange as (checked: CheckedState) => void
              }
              {...field}
            />
          </FormControl>
          <FormLabel>{label}</FormLabel>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CheckboxField;
