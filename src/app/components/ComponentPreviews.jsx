'use client';

import { useEffect, useState } from "react";
import ComponentPreview from "./ComponentPreview";


const ComponentPreviews = () => {
    const [components, setComponents] = useState();

    https://we-code-blog.netlify.app/api/components
    http://localhost:3000/api/components

    const getComponents = async () => {
        try{
            const response = await fetch("https://we-code-blog.netlify.app/api/components", {
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
                    : <div className="component-preview relative">
                        <p>Loading</p>
                    </div>
                }
            </div>
        </div>
    );
}

export default ComponentPreviews;
