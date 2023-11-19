import React from "react";
import { useNavigate } from "react-router-dom";

import ZelfNavIcon from "../assets/zelf-icon.png";
import ZelfUserIcon from "../assets/user.svg";

function Layout({ children }) {
  let navigate = useNavigate();
  const isAuthPage =
    window.location.pathname.includes("login") ||
    window.location.pathname.includes("signup");

  const handleClickToHome = () => {
    let path = `/`;
    navigate(path);
  };

  const handleClicktoAuthPage = () => {
    let path = `/login`;
    navigate(path);
  };

  return (
    <div>
      <div className="nav">
        <div onClick={handleClickToHome}>
          <img height="32" width="32" src={ZelfNavIcon} />
        </div>
        {!isAuthPage ? (
          <div onClick={handleClicktoAuthPage}>
            <img height="32" width="32" src={ZelfUserIcon} />
          </div>
        ) : (
          <div style={{ display: "flex" }}>
            <div>
              <button className="buttons-auth">Signin</button>
            </div>
            <div>
              <button className="buttons-auth">Join</button>
            </div>
          </div>
        )}
      </div>
      <div className="body">{children}</div>
      <div className="footer">
        <div className="terms-others">
          <div>Terms and Conditions</div>
          <div>Terms and Conditions</div>
          <div>Terms and Conditions</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
