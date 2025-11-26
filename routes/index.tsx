import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import Logo from "@/components/Logo.tsx";
// @ts-types="preact/compat/jsx-dev-runtime"
import { Fragment } from "preact/jsx-dev-runtime";

export default define.page(function Home() {
  return (
    <div class="min-h-screen bg-background flex items-center justify-center overflow-hidden relative font-axiforma">
      <a href="https://brainpod.io/dashboard">
        <Logo
          full={false}
          width={48}
          className="absolute left-12 top-12 z-10"
        />
      </a>

      <Head>
        <title>Welcome to brainpod</title>
      </Head>

      <div
        class="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-slate-600) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div class="absolute w-[500px] h-[500px] rounded-full bg-teal-500 blur-[120px] opacity-[0.08] -top-36 right-[10%] pointer-events-none" />
      <div class="absolute w-[500px] h-[500px] rounded-full bg-teal-700 blur-[120px] opacity-[0.08] -bottom-48 left-[5%] pointer-events-none" />

      <div class="text-center z-10 px-6">
        <StatusBadge />

        <h1 class="text-white text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Welcome
        </h1>

        <p class="text-slate-300 text-base md:text-lg max-w-md mx-auto leading-relaxed mb-10">
          Your deployment is live and ready. Replace this page with your
          application to get started.
        </p>

        <QuickStartCard />

        <div class="mt-10 text-slate-500 text-sm">
          Need help? Check out the{" "}
          <a
            href="https://docs.brainpod.io"
            class="text-teal-500 hover:text-teal-300 transition-colors"
          >
            documentation
          </a>
        </div>
      </div>
    </div>
  );
});

function StatusBadge() {
  return (
    <div class="inline-flex items-center gap-2 bg-teal-700/10 border border-teal-500/20 px-4 py-2 rounded-full mb-8">
      <div class="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
      <span class="text-teal-400 text-xs font-medium tracking-wider uppercase">
        Deployment Active
      </span>
    </div>
  );
}

function QuickStartCard() {
  const steps = [
    "Push your code to the your configured repository and branch",
    "Wait for the build to finish",
    "Your app will automatically deploy",
  ];

  return (
    <div class="bg-primary border border-slate-600 rounded-xl p-6 max-w-sm mx-auto text-left">
      <div class="text-slate-400 text-xs uppercase tracking-widest mb-5">
        Quick Start
      </div>

      {steps.map((content, i) => (
        <div
          class={`flex items-start gap-3.5 py-3.5 ${
            i < steps.length - 1 ? "border-b border-slate-600" : ""
          }`}
        >
          <div class="w-5 h-5 bg-teal-700 rounded-md flex items-center justify-center text-teal-300 text-xs font-semibold shrink-0">
            {i + 1}
          </div>
          <div class="text-slate-300 text-sm leading-relaxed">
            {content}
          </div>
        </div>
      ))}
    </div>
  );
}
