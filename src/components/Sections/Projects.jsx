// health services section trackers included

import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
import { Link } from "react-router-dom";

export default function Projects() {
	return (
		<Wrapper id="projects">
			<div className="whiteBg">
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">Health Services for you</h1>
						<p className="font13">
							Period days are never easy. So here's our simple Healthcare to
							make them less worser
							<br />
							Share your location and get to the nearest doctor's clinic.
						</p>
					</HeaderInfo>
					<div className="row textCenter">
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<Link to={"/track"}>
								<ProjectBox
									img={
										"https://img.freepik.com/free-vector/creative-menstrual-calendar-concept-illustrated_23-2148662282.jpg?w=740&t=st=1673051551~exp=1673052151~hmac=cc8dc3c63a9c7145f0fb7e473fb5ccd6ecd8692f5a841a58c8dedd9a689d9db7"
									}
									title="Period Tracker"
									text="Get an complete details of your period cycles, mood swings ,diet chart and sleep cycle "
								/>
							</Link>
						</div>
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<Link to={"/bmi"}>
								<ProjectBox
									img={
										"https://img.freepik.com/free-vector/messaging-fun-concept-illustration_114360-1563.jpg?t=st=1673089953~exp=1673090553~hmac=bc161ad549e1ec1594195cc081b58200698d41165d0ab281e5b3a4c2e0262395"
									}
									title="BMI Calculator"
									text="Get detailed BMI results and insights for health management."
								/>
							</Link>
						</div>
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<Link to={"/bmr"}>
								<ProjectBox
									img={
										"https://img.freepik.com/free-vector/messaging-fun-concept-illustration_114360-1563.jpg?t=st=1673089953~exp=1673090553~hmac=bc161ad549e1ec1594195cc081b58200698d41165d0ab281e5b3a4c2e0262395"
									}
									title="BMR Calculator"
									text="Get detailed BMR results and insights for health management."
								/>
							</Link>
						</div>
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<a href="https://saheli-ai.vercel.app/" target="_blank" rel="noopener noreferrer">
								<ProjectBox
									img={
										"https://img.freepik.com/free-vector/ai-assistant_23-2148658416.jpg?w=740&t=st=1673089781~exp=1673090381~hmac=43f454c7e68293446a5009ad018440a2ca8d45114ccc712873fd84b75570af43"
									}
									title="AI Assistant"
									text="Talk to our AI assistant for support and information"
								/>
							</a>
						</div>

					</div>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
`;
const HeaderInfo = styled.div`
	@media (max-width: 860px) {
		text-align: center;
	}
`;
const Advertising = styled.div`
	padding: 100px 0;
	margin: 100px 0;
	position: relative;
	@media (max-width: 1160px) {
		padding: 60px 0 40px 0;
	}
	@media (max-width: 860px) {
		flex-direction: column;
		padding: 0 0 30px 0;
		margin: 80px 0 0px 0;
	}
`;
const ButtonsRow = styled.div`
	@media (max-width: 860px) {
		justify-content: space-between;
	}
`;
const AddLeft = styled.div`
	position: relative;
	width: 50%;
	p {
		max-width: 475px;
	}
	@media (max-width: 860px) {
		width: 80%;
		order: 2;
		text-align: center;
		h2 {
			line-height: 3rem;
			margin: 15px 0;
		}
		p {
			margin: 0 auto;
		}
	}
`;
const AddRight = styled.div`
	width: 50%;
	@media (max-width: 860px) {
		width: 80%;
		order: 2;
	}
`;
const AddLeftInner = styled.div`
	width: 100%;
	position: absolute;
	top: -300px;
	left: 0;
	@media (max-width: 1190px) {
		top: -250px;
	}
	@media (max-width: 920px) {
		top: -200px;
	}
	@media (max-width: 860px) {
		order: 1;
		position: relative;
		top: -60px;
		left: 0;
	}
`;
const ImgWrapper = styled.div`
	width: 100%;
	padding: 0 15%;
	img {
		width: 100%;
		height: auto;
	}
	@media (max-width: 400px) {
		padding: 0;
	}
`;
