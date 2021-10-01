import './css/Modal.scss';

function Modal( closeModal) {


    return(
        <div className="modal-wrapper">
            <div className="modal">    
                <div className="modal-content">
                    <button className="close" onClick={()=>closeModal()}>X</button>
                    <h2>Edit</h2>
                    <label>Dish</label>
                    <input type="text"/>
                    <label>Recipe</label>
                    <textarea/>
                    <button className="submit" >SAVE</button>
                </div>              
            </div>
        </div>
    )
}

export default Modal;
