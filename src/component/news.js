import Card from "./card";
import img1 from '../asset/WhatsApp-Image-2023-02-22-at-12.07.02-520x245.jpeg'
import img2 from '../asset/WhatsApp-Image-2023-02-24-at-10.41.29-1-520x245.jpeg'
import img3 from '../asset/WhatsApp-Image-2023-03-02-at-12.04.22-520x245.jpeg'
import img4 from '../asset/WhatsApp-Image-2023-03-03-at-13.51.30-520x245.jpeg'
import img5 from '../asset/WhatsApp-Image-2023-03-03-at-16.26.25-520x245.jpeg'
import img6 from '../asset/WhatsApp-Image-2023-03-04-at-08.57.13-520x245.jpeg'
import img7 from '../asset/WhatsApp-Image-2023-03-06-at-19.32.30-520x245.jpeg'
import img8 from '../asset/carousel1.jpeg'
import img9 from '../asset/carousel2.jpeg'

const News = () => {
    return ( 
        <div className="w-full flex flex-row flex-wrap justify-center gap-10 pb-[30px]">
            
            <Card judul="Diskusi P2MI Abdimas" tgl="05 MARET 2023" ktg="#Mitra" img={img1} link='/page/1'/>
            <Card judul="STQ Incubation Day 1" tgl="04 MARET 2023" ktg="#Kegiatan" img={img2} link='/page/2'/>
            <Card judul="Diskusi Dengan UBL" tgl="09 FEB 2023" ktg="#Mitra" img={img3} link='/page/3'/>

            <Card judul="Pertemuan PPTK ITB dan UBL" tgl="04 MARET 2023" ktg="#Kegiatan"  img={img4} link='/page/4'/>
            <Card judul="Program Kelas Online bersama LSKK" tgl="02 MARET 2023" ktg="#Karya"  img={img5} link='/page/5'/>
            <Card judul="Kunjungan dari SMKN 1 Dauwan" tgl="01 MARET 2023" ktg="#Mitra"  img={img6} link='/page/6'/>
        </div>
     );
}
 
export default News;