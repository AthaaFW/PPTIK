import { useState, useEffect } from "react";
import Surat from "../component/massage";

const Admin = () => {

    const [kontak, setKontak] = useState([ ])

    useEffect( () => {
        const getKontak = async () => {
            const kontakFromServer = await fetchKontak()
            setKontak(kontakFromServer)
        }

        getKontak()
    }, [ ])

    const fetchKontak = async () => {
        const res = await fetch('http://localhost:5000/kontak')
        const data = await res.json()

        return data
    }

    return ( 
        <div className="flex flex-row py-[10rem] gap-[2rem] px-[5rem] flex-wrap justify-center">
            {kontak.map((kontaks) => (
                <Surat key={kontaks.id} namaDep={kontaks.namaDep} namaBel={kontaks.namaBel} noHp={kontaks.noHp} tujuan={kontaks.tujuan} pesan={kontaks.pesan}/>
            ))}
        </div>
     );
}
 
export default Admin;