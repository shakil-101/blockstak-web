import React from "react";

const DisplayRichText = ({ richText }: any) => {
  const renderElement = (element: any, index: any) => {
    if (element.type === "ul") {
      return (
        <ul key={index} className="list-disc">
          {element.children.map((child: any, childIndex: any) =>
            renderElement(child, childIndex)
          )}
        </ul>
      );
    } else if (element.type === "ol") {
      return (
        <ol key={index} className="list-decimal">
          {element.children.map((child: any, childIndex: any) =>
            renderElement(child, childIndex)
          )}
        </ol>
      );
    } else if (element.type === "li") {
      return (
        <li key={index} className="list-disc">
          {element.children.map((child: any, childIndex: any) =>
            renderElement(child, childIndex)
          )}
        </li>
      );
    } else if (element.text !== undefined) {
      return <span key={index}>{element.text}</span>;
    } else {
      return (
        <div key={index} className="-ml-4">
          {element.children.map((child: any, childIndex: any) =>
            renderElement(child, childIndex)
          )}
        </div>
      );
    }
  };

  return (
    <div>
      {richText.map((element: any, index: any) =>
        renderElement(element, index)
      )}
    </div>
  );
};

export default DisplayRichText;
