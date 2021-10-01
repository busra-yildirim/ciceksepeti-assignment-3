
import { useState } from  'react/cjs/react.development';
import './css/Card.scss';
import Modal from './Modal';
import deleteIcon from "../assets/delete-icon.png";
import editIcon from "../assets/edit-icon.png";


function Card({recipe: {id, title, description, image, starCount}, deleteCard,  openModal, updateStarCount}){


    return( 
        <>     
            <div className="card-wrapper">
                <div className="card-wrapper__header">
                    <img className="card-wrapper__cover"src={image}/>
                    <img className="delete-icon" src={deleteIcon} onClick={()=> deleteCard(id)} />
                    <img className="edit-icon" src={editIcon} onClick={()=> openModal(id)}/>
                </div>
                <div className="card-wrapper__body">
                        <div className="star-wrapper">
                            { Array(starCount).fill().map((_, index)=> 
                                (<img className="star" src="https://img.icons8.com/fluency/2x/star.png" onClick={() =>updateStarCount(starCount,index, id)} />)
                            )}
                            { Array(5-starCount).fill().map((_, index)=> 
                                (<img className="star" src="https://img.icons8.com/color/2x/star.png" onClick={() =>updateStarCount(starCount,index+starCount, id)}/>)
                            )}       
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
        </>
    );
}

export default Card;
