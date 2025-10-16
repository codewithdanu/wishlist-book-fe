"use client";

import { useState } from "react";
import Image from "next/image";
import { Bell, Mail, Search, X } from "lucide-react";

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export default function Navbar() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, title: "New Book Added", message: "Laut Bercerita by Leila S. Chudori have been added", time: "5 minutes ago", read: false },
    { id: 2, title: "New Book Added", message: "Laut Bercerita by Leila S. Chudori have been added", time: "1 hour ago", read: false },
    { id: 3, title: "New Book Added", message: "Laut Bercerita by Leila S. Chudori have been added", time: "8 hours ago", read: false },
    { id: 4, title: "New Book Added", message: "Laut Bercerita by Leila S. Chudori have been added", time: "1 day ago", read: false },
    { id: 5, title: "New Book Added", message: "Laut Bercerita by Leila S. Chudori have been added", time: "2 days ago", read: false },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const removeNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <nav id="navbar">
      <form action="/collections" className="search-box">
        <span className="search-icon">
          <Search className="fas fa-search"></Search>
        </span>
        <input
          type="text"
          name="query"
          placeholder="Search book name, author, genre ..."
          className="search-input"
        />
      </form>
      
      <div className="right-bar">
        {/* Profile Dropdown */}
        <div className="dropdown sm:inline-block hidden cursor-pointer relative">
          <div 
            className="profile"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <Image
              width={40}
              height={40}
              src="/images/profile-img.svg"
              alt="Profile"
            />
            <p className="md:block hidden ml-2">Jack Timberlake</p>
          </div>
          {showProfileMenu && (
            <ul className="dropdown-menu absolute text-gray-700 pt-1 shadow-lg w-[200px] right-0">
              <li className="notification-item">
                <a
                  href="/login"
                  className="rounded bg-lightMode hover:bg-textColor/5 py-2 px-4 block whitespace-nowrap"
                >
                  Logout
                </a>
              </li>
            </ul>
          )}
        </div>

        <div className="icon-group">
          {/* Notifications */}
          <div className="dropdown inline-block relative mr-1">
            <button
              className="btn-notification relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="far fa-envelope-open text-textColor/80 hover:text-mainColor duration-300" />
              {unreadCount > 0 && (
                <span className="notification-count">{unreadCount}</span>
              )}
            </button>
            
            {showNotifications && (
              <ul className="dropdown-menu absolute text-gray-700 pt-1 shadow-lg w-[300px] right-0 max-h-[400px] overflow-y-auto">
                <li className="rounded-t py-5 border-b border-textColor/10 bg-lightMode flex items-center justify-between px-4 whitespace-nowrap">
                  <span style={{ fontFamily: 'var(--font-urbanist-bold)' }}>Notifications</span>
                  <button onClick={markAllAsRead}>
                    <Mail className="far fa-envelope-open text-textColor/80 hover:text-mainColor duration-300" />
                  </button>
                </li>
                
                {notifications.map((notif) => (
                  <li key={notif.id} className="notification-item">
                    <div className="rounded-b relative notification-item bg-lightMode hover:bg-[#eee] py-2 px-4 whitespace-normal">
                      <div className="flex items-center mb-1">
                        <h5 className="text-[14px] mr-2" style={{ fontFamily: 'var(--font-urbanist-semibold)' }}>
                          {notif.title}
                        </h5>
                        <span className="text-textColor/80 text-[12px]" style={{ fontFamily: 'var(--font-urbanist-medium)' }}>
                          {notif.time}
                        </span>
                      </div>
                      <p className="text-[12px]">{notif.message}</p>
                      {!notif.read && (
                        <span className="w-2 h-2 rounded-full bg-mainColor absolute right-2 top-7"></span>
                      )}
                      <button
                        onClick={() => removeNotification(notif.id)}
                        className="absolute right-2 top-2"
                      >
                        <X size={12} className="fas fa-times text-textColor/50 hover:text-mainColor"></X>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Theme Toggle - HIDDEN for Light Mode Only */}
          {/* Uncomment below to enable dark mode toggle in the future */}
          {/*
          <button
            id="theme-toggle"
            type="button"
            className="group relative top-1 ml-3"
            aria-label="Toggle theme"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
            </svg>
          </button>
          */}
        </div>
      </div>
    </nav>
  );
}