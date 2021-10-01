import { useRef } from 'react';
import '../css/Modal.scss';

function Modal( {selectedRecipe, closeModal, updateRecipe}) {

    const {title, description } =selectedRecipe;
    const titleInputRef = useRef("")
    const descInputRef = useRef("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
         const newTitleAndDesc = {
             title : titleInputRef.current.value,
             description: descInputRef.current.value
         }
         updateRecipe(newTitleAndDesc)
    }
    return(
        <div className="modal-wrapper">
            <div className="modal">    
                
                    <form onSubmit={handleSubmit}>
                        <div className="modal-content">
                            <button className="close" onClick={()=>closeModal()}>X</button>
                            <h2>Edit</h2>
                            <label>Dish</label>
                            <input type="text" defaultValue={title} ref={titleInputRef} required/>
                            <label>Recipe</label>
                            <textarea defaultValue={description}  ref={descInputRef} required/>
                            <button className="submit">SAVE</button>
                        </div>    
                    </form>
                          
            </div>
        </div>
    )
}

export default Modal;
