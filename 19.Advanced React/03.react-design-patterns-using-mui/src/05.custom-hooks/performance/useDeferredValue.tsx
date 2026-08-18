// it's built-in react hook, here is the usage
// import { useDeferredValue, useState } from "react";

// function SearchResults() {
//     const [search, setSearch] = useState("");

//     const deferredSearch = useDeferredValue(search);

//     return (
//         <>
//             <input
//                 value={search}
//                 onChange={(event) => setSearch(event.target.value)}
//             />

//             <SearchResultList search={deferredSearch} />
//         </>
//     );
// }