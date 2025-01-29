import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { AuthContext } from '../App';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Tracks the open/close state of the sidebar
  const { logout,user} = useContext(AuthContext);
  // This function toggles the sidebar when hamburger/close icon is clicked
  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar's visibility
  };

  // Close the sidebar when clicking outside of it
  const handleClickOutside = (event) => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar && !sidebar.contains(event.target)) {
      setIsOpen(false); // Close the sidebar if click is outside
    }
  };

  function handleLogout(){
    setIsOpen(false)
    logout();
  }

  function handleClick(){
    setIsOpen(false)
  }

  useEffect(() => {
    // Attach the event listener to the document when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Sidebar (toggle visibility based on 'isOpen' state) */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Mobile toggle button (Hamburger icon / Close icon) */}
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          {isOpen ? "❌" : "☰"} {/* Close icon when open, Hamburger icon when closed */}
        </div>

        {/* Sidebar menu items */}
        <ul className="menu" onClick={handleClick}>
          <li>
            <Link to="/" className="sidebar-link">Home</Link>
          </li>
          <li>
            <Link to="/profile" className="sidebar-link">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard" className="sidebar-link">Analytics</Link>
          </li>
          {user && <li>
            <Link to="/login" onClick={handleLogout} className="sidebar-link">Logout</Link>
          </li>}
        </ul>
      </div>

      {/* Overlay to close sidebar when clicked outside */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Sidebar;
