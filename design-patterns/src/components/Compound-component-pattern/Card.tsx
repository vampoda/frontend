import React, { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`rounded-lg shadow-lg p-4 bg-white ${className}`}>
      {children}
    </div>
  );
};

type CardTitleProps = {
  children: ReactNode;
  className?: string;
};

Card.Title = ({ children, className = '' }: CardTitleProps) => {
  return <h2 className={`text-xl font-bold mb-2 ${className}`}>{children}</h2>;
};

type CardFooterProps = {
  children: ReactNode;
  className?: string;
};

Card.Footer = ({ children, className = '' }: CardFooterProps) => {
  return <footer className={`mt-4 border-t pt-2 text-gray-600 ${className}`}>{children}</footer>;
};

export default Card;
