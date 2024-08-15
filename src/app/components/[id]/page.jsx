"use client";

import { useEffect, memo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import "./page.css";
import ShowLargePreview from "./ShowLargePreview";
import ShowRelatedComponents from "./ShowRelatedComponents";

const ComponentView = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const componentId = searchParams.get("id");

  console.log('main testing');

  useEffect(() => {
    if (!componentId) {
      router.push("/components/");
      return;
    }
  }, [componentId, router]);

  return (
    <section className="wrapper individual-component py-6 lg:py-8 flex flex-col gap-8 lg:gap-10">
      <ShowLargePreview id={ componentId }/>
      <ShowRelatedComponents id={ componentId }/>
    </section>
  );
};

export default ComponentView;
