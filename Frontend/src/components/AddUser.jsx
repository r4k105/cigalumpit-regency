import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AddUser = () => {

    const [ktp, setKtp] = useState("")
    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("")
    const [telepon, setTlp] = useState("")
    const [jenis_kelamin, setJenkel] = useState("L")
    const navigate = useNavigate()

    const saveUser = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:5000/user", {
                ktp,nama,email,telepon,jenis_kelamin,
            })
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='flex justify-center mt-12
    '>
        <div>
            <form onSubmit={saveUser}>
                <div>
                    <label htmlFor="">KTP</label>
                    <div>
                        <input className='invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none' type="text" value={ktp} onChange={(e)=> setKtp(e.target.value)} placeholder='No Ktp ...' />
                    </div>
                </div>
                <div>
                    <label htmlFor="">NAMA</label>
                    <div><input value={nama} onChange={(e)=> setNama(e.target.value)} placeholder='Nama Lengkap ...' /></div>
                </div>
                <div>
                    <label htmlFor="">EMAIL</label>
                    <div><input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='ALAMAT EMAIL' /></div>
                </div>
                <div>
                    <label htmlFor="">TELEPON</label>
                    <div><input type="text" value={telepon} onChange={(e)=> setTlp(e.target.value)} placeholder='NO TELEPON' /></div>
                </div>
                <div>
                    <label htmlFor="">JENIS-KELAMIN</label>
                    <div>
                        <select name="" id="" value={jenis_kelamin} onChange={(e)=> setJenkel(e.target.value)}>
                            <option value="L">L</option>
                            <option value="P">P</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button className='text-white bg-green-700 '>Simpan</button>
                    </div>
            </form>
        </div>
    </div>
  )
}

export default AddUser