import React, {useEffect} from "react";
import Prism from "prismjs";
import "./prism-coldark-dark.css";
// import "./prism-vsc-dark-plus.css";

const HighlightCode = ({code, language, linewrap}) => {

    useEffect(() => Prism.highlightAll(), [code, language]);

    return(
        <div className={linewrap ? 'wrap' : 'nowrap'}>
            <pre>
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>
    );
}

export default HighlightCode;