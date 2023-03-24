import Navbar from "../component/nav";
import Carousel from "../component/carousel";
import bg1 from "../asset/polygon-scatter-haikei.svg"
import {AiOutlineArrowRight} from "react-icons/ai"
import Drop from "../component/dropdown"
import { useState } from "react";
import News from '../component/news'
import Footer from '../component/footer'
import Btn from '../component/btn'
import { Link } from "react-router-dom";

const Home = () => {

    const[drop, setDrop] = useState(false)
    const onDrop = () =>{
        setDrop(!drop)
    };
    return ( 
        <div className="flex flex-col items-center space-y-[30px] pt-[20px] overflow-x-hidden" id="home">
            <Navbar drop={onDrop} home={true}/>
            <Drop open={drop}/>
            <div className="relative w-full px-[80px] pt-[40px] pb-[80px] flex flex-row justify-end overflow-hidden">
                <img src={bg1} alt="" className="absolute -z-[10] w-full top-0 left-0"/>
                <div className="flex flex-col p-[40px] bg-white text-main shadow-2xl w-[500px] absolute z-[10]  left-[62px] space-y-[20px] bottom-[40px]">
                    <h1 className="text-5xl font-light">Pusat Penelitian Teknologi Informasi dan Komunikasi</h1>
                    <h1>Pusat Penelitian Teknologi Informasi dan Komunikasi (PPTIK-ITB) memiliki misi diantaranya adalah membangun reputasi riset dan peniliti berkelas dunia.</h1>
                   <div>
                   <Link to="/tentang"><button className="px-[20px] py-[10px] bg-main text-white border-2 border-main hover:bg-white hover:text-main flex flex-row space-x-1 items-center btn"><h1>Pelajari Lebih Lanjut</h1> <AiOutlineArrowRight className="font-bold mt-[3px]"/></button></Link>
                    </div> 
                </div>
            <Carousel/>
            </div>
            <News/>
            <div className="flex flex-row space-x-[5px] max-w-max">
                <Btn isi="1" aktif={true}/>
                <a href="/2"><Btn isi="2"/></a>
                <a href="/2"><Btn isi="Next >>"/></a>
            </div>
            <Footer/>   
        </div>
     );
}
 
export default Home;