"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import "./page.css";
import Link from "next/link";
import ComponentLargePreview from "@/app/reusable-components/ComponentLargePreview";
import { componentPreview } from '@/app/reusable-components/ComponentPreview.module.css';
import ComponentPreviewSkeletonLoading from "@/app/reusable-components/ComponentPreviewSkeletonLoading";

const ComponentView = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const componentId = searchParams.get("id");

  const [component, setComponent] = useState();

  const apiURL =
    process.env.NODE_ENV === "development"
      ? `http://localhost:3000/api/components/component?id=${componentId}`
      : `https://we-code-blog.netlify.app/api/components/component?id=${componentId}`;

  const getComponent = async () => {
    try {
      const response = await fetch(apiURL, {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch components ${response.statusText}`);
      }

      const contentType = response.headers.get("content-type");

      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError(`Expected JSON, but got ${contentType}`);
      }

      return await response.json();
    } catch (error) {
      console.log("Error in fetching the component: ", error);
      // router.push("/components/");
    }
  };

  useEffect(() => {
    if (!componentId) {
      router.push("/components/");
      return;
    }

    const loadComponent = async () => {
      const fetchedComponent = await getComponent();

      setComponent(fetchedComponent);
    };

    loadComponent();
  }, [componentId, router]);

  return (
    <section className="wrapper individual-component py-6 lg:py-8 flex flex-col gap-8 lg:gap-10">
      {component ? (
        <>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="font-extrabold text-2xl lg:text-3xl leading-tight txt-shadow text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text">
                {component.name}
              </h2>
              <ul className="flex gap-2 breadcrumbs justify-center lg:justify-start">
                  <li>
                    <Link href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="components/">
                      Components
                    </Link>
                  </li>
                  <li>
                    <Link href={`/components/component?id=${componentId}`} className="active">{component.name}</Link>
                  </li>
                </ul>
            </div>
            <ComponentLargePreview component={component} />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-extrabold text-2xl lg:text-3xl leading-tight txt-shadow text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text">
              Component you may like!
            </h2>
            <div className="you-may-like gap-4">
              {
                [...Array(4)].map((_, index) => <ComponentPreviewSkeletonLoading key={ index } componentPreview={componentPreview}/>)
              }
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="font-extrabold text-2xl lg:text-3xl leading-tight txt-shadow text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text">
                Loading
              </h2>
              <ul className="flex gap-2 breadcrumbs justify-center lg:justify-start loading">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 w-full preview" style={{'--tabW': '92.421875px','--tabH': '36px','--tabX': '9px', 'pointerEvents': 'none'}}>
                  <ul className="flex gap-1 self-center tabs p-2">
                    <li className="tab active">Preview</li>
                    <li className="tab">Code</li>
                  </ul>
              </div>
              <div className="overflow-hidden component-preview-lg">
                <div className="component flex items-center justify-center min-h-96">
                  <div className="w-20 h-full absolute right-0 flex flex-col justify-between items-center py-6 animate-pulse">
                    <span className="w-9 h-9 rounded-full bg-blue-100/50 shadow-md"></span>
                    <ul className="flex flex-col gap-3">
                      <li className="w-7 h-7 rounded-full bg-blue-100/50 shadow-md"></li>
                      <li className="w-7 h-7 rounded-full bg-blue-100/50 shadow-md"></li>
                      <li className="w-7 h-7 rounded-full bg-blue-100/50 shadow-md"></li>
                    </ul>
                    <span className="w-9 h-9 rounded-full bg-blue-100/50 shadow-md"></span>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100" height="100"><path d="M20 7h-2.151C17.35 7 17 6.498 17 6a3 3 0 1 0-6 0c0 .498-.351 1-.849 1H8a1 1 0 0 0-1 1v2.151C7 10.65 6.498 11 6 11a3 3 0 1 0 0 6c.498 0 1 .351 1 .849V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.151c0-.498-.503-.849-1-.849a3 3 0 1 1 0-6c.497 0 1-.351 1-.849V8a1 1 0 0 0-1-1Z" fill="#dbeafe87" stroke="#dbeafe" strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse"><animate attributeName="stroke-dasharray" from="0, 68.1767349243164" to="68.1767349243164, 0" dur="2s" repeatCount="indefinite"></animate></path></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-extrabold text-2xl lg:text-3xl leading-tight txt-shadow text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text">
              Component you may like!
            </h2>
            <div className="you-may-like gap-4">
              {
                [...Array(4)].map((_, index) => <ComponentPreviewSkeletonLoading key={ index } componentPreview={componentPreview}/>)
              }
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ComponentView;
