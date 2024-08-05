// import { NextRequest, NextResponse } from "next/server"
// import {redirect} from 'next/navigation'


// export async function GET(request: Request){
//     redirect('https://api.99-f.com')
// }


import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const res = await fetch('https://api.99-f.com', {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
  const data = await res.text();

  return new Response(data, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
