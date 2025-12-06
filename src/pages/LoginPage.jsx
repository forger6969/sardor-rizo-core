import React, { useState } from "react";
import accounts from "../data/accounts";
import loginmars from "../assets/loginmars.png";
import loginastronout from "../assets/loginastronout.png";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = ({ setUser }) => {
  const [username, setUsername] = useState("+998");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const cleanUsername = username.replace(/\D/g, ""); // faqat raqam
    const found = accounts.find(
      acc => acc.username.replace(/\D/g, "") === cleanUsername && acc.password === password
    );

    if (!found) {
      alert("Phone number yoki parol xato!");
      return;
    }

    localStorage.setItem("teacher", JSON.stringify(found));
    setUser(found);
  };

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 12); // +998 bilan jami 12 raqam
    let formatted = "+998 ";
    if (digits.length > 3) formatted += digits.slice(3, 5);
    if (digits.length > 5) formatted += "-" + digits.slice(5, 8);
    if (digits.length > 8) formatted += "-" + digits.slice(8, 10);
    if (digits.length > 10) formatted += "-" + digits.slice(10, 12);
    return formatted;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3 p-4 bg-[#16233c]">
      <div className="bg-white flex items-center gap-4 p-5 rounded-2xl">
        <div className="max-w-[320px] px-5 sm:max-w-[350px]">
          <img className="w-[100px] mx-auto" src={loginmars} alt="" />
          <h1 className="text-[30px] text-[#004466] font-bold text-center my-5">
            Welcome
          </h1>

          <form className="w-full p-5" onSubmit={(e) => e.preventDefault()}>
            <label className="font-medium">
              <span className="text-red-500">*</span>Phone number
            </label>
            <input
              className="w-full p-2 rounded-md border border-gray-300 mb-5"
              value={username}
              placeholder="+998 __-___-__-__"
              onChange={(e) => setUsername(formatPhone(e.target.value))}
            />

            <label className="font-medium">
              <span className="text-red-500">*</span>Password
            </label>
            <div className="relative">
              <input
                className="w-full p-2 rounded-md border border-gray-300 mb-5 pr-10"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute top-1/3  right-2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            <button
              className="signin-btn w-full bg-[#ff805d] text-white p-2 rounded-md cursor-pointer mt-10 disabled:opacity-50"
              onClick={handleLogin}
              disabled={username.replace(/\D/g, "").length < 12 || password.length < 6}
            >
              Sign In
            </button>
          </form>
        </div>

        <div className="hidden md:block">
          <img src={loginastronout} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
