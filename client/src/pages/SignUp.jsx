import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  FormControl,
  Input,
  Button,
  Text,
  Box,
  Flex,
  Heading,
  Stack,
  FormErrorMessage,
} from "@chakra-ui/react";
import toast from "react-hot-toast";

export default function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const doSubmit = async (values) => {
    toast.success("Sign Up Successful. You are now logged in");
  };

  return (
    <Box p="3" maxW="lg" mx="auto">
      <Heading
        as="h1"
        textAlign="center"
        fontSize="3xl"
        fontWeight="semibold"
        my="7"
      >
        Create an Account
      </Heading>
      <form onSubmit={handleSubmit(doSubmit)}>
        {/* form details... */}
        <Stack gap="4">
          <FormControl isInvalid={errors.username}>
            <Input
              id="username"
              type="text"
              placeholder="username"
              {...register("username", { required: "Username is required" })}
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email}>
            <Input
              id="email"
              type="email"
              placeholder="email"
              {...register("email", { required: "Email is required" })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <Input
              id="password"
              type="password"
              placeholder="password"
              {...register("password", { required: "Password is required" })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            isLoading={isSubmitting}
            colorScheme="teal"
            textTransform="uppercase"
          >
            Sign Up
          </Button>
        </Stack>
      </form>
      <Flex gap="2" mt="5">
        <Text>Have an account?</Text>
        <Link to={"/signin"}>
          <Text as="span" color="blue.400">
            Sign in
          </Text>
        </Link>
      </Flex>
    </Box>
  );
}
