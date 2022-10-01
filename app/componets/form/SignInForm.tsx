import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  email: string;
};

type Props = {
  handleSubmit: SubmitHandler<Inputs>;
};

const SignInForm: FC<Props> = ({ handleSubmit }) => {
  const {
    register,
    handleSubmit: reactHooksFormHandleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <div className=" h-screen  flex justify-center items-center">
      <div className="w-full max-w-md">
        <form
          className="bg-gray-100 shadow-lg rounded px-12 py-12 pb-8"
          onSubmit={reactHooksFormHandleSubmit(handleSubmit)}
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
              htmlFor="email"
            >
              email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-500 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              {...register("email", { required: true })}
            />
            {errors.email && (
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
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
