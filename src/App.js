import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Screens
import Landing from "./screens/Landing.jsx";
import Dashboard from "./components/dashboard/Dashboard.js";
import TrackPeriod from "./components/Period_Cycle/Tracker_Period.jsx";
import Cbmi from "./components/Period_Cycle/C_bmi.jsx";
import Cbmr from "./components/Period_Cycle/C_bmr.jsx";
import TrackPeriod2 from "./components/Period_Cycle/TrackPeriod2";
import UserForm from "./components/Appointment/UserForm.js";
import BlogForm from "./components/Appointment/Blog_Form.js";
import Blog from "./components/Blog/Blog.jsx";
import BlogShow from "./components/BlogShow/BlogShow.jsx";
import DashboardBlogCard from "./components/Sections/DashboardBlogCard.jsx";
import NearClinic from "./components/nearestClinic/nearestClinic.jsx";
import NearHospital from "./components/nearestHospital/nearestHospital.jsx";
import Account from "./components/dashboard/Account.jsx"
import Contact from "./components/Sections/Contact.jsx";
export default function App() {
	return (
		<>
			<Helmet>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
					rel="stylesheet"
				/>
				<title>Sakhi | Your Partner in Wellness</title>
			</Helmet>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/track" element={<TrackPeriod />} />
					<Route path="/bmi" element={<Cbmi />} />
					<Route path="/bmr" element={<Cbmr />} />
					<Route path="/account" element={<Account />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/blog/:id" element={<BlogShow />} />
					<Route path="/dashboard/track" element={<TrackPeriod2 />} />
					<Route path="/blogform" element={<BlogForm />} />
					<Route path="/dash" element={<DashboardBlogCard />} />
					<Route path="/nearclinic" element={<NearClinic />} />
					<Route path="/nearhospital" element={<NearHospital />} />

				</Routes>
			</BrowserRouter>
		</>
	);
}
