import Image from "next/image";
import MyImage2 from "./Images";

function MyImage() {
    return(
        <div>
                 <div className="w-[1440px] h-[716.83px]">
        <Image className="w-[1540px] h-[890.93px] py-[70px] absolute"src="/Images/Source.jpg" alt="/Logo.jpg" width={190} height={200}/>
        <MyImage2 />
     
        </div>
        </div>
         
    )
}
export default MyImage