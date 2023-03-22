import Image from "next/image";
import useSWR from "swr"
import React from 'react';

//const fetcher = (...args) => fetch(...args).then(res => res.json())



export default function Spotlight ({pieces}) {
    //const {data, error, isLoading} = useSWR("https://example-apis.vercel.app/api/art", fetcher)


    /* if (error) return <div>Failed to fetch users.</div>
    if (isLoading) return <p>is loading...</p> */
    
    const piece = pieces[Math.floor(Math.random() * pieces.length)]
    return<>
    
       <Image src={piece.imageSource}
               alt={piece.name}
               height={400}
                width={300}
               ></Image> 
               <h3 key= {Math.random()}>Spotlight: @{piece.artist}</h3>
                 
            
        </>
      }