import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneSpot } from "../../store/spots";

export default function SpotDetails() {
	const dispatch = useDispatch();
	const { id } = useParams();
    let spot = useSelector((state) => state.spots);
    spot = spot.detail[0];
	useEffect(() => {
		dispatch(getOneSpot(id));
	}, [dispatch, id]);

    console.log(spot.SpotImages, "SPOT")
	return (
        <div>
            {/* <div>{spot.SpotImages[1]}</div> */}
			<h1>Details</h1>
			{/* <img src={spot.previewImage}/> */}
		</div>
	);
}
