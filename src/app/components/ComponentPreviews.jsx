'use client';

import { useEffect, useState } from "react";
import ComponentPreview from "../reusable-components/ComponentPreview";
import ComponentPreviewSkeletonLoading from "../reusable-components/ComponentPreviewSkeletonLoading";
import { componentPreview } from "../reusable-components/ComponentPreview.module.css";

const ComponentPreviews = () => {
    const [components, setComponents] = useState([]);

    const componentsPerPage = 8;

    const environment = process.env.NODE_ENV;

    const baseURL = environment === 'development' 
    ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL 
    : process.env.NEXT_PUBLIC_BASE_URL_LIVE;

    const apiURL = `${baseURL}/api/components`;

    const getComponents = async () => {
        try{
            const response = await fetch(apiURL, {
                cache: "no-store",
            });
    
            if(!response.ok){
                console.log("failed", response.status, response.statusText);
                throw new Error("Failed to fetch components");
            }

            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                console.error("Expected JSON, but got:", contentType);
                throw new TypeError("Expected JSON, but got " + contentType);
            }

            const components = await response.json();
    
            return components;
        }catch(error){
            console.log("Error in fetching components: ", error); 
        }
    }

    const SkeletonComponentLoading = () => {
        return (
            <>
                {
                    [...Array(componentsPerPage)].map((_, index) => <ComponentPreviewSkeletonLoading key={ index } componentPreview={componentPreview}/>)
                }
            </>
        )
    }
        
    useEffect(() => {
        const loadComponents = async () => {
            const fetchedComponents = await getComponents();
            setComponents(fetchedComponents);
        };

        loadComponents();
    }, []);

    return (
        <div className="flex-1 flex flex-col relative">
            <div className="component-previews grid gap-6 md:gap-8">
                {
                    components ? 
                    components.map(component => <ComponentPreview key={component['_id']} {...component}/>) 
                    : <SkeletonComponentLoading/>
                }
            </div>
        </div>
    );
}

export default ComponentPreviews;
