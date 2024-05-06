"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../components/ui/multi-step-loader";
import { loadingImg } from "../assets";
import Image from "next/image";

const loadingStates = [
  {
    text: "🚀 Preparing to load...",
  },
  {
    text: "📷 Images loaded...",
  },
  {
    text: "🌐 Navbar Added...",
  },
  {
    text: "📈 Projects loaded...",
  },
  {
    text: "📋Resume loaded...",
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
