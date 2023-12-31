
import './App.css'
import { useEffect, useState } from 'react'
import { MemoryRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import Search from './Search'
import Food from './Food'
import Api from './Api.js'

export default function Single() {
    const [count, setCount] = useState(0)
    const [recipe, setRecipe] = useState({})
    const [search, setSearch] = useState('')
    let {recipeId} = useParams();
    // recipes = [
    //   {
    //     name: 'Pizza',
    //     image: 'data:image/jpeg;base64,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',
    //     description: 'A Food By Italy, and have many followers,A Food By Italy, and have many followers,A Food By Italy, and have many followers,A Food By Italy, and have many followers, ',
    //   }
    // ]

    function handleSearch(search) {
        setSearch(search)
    }

    useEffect(() => {
        Api.find(
            data => {
                console.log(recipeId)
                const recipe = data.meals[0]
                console.log(recipe)
                setRecipe({
                    name: recipe.strMeal,
                    description: recipe.strInstructions,
                    image: recipe.strMealThumb,

                    area: recipe.strArea,
                    tags: recipe?.strTags?.split(','),
                    ingredients: Object.entries(recipe).filter(entry => entry[1] && entry[0].startsWith('strIngredient')).map(entry => entry[1]),
                    measures: Object.entries(recipe).filter(entry => entry[1] && entry[0].startsWith('strMeasure')).map(entry => entry[1]),
                })
            },
            {
                i: recipeId,
            }
        )

    }, [search])

    return (
        <div className="flex flex-col gap-7">
            <Food data={recipe} isSingle={1} />
        </div>
    )
}