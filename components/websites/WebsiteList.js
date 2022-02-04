import WebsiteItem from "./WebsiteItem";
import classes from "./WebsiteList.module.css";

function WebsiteList(props) {
	return (
		<>
			<section className="test">
				<ul className={classes.list}>
					{props.websites.map((website) => (
						<WebsiteItem
							key={website.id}
							id={website.id}
							image={website.image}
							title={website.title}
							address={website.address}
						/>
					))}
				</ul>
			</section>
		</>
	);
}

export default WebsiteList;
