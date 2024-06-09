// import Image from "next/image";
// import * as React from "react";
// import { useState } from "react";
// import FilterButtons from "./Filter-Buttons";

// const Filter = ({data}) => {
//   const [Data, setData] = useState(data);
//   const menuItems = [...new Set(data?.map((val) => val?.category))];

//   const filterData = (cat) => {
//     const newItems = data?.filter((newVal) => newVal?.category === cat);
//     setData(newItems);
//     console.log(newItems);
//     console.log(cat);
//   };

  
//   return (
//     <section className="filter-section">
//       <div className="container mx-auto px-4">
//         <div>
//           <h1>Filter App</h1>

//           <FilterButtons
//             menuItems={menuItems}
//             filterData={filterData}
//             setData={setData}
//           />

//           <div className="filter-cards grid grid-cols-3 gap-5">
//             {Data?.map((item, i) => {
//               return (
//                 <div className="card" key={i}>
//                   <Image src={item?.img} alt="image" />
//                   <div className="content-wrapper">
//                     <h5>{item?.title} </h5>
//                     <p>{item?.price}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Filter;

import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import FilterButtons from "./Filter-Buttons";

const Filter = ({ data }) => {
  // Initialize state for the filtered data
  const [filteredData, setFilteredData] = useState(data);
  
  // Extract unique categories from the data
  const menuItems = [...new Set(data?.map((val) => val?.category))];

  // Function to filter data based on category
  const filterData = (cat) => {
    // If no category is selected, show all items
    if (cat === "All") {
      setFilteredData(data);
    } else {
      // Filter items based on the selected category
      const newItems = data?.filter((newVal) => newVal?.category === cat);
      setFilteredData(newItems);
    }
  };

  return (
    <section className="filter-section">
      <div className="container mx-auto px-4">
        <div>
          <h1>Filter App</h1>

          <FilterButtons
            menuItems={[...menuItems,"All"]} // Include "All" option
            filterData={filterData}
          />

          <div className="filter-cards grid grid-cols-3 gap-5">
            {filteredData?.map((item, i) => (
              <div className="card" key={i}>
                <Image src={item?.img} alt="image" />
                <div className="content-wrapper">
                  <h5>{item?.title} </h5>
                  <p>{item?.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;

