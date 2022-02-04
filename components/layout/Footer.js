import React from "react";

const Footer = () => {
	return (
		<>
			<footer>
				<div className="top_header">
					<section className="address">
						<i>{/* <FaMapMarkedAlt /> */}</i>
						<span> 8354 Six Forks Road Suite 204 Raleigh, NC 27615</span>
					</section>
					<section className="phonenumber">
						<i>{/* <FaPhoneAlt /> */}</i>
						<span>(1) 844-932-6647</span>
					</section>
					<section className="email">
						<i>{/* <FaMailBulk /> */}</i>
						<span>letstalk@webonise.com</span>
					</section>
				</div>
				<span className="border-shape"></span>
				<div className="bottom_content">
					<section>
						<a href="https://www.facebook.com/" target="_blank">
							<i>{/* <FaFacebookF /> */}</i>
						</a>
						<a href="https://twitter.com/" target="_blank">
							<i>{/* <FaTwitterSquare /> */}</i>
						</a>
						<a href="https://www.blogger.com/about/" target="_blank">
							<i>{/* <FaBloggerB /> */}</i>
						</a>
					</section>
					<section>
						<a href="/">Home</a>
						<a href="/new-website">Add New Site</a>
					</section>
					<div className="copyright">
						Copyright © 2022 Webonise - All rights reserved
					</div>
				</div>
			</footer>
		</>
	);
};
export default Footer;
