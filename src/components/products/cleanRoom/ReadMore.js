import { useState } from "react";

export default function ReadMore(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const fullText = props.text;
  let textnow = props.text.slice(0, props.maxChars);
  const content = isExpanded ? props.text : textnow;
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };



  return (
    
    <div>
        
      {content}
      {fullText.length > props.maxChars && (
        <button onClick={toggleExpanded}>
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
}
