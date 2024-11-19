// Import necessary dependencies and components
"use client";
import React from "react";
import Link from "next/link";
import { AuthContextProvider, useUserAuth } from "./_utils/auth-context"; // Adjust path if necessary

export default function Page() {
  // Use the useUserAuth hook to get the user object and login/logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Function to handle login with GitHub
  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("GitHub sign-in error:", error);
    }
  };

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  // Render the landing page
  return (
    <AuthContextProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        {/* If user is not logged in, show the login button */}
        {!user ? (
          <>
            <h1>Shopping List App</h1>
            <button onClick={handleLogin}>Login with GitHub</button>
          </>
        ) : (
          // If user is logged in, show welcome message, logout button, and shopping list link
          <>
            <h1>Welcome, {user.displayName}</h1>
            <p>Your email: {user.email}</p>
            <p>Your email: {user.uid}</p>
            <button onClick={handleLogout}>Logout</button>
            <br />
            <Link
              href={{
                pathname: "/week-10/shopping-list",
                query: { uid: user.uid },
              }}
            >
              Go to Shopping List
            </Link>
          </>
        )}
      </div>
    </AuthContextProvider>
  );
}
