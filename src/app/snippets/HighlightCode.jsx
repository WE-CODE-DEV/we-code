import React, {useEffect} from "react";
import Prism from "prismjs";
import "./prism-coldark-dark.css";
// import "./prism-vsc-dark-plus.css";

const HighlightCode = ({code, language}) => {

    useEffect(() => Prism.highlightAll(), [code, language]);

    return(
        <div>
            <pre>
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>
    );
}

export default HighlightCode;