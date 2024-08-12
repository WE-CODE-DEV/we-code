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
      router.push("/components/");
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
        <h2 className="font-extrabold text-2xl lg:text-3xl leading-tight txt-shadow text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text">
          Loading...
        </h2>
      )}
    </section>
  );
};

export default ComponentView;
