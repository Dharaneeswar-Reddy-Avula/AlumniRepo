import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import GetInvolved from "./Pages/GetInvolved/GetInvolved";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Header from "./shared/header";
import Footer from "./shared/Footer/Footer";
import EventsPage from "./Pages/Events/EventsPage";
import Contact from "./Pages/Contact/Contact";
import Login from "./Components/Login";
import Alumni_Directory from "./Pages/Alumni/Alumni_Directory/Alumni_Directory";
import Error from "./Pages/Error/Error404";
// import Register from "./Components/Register";
import Notifications from "./Components/Notifications";
import AlumniAssociation from "./Pages/About/AlumniAssociation/AlumniAssociation";
import Chapter from "./Pages/Events/Chapter/Chapter";
import Alumni_News from "./Pages/updates/alumni_news/Alumni_News";
import StudentVolunteers from "./Pages/About/StudentVolunteers/StudentVolunteers";
import WebTeam from "./Pages/About/WebTeam/WebTeam";
import CoreTeam from "./Pages/CoreTeam/CoreTeam"
import Gallery from "./Pages/About/Gallery/Gallery";
import EventCalender from "./Pages/Events/EventCalender/EventCalender";
import Reunion from "./Pages/Events/Reunion/Reunion";
import Sponserships from "./Pages/Events/Sponserships/Sponserships";
import MentorShip from "./Pages/Alumni/MentorShip/MentorShip";
import Workshops from "./Pages/Alumni/Workshops/Workshops";
import AlumniTalks from "./Pages/Alumni/AlumniTalks/AlumniTalks";
import RequestLost from "./Pages/Alumni//RequestLost/RequestLost";
import SmartId from "./Pages/Alumni/SmartId/SmartId";
import NewsLetter from "./Pages/updates/NewsLetter/NewsLetter";
import Awards from "./Pages/updates/Awards/Awards";
import Donate from "./Pages/GetInvolved/Donate/Donate";
import Contribute from "./Pages/GetInvolved/Contribute/Contribute";
import Jobs from "./Pages/updates/Jobs/Jobs";
import Donation from "./Pages/Donation/Donation";
import ScrollToTop from "./Components/ScrollToTop";
import Business from "./Components/Business";
import Sponsership from "./Components/Sponsership";
import Secondsponcer from "./Components/Secondsponcer";
import Eve from "./Components/Eve";
import Students from "./Components/Students";
import Clg from "./Components/Clg";
import Countries from "./Components/Countries";
import Hyderabad from "./Components/Hyderabad";
import GetInTouch from "./Components/GetInTouch";
import CandidateDetails from "./Components/CandidateDetails";
import Twogallery from "./Pages/About/Gallery/Twogallery";
import Collagedays from "./Pages/About/Gallery/Collagedays";
import Festival from "./Pages/About/Gallery/Festival";
import Video from "./Pages/About/Gallery/Video";
import './App.css'
const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/getinvolved" element={<GetInvolved />} />
      <Route path="/events" element={<EventsPage />} /> */}
        {/* <Route path="/aboutus" element={<About />} /> */}
        <Route path="/Contact" element={<Contact />} />
        {/* <Route path='/login' element={<Login/>}/> */}
        {/* <Route path='/register' element={<Register/>}/> */}
        <Route path="/donation" element={<Donation />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/alumni_directory" element={<Alumni_Directory />} />
        <Route path="/chapters" element={<Chapter />} />
        <Route path="/alumni_news" element={<Alumni_News />} />
        <Route path="/alumni_association" element={<AlumniAssociation />} />
        <Route path="/core_team" element={<CoreTeam />} />
        <Route path="/student_volunteers" element={<StudentVolunteers />} />
        <Route path="/web_team" element={<WebTeam />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/event_calender" element={<EventCalender />} />
        <Route path="/reunion" element={<Reunion />} />
        <Route path="/sponserships" element={<Sponserships />} />
        <Route path="/hyderabad" element={<Hyderabad />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/mentor_ship" element={<MentorShip />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/alumni_talks" element={<AlumniTalks />} />
        <Route path="/smartid" element={<SmartId />} />
        <Route path="/news_letter" element={<NewsLetter />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/requestLost" element={<RequestLost />} />

        <Route path="/jobs" element={<Jobs />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/business" element={<Business />} />
        <Route path="/sponsership" element={<Sponsership />} />
        <Route path="/secondsponcer" element={<Secondsponcer />} />
        <Route path="/Clg" element={<Clg />} />
        <Route path="/Eve" element={<Eve />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/getintouch" element={<GetInTouch />} />
        <Route path="/candidatedetails" element={<CandidateDetails />} />
        <Route path="*" element={<Error />} />
        <Route path="/gallery/:id" element={<Twogallery />} />
        <Route path="/Collagedays" element={<Collagedays/>} />
        <Route path="/Festival" element={<Festival />} />
        <Route path="/Video" element={<Video />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
