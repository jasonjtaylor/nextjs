import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
	return (
		<header className={classes.header}>
			<Link href="/">
				<img className="header-image" src="/nextjs.svg" />
			</Link>
			<div className={classes.logo}></div>
			<nav>
				<ul>
					<li>
						<Link href="/">Next.js Sites</Link>
					</li>
					<li>
						<Link href="/new-website">Add New Sites</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
