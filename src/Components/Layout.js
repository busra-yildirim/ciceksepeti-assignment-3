
import Card from './Card';
import { useEffect, useState } from 'react/cjs/react.development';
import './css/Layout.scss';

function Layout() {

    const [ allRecipes, setAllRecipes] = useState([]); 

    const getRecipes = async () => {
        try {
            const response = await fetch(" http://localhost:3000/recipes");
            const data = await response.json();   
            setAllRecipes(data)
        }catch (error) {
            console.log(error);
        }
    }  
    useEffect(() => {
        getRecipes();        
    }, []);

    const deleteCard = (id) => {
        const filteredRecipe = allRecipes.filter((recipe)=> recipe.id !== id)
        setAllRecipes(filteredRecipe);
    }

    return(
        <div className="container">   
            {allRecipes.map((recipe)=>(
                <Card key={recipe.id} recipe={recipe} deleteCard={deleteCard}/>
            ))}        
        </div>
    )
}

export default Layout;
