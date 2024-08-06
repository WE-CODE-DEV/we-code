import { lazy } from "react";

const ComponentLoader = (componentName) => {
    return lazy(() => import(`../snippets/${componentName}/${componentName}`));
};

export default ComponentLoader;