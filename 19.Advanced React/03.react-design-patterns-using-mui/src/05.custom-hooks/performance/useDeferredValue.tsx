// it's built-in react hook, here is the usage
// Important: don't create your own version using timeout
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