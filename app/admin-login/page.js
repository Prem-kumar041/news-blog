"use client";
import './page.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const AdminLogin = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Added error state

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Add your actual authentication logic here
            // Example: await authenticateUser(username, password);
            
            // For now, just checking non-empty fields
            if (!username.trim() || !password.trim()) {
                setError('Please enter both username and password');
                return;
            }

            router.push('/admin');
        } catch (err) {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="login-bg">
            <div className="login-card">
                <h2 className="login-title">Admin Login</h2>
                
                {error && <div className="login-error">{error}</div>}
                
                <form onSubmit={handleSubmit}>
                    <div className="login-field">
                        <label className="login-label" htmlFor="username">Username</label>
                        <input
                            className="login-input"
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            minLength={3}
                        />
                    </div>
                    <div className="login-field">
                        <label className="login-label" htmlFor="password">Password</label>
                        <input
                            className="login-input"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                        />
                    </div>
                    <button className="login-btn" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;