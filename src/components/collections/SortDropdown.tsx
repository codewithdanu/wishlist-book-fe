"use client";

import { useState } from "react";

const sortOptions = ["Latest", "Oldest", "Most Popular", "Most Rated"];

export default function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Latest");

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[150px] h-2/4 mt-5">
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring-1"
        style={{
          fontSize: '14px'
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = 'rgba(228, 95, 101, 0.5)';
          e.currentTarget.style.boxShadow = '0 0 0 1px rgba(228, 95, 101, 0.5)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = '#d1d5db';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <span className="flex items-center">
          <span className="block ml-3 truncate">{selected}</span>
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
          <svg
            className="w-5 h-5"
            style={{ fill: '#9ca3af' }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white border border-gray-300 rounded-md shadow-lg max-h-56 focus:outline-none"
          style={{ fontSize: '14px' }}
        >
          {sortOptions.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="relative py-2 pl-3 pr-9 cursor-pointer select-none"
              style={{
                backgroundColor: selected === option ? 'rgba(228, 95, 101, 0.8)' : 'white',
                color: selected === option ? 'white' : '#111827'
              }}
              onMouseEnter={(e) => {
                if (selected !== option) {
                  e.currentTarget.style.backgroundColor = 'rgba(228, 95, 101, 0.8)';
                  e.currentTarget.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (selected !== option) {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#111827';
                }
              }}
            >
              <div className="flex items-center">
                <span className="block ml-3 font-normal truncate">{option}</span>
              </div>

              {selected === option && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg
                    className="w-5 h-5"
                    style={{ fill: 'white' }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}