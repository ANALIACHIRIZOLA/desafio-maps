import { Card, Button } from 'react-bootstrap';
import AddButton from "../ItemCount/ItemCount";
import ItemList from "./components/ItemList/ItemList"
export default function Item ({products}) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <div>
            <ItemList/>
            </div>
            <AddButton/>
        </Card.Body>
        </Card>
    )
}