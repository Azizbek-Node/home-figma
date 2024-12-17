import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

const Details = () => {
    const {id} = useParams()
    const {data} = useFetch(`/product/get/${id}`)
    console.log(data)

  return (
    <div className='container'>
        <p>Detail</p>
        <img src={data?.image} alt="" />
    </div>
)
}

export default Details