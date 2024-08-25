import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as spotActions from "../../store/spots"

export default function SpotDetails() {
    const dispatch = useDispatch();
	const { id } = useParams();
	useEffect(() => {
        dispatch(spotActions.getOneSpot(id));
	}, [dispatch, id]);
    const spot = useSelector((state) => state.spots.detail);
    const {name, city, state, country, SpotImages, Owner, description, price, avgStarRating, numReviews} = spot





	return (
        <div>
            <h1>{name}</h1>
            <span>{city}, {state}, {country}</span>
            <div className=""></div>
            {/* <Reviews /> */}
		</div>
	);
}
