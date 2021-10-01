

import '../css/Card.scss';
import deleteIcon from "../assets/delete-icon.png";
import editIcon from "../assets/edit-icon.png";


function Card({recipe: {id, title, description, image, starCount}, deleteCard,  openModal, updateStarCount}){


    return( 
        <>     
            <div className="card-wrapper">
                <div className="card-wrapper__header">
                    <img className="card-wrapper__cover"src={image} alt="cover"/>
                    <img className="delete-icon" src={deleteIcon} alt="delete" onClick={()=> deleteCard(id)} />
                    <img className="edit-icon" src={editIcon} alt="edit" onClick={()=> openModal(id)}/>
                </div>
                <div className="card-wrapper__body">
                        <div className="star-wrapper">
                            { Array(starCount).fill().map((_, index)=> 
                                (<img key={`starYellow-${index}`} className="star" src="https://img.icons8.com/fluency/2x/star.png" alt="yellowStar" onClick={() =>updateStarCount(starCount,index, id)} />)
                            )}
                            { Array(5-starCount).fill().map((_, index)=> 
                                (<img key={`star-${index}`} className="star" src="https://img.icons8.com/color/2x/star.png" alt="whiteStar" onClick={() =>updateStarCount(starCount,index+starCount, id)}/>)
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
