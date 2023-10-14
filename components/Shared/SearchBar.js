"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Searchbar({ routeType }) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // query after 0.3s of no input
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        router.push(`/${routeType}?q=` + search);
      } else {
        router.push(`/${routeType}`);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, routeType]);

  return (
        <div className="flex bg-gray-900 p-4 w-72 space-x-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="#FFF44F">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
                className="bg-gray-900 text-gray-200 outline-none" 
                type="text" 
                placeholder="Article name or keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
   
  );
}

export default Searchbar;