import React from 'react'

const tables = () => {
  return (
    <section>
        <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                <tr>
                    <th className='px-4 py-3'>KTP</th>
                    <th className='px-4 py-3'>NAMA</th>
                    <th className='px-4 py-3'>EMAIL</th>
                    <th className='px-4 py-3'>TELEPON</th>
                    <th className='px-4 py-3'>JENIS-KELAMIN</th>
                    <th className='px-4 py-3'>
                        <span class="sr-only">Actions</span>
                    </th>
                </tr>
            </thead>
        </table>
    </section>

  )
}

export default tables