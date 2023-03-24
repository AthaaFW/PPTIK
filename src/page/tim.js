import Navbar from "../component/nav";
import Drop from "../component/dropdown"
import Footer from '../component/footer'
import Profile from "../component/profile";
import { useState } from "react";
import tim1 from '../asset/tim1.jpg'
import tim2 from '../asset/tim2.jpg'
import tim3 from '../asset/tim3.jpg'
import tim4 from '../asset/tim4.jpg'
import tim5 from '../asset/Dr.-Yoanes-Bandung-MT-edit-257x300-1.jpg'
import tim6 from '../asset/Fahmi.jpg'
import tim7 from '../asset/Agus-Sukoco-1-294x300-1.jpeg'
import tim8 from '../asset/IMG_1199-2.jpg'

const Tim = () => {

    const[drop, setDrop] = useState(false)
    const onDrop = () =>{
    setDrop(!drop)
    }
    return ( 
        <div className="flex flex-col items-center space-y-[30px] pt-[50px] overflow-x-hidden" id="tim">
        <Navbar drop={onDrop} tim={true}/>
        <Drop open={drop}/>
        <h1 className="text-gray-600 text-4xl title relative">Peneliti & Staff</h1>
        <div className="flex flex-row flex-wrap w-full justify-center gap-5 items-stretch">
            <Profile img={tim1} nama="Dr. techn.Ary Setijadi Prihatmanto, ST., MT." job="Kepala PPTIK"/>
            <Profile img={tim2} nama="Prof.Armein Z.R Langi M.Sc.,Phd" job="Peneliti Utama"/>
            <Profile img={tim3} nama="Ir.Mervin T Hutabarat M.Sc.,Phd" job="Peneliti Utama"/>
            <Profile img={tim4} nama="Prof. Andriyan Bayu Suksmono" job="Peneliti Utama"/>
            <Profile img={tim5} nama={<>Dr.Yoanes Bandung <br /> , M.T</>} job="Kepala PPTIK"/>
            <Profile img={tim6} nama="Muhammad Fahmi Nurfadilah, ST., MT" job="Peneliti Utama"/>
            <Profile img={tim7} nama={<>Agus <br /> Sukoco</>} job="Peneliti Utama"/>
            <Profile img={tim8} nama={<>Adnan <br /> Darwanto</>} job="Peneliti Utama"/>
            
        </div>
        <Footer/>   
    </div>
     );
}
 
export default Tim;