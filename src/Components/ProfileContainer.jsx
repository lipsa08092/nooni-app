import React from "react";
import { useUser } from "../Eslint/UserContext";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaUser } from "react-icons/fa";

function ProfileContainer() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 item-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-md p-10 max-w-md md:ml-96 mt-20 text-center space-y-6 ">
        <FaUser
          className="text-3xl mx-auto"
          onDoubleClick={() => navigate("/")}
        />
        <h2 className="text-3xl font-semibold text-gray-800">
          {user ? `Hello, ${user.name}` : "No user logged in "}
        </h2>
        {user ? (
          <div>
            <p className="text-gray-800">You are successfully logged in .</p>
            <button
              className="mt-4 inline-flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-lg transition"
              onClick={handleLogout}
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        ) : (
          <button
            className="mt-4 bg-blue-700 hover:bg-blue-800 text-white px-6 py-2"
            onClick={() => navigate("/")}
          >
            Go to Home
          </button>
        )}
      </div>
    </div>
  );
}

export default ProfileContainer;
