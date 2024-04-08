/*  2024-04-09 07:27:30


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

export type SignupFormFieldProps = {
  name: FieldPath<FormSchemaType>;
  label: string;
  placeholder: string;
  description?: string;
  inputType?: string;
  formControl: Control<FormSchemaType, any>;
  errors: FieldErrors<FieldValues>;
};

export const SignupFormField: React.FC<SignupFormFieldProps> = ({
  name,
  label,
  placeholder,
  description,
  inputType,
  formControl,
  errors,
}) => {
  const errorMessage = errors[name]?.message as string;

  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={inputType || "text"}
              {...field}
            />
          </FormControl>
          {/* {description && <FormDescription>{description}</FormDescription>} */}
          {/* description 대신에 errorMessage를 표시 */}
          {/* {errorMessage && <FormDescription>{errorMessage}</FormDescription>} */}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
