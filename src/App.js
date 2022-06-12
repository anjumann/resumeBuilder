import React, { useContext } from 'react';
import './index.css';
import Home from './views/landing/Home';
import { Routes, Route, Navigate } from "react-router-dom";
import Events from './views/event/index';
import Team from './Components/Team';
import Error from './Components/Error';
import Login from './views/login/Login';
import Profile from './views/profile/Profile';
import { AuthContext, } from './context/AuthContext'
import GetInfo from './views/profile/getInfo';
import Admin from './views/dashboard/Admin';
import Dashboard from './views/dashboard/Dashboard';
import Table from './views/dashboard/Tables';
import Form from './views/login/Form'
import ResetPassword from './views/login/ResetPassword'
import ImportingDb from './scripts/ImportingDb';
import NewRegister from './views/registration/NewRegister';
import Template from './views/templates/Template';
import ResumePreview from './views/templates/ResumePreview';
import TemplateForm from './views/templates/TemplateForm';
import { RecoilRoot } from 'recoil'
import Register from './views/login/Register';

function App() {


  const { currentUser } = useContext(AuthContext)
  // console.log(currentUser);
  const RequireAuth = ({ children }) => {
    return (currentUser ? children : <Navigate to="/auth/signin" />)
  }
  const NotRequireAuth = ({ children }) => {
    return (!currentUser ? children : <Navigate to="/profile" />)
  }
  const InfoAuth = ({ children }) => {
    return (currentUser ? children : <Navigate to="/auth/signup" />)

  }


  return (
    <div className="App bg-[#eff0f3]">
      {/* <ScrollToTop> */}


      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/events" element={<Events />}></Route>
          <Route exact path="/gallery" element={<Events />}></Route>
          <Route exact path="/team" element={<Team />}></Route>
          <Route exact path="/auth" element={<NotRequireAuth> <Login /> </NotRequireAuth>}>
            <Route path="signin" element={<Form />} />
            <Route path="resetpassword" element={<ResetPassword />} />
            <Route path="signup" element={<Register />} />

          </Route>
          <Route exact path="/profile" element={<RequireAuth> <Profile /> </RequireAuth>} ></Route>

          <Route exact path="/profile/getinfo" element={<InfoAuth> <GetInfo /> </InfoAuth>}></Route>
          <Route path="*" element={<Error />}></Route>
          {/* <Route path="/scripts" element={<ImportingDb />}></Route> */}

          <Route exact path="/template" element={<RequireAuth> <Template /> </RequireAuth>} ></Route>
          <Route exact path="/resumePreview" element={<RequireAuth> <TemplateForm />  </RequireAuth>} ></Route>

          <Route exact path="/joinus" element={<NewRegister />}></Route>

          {/* dashboard */}
          <Route exact path="/admin" element={<RequireAuth> <Admin /> </RequireAuth>}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="tables" element={<Table />} />
          </Route>
        </Routes>
      </RecoilRoot>
      {/* <Footer /> */}
      {/* </ScrollToTop> */}

    </div>
  );
}

export default App;
