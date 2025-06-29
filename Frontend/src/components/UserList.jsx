import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserList = () => {
    const [users, setUser] = useState([])

    useEffect(()=>{
        getUsers()
    }, [])

    const getUsers = async ()=>{
        const response = await axios.get('http://localhost:5000/users')
        setUser(response.data)
    }

  return (
    <>
        <div classNameName='flex flex-row max-w-full justify-center m-10 '>            
            <Link to={'/add'} classNameName='rounded-md bg-blue-600 text-white max-w-18 mx-2 mt-4 text-center items-center'>Tambah</Link>
            <table classNameName='table-cell text-left border-separate border-spacing-x-8 border bg-gray-700 text-white'>
                <caption classNameName='caption-top text-gray-300 mt-2 mb-10'>Table Warga Cigalumpit Regency 2025.</caption>
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>KTP</th>
                        <th>NAMA</th>
                        <th>EMAIL</th>
                        <th>TELEPON</th>
                        <th>P/L</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index)=> (
                    <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.ktp}</td>
                        <td>{user.nama}</td>
                        <td>{user.email}</td>
                        <td>{user.telepon}</td>
                        <td>{user.jenis_kelamin}</td>
                        <td>
                            <Link classNameName='rounded-md bg-yellow-600 text-white  px-4 m-1 '>Edit</Link>
                            <Link classNameName='rounded-md bg-red-600 text-white  px-4 m-1'>Delete</Link>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default UserList