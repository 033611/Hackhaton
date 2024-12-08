import Image from "next/image"
import MyImage from "../Images/Page"

function MyName() {
    return(
<div>
        <div className="w-[1440px] h-[716.83px] py-[10px] flex">
           <h1 className="w-[1440px] h-[4835px] py-[2px] px-[-1688px]">Home</h1>
       
           <div className="w-[1440px] h-[100px]">
           <div className="w-[1286px] h-[41px]">
            <div className="w-[185px] h-[41px] py-[20px] px-[2px] gap-[2px] flex">
            <div className="y-[40px] flex">
            <Image  className="w-[50px] h-[45px] my-[25px]" src="/Images/Logo.jpg" alt="Logo.png" width={'90'} height={'70'}/>
            <p className="w-[130px] h-[41px] font-bold text-xl py-9">Furniro</p>
            
            <div className=" flex w-[430px] h-[24px] py-8 px-[505px]">
                <p className="w-[38px] h-[24px] py-[0.2px] px-3">Home</p>
                <p className="w-[42px] h-[24px] py-[0.2px] px-20">Shop</p>
                <p className="w-[36px] h-[24px] py-[0.2px] px-10">blog</p>
                <p className="w-[66px] h-[24px] py-[0.2px] px-16">Contact</p>
             </div>
            </div>
        </div>
           </div>
               <MyImage/>   
            
        </div>
        
        </div>
        
        </div>
    )
}
export default MyName