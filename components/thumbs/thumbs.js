import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increment, decrement } from "../actions";

const Thumbs = () => {
	const likes = useSelector((state) => state.likes);
	const dislikes = useSelector((state) => state.dislikes);
	// const isLogged = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();

	return (
		<>
			<div>
				<section className="like-section">
					<div className="increment">
						<h2 onClick={() => dispatch(increment())}>👍 {likes}</h2>
					</div>
					<div className="decrement">
						<h2 onClick={() => dispatch(decrement())}>👎 {dislikes}</h2>
					</div>
				</section>
			</div>
		</>
	);
};

export default Thumbs;
