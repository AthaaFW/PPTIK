const Drop = ({open}) => {
    return ( 
        <div className={open?"fixed bg-slate-900 text-white w-full h-full flex flex-row z-[89] top-8 left-0 px-[10rem] py-[3rem] space-x-10 dropdown-open":"fixed bg-slate-900 text-white w-full h-full flex flex-row z-[89] top-8 left-0 px-[10rem] py-[3rem] space-x-10  dropdown-hide"}>
            <div className="flex flex-col space-y-2">
                <h1 className="text-xl text-main">Smart Learning</h1>
                <a href="http://tadj.lskk.ee.itb.ac.id/" target="_blank"><h1 className="text-base hover:text-gray-300">Tugas Akhir Dalam Jaringan</h1></a>
                <a href="http://vidyanusa.lskk.ee.itb.ac.id/" target="_blank"><h1 className="text-base hover:text-gray-300">Vidyanusa</h1></a>
                <a href="http://prdoc.lskk.ee.itb.ac.id/" target="_blank"><h1 className="text-base hover:text-gray-300">PRD Online Course</h1></a>
                <a href="http://beaconeventcampus.lskk.ee.itb.ac.id/" target="_blank"><h1 className="text-base hover:text-gray-300">Open Data Course</h1></a>
            </div>
            <div className="flex flex-col space-y-2">
                <h1 className="text-xl text-main">Transportasi</h1>
                <a href="http://bsts.lskk.ee.itb.ac.id//" target="_blank"><h1 className="text-base hover:text-gray-300">BSTS</h1></a>
                <a href="http://blits.id/" target="_blank"><h1 className="text-base hover:text-gray-300">BLITS</h1></a>
                <a href="http://tlits.id/" target="_blank"><h1 className="text-base hover:text-gray-300">TLITS</h1></a>
            </div>
            <div className="flex flex-col space-y-2">
                <h1 className="text-xl text-main">Kesehatan</h1>
                <a href="http://shesop.azurewebsites.net/" target="_blank"><h1 className="text-base hover:text-gray-300">Sheshop</h1></a>
            </div>
            <div className="flex flex-col space-y-2">
                <h1 className="text-xl text-main">Indonesia United</h1>
                <a href="http://idun-nelayan.pptik.id/" target="_blank"><h1 className="text-base hover:text-gray-300">Idun Nelayan</h1></a>
                <a href="http://167.205.7.227:10/" target="_blank"><h1 className="text-base hover:text-gray-300">DPR Kita</h1></a>
                <a href="http://167.205.7.227:10/web_verture/" target="_blank"><h1 className="text-base hover:text-gray-300">Smart Vertical Agriculture</h1></a>
            </div>
        </div>
     );
}
 
export default Drop;