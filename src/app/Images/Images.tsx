import Image from "next/image";


function MyImage2(){
    return(
        <div>
            <div className="w-[693px] h-[443px] py-[2px] px-[39px] absolute font-serif ">
<div className="w-[611px] h-[644px] py-[90px] px-[8px]">
<p className="w-[2110px] h-[24px] py-[57px] px-[680px] text-4xl">New     Arrival</p> 
<p className="w-[1859px] h-[127px] py-[-11px] px-[680px] text-5xl">Disover Our New Collection</p>
<p className="w-[1930px] px-[680px] py-[02px] underline font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi alias error tempore nemo! Dolorum inventore, accusamus ab, molestias reprehenderit numquam doloremque alias minima tempore excepturi modi rem iusto mollitia ipsa.</p>
<div className="w-[222px] h-[74px] bg-yellow-900 mx-[680px] my-[20px] border-black-3 rounded">
<p className=" font-serif py-[20px] px-[60px] rounded text-white text-2xl">Buy-Now</p>
</div>
</div>
         </div>
         <div className="w-[1990px] h-[76.71px] py-[849px] px-[510px] text-4xl font-bold">
         <p>Browse The Range</p>
         <div className="mx-[4px]">
         <div className="w-[381px] h-[40px] py-[10px] px-[01px]"> 
         <p className="w-[2900px] h-[28.71px]  mx-[-810px] text-3xl px-[532px]">This is the furniture Website.This website is very resonable</p>

         <div className="w-[762.61px] h-[508px] py-[40px] px-[01px] flex">
          <div className="flex mx-[-510px] ">
         <Image  className="w-[360px] h-[360px] mx-[10px] py-2"src="/Images/yellow.jpg" alt="file.svg" width={100} height={180}/>
         <p className="absolute px-[100px] py-[300px]">living</p>
         <Image className="w-[310px] h-[360px] py-[10px] mx-32" src="/Images/Second.jpg" alt="first.jpg" width={100} height={90}/>
         <p  className=" absolute px-[470px] py-[300px]">Dining</p>
         <Image className="w-[430px] h-[340px] my-[10px] mx-14" src="/Images/Luxury2.jpg" alt="" width={150} height={100}/> 
         <p  className="absolute px-[850px] py-[300px]">Bedroom</p>
        </div>
         </div>
         </div>
       </div>
         </div>
      </div>
         
    )
}
export default MyImage2