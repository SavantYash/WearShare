import { Route, Routes, useLocation } from "react-router-dom"
import { Welcome } from "./Common/Welcome"
import "./Components/Assests/adminlte.css"
import "./Components/Assests/adminlte.min.css"
import SignUp from "./Common/Signup"
import SignIn from "./Common/Signin"
import { UserSidebar } from "./Components/User/UserSidebar"
import { AddClothes } from "./Components/User/AddClothes"
import { PastDonation } from "./Components/User/PastDonations"
import { useEffect } from "react"
import axios from "axios"
import { NGOSidebar } from "./Components/NGO/NGOSidebar"
import { DonationList } from "./Components/NGO/DonationList"
import { RequestedDonation } from "./Components/User/RequestedDonation"
// import { PastRequest } from "./Components/NGO/PastRequests"

function App() {

  axios.defaults.baseURL = "http://localhost:5000"

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/signin" || location.pathname === "/signup") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);

  return (
    <div
      className={
        location.pathname === "/" || location.pathname === "/signin" || location.pathname === "/signup"
          ? ""
          : "app-wrapper"
      }
    >
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>

        {/* <Route path="" element={<PrivateRoutes />}> */}

        <Route path='/user' element={<UserSidebar />}>
          <Route path='addclothes' element={<AddClothes />} />
          <Route path='pastdonation' element={<PastDonation />} />
          <Route path='requests' element={<RequestedDonation />} />
        </Route>
        
        <Route path='/ngo' element={<NGOSidebar />}>
          <Route path='donationlist' element={<DonationList />} />
          {/* <Route path='pastrequests' element={<PastRequest />} /> */}
        </Route>
        {/* </Route> */}
      </Routes>
    </div>
  )
}

export default App
