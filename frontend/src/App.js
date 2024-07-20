import { createContext } from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Header from './components/Home/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home/Home';
import SignInForm from './components/Login/LoginMain/SignInForm';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AppointMent from './components/AppointMent/AppointMent/AppointMent';
import AllPatients from './components/AppointMent/AllPatients/AllPatients';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor';
import DoctorList from './components/Dashboard/DoctorList/DoctorList';
import AddReview from './components/Dashboard/My Review/AddReview';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Contact from './components/Home/Contact/Contact';
import Blog from './components/Home/Blog/Blog';
import AddService from './components/Dashboard/Services/AddService';
import { setAuthToken } from './helper/axios';
import Layout from './Layout';
import Services from './components/Home/Services/Services';
import ServicesList from './components/Dashboard/Services/ServicesList';
import WebLayout from './Layout/WebLayout'
import About from './components/Home/About/About';
import EnquiryList from './components/Dashboard/Enquiry/enquiryList';


// import PageNotFound from './components/Shared/PageNotFound/PageNotFound.jsx';
// import PreLoad from './components/Shared/Preload/PreLoad';

// const Home = lazy(() => import('./components/Home/Home/Home'))

export const UserContext = createContext();

if(localStorage.token){
  
  setAuthToken(localStorage.token);
}
const router = createBrowserRouter([
  { path: '/', element: <WebLayout><Home/></WebLayout> },
  { path: '/sign-in', element: <SignInForm page={false}/> },
  { path: '/sign-up', element: <SignInForm page={true}/> },
  { path: '/dashboard', element: <Layout><Dashboard /></Layout> },
  { path: '/patients', element: <Layout><AllPatients /></Layout> },
  { path: '/addDoctor', element: <AddDoctor /> },
  { path: '/services', element: <Layout><ServicesList /></Layout> },
  { path: '/enquiry', element: <Layout><EnquiryList /></Layout> },
  { path: '/doctors', element: <DoctorList /> },
  { path: '/auth/review', element: <AddReview /> },
  { path:'/contact',element:<WebLayout><Contact/></WebLayout>},
  { path:'/blog',element:<WebLayout><Blog/></WebLayout>},
  { path:'/about',element:<WebLayout><About/></WebLayout>},
  {
    path: '/appointment',
    element: <PrivateRoute><AppointMent/></PrivateRoute>
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    // <Suspense fallback={<PreLoad />}>
    // <Route exact path="*">
    // <PageNotFound />
  );
}
export default App;
