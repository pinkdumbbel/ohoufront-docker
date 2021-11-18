import React from 'react';
import './stickyHeader.css';

interface StickyHeaserProps {
  top?: number;
  className?: string;
  childClassName?: string;
  style?: React.CSSProperties;
  childStyle?: React.CSSProperties;
}

const StickyHeader: React.FC<StickyHeaserProps> = ({ children, top, className, childClassName, style, childStyle }) => {
  return (
    <div className={`sticky-header ${className}`} style={{ position: 'sticky', top: `${top}px`, ...style }}>
      <div className={`sticky-child ${childClassName}`} style={{ position: 'relative', ...childStyle }}>
        {children}
      </div>
    </div>
  );
};

StickyHeader.defaultProps = {
  top: 0,
  className: '',
  childClassName: '',
  style: {},
  childStyle: {},
};
export default StickyHeader;
