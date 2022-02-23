import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./WebsiteItem.module.css";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { increment, decrement } from "../actions";
import Thumbs from "../thumbs/thumbs";

function WebsiteItem(props) {
	const router = useRouter();

	function showDetailsHandler() {
		router.push("/" + props.id);
	}

	// const likes = useSelector((state) => state.likes);
	// const dislikes = useSelector((state) => state.dislikes);
	// const isLogged = useSelector((state) => state.isLogged);
	// const dispatch = useDispatch();

	return (
		<>
			<li className={classes.item}>
				<Card>
					<div className={classes.image}>
						<img src={props.image} alt={props.title} />
					</div>
					<div className={classes.content}>
						<h3>{props.title}</h3>
						<address>{props.address}</address>
					</div>
					<div className={classes.actions}>
						<button onClick={showDetailsHandler}>Show Details</button>
					</div>
				</Card>
			</li>
			<Thumbs />
		</>
	);
}

export default WebsiteItem;
