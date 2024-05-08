"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../components/ui/multi-step-loader";

const loadingStates = [
  {
    text: "🚀 Preparing Files...",
  },
  {
    text: "📦 Bundling Data...",
  },
  {
    text: "📷 Images Loaded...",
  },
  {
    text: "🌐 Navbar Added...",
  },
  {
    text: "📈 Projects Loaded...",
  },
  {
    text: "📋Resume Loaded...",
  },
  {
    text: "🎨Layouts Added...",
  },
  {
    text: "🚀 Almost Done",
  },
  {
    text: "🙏 Thank you!",
  },
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center">
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
    </div>
  );
}
