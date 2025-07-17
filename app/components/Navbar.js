"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        background: "linear-gradient(90deg, #2563eb 60%, #0050f1ff 100%)",
        padding: "0.8rem 0",
        marginBottom: 36,
        boxShadow: "0 2px 8px rgba(37,99,235,0.10)",
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <span
        onClick={() => window.history.back()}
        style={{
          cursor: "pointer",
          color: "#fff",
          fontSize: "1.6rem",
          fontWeight: 700,
          marginLeft: 24,
          marginRight: 36,
          userSelect: "none",
        }}
        title="Back"
      >
        
      </span>
      <div style={{ display: "flex", gap: "2.5rem" }}>
        <Link
          href="/"
          style={{
            color: "#fff",
            fontWeight: 700,
            fontSize: "1.15rem",
            letterSpacing: 1,
            textDecoration: "none"
          }}
        >
          Home
        </Link>
        <Link
          href="/userlogin"
          style={{
            color: "#fff",
            fontWeight: 500,
            fontSize: "1.08rem",
            textDecoration: "none",
          }}
        >
          User Login
        </Link>
        <Link
          href="/admin-login"
          style={{
            color: "#fff",
            fontWeight: 500,
            fontSize: "1.08rem",
            textDecoration: "none",
          }}
        >
          Admin Login
        </Link>
      </div>
    </nav>
  );
}
