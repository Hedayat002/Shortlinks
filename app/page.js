import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";


const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});
export default function Home() {
  return (
    
   <main className="bg-purple-100"> 
    <section className="grid grid-cols-2 h-[50vh]">
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className={`text-3xl font-bold ${poppins.className}`}>
          The best URL shortner in the Market
        </p>
        <p>
          We are most straighforward Url shortener in the world 
        </p>
        <div className='flex gap-3 text-white'>
                <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
                <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Github</button></Link>
            </div>
      </div>
      <div className="flex justify-start relative">
        <Image className="mix-blend-darken" src={"/vector.jpg"} alert="an image of avector" fill={true}
        ></Image>
      </div>
    </section>
   </main>
  

  );
}
