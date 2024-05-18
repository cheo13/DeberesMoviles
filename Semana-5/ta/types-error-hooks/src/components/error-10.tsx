import React, { useState } from "react";

const Example10: React.FC = () => {
  const [items] = useState([1, 2, 3, 4, 5]);
  const [filteredItems, setFilteredItems] = useState<number[]>([]);

  const filterItems = (filter: number) => {
    setFilteredItems(items.filter((item) => item > filter));
  };

  return (
    <div>
      <button onClick={() => filterItems(2)}>Filter Items</button>
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Example10;
//Correction
//const filteredItems = items.filter(item => item > filter);

// const Example10: React.FC = () => {
//   const [items] = useState([1, 2, 3, 4, 5]);
//   const filter = 2; // Assuming the filter value is available

//   return (
//     <div>
//       <button onClick={() => console.log("Filter Items")}>Filter Items</button>
//       <ul>
//         {items.filter((item) => item > filter).map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
