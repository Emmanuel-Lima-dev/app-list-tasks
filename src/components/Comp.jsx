import React, { useEffect, useState } from 'react'
import data from '../data/MOCK_DATA.json'

export const Comp = () => {

    const [products, setProducts] = useState([]);

    const handledData = ()=> {
        return new Promise((resolve, reject) => {
            return resolve(data);
        })
    };

    useEffect( ()=>{
        handledData()
            .then((rta)=>{
                setProducts(rta)
            })
    } ,[])

  return (
    <div>
        {
            products.length > 0 && 
                products.map(({id, titulo, imagen})=> {
                    return(
                        <div key={id}>
                            <h1>{titulo}</h1>
                            <img src={imagen}></img>
                        </div>
                    )
                })
        }
    </div>
  )
}
