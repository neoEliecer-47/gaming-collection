
import { loginUser } from "@/server/actions";
import { useActionState } from "react";
import SubmitButton from "./SubmitButton";

const LoginForm = () => {
  const [state, loginAction] = useActionState(loginUser, undefined)
  
    return (
    <form action={loginAction} className="flex flex-col gap-2 items-center justify-center h-screen max-w-[15rem] mx-auto">
      <div className="flex w-full">
        <input
          type="text"
          placeholder="name"
          name="name"
          id="name"
          className="p-2 rounded-sm border-2 border-green-300 w-full"
        />
      </div>
      <div className="flex w-full">
        <input
          type="text"
          placeholder="email"
          name="email"
          id="email"
          className="p-2 rounded-sm border-2 border-green-300 w-full"
        />
      </div>
      <div className="flex w-full">
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          className="p-2 rounded-sm border-2 border-green-300 w-full"
        />
      </div>
     <SubmitButton />
    </form>
  );
};

export default LoginForm;
