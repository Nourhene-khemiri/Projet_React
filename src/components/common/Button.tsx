// CustomButton.tsx
import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

interface ButtonProps {
  text: string;      
 
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div className="d-flex justify-content-start mb-3">
      <BootstrapButton variant="outline-dark" type="button" >
        {text}
      </BootstrapButton>
    </div>
  );
};

export default Button;