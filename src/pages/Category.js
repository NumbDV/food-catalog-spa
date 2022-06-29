import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {getFilteredCategory} from "../api"
import {Preloader} from '../components/Preloader'
import {MealList} from '../components/MealList'
import {useNavigate} from 'react-router-dom'

function Category() {
	const {name} = useParams()
	const [meals, setMeals] = useState([])
	let navigate = useNavigate();


	function goBack() {
		navigate(-1)
	}
	useEffect(() => {
		getFilteredCategory(name)
		.then(data => setMeals(data.meals));
	}, [name])

	return <>
			<button onClick={goBack} className="btn">Go back</button>
			{!meals.length ? <Preloader/> : <MealList meals={meals}/>}
		</>
}

export {Category}