import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";

function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [img,setimg]=useState("")

    function handleRegister(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const user = { name: name, email: email, password: password };

        localStorage.setItem("shopnextUser", JSON.stringify(user));

        alert("Registration successful!");

        console.log(user);
        navigate("/login");
    }

    // Google Authentication
    const handlelogin=(res) => {
        console.log(res.credential)
        const result = jwtDecode(res.credential)
        console.log(result)
        setimg(result.image)

        alert(`Login Successfully ${result.name}`)
        navigate("/")
    }

    return (
        <main className="registration-page">
            <div className="registration-blob registration-blob-left" aria-hidden="true" />
            <div className="registration-blob registration-blob-right" aria-hidden="true" />

            <div className="registration-shell">
                <section className="registration-brand-panel">
                    <div className="registration-brand-shape registration-brand-shape-one" aria-hidden="true" />
                    <div className="registration-brand-shape registration-brand-shape-two" aria-hidden="true" />
                    <div className="registration-brand-shape registration-brand-shape-three" aria-hidden="true" />

                    <p className="registration-eyebrow">A little lovely starts here</p>
                    <div className="registration-brand-copy">
                        <p className="registration-kicker">WELCOME TO SHOPNEXT</p>
                        <h2 className="registration-brand-title">Make room for something lovely.</h2>
                        <span className="registration-brand-line" aria-hidden="true" />
                    </div>
                    <p className="registration-subtext">Find your next favorite.</p>
                </section>

                <section className="registration-form-section">
                    <div className="registration-form-card">
                        <div className="registration-header">
                            <p className="registration-top-label">Join the good finds</p>
                            <h1 className="registration-title">Create ShopNext Account</h1>
                            <p className="registration-description">Set up your account and make your next visit yours.</p>
                        </div>

                        <form onSubmit={handleRegister} className="registration-form">
                            <div className="registration-field-group">
                                <label className="registration-label">Name</label>
                                <input className="registration-input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
                            </div>

                            <div className="registration-field-group">
                                <label className="registration-label">Email</label>
                                <input className="registration-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                            </div>

                            <div className="registration-field-group">
                                <label className="registration-label">Password</label>
                                <input className="registration-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
                            </div>

                            <div className="registration-field-group">
                                <label className="registration-label">Confirm Password</label>
                                <input className="registration-input" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm password" required />
                            </div>

                            <button className="registration-button" type="submit">
                                <span className="registration-button-text">Create Account <span className="registration-button-arrow">→</span></span>
                            </button>

                            <div className="registration-google-wrap">
                                <GoogleLogin onSuccess={handlelogin} onError={() => alert("Google sign-in failed. Please try again.")} />
                            </div>

                            <div className="registration-footer">
                                <span className="registration-footer-text">Already have an account? </span>
                                <NavLink to="/login" className="registration-login-link">Login</NavLink>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Register;