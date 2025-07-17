"use client";
import './page.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Login = () => {  // Changed from 'login' to 'Login' (capital L)
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push('/user'); 
    };
    
    return (
        <div className="login-bg">
            <div className="login-card">
                <h2 className="login-title">User Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="login-field">
                        <label className="login-label" htmlFor="username">Username</label>
                        <input
                            className="login-input"
                            type="text"
                            id="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="login-field">
                        <label className="login-label" htmlFor="password">Password</label>
                        <input
                            className="login-input"
                            type="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="login-btn" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;  // Changed to match the component name