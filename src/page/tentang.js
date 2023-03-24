import Navbar from "../component/nav";
import Drop from "../component/dropdown"
import Footer from '../component/footer'
import { useState } from "react";
import logo from '../asset/logo_itb_512.png'
import {FaFlask, FaHandshake} from 'react-icons/fa'
import {ImBubble2, ImBubbles2} from 'react-icons/im'
import {SiHandshake} from 'react-icons/si'
import visi from '../asset/logo-PPTIK-baru-300x300.jpg'
import misi from '../asset/Gd.PPTIK-ITB-212x300.png'
import mitra1 from '../asset/NTT Data.jpg'
import mitra2 from '../asset/bmkg.png'
import mitra3 from '../asset/net1.jpg'
import mitra4 from '../asset/logo-kpu.png'
import mitra5 from '../asset/telyu.png'
import mitra6 from '../asset/eonreal.jpg'
import mitra7 from '../asset/zamrud.jpg'
import mitra8 from '../asset/microsoft-logo-icon-editorial-free-vector.png'
import mitra9 from '../asset/download.jpg'
import mitra10 from '../asset/irf.png'

const Tentang = () => {
    
    const[drop, setDrop] = useState(false)
    const onDrop = () =>{
        setDrop(!drop)
    }


    return ( 
        <div className="flex flex-col items-center space-y-[30px] pt-[50px] overflow-x-hidden" id="home">
            <Navbar drop={onDrop} tentang={true}/>
            <Drop open={drop}/>
            <div className="flex flex-row w-[50%] space-x-[10px] justiify-center items-center">
                <img src={logo} className="w-1/3" />
                <div className="flex flex-col justify-between space-y-[10px]">
                    <h1 className="text-3xl text-gray-600 font-semibold line2 relative">Tentang PPTIK</h1>
                    <h1 className="text-[14px]">Pusat Penelitian Teknologi Informasi dan Komunikasi (PPTIK-ITB) memiliki misi diantaranya adalah membangun reputasi riset dan peniliti berkelas dunia. Hal ini menuntut selarasnya topik, kompetensi peneliti, kelayakan fasilitas, tingginya aktivitas dan maraknya kemitraan global di bidang penelitian ICT. Selain itu, PPTIK juga memiliki misi untuk mendorong perkembangan produk komersil, enterpreneurship dan industri di bidang ICT. Hal ini ditandai juga dengan signifikannya kontribusi sektor ICT bagi revenue ITB.</h1>
                </div>
            </div>
            <div className="flex flex-col bg-main text-white py-5 px-5 w-[70%] space-y-[10px]">
                <h1 className="text-[16px] font-semibold">Menjawab berbagai tantangan baru dari era ITB–Entrepreneurial University , kegiatan PPTIK pada kurun waktu 2015 – 2020 akan berfokus pada:</h1>
                <h1 className="text-[16px]">
                    1. Pemantapan kapasitas organisasi PPTIK untuk berkolaborasi dengan sebanyak mungkin pihak pada berbagai sektor dengan memanfaatkan portfolio teknologi dan solusi yang telah dikembangkan oleh seluruh stakeholder PPTIK.
                </h1>
                <h1 className="text-[16px]">
                    2. Pemantapan peran PPTIK sebagai pionir dan rujukan dalam pengembangan dan pemanfaatan teknologi dan solusi digital learning dengan menerapan teknologi dan solusi digital learning kepada stakeholder yang semakin luas dan beragam dengan memastikan munculnya inovasi pembelajaran yang berbasis teknologi dan solusi digital learning dalam bentuk model bisnis maupun startup digital learning.
                </h1>
                <h1 className="text-[16px]">
                    3. Peningkatan peran PPTIK sebagai pionir dan rujukan dalam pengembangan dan pemanfaatan TIK dan solusi berbasis TIK untuk berbagai sektor aplikasi dengan memastikan munculnya inovasi teknologi terkait yang dapat didemonstrasikan dalam 3 bentuk yaitu publikasi ilmiah, prototype yang berfungsi, pra-Startup.
                </h1>
            </div>
            <div className="flex flex-col py-5 px-5 w-[70%] space-y-[10px] text-gray-500">
                <h1 className="text-[16px]">Untuk mendukung roadmap tersebut, di tahun 2015-2017 riset yang dikembangkan oleh PPTIK ITB fokus ke arah pengembangan framework komunitas pintar yang menjadi standar tercapainya konsep kota pintar. Komponen framework smart community yang dikembangkan adalah :</h1>
                <div className="flex flex-row space-x-[10px] text-[16px] items-start">
                    <h1 className="bg-main text-white rounded-full px-[8px] py-[5px]">01</h1>
                    <div className="flex flex-col pt-[4px]">
                        <h1 className="text-main font-bold text-[18px]">Smart Mobility</h1>
                        <h1 className="text-gray-500">Melalui penerapan riset Intelligent Transportation System (ITS).</h1>
                    </div>
                </div>
                <div className="flex flex-row space-x-[10px] text-[16px] items-start">
                    <h1 className="bg-main text-white rounded-full px-[8px] py-[5px]">02</h1>
                    <div className="flex flex-col pt-[4px]">
                        <h1 className="text-main font-bold text-[18px]">Smart Health Care</h1>
                        <h1 className="text-gray-500">Melalui pengembangan dan penerapan sistem Detta Care (Detection of Data Patient Condition with Health Monitoring System).</h1>
                    </div>
                </div>
                <div className="flex flex-row space-x-[10px] text-[16px] items-start">
                    <h1 className="bg-main text-white rounded-full px-[8px] py-[5px]">03</h1>
                    <div className="flex flex-col pt-[4px]">
                        <h1 className="text-main font-bold text-[18px]">Smart Government</h1>
                        <h1 className="text-gray-500">Melalui pengembangan sebuah riset berbasis proyek bernama Indonesia United (Idun)..</h1>
                    </div>
                </div>
                <div className="flex flex-row space-x-[10px] text-[16px] items-start">
                    <h1 className="bg-main text-white rounded-full px-[8px] py-[5px]">04</h1>
                    <div className="flex flex-col pt-[4px]">
                        <h1 className="text-main font-bold text-[18px]">Smart Education</h1>
                        <h1 className="text-gray-500">melalui pengembangan riset E-Learning dan game edukasi VidyaNusa, Tugas Akhir Dalam Jaringan (TADJ), Open Online Data Course (OODC) hingga ke pengembangan robot Artificial Intelligence (AI) untuk edukasi dan interaksi sosial manusia dengan nama “Lumen Social Robot”..</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-[80%] py-5 px-5 space-y-[40px] items-center">
                <h1 className="text-4xl text-gray-600 relative">Jasa Layanan</h1>
                <div className="flex flex-row space-x-[50px] items-start">
                    <div className="flex flex-col space-y-[10px] w-1/3 items-center">
                        <FaFlask className="text-main" size={40}/>
                        <div className="flex flex-col w-full items-center">
                        <h1 className="text-lg text-gray-500 text-center">Penelitian dalam penerapan TIK</h1>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-[10px] w-1/3 items-center">
                        <FaHandshake className="text-main" size={40}/>
                        <h1 className="text-lg text-gray-500">Kerjasama Industri</h1>
                    </div>
                    <div className="flex flex-col space-y-[10px] w-1/3 items-center">
                        <ImBubble2 className="text-main" size={40}/>
                        <h1 className="text-lg text-gray-500">Konsultasi</h1>
                    </div>
                    <div className="flex flex-col space-y-[10px] w-1/3 items-center">
                        <SiHandshake className="text-main" size={40}/>
                        <h1 className="text-lg text-gray-500">Inkubasi Startup</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-[40px] w-[80%] items-center">
                <h1 className="text-4xl text-gray-600">Kemitraan</h1>
                <div className="flex flex-row flex-wrap gap-10 items-center justify-center w-[80%]">
                    <img src={mitra1} alt="" className="w-1/6 rounded-full"/>
                    <img src={mitra2} alt="" className="w-1/6 rounded-full"/>
                    <img src={mitra3} alt="" className="w-1/6 rounded-full"/>
                    <img src={mitra4} alt="" className="w-1/6 rounded-full"/>
                    <img src={mitra9} alt="" className="w-1/6 rounded-full"/>
                    <img src={mitra6} alt="" className="w-1/6 rounded-full"/>
                    <img src={mitra10} alt="" className="w-1/6 rounded-full"/>
                    <img src={mitra8} alt="" className="w-1/6 rounded-full"/>
                </div>
            </div>
            <div className="flex flex-row-reverse gap-5 w-[80%] items-center" >
                <img src={misi} alt="" className="w-[30%]"/>
                <div className="flex flex-col space-y-[30px] items-end">
                    <h1 className="text-3xl text-gray-600">Visi</h1>
                    <h1 className="text-lg text-end">Setiap warga negara Indonesia harus dapat memanfaatkan TIK untuk kemajuan perikehidupannya. Setiap warganegara dapat berpartisipasi dalam masyarakat pengetahuan dan ekonomi pengetahuan, baik ikut mendapatkan manfaatnya maupun ikut membangunnya. Di tahun 2016 setiap warga negara Indonesia harus bisa mendapatkan jatah secara cuma-cuma.</h1>
                </div>
            </div>
            <div className="flex flex-row space-x-[10px] w-[80%] items-center" >
                <img src={visi} alt="" className="w-[30%]"/>
                <div className="flex flex-col space-y-[30px] items-start">
                    <h1 className="text-3xl text-gray-600">Misi</h1>
                    <ul className="list-disc space-y-[10px]">
                        <li>Membangun reputasi riset dan peneliti berkelas dunia. Hal ini menuntut selarasnya topik, kompetensi peneliti, kelayakan fasilitas, tingginya aktivitas dan maraknya kemitraan global di bidang penelitian ICT.</li>
                        <li>Mendorong perkembangan produk komersial, enterpreneurship, dan industri di bidang ICT. Hal ini ditandai juga dengan signifikannya kontribusi sektor ICT bagi revenue ITB.</li>
                    </ul>
                </div>
            </div>
            <Footer/>   
        </div>
     );
}
 
export default Tentang;