import SignupForm from "@/components/SignupForm";
import { ThemeToggler } from "@/components/ThemeToggler";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ThemeToggler />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="w-4/5 max-w-5xl">
          <div className="mb-8 flex flex-col gap-2">
            <h1 className="text-3xl font-semibold">ShadCN UI Exercise</h1>
            <p className="text-sm text-neutral-500">
              Already have an account?{" "}
              <Link href="#" className="underline underline-offset-4">
                Login
              </Link>
            </p>
            <p>This Repo is built with RHF + Zod + ShadCN UI Components</p>
            <p>The target of this Repo is:</p>
            <ul>
              <li>
                -Universal Form Components which can be used immediately in any
                React Project. e.g. RadioGroupField.tsx
              </li>
              <li>-Disable form inputs while action is going on.</li>
            </ul>
          </div>
          <SignupForm />
        </section>
      </main>
      <Toaster />
    </ThemeProvider>
  );
}
