import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import ProjectSection from "./pages/ProjectSection";
import Contact from "./pages/Contacts";
import Bookings from "./pages/RoomBooking";
import Dashboard_booking from "./pages/Dashboard_booking";
import UserDashboard_booking from "./pages/UserDashboard_booking";
import History from "./pages/History";
import UserHistoryPage from "./pages/UserHistoryPage";
import Requests from "./pages/Requests";
import Profile from "./pages/Profile";
import Halls from "./pages/Halls";
import Slots from "./pages/Slots";
import Days from "./pages/Days";
import Members from "./pages/Members";
import OpenHouse from "./pages/OpenHouse";
import Inventory from "./pages/Inventory";
import ESummit from "./pages/ESummit";
import Transfinitte from "./pages/Transfinitte";
import OpenDay from "./pages/OpenDay";
import Spider2024 from "./components/ProjectList/Spider/Spider2024";
import Spider2023 from "./components/ProjectList/Spider/Spider2023";
import Spider2022 from "./components/ProjectList/Spider/Spider2022";
import Psi2023 from "./components/ProjectList/onefiles/Psi2023";
import Fhl2023 from "./components/ProjectList/onefiles/Fhl2023";
import DB2023 from "./components/ProjectList/onefiles/DB2023";
import RMI2023 from "./components/ProjectList/RMI/RMI2023";
import RMI2022 from "./components/ProjectList/RMI/RMI2022";
import RMI2021 from "./components/ProjectList/RMI/RMI2021";
import RMI2020 from "./components/ProjectList/RMI/RMI2020";
import ThreD2023 from "./components/ProjectList/onefiles/ThreD2023";
import Delta2024 from "./components/ProjectList/DeltaClub/Delta2024";
import Delta2023 from "./components/ProjectList/DeltaClub/Delta2023";
import Delta2022 from "./components/ProjectList/DeltaClub/Delta2022";
import Delta2021 from "./components/ProjectList/DeltaClub/Delta2021";
import Ecell2023 from "./components/ProjectList/onefiles/Ecell2023";
import DC2024 from "./components/ProjectList/DC/DC2024";
import DC2023 from "./components/ProjectList/DC/DC2023";
import DC2022 from "./components/ProjectList/DC/DC2022";
import One802023 from "./components/ProjectList/onefiles/One802023";
import EVER2023 from "./components/ProjectList/onefiles/Ever2023";
import { NavMobile } from "./components/nav-mobile";
const App = () => {
  return (
    <>
      <Routes>
        {/* The below given routes belong to admin*/}
        <Route path="/admindashboard" element={<Dashboard_booking />} />
        <Route path="/admindashboard/requests" element={<Requests />} />
        <Route path="/admindashboard/history" element={<History />} />
        <Route path="/admindashboard/profile" element={<Profile />} />
        {/* The below given routes belong to user*/}
        <Route path="/userdashboard" element={<UserDashboard_booking />}/>
        <Route path="/userdashboard/history" element={<UserHistoryPage/>}/>
        <Route path="/userdashboard/halls" element={<Halls/>} />
        <Route path="/userdashboard/slots" element={<Slots/>} />
        <Route path="/userdashboard/days" element={<Days/>} />
        <Route path="/userdashboard/bookingform" element={<Members/>}/>
      </Routes>
      {/*the above routes kept separately bcz they require no navbar*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/project" element={<ProjectSection />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/roombook" element={<Bookings />} />
        <Route path="/open-house" element={<OpenHouse />} />
        <Route path="/e-summit" element={<ESummit />} />
        <Route path="/transfinitte" element={<Transfinitte />} />
        <Route path="/open-day" element={<OpenDay />} />
        <Route path="/Spider2024" element={<Spider2024 />} />
        <Route path="/Spider2023" element={<Spider2023 />} />
        <Route path="/Spider2022" element={<Spider2022 />} />
        <Route path="/Psi2023" element={<Psi2023 />} />
        <Route path="/Fhl2023" element={<Fhl2023 />} />
        <Route path="/DB2023" element={<DB2023 />} />
        <Route path="/RMI2023" element={<RMI2023 />} />
        <Route path="/RMI2022" element={<RMI2022 />} />
        <Route path="/RMI2021" element={<RMI2021 />} />
        <Route path="/RMI2020" element={<RMI2020 />} />
        <Route path="/3D2023" element={<ThreD2023 />} />
        <Route path="/Delta2024" element={<Delta2024 />} />
        <Route path="/Delta2023" element={<Delta2023 />} />
        <Route path="/Delta2022" element={<Delta2022 />} />
        <Route path="/Delta2021" element={<Delta2021 />} />
        <Route path="/Ecell2023" element={<Ecell2023 />} />
        <Route path="/DC2024" element={<DC2024 />} />
        <Route path="/DC2023" element={<DC2023 />} />
        <Route path="/DC2022" element={<DC2022 />} />
        <Route path="/One802023" element={<One802023 />} />
        <Route path="/EVER2023" element={<EVER2023 />} />
      </Routes>
    </>
  );
};

export default App;