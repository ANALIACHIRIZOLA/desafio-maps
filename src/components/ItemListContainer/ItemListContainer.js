import React from "react"

import {products} from "../../data/productos";
export default function ItemListContainer (props){
  const task = new Promise((resolve,reject) => {
    setTimeout(() => {
    resolve(products);
    }, 2000)
 
  })
  task.then( result =>{
    console.log(result)
  })
    return (
          <div>
         <Item {...products}/>
          </div>
      )
}