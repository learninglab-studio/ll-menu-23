import styles from './card-to-drag.module.css'
import Draggable from 'react-draggable'

export default function CardToDrag(props){
    return(
        <div><p>test</p>
            <Draggable><div className={styles.card}>{props.text}</div></Draggable>
        </div>
        
    )
}