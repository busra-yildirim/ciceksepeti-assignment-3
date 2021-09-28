
import './Card.scss';
function Card(){

    return(
        <div className="card-wrapper">
            <img src="https://recipes.simeongriggs.dev/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4m16m8l4%2Fproduction%2F3657c74e9bf497cb7cef47369f9a8815489c4eca-1800x1200.jpg%3Frect%3D0%2C150%2C1800%2C900%26w%3D1200%26h%3D600&w=1200&q=75"></img>
            <img className="delete-icon" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/2x/external-delete-multimedia-kiranshastry-solid-kiranshastry.png"></img>
            <img className="edit-icon" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/2x/external-edit-interface-kiranshastry-solid-kiranshastry.png"></img>
            <img className="star" src="https://img.icons8.com/fluency/2x/star.png"/>
            
            <div className="card-content">
            <div className="title">Food Name</div>
            <div>Favorite Stars</div>
            Recipes
            </div>
        </div>
    );
}

export default Card;
