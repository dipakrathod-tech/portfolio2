"use client";

import dynamic from "next/dynamic";

const FloatingNavigationDots = dynamic(
  () => import("./floating-navigation-dots").then(mod => ({ default: mod.FloatingNavigationDots })),
  { ssr: false }
);

export function FloatingNavigationWrapper() {
  return <FloatingNavigationDots />;
}
