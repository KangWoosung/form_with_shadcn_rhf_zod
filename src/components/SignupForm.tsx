/*  2024-04-09 07:20:30

form.element 검증 오류 메세지를,
zod 스키마에서 일원관리 해주도록 하고 싶었으나, 1차 실패..

2024-04-09 08:17:03
zod 의 에러 메시지 관리 일원화 성공

2024-04-09 15:01:52
모든 면에서, 기존 방식 보다, ShadCN 의 추상화가, 압도한다.
FormGroup.tsx 은, FormField.tsx  로 바꿔서 사용하자.
하나 만들어 놓으면, 거의 모든 프로젝트에서 개량작업 없이 공통으로 사용할 수 있을 것 같다.
Form 요소의 종류에 따라, 종류별로 만들어 놓아야겠다.

input[type=text]        ->    InputTextField.tsx
input[type=checkbox]    ->    CheckboxField.tsx
input[type=radio]       ->    RadioGroup.tsx
select                  ->    SelectField.tsx
textarea                ->    TextareaField.tsx

*/

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Control,
  FieldErrors,
  FieldPath,
  FieldValues,
  useForm,
  useFormState,
} from "react-hook-form";
import { FormSchemaType, formSchema } from "@/zodSchemas/formSchema";
import { SignupFormField } from "./InputTextField";
import CheckboxField from "./CheckboxField";
import { Separator } from "./ui/separator";
import { toast } from "./ui/use-toast";
import RadioGroupField from "./RadioGroupField";
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";
import SwitchField from "./SwitchField";

export type BasicFormFieldType = {
  name: FieldPath<FormSchemaType>;
  label: string;
  inputType?: string;
  placeholder?: string;
  description?: string;
  fetching?: boolean;
  formControl: Control<FormSchemaType, any>;
  errors: FieldErrors<FieldValues>;
};

export type FormFieldProps = BasicFormFieldType & {
  inputType?: string;
  radioData?: RadioDataType;
  selectData?: SelectDataType;
};

const radioData = [
  { val: "all", descr: "All notifications" },
  { val: "mentions", descr: "Direct messages and mentions" },
  { val: "none", descr: "Nothing" },
];
type RadioDataType = typeof radioData;

const selectData = [
  { key: "hanmail", val: "wkang@hanmail.com" },
  { key: "gmail", val: "mihwa@gmail.com" },
  { key: "missionic", val: "hyejin@missionic.com" },
];
type SelectDataType = typeof selectData;

const SignupForm = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
  const { errors } = useFormState({ control: form.control });

  const [fetching, isFetching] = useState(false);

  async function onSubmit(data: FormSchemaType) {
    isFetching(true);
    console.log(form.control);
    console.log(data);
    await setTimeout(async () => {
      // form.reset();
      await toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
      isFetching(false);
    }, 2000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <SignupFormField
          name="email"
          label="Email"
          placeholder="Email"
          inputType="email"
          fetching={fetching}
          formControl={form.control}
          errors={errors}
        />
        <SignupFormField
          name="username"
          label="Username"
          placeholder="Username"
          //   description="At least 3 characters."
          fetching={fetching}
          formControl={form.control}
          errors={errors}
        />
        <SignupFormField
          name="password"
          label="Password"
          placeholder="Password"
          //   description="At least 8 characters."
          fetching={fetching}
          inputType="password"
          formControl={form.control}
          errors={errors}
        />

        <Separator />

        <RadioGroupField
          name="notify"
          label="Notify me about:"
          radioData={radioData}
          fetching={fetching}
          formControl={form.control}
          errors={errors}
        />

        <Separator />

        <SelectField
          name="sendToEmail"
          label="Send to email"
          placeholder="Select a verified email to send new message"
          selectData={selectData}
          fetching={fetching}
          formControl={form.control}
          errors={errors}
        />

        <TextareaField
          name="body"
          label="Body"
          placeholder="Tell us a little bit about yourself"
          fetching={fetching}
          formControl={form.control}
          errors={errors}
        />

        <SwitchField
          name="airplaneMode"
          label="Airplane Mode"
          fetching={fetching}
          formControl={form.control}
          errors={errors}
        />

        <Separator />

        <CheckboxField
          name="terms"
          label="I agree to the terms and conditions"
          placeholder="Terms and Conditions"
          fetching={fetching}
          formControl={form.control}
          errors={errors}
        />

        <Separator />

        <Button
          type="submit"
          disabled={fetching ? true : undefined}
          className="min-w-24"
        >
          Signup
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
