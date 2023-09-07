import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="main-wrapper">
      <div className="account-content">
        <Link to="/adminlogin" className="btn btn-primary apply-btn">
          Admin Girişi
        </Link>
        <div className="container">
          <div className="account-logo">
            <Link to="#">
              <img
                src="src/assets/img/logo2.png"
                alt="Dreamguy's Technologies"
              />
            </Link>
          </div>
          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Giriş Yap</h3>
              <p className="account-subtitle">Sisteme Erişin</p>
              <form action="index.html">
                <div className="form-group">
                  <label>Email Adresi</label>
                  <input className="form-control" type="text" name="email" />
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col">
                      <label>Şifre</label>
                    </div>
                    <div className="col-auto">
                      <Link className="text-muted" to="forgot-password.html">
                        Şifremi Unuttum?
                      </Link>
                    </div>
                  </div>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                  />
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-primary account-btn" type="submit">
                    Giriş Yap
                  </button>
                </div>
                <div className="account-footer">
                  <p>
                    Henüz bir hesabınız yok mu?{" "}
                    <Link to="/register">Kayıt Ol</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
