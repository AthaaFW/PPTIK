import  'tw-elements';
import { useState } from "react";
import Navbar from "../component/nav";
import Drop from "../component/dropdown";
import Footer from "../component/footer";

const Kontak = () => {
  const [drop, setDrop] = useState(false);
  const onDrop = () => {
    setDrop(!drop);
  };

  const[kontak, setKontak] = useState([])

  const addPesan = async (kontaks) =>{
    const res = await fetch('http://localhost:5000/kontak',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(kontaks)
    })

    const data = await res.json()

    setKontak([...kontak, data])

  }

  const [namaDep, setNamaDep] = useState(' ')
  const [namaBel, setNamaBel] = useState(' ')
  const [email, setEmail] = useState(' ')
  const [noHp, setNoHp] = useState(' ')
  const [tujuan, setTujuan] = useState(' ')
  const [pesan, setPesan] = useState(' ')

  const onSubmit = (e) => {
    e.preventDefault()

    addPesan({namaDep, namaBel, email, noHp, tujuan, pesan})

    setNamaDep(' ')
    setNamaBel(' ')
    setEmail(' ')
    setNoHp(' ')
    setTujuan(' ')
    setPesan(' ')

    alert('Pesan terkirim')
  }

  return (
    <div className="flex flex-col items-center space-y-[30px] pt-[50px] overflow-x-hidden justify-between">
      <Navbar drop={onDrop} kontak={true} />
      <Drop open={drop}/>
      <div className="flex flex-col space-y-[20px] items-center">
        <h1 className="text-2xl text-gray-600 w-[100%] relative line">
          Kontak Kami
        </h1>
        <form class="w-full max-w-lg" onSubmit={onSubmit}>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Nama Depan
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""  name='namaDep' value={namaDep} onChange={e => setNamaDep(e.target.value)}/>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Nama Belakang
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""  name='namaBel' value={namaBel} onChange={e => setNamaBel(e.target.value)}/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        E-mail
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="email@gmail.com"  name='email' value={email} onChange={e => setEmail(e.target.value)}/>
    </div>
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        No Hp
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="08xx-xxx-xxx"  name='noHp' value={noHp} onChange={e => setNoHp(e.target.value)}/>
    </div>
  </div>
    <div class="w-full">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Tujuan
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"  name='pilihan' value={tujuan} onChange={e => setTujuan(e.target.value)}>
          <option value=' '>...</option>
          <option value='Saya memiliki proposal kerja sama'>Saya memiliki proposal kerja sama</option>
          <option value='Saya ingin berkolaborasi'>Saya ingin berkolaborasi</option>
          <option value='Saya ingin bergabung'>Saya ingin bergabung</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      <div className='w-full pt-[20px]'>
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Pesan
      </label>
      <textarea name="pesan" id="pesan" cols="50" rows="5" className='bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none' value={pesan} onChange={e => setPesan(e.target.value)}></textarea>
      </div>
      <div className='w-full flex flex-col items-end pt-[20px]'>
          <button className='w-[20%] px-[15px] py-[9px] rounded bg-main text-white text-center'>Kirim</button>
      </div>
    </div>
</form>
      </div>
      <Footer />
    </div>
  );
};

export default Kontak;
