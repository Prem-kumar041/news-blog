"use client";
import './page.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const login = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push('/admin');
    };

    return (
        <div className="login-bg">
            <div className="login-card">
                <h2 className="login-title">Admin Login</h2>
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
export default login;