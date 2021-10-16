import React from 'react';

interface SearchIconType {
  className: string;
}

const SearchIcon: React.FC<SearchIconType> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M22 22l-5-5"></path>
      <circle cx="11" cy="11" r="8"></circle>
    </svg>
  );
};

export default SearchIcon;
