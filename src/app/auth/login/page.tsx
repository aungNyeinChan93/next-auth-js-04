import LoginForm from "@/components/share/LoginForm";
import React from "react";

const LoginPage = async () => {
  return (
    <React.Fragment>
      <main className="container mx-auto flex justify-center items-center">
        <LoginForm />
      </main>
    </React.Fragment>
  );
};

export default LoginPage;
