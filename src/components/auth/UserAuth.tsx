"use client";

import { login } from "@/server/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin() {
    setLoading(true);
    setError("");

    const res = await login("testuser", "123");
console.log(res)
    if (res.error) {
      setError(res.error);
    } else {
      console.log('hereeeeeeeeee')
        router.replace("/user");
    }

    setLoading(false);
  }

  return (
    <div className="p-0 m-0">
      <button onClick={handleLogin} className="px-4 py-2 transition-all duration-300 rounded-md text-white bg-green-500 text-center hover:bg-green-700 w-full">
        { loading ? 'Loggin in...' : 'LogIn' }
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default UserAuth;
