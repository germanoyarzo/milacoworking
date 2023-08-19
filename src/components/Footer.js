import React from "react";
import styled  from "styled-components"
import {
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import MapFooter from './MapFooter';
const FooterContainer =styled.div`{
	background-color: #333;
	border-top:2px solid white;
	position: relative;
	width: 100%;
	bottom: 0;
	color: white;
	font-size: 25px;
   }
   `
const Footer = () => {
return (
	<section id="footer">
	<FooterContainer>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
		<MapFooter />
	</FooterContainer>
	</section>
);
};
export default Footer;
