// ConvertButton.tsx
import React from 'react';

interface Props {
  onClick: () => void;
}

const ConvertButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded-md"
      onClick={onClick}
    >
      Convert
    </button>
  );
};

export default ConvertButton;
