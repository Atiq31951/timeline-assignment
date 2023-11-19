import React from "react";
import LoginSVG from "../assets/login.png";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect, user } = useAuth0();
  // Here we could do better if got time
  return (
    <div className="auth-page">
      <div className="login-modal">
        <div className="svg">
          <img src={LoginSVG} />
        </div>
        <div className="authorization">
          <div className="register">Register your account</div>
          <div className="repeat-brand ">
            <button>I represent a brand</button>
          </div>
          <div className="continue">
            <button onClick={() => loginWithRedirect()}>Continue</button>
          </div>
          <div className="member">
            Already a member? <span>Sign in</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
