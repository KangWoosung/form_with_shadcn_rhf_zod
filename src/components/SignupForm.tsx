/*  2024-04-09 07:20:30

form.element 검증 오류 메세지를,
zod 스키마에서 일원관리 해주도록 하고 싶었으나, 1차 실패..

2024-04-09 08:17:03
zod 의 에러 메시지 관리 일원화 성공


*/

import React from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";
import { FormSchemaType, formSchema } from "@/zodSchemas/formSchema";
import { SignupFormField } from "./SignupFormField";

const SignupForm = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
  const { errors } = useFormState({ control: form.control });

  const onSubmit = (values: FormSchemaType) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <SignupFormField
          name="email"
          label="Email"
          placeholder="Email"
          inputType="email"
          formControl={form.control}
          errors={errors}
        />
        <SignupFormField
          name="username"
          label="Username"
          placeholder="Username"
          //   description="At least 3 characters."
          formControl={form.control}
          errors={errors}
        />
        <SignupFormField
          name="password"
          label="Password"
          placeholder="Password"
          //   description="At least 8 characters."
          inputType="password"
          formControl={form.control}
          errors={errors}
        />
        <Button type="submit">Signup</Button>
      </form>
    </Form>
  );
};

export default SignupForm;
