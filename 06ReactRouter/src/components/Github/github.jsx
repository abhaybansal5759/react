import React, { useEffect, useState } from 'react'

function github() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/abhaybansal5759')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    }, [])
    
  return (
    <div className='text-center m-10 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt = "Git Picture" width={300}/>
    </div>
  )
}

export default github