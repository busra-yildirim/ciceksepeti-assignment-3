
import { useState } from  'react/cjs/react.development';
import './css/Card.scss';
import Modal from './Modal';
import deleteIcon from "../assets/delete-icon.png";
import editIcon from "../assets/edit-icon.png";


function Card({recipe: {id, title, description, image}, deleteCard}){
  
    const [ isOpen, setIsOpen] = useState(false);

    const editCard = () => {
        setIsOpen(true) 
    }
    return( 
        <>     
        <div className="card-wrapper">
            <div className="card-wrapper__header">
                <img className="card-wrapper__cover"src={image}/>
                <img className="delete-icon" src={deleteIcon} onClick={()=> deleteCard(id)} />
                <img className="edit-icon" src={editIcon} onClick={()=> editCard()}/>
            </div>
             <div className="card-wrapper__body">
                <div className="star-wrapper">
                    <img className="star" src="https://img.icons8.com/fluency/2x/star.png"/>
                    <img className="star" src="https://img.icons8.com/color/2x/star.png" />
                    <img className="star" src="https://img.icons8.com/fluency/2x/star.png"/>
                    <img className="star" src="https://img.icons8.com/color/2x/star.png" />
                    <img className="star" src="https://img.icons8.com/fluency/2x/star.png"/>

                </div>    
                <div className="card-content">
                    <div className="title">
                        {title}
                    </div> 
                    <div className="desc">
                        {description}
                    </div> 
                </div>
          </div> 
        </div> 
        {isOpen  &&  <Modal close={()=> setIsOpen(false)}/> }
        </>
    );
}

export default Card;
