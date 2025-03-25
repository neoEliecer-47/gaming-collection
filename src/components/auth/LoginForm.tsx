
import { useActionState } from "react";

const LoginForm = () => {
  const [state, loginAcfion] = useActionState()
  
    return (
    <form className="flex flex-col gap-2 items-center justify-center h-screen max-w-[15rem] mx-auto">
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
      <button className="p-2 capitalize rounded-sm bg-green-600 text-white w-full">
        register
      </button>
    </form>
  );
};

export default LoginForm;
