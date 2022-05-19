import {products} from "./ItemListContainer"
export default function ItemList (){
      {products.map((product) => {
        return (
          <div key={product.id}>
          <Item {...products}/>
          </div>
        )
        })}
     }