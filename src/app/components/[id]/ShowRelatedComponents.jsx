import { useState, useEffect } from "react";
import Link from "next/link";
import ComponentPreviewSkeletonLoading from "@/app/reusable-components/ComponentPreviewSkeletonLoading";
import ComponentPreview from "@/app/reusable-components/ComponentPreview";

const ShowRelatedComponents = ({ id }) => {
    const [relatedComponents, setRelatedComponents] = useState();

    const apiURL =
    process.env.NODE_ENV === "development"
      ? `http://localhost:3000/api/components/component?id=${id}&operation=omitById&count=4`
      : `https://we-code-blog.netlify.app/api/components/component?id=${id}&operation=omitById&count=4`;

    const getRelatedComponents = async () => {
        try {
            const response = await fetch(apiURL, {
                cache: "no-store",
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch related components ${response.statusText}`);
            }

            const contentType = response.headers.get("content-type");

            if (!contentType || !contentType.includes("application/json")) {
                throw new TypeError(`Expected JSON, but got ${contentType}`);
            }

            return await response.json();
        } catch (error) {
            console.log("Error in fetching related component: ", error);
        }
    };

    const SkeletonLoading = () => {
        return (
            <div className="flex flex-col gap-6">
                <h2 className="font-extrabold text-2xl lg:text-3xl leading-tight txt-shadow text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text">
                Loading related components
                </h2>
                <div className="you-may-like gap-4">
                {
                    [...Array(4)].map((_, index) => <ComponentPreviewSkeletonLoading key={ index }/>)
                }
                </div>
            </div>
        );
    }

    const ActualComponent = () => {
        console.log('testing');
        return(
            <div className="flex flex-col gap-6">
                <h2 className="font-extrabold text-2xl lg:text-3xl leading-tight txt-shadow text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text">Component you may like!</h2>
                <div className="you-may-like gap-4">
                    {
                        relatedComponents.map(component => <ComponentPreview key={component['_id']} {...component}/>)
                    }
                </div>
                <Link href={"/components/"} className="pri-btn self-end tracking-wide flex items-center justify-center relative">
                  More Components
                  <span className="inline-block w-5 h-5 ml-2 animate-pulse absolute right-4"></span>
              </Link>
            </div>
        );
    }

    useEffect(() => {
        const loadComponents = async () => {
            const fetchedRelatedComponents = await getRelatedComponents();

            setRelatedComponents(fetchedRelatedComponents);
        }

        loadComponents();
    }, [id]);

    return (
        <>
        {
            relatedComponents ? <ActualComponent/> : <SkeletonLoading/>
        }
        </>
    );
}

export default ShowRelatedComponents;