import "katex/dist/katex.min.css";
//import React from "react";
import { InlineMath } from "react-katex";
import sanitizeHtml from "sanitize-html";

export const RenderLatex = ({ latex }) => {
  console.log(latex);
  // Function to safely sanitize non-math text
  const sanitizeText = (text) => {
    return sanitizeHtml(text, {
      allowedTags: [], // Adjust based on what HTML tags you want to allow, if any
      allowedAttributes: {},
    });
  };

  // Function to split latex into math and non-math segments and render them
  const renderLatex = (latex) => {
    // Adjusted regex for new delimiters
    const regex = /\\\[(.*?)\\\]|\\\((.*?)\\\)/gs;
    let result = [];
    let lastIndex = 0;

    latex.replace(regex, (match, displayMath, inlineMath, index) => {
      // Add non-math text
      const nonMathText = latex.slice(lastIndex, index);
      if (nonMathText) {
        result.push(
          <span
            key={lastIndex}
            dangerouslySetInnerHTML={{ __html: sanitizeText(nonMathText) }}
          />
        );
      }

      // Add math
      if (displayMath) {
        result.push(
          <span className="leading-loose">
            <InlineMath key={index}>{displayMath}</InlineMath>
          </span>
        );
      } else if (inlineMath) {
        result.push(<InlineMath key={index}>{inlineMath}</InlineMath>);
      }

      lastIndex = index + match.length;
    });

    // Add any remaining non-math text
    if (lastIndex < latex.length) {
      result.push(
        <span
          key={lastIndex}
          dangerouslySetInnerHTML={{
            __html: sanitizeText(latex.slice(lastIndex)),
          }}
        />
      );
    }

    return result;
  };

  const render = (latex) => {
    try {
      return renderLatex(latex);
    } catch (error) {
      return latex;
    }
  };

  return <div className="snorkl-latex-renderer">{render(latex)}</div>;
};
