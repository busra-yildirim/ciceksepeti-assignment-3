
import Card from './Card';
import { useEffect, useState } from 'react';
import '../css/Layout.scss';
import Modal from './Modal';

function Layout() {

    const [ allRecipes, setAllRecipes] = useState([]);  // All card object array
    const [ showPopup, setShowPopup ] = useState(false);  // is modal open or close? 
    const [ isOpen, setIsOpen] = useState(false);
    const [ selectedRecipe, setSelectedRecipe ] = useState({});
    const [ notifyText, setNotifyText] = useState("");

    // fetch api
    const getRecipes = async () => {
        try {
            const response = await fetch("https://61571cd68f7ea600179850b7.mockapi.io/recipes");
            const data = await response.json();   
            setAllRecipes(data)
        }catch (error) {
            console.log(error);
        }
    }  
    useEffect(() => {
        getRecipes();        
    }, []);

    // deleted card from card list
    const deleteCard = (id) => {
        const filteredRecipe = allRecipes.filter((recipe)=> recipe.id !== id)
        setAllRecipes(filteredRecipe);
        setNotifyText("Delete Successfully")
        setShowPopup(true);
    }
    // show notify during 3 second
    useEffect(() => {
        const timeout = setTimeout(() => {
         setShowPopup(false)
        }, 3000)
        return () => {
          clearTimeout(timeout); // clear callstack
        }
      }, [showPopup]);
    // for updated star count
    const updateStarCount = (starCount, index, cardID) => {
        starCount = index+1;
            const newAllRecipes = allRecipes.map(item => {
                if(item.id === cardID){
                    item.starCount = starCount;
                }
                return item;
                })
        setAllRecipes(newAllRecipes); 
    }
    // modal is open
    const openModal = (recipe) => {      
          setIsOpen(true) 
          setSelectedRecipe(recipe);
    }
    
    // modal is close 
    const closeModal = () =>{
        setIsOpen(false)
        
    }

    const updateRecipe = (updatedRecipe) => {
        const newAllRecipes = allRecipes.map(item => {
                if(item.id === selectedRecipe.id){
                    item.title = updatedRecipe.title;
                    item.description = updatedRecipe.description;
                }
                return item;
        })
        setAllRecipes(newAllRecipes);    
        setIsOpen(false);
        setNotifyText("Update Successfully")
        setShowPopup(true);
    }
    return(
        <div className="container">   
            {allRecipes.map((recipe)=>(
                <Card key={recipe.id} recipe={recipe} openModal={openModal} deleteCard={deleteCard} updateStarCount={updateStarCount}/>
            ))}  
            {isOpen  &&  <Modal closeModal={closeModal} selectedRecipe={selectedRecipe} updateRecipe={updateRecipe}/> }
            {showPopup &&
                (<div className="success-modal">          
                    <span>{notifyText}</span>
                </div>
            )}     
             
        </div>
    )
}
export default Layout;
