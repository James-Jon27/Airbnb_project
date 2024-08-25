import { useSelector } from "react-redux";
import { MdStars } from "react-icons/md";

export default function Spots() {
	const allSpots = useSelector((state) => state.spots);
	const spotsIterable = Object.values(allSpots);
    const spots = []
	for (const spot of spotsIterable) {
        spots.push(spot)
    }

	return (
		<div>
			<ul>{
                spots.map(({id, city, state, avgStarRating, price, previewImage, name}) => {
                    return (
                        <div key={id}>
                            <img src={previewImage} alt={name} style={{width: "25rem"}}/>
                            <span>
                                <p>{city}, {state}</p>
                                <span>
                                <MdStars /><p>{avgStarRating}</p>
                                </span>
                            </span>
                            <span>{price}/night</span>
                        </div>
                    )
                })
                }</ul>
		</div>
	);
}
