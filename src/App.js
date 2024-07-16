import './App.css';
import LoginSignUp from './Components/LoginSignUp';
import Quiz from './Components/Quiz';
import RecoverAcc from './Components/RecoverAcc';
import SubmitOTP from './Components/SubmitOTP';
import { Routes, Route } from "react-router-dom";
import NewPassword from './Components/NewPassword';
import SignupForm from './Components/SignUpForm';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginSignUp />} />
        <Route path="/SignUpForm" element={<SignupForm />} />
        <Route path="/RecoverAcc" element={<RecoverAcc />} />
        <Route path="/SubmitOTP" element={<SubmitOTP />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/NewPassword" element={<NewPassword />} />
      </Routes>
      {/* <NewPassword/> */}
    </>
  );
}

export default App;
