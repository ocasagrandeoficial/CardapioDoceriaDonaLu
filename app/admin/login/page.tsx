import type { Metadata } from "next";
import { Cake } from "lucide-react";

import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Login — Painel Doceria Dona Lu",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-50 p-4">
      <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="mb-6 flex flex-col items-center gap-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
            <Cake className="h-6 w-6 text-pink-600" />
          </div>
          <h1 className="font-serif text-2xl font-bold text-zinc-800">
            Doceria Dona Lu
          </h1>
          <p className="text-sm text-zinc-500">
            Painel de administração — acesso restrito
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
