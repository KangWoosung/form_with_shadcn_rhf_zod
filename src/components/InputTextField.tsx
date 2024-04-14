/*  2024-04-09 07:27:30

2024-04-12 08:00:07
여기서도 마찬가지.. 
Input 컴포넌트와의 타입 소통에 오류가 난다. 
zod 스키마에 문제인 것 같은데, 어떻게 해결해야 할 지, 난감한 상황.. 

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
import { BasicFormFieldType } from "./SignupForm";

type InputProps = BasicFormFieldType & {
  inputType?: string;
};

export const SignupFormField: React.FC<InputProps> = ({
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
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              disabled={fetching ? true : undefined}
              placeholder={placeholder}
              defaultValue={field.value as string} // defaultValue prop으로 변경
              // disabled={field.disabled}
              {...field}
            />
          </FormControl>
          {/* {description && <FormDescription>{description}</FormDescription>} */}
          {/* {errorMessage && <FormDescription>{errorMessage}</FormDescription>} */}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
