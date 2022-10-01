import { FC } from "react";
import { Form } from "@remix-run/react";
import { useForm } from "react-hook-form";
import { UserDetails } from "~/types/models/UserDetails";

type Inputs = {
  email: string;
  password: string;
};

// type Props = {
//   handleSubmit: SubmitHandler<Inputs>;
// };

type Props = { errors: UserDetails };

const SignInForm: FC<Props> = ({ errors }) => {
  const { register } = useForm<Inputs>();

  return (
    <div className=" h-screen  flex justify-center items-center">
      <div className="w-full max-w-md">
        <Form
          className="bg-gray-100 shadow-lg rounded px-12 py-12 pb-8"
          method="post"
        >
          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2"
              htmlFor="email"
            >
              email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-500 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              {...register("email")}
            />
            {errors?.email && (
              <span className="text-orange-800">{errors.email}</span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2"
              htmlFor="password"
            >
              password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-500 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              {...register("password")}
            />
            {errors?.password && (
              <span className="text-orange-800">{errors.password}</span>
            )}
          </div>

          <div className="flex justify-center">
            <input
              className="cursor-pointer rounded-full bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-16"
              type="submit"
              value="Sign in"
            />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignInForm;
