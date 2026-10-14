import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        const storedUser = localStorage.getItem("shopnextUser");

        if (!storedUser) {
            alert("No user found. Please register first.");
            return;
        }

        const validUser = JSON.parse(storedUser);

        if (validUser.email === email && validUser.password === password) {
            alert("Login successful!");
            navigate("/");
        } else {
            alert("Invalid email or password.");
        }
    }
    function handleLogout() {
        localStorage.removeItem("shopnextUser");
        alert("Logged out successfully!");
        navigate("/")
    }

    return (
        <main className="login-page">
            <div className="login-blob login-blob-left" aria-hidden="true" />
            <div className="login-blob login-blob-right" aria-hidden="true" />

            <div className="login-shell">
                <section className="login-brand-panel">
                    <div className="login-brand-shape login-brand-shape-one" aria-hidden="true" />
                    <div className="login-brand-shape login-brand-shape-two" aria-hidden="true" />
                    <div className="login-brand-shape login-brand-shape-three" aria-hidden="true" />

                    <p className="login-eyebrow">Lovely to see you again</p>
                    <div className="login-brand-copy">
                        <p className="login-kicker">WELCOME BACK</p>
                        <h2 className="login-brand-title">Your next favorite is waiting.</h2>
                        <span className="login-brand-line" aria-hidden="true" />
                    </div>
                    <p className="login-subtext">Good things, right where you left them.</p>
                </section>

                <section className="login-form-section">
                    <div className="login-form-card">
                        <div className="login-header">
                            <p className="login-top-label">Your ShopNext account</p>
                            <h1 className="login-title">Login to ShopNext</h1>
                            <p className="login-description">Sign in and pick up where you left off.</p>
                        </div>

                        <form onSubmit={handleLogin} className="login-form">
                            <div className="login-field-group">
                                <label className="login-label">Email</label>
                                <input className="login-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                            </div>

                            <div className="login-field-group">
                                <label className="login-label">Password</label>
                                <input className="login-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                            </div>

                            <button className="login-button" type="submit">
                                <span className="login-button-text">Login <span className="login-button-arrow">→</span></span>
                            </button>

                            <div>
                                <button className="login-logout-button" type="button" onClick={handleLogout}>Logout</button>
                            </div>
                            <div className="login-footer">
                                <span className="login-footer-text">Don&apos;t have an account? </span>
                                <NavLink to="/register" className="login-register-link">Register</NavLink>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Login;