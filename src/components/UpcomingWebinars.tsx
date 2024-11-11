'use client';
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";


const UpcomingWebinars = () => {

  const featiredWebinars = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl max-auto px-4 sm:px-6">
       <div className="text-center">
        <h2 className="test-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
       </div>

       <div className="mt-10"> 
      <HoverEffect items={featiredWebinars.map(webinar => (
        {
          title: webinar.title,
          description: webinar.description,
          link: webinar.link
        }
      ))} />
       </div>

       
     <div className='mt-8 flex items-center justify-center'>
             <Link href={"/courses"}>
             <Button borderRadius="1.75rem" className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 text-[17px]'>
             View All Webinars
             </Button> 
             </Link> 
    </div>  
      </div>
      
    </div>
  )
}

export default UpcomingWebinars