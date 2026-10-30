import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "../context/ToastContext";

const Login = () => {
    const toast = useToast();
    const navigate = useNavigate();
    
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        const trimmedEmail = form.email.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!trimmedEmail) {
            newErrors.email = "Email is required.";
        } else if (!emailRegex.test(trimmedEmail)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!form.password) {
            newErrors.password = "Password is required.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        const payload = {
            email: form.email.trim().toLowerCase(),
            password: form.password
        };

        setLoading(true);

        try {
            const response = await axios.post("http://localhost:5001/api/auth/login", payload, {
                withCredentials: true
            });
            
            if (!response) {
                toast.error("Service Down. Check After SomeTime");
                setLoading(false);
                return;
            }
            
            toast.success("Welcome back! Redirecting...");
            setTimeout(() => {
                navigate("/workspace");
            }, 2000);
            
        } catch (err) {
            const status = err?.response?.status;
            if (status === 401 || status === 404) {
                setErrors((prev) => ({ ...prev, password: "Invalid email or password." }));
            } else {
                toast.error(err?.response?.data?.message || err?.message || "Something Went Wrong");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full min-h-screen bg-white flex items-center justify-center px-4 py-2 relative overflow-hidden">
            <style>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) rotate(-5deg); }
                    50% { transform: translateY(-30px) rotate(5deg); }
                }
                @keyframes float-fast {
                    0%, 100% { transform: translateY(0px) rotate(5deg) scale(1); }
                    50% { transform: translateY(-50px) rotate(-10deg) scale(1.05); }
                }
            `}</style>

            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-black"></div>

            <div className="relative z-10 w-full max-w-lg">
                <div className="bg-white rounded shadow-lg border border-zinc-100 p-10 flex flex-col space-y-6">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight">Welcome back</h2>
                        <p className="text-sm text-zinc-500">Sign in to your account.</p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 gap-4">
                            
                            <div className="space-y-1.5">
                                <label htmlFor="email" className="text-sm font-medium text-zinc-700">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="name@company.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    disabled={loading}
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                    className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all placeholder:text-zinc-400 text-black bg-white ${errors.email ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500' : 'border-zinc-300 focus:ring-zinc-900/10 focus:border-zinc-900'}`}
                                />
                                {errors.email && (
                                    <p id="email-error" role="alert" className="text-xs text-red-500 font-medium mt-1">{errors.email}</p>
                                )}
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex justify-between items-center">
                                    <label htmlFor="password" className="text-sm font-medium text-zinc-700">Password</label>
                                    <Link to="/forgot-password" className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Forgot password?</Link>
                                </div>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter your password"
                                        value={form.password}
                                        onChange={handleChange}
                                        autoComplete="current-password"
                                        disabled={loading}
                                        aria-invalid={!!errors.password}
                                        aria-describedby={errors.password ? "password-error" : undefined}
                                        className={`w-full border rounded-lg px-3 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 transition-all placeholder:text-zinc-400 text-black bg-white ${errors.password ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500' : 'border-zinc-300 focus:ring-zinc-900/10 focus:border-zinc-900'}`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 focus:outline-none transition-colors"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                                <line x1="1" y1="1" x2="23" y2="23"></line>
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p id="password-error" role="alert" className="text-xs text-red-500 font-medium mt-1">{errors.password}</p>
                                )}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2 mt-2 rounded-lg bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 active:scale-[0.98] transition-all disabled:bg-zinc-400 flex justify-center items-center gap-2"
                        >
                            {loading && (
                                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            )}
                            {loading ? "Signing in..." : "Sign in"}
                        </button>


                    </form>

                    <div className="flex justify-between items-center text-xs text-zinc-500 pt-4 border-t border-zinc-100">
                        <span>Don't have an account?</span>
                        <Link to="/signup" className="hover:text-zinc-900 font-medium transition-colors">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;