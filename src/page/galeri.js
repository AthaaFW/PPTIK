import Navbar from "../component/nav";
import Drop from "../component/dropdown";
import { useState } from "react";
import img1 from '../asset/galeri.jpeg'
import img2 from '../asset/galeri2.jpeg'
import img3 from '../asset/galeri3.jpeg'
import Footer from "../component/footer";
import Btn from "../component/btn";

const Galeri = () => {

    const[drop, setDrop] = useState(false)
    const onDrop = () =>{
        setDrop(!drop)
    }

    return ( 
        <div className="flex flex-col items-center space-y-[30px] pt-[70px] overflow-x-hidden" id="galeri">
            <Navbar drop={onDrop} galeri={true}/>
            <Drop open={drop}/>
            <div className="flex flex-col w-[80%] space-y-5">
            <h1 className="text-gray-600 text-4xl">Galeri</h1>
            <div className="w-full border-t-2 border-gray-400 flex flex-row justify-center flex-wrap gap-[2px] pt-[10px] ">
                <div className="w-[349px] h-[249px] relative">
                    <img src={img1} alt="" className="w-[349px] h-[249px]"/>
                    <div className="absolute w-[349px] h-[249px] flex flex-col bg-blackTrans justify-center items-center text-white box top-0 left-0">
                            <h1 className="text-xl">Ruangan Rapat</h1>
                            <h1 className="text-gray-400">01-02-2023</h1>
                    </div>
                </div>
                <div className="w-[349px] h-[249px] relative">
                    <img src={img2} alt="" className="w-[349px] h-[249px]"/>
                    <div className="absolute w-[349px] h-[249px] flex flex-col bg-blackTrans justify-center items-center text-white box top-0 left-0">
                            <h1 className="text-xl">Materi rapat mingguan</h1>
                            <h1 className="text-gray-400">01-02-2023</h1>
                    </div>
                </div>
                <div className="w-[349px] h-[249px] relative">
                    <img src={img3} alt="" className="w-[349px] h-[249px]"/>
                    <div className="absolute w-[349px] h-[249px] flex flex-col bg-blackTrans justify-center items-center text-white box top-0 left-0">
                            <h1 className="text-xl">Rapat diskusi mingguan</h1>
                            <h1 className="text-gray-400">01-02-2023</h1>
                    </div>
                </div>
                <div className="w-[349px] h-[249px] relative">
                    <img src={img3} alt="" className="w-[349px] h-[249px]"/>
                    <div className="absolute w-[349px] h-[249px] flex flex-col bg-blackTrans justify-center items-center text-white box top-0 left-0">
                        <h1 className="text-xl">Rapat diskusi mingguan</h1>
                        <h1 className="text-gray-400">31-01-2023</h1>
                    </div>
                </div>
                <div className="w-[349px] h-[249px] relative">
                    <img src={img2} alt="" className="w-[349px] h-[249px]"/>
                    <div className="absolute w-[349px] h-[249px] flex flex-col bg-blackTrans justify-center items-center text-white box top-0 left-0">
                        <h1 className="text-xl">Rapat diskusi mingguan</h1>
                        <h1 className="text-gray-400">31-01-2023</h1>
                    </div>
                </div>
                <div className="w-[349px] h-[249px] relative">
                    <img src={img1} alt="" className="w-[349px] h-[249px]"/>
                    <div className="absolute w-[349px] h-[249px] flex flex-col bg-blackTrans justify-center items-center text-white box top-0 left-0">
                        <h1 className="text-xl">Rapat diskusi mingguan</h1>
                        <h1 className="text-gray-400">31-01-2023</h1>
                    </div>
                </div>
                <div className="w-[349px] h-[249px] relative">
                    <img src={img2} alt="" className="w-[349px] h-[249px]"/>
                    <div className="absolute w-[349px] h-[249px] flex flex-col bg-blackTrans justify-center items-center text-white box top-0 left-0">
                        <h1 className="text-xl">Rapat diskusi mengenai pendidikan</h1>
                        <h1 className="text-gray-400">30-01-2023</h1>
                    </div>
                </div>
                <div className="w-[349px] h-[249px] relative">
                    <img src={img3} alt="" className="w-[349px] h-[249px]"/>
                    <div className="absolute w-[349px] h-[249px] flex flex-col bg-blackTrans justify-center items-center text-white box top-0 left-0">
                    <h1 className="text-xl">Rapat diskusi mengenai pendidikan</h1>
                        <h1 className="text-gray-400">30-01-2023</h1>
                    </div>
                </div>
                <div className="w-[349px] h-[249px] relative">
                    <img src={img2} alt="" className="w-[349px] h-[249px]"/>
                    <div className="absolute w-[349px] h-[249px] flex flex-col bg-blackTrans justify-center items-center text-white box top-0 left-0">
                        <h1 className="text-xl">Rapat diskusi mengenai pendidikan</h1>
                        <h1 className="text-gray-400">30-01-2023</h1>
                    </div>
                </div>
                <div className="w-[349px] h-[249px] relative">
                    <img src={img1} alt="" className="w-[349px] h-[249px]"/>
                    <div className="absolute w-[349px] h-[249px] flex flex-col bg-blackTrans justify-center items-center text-white box top-0 left-0">
                            <h1 className="text-xl">Rapat diskusi mengenai pendidikan</h1>
                            <h1 className="text-gray-400">30-01-2023</h1>
                    </div>
                </div>
                <div className="w-[349px] h-[249px] relative">
                    <img src={img2} alt="" className="w-[349px] h-[249px]"/>
                    <div className="absolute w-[349px] h-[249px] flex flex-col bg-blackTrans justify-center items-center text-white box top-0 left-0">
                            <h1 className="text-xl">Rapat diskusi mengenai pendidikan</h1>
                            <h1 className="text-gray-400">30-01-2023</h1>
                    </div>
                </div>
                <div className="w-[349px] h-[249px] relative">
                    <img src={img3} alt="" className="w-[349px] h-[249px]"/>
                    <div className="absolute w-[349px] h-[249px] flex flex-col bg-blackTrans justify-center items-center text-white box top-0 left-0">
                            <h1 className="text-xl">Rapat diskusi mengenai pendidikan</h1>
                            <h1 className="text-gray-400">30-01-2023</h1>
                    </div>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Galeri;