"use client"
import useSWR from 'swr';
import { getFetcher } from '@/libs';
import useWindowSize from '@/hooks/useWindowSize';
import useChangeTheme from '@/hooks/useChangeTheme';

interface ApiData {
  data: string;
  error?: string;
}

export default function Home() {
  const { data, isLoading, error } = useSWR<ApiData>('/api/home', getFetcher);
  const { isMobile } = useWindowSize();
  const { backgroundColor, color, toggleTheme } = useChangeTheme();
  console.log({data})

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching data</div>;
  }
  if (!data) {
    return <div>No data available</div>
  }
  return (
    isMobile ? (
      <div style={{ backgroundColor, color, height: '100vh' }}>
        <button onClick={toggleTheme}>change theme</button>
        <h1>Mobile View</h1>
        <p>{data}</p>
      </div>
    ) : (
      <div style={{ backgroundColor, color, height: '100vh'}} >
        <button onClick={toggleTheme}>change theme</button>
        <h1>Desktop View</h1>
        <p>{data}</p>
      </div>
    )
  );
}




// import useChangeTheme from '@/hooks/useChangeTheme';

// export default function Home() {
//     const { backgroundColor, color, toggleTheme } = useChangeTheme();

//     return (
//         <div style={{ backgroundColor, color }}>
//             <h1>Hello, World!</h1>
//             <button onClick={toggleTheme}>
//                 Change Theme
//             </button>
//         </div>
//     );
// }



















// import useSWR from 'swr';
// import { getFetcher } from '@/libs/index';

// export default function Page() {
//   const { data, error, isValidating } = useSWR('https://api.99-f.com', getFetcher);

//   if (isValidating) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <main>
//       <h1>Home Page</h1>
//     </main>
//   );
// }




// import useSWR from 'swr';

// export default function Page() {
//   const { data, error } = useSWR('https://api.99-f.com', fetcher);

//   if (error) return <div>Failed to load</div>;
//   if (!data) return <div>Loading...</div>;

// }


