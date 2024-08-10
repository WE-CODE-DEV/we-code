import { lazy } from "react";

const ErrorComponent = () => <div className="text-blue-50 font-medium text-lg error">Error in loading the component</div>;

const ComponentLoader = (componentName) => {
    return lazy(async () => {
        try {
            const component = await import(`../snippets/${componentName}/${componentName}`);
            return component;
        } catch (error) {
            console.error(`Error loading component: ${componentName}`, error);
            return { default: ErrorComponent };
        }
    });
};

export default ComponentLoader;
