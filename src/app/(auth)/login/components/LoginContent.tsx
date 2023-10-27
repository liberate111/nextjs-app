"use client";

import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Divider,
} from "@mantine/core";
import classes from "./LoginContent.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { GoogleButton } from "./GoogleButton";

export function LoginContent() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please fill email")
      .email("Invalid email format"),
    password: yup.string().required("Please fill password").min(3).max(20),
  });

  type FormData = yup.InferType<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ resolver: yupResolver(schema), mode: "all" });

  const router = useRouter();

  const login = async (data: FormData) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (result?.ok) {
      router.replace("/dashboard");
    } else if (result?.error) {
      alert(result.error);
    }

    return false;
  };

  return (
    <>
      <form onSubmit={handleSubmit(login)} noValidate>
        <Container size={420} my={40}>
          <Title ta="center" className={classes.title}>
            Welcome back!
          </Title>
          <Text c="dimmed" size="sm" ta="center" mt={5}>
            Do not have an account yet?{" "}
            <Anchor size="sm" component="button">
              Create account
            </Anchor>
          </Text>

          <Group grow mb="md" mt="md">
            <GoogleButton radius="xl" onClick={async () => {
              await signIn('google', { callbackUrl: 'http://localhost:3000/dashbaord'})
            }}>Google</GoogleButton>
          </Group>
          <Divider
            label="Or continue with email"
            labelPosition="center"
            my="lg"
          />

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput
              {...register("email")}
              error={errors.email && errors.email.message}
              label="Email"
              placeholder="@email.com"
            />
            <PasswordInput
              {...register("password")}
              error={errors.password && errors.password.message}
              label="Password"
              placeholder="Your password"
              required
              mt="md"
            />
            <Group justify="space-between" mt="lg">
              <Checkbox label="Remember me" />
              <Anchor component="button" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button
              fullWidth
              mt="xl"
              type="submit"
              loading={isSubmitting}
              disabled={!isValid}
            >
              Sign in
            </Button>
          </Paper>
        </Container>
      </form>
    </>
  );
}
