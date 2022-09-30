import { FC } from "react";
import { Form } from "@remix-run/react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  example: string;
};

const SignInForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="h-screen  flex justify-center items-center">
      <div className="w-full max-w-md">
        <Form
          className="bg-gray-100 shadow-md rounded px-12 py-12 pb-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-500 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-orange-800">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-500 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              {...register("example", { required: true })}
            />
            {errors.example && (
              <span className="text-orange-800">This field is required</span>
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
