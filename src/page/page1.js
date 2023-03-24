import Navbar from "../component/nav";
import Drop from "../component/dropdown"
import { useState } from "react";
import Footer from '../component/footer'
import img from '../asset/WhatsApp-Image-2023-02-22-at-12.07.02-520x245.jpeg'

const Page1 = () => {

    const[drop, setDrop] = useState(false)
    const onDrop = () =>{
        setDrop(!drop)
    }

    return ( 
        <div className="flex flex-col items-center space-y-[30px] pt-[70px] overflow-x-hidden" id="home">
            <Navbar drop={onDrop} home={true}/>
            <Drop open={drop}/>
            <div className="w-[65%] flex flex-col space-y-[15px] items-center">
                <div className="flex flex-col space-y-[2px] w-full border-b-[1px] border-gray-600 pb-[10px]">
                    <h1 className="text-gray-600 text-2xl">Diskusi P2MI Abdimas</h1>
                    <h1 className="text-gray-500 text-base">05 Maret 2023</h1>
                </div>
                <img src={img} alt="" />
                <div className="w-full text-gray-700 pt-[10px]">
                    <p>
                        Pada tanggal 05 maret 2023 PPTIK melakukan diskusi dengan P2MI Abdimas mengenai teknologi metaverse. Diskusi ini menyangkut dengan kegunaan, manfaat dan resiko dari metaverse.
                    </p>
                </div>
            </div>
            <Footer/>   
        </div>
     );
}
 
export default Page1;