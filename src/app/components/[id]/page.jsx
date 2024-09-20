"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import "./page.css";
import ShowLargePreview from "./ShowLargePreview";
import ShowRelatedComponents from "./ShowRelatedComponents";

const ComponentView = () => {
  // console.log(window.location.origin);
  const router = useRouter();

  const searchParams = useSearchParams();

  const componentId = searchParams.get("id");

  useEffect(() => {
    if (!componentId) {
      router.push("/components/");
      return;
    }
  }, [componentId, router]);

  return (
    <section className="wrapper individual-component py-6 lg:py-8 flex flex-col gap-8 lg:gap-10">
      <ShowLargePreview id={ componentId }/>
      {/* <div className="px-6 py-4 md:px-6 border border-dashed border-amber-700 rounded-md bg-gradient-to-br from-amber-50 to-amber-100 relative flex items-center justify-center gap-4 md:gap-6 flex-col md:flex-row w-fit mx-auto">
        <div className="donate-svg"></div>
        <p className="font-medium text-sm leading-7 lg:leading-8 text-amber-900">We provide all components and code free of charge, driven by our passion to empower fellow coders.<br/> Your contributions fuel our mission to create even more valuable resources for our growing community.</p>
      </div> */}
      <ShowRelatedComponents id={ componentId }/>
    </section>
  );
};

export default ComponentView;
