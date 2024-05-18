import React, { useEffect, useRef, useState } from "react";

const Example7: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.innerHTML = "Updated directly"; // This should be avoided
    }
  }, []);

  return <div ref={divRef}>Initial content</div>;
};

export default Example7;
//Correction
// const Example7: React.FC = () => {
//     const [content, setContent] = useState('Initial content');

//     useEffect(() => {
//       setContent('Updated via state');
//     }, []);

//     return <div>{content}</div>;
//   };
