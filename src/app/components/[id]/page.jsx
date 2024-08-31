"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import "./page.css";
import ShowLargePreview from "./ShowLargePreview";
import ShowRelatedComponents from "./ShowRelatedComponents";

const ComponentView = () => {
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
      <div className="px-6 py-4 md:px-6 border border-dashed border-amber-700 rounded-md bg-gradient-to-br from-amber-50 to-amber-100 relative flex items-center justify-center gap-4 md:gap-6 flex-col md:flex-row w-fit mx-auto">
        <div className="donate-svg"></div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 230" xmlSpace="preserve" className="fill-blue-800 w-14 h-14 md:w-24 md:h-24"><path d="M180 26.6c-40.4 0-72.8 32.8-72.8 73.2 0 40.2 32.6 72.8 72.8 72.8 40.2 0 73-32.6 73-73s-32.6-73-73-73zm5.5 112.9v11.4h-10.1v-11.1c-8.7 0-17.5-2.3-21.7-4.7l3.7-14.8c4.7 2.3 12 5 19.8 5 8.4 0 12.5-3.7 12.5-8.7 0-5-4-7.1-13.6-10.9-13.4-4.7-21.7-11.4-21.7-23.5 0-11.1 7.3-19.8 20.8-22.5v-12h10.1v11.4c8.4 0 14.4 1.7 18.9 4.1l-4.1 14.4c-3.3-1.4-8.7-3.7-16.1-3.7s-11.4 3.7-11.4 7.3c0 5 4.7 7 14.8 11.1 13.8 5 20.2 12 20.2 23.5-.4 11.6-7.4 20.3-22.1 23.7zm20.2 73.5c0 7-5.7 12.6-12.6 12.6h-85.8c-10.3.3-21.4-3.6-29.3-11.4l-32.3-32.3c-4.1-4.1-9.4-6.2-14.7-6.2H2v-50h54v-.1c10 0 20 3.9 27.8 11.5l46.3 46.3c4.9 4.9 4.9 12.8 0 17.7s-12.8 4.9-17.7 0L75 163.9c-1.5-1.7-4.1-1.7-5.7 0-1.7 1.7-1.7 4.3 0 5.9l37.2 37.2c3.9 4.1 9.2 6.2 14.7 6.2s10.9-2.3 14.7-6.2c1.9-1.7 3.4-4.1 4.5-6.4H193c7 0 12.7 5.6 12.7 12.4z"/></svg> */}
        <p className="font-medium text-sm leading-7 lg:leading-8 text-amber-900">We provide all components and code free of charge, driven by our passion to empower fellow coders.<br/> Your contributions fuel our mission to create even more valuable resources for our growing community.</p>
      </div>
      <ShowRelatedComponents id={ componentId }/>
    </section>
  );
};

export default ComponentView;
