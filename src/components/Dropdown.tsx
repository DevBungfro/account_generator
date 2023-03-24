import * as React from "react";
import { useState } from "react";
import styled from "styled-components";



interface Option {
  label: string;
  value: string;
}



const options: Option[] = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #0d0454;
  color: white;
  border-radius: 0px;
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
  max-height: 0;
`;

const DropdownItem = styled.li`
  padding: 12px;
  cursor: pointer;
  &:hover {
    background-color: #1d1044;
  }
`;

const DropdownToggle = styled.div`
  background-color: #0d0454;
  color: white;
  width: 170px;
  border-radius: 0px;
  padding: 12px;
  cursor: pointer;
`;

const Label = styled.div`
  margin-top: 10px;
`;

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <><DropdownContainer>
          <DropdownToggle onClick={toggleDropdown}>
              {selectedOption?.label || "Select an option"}
          </DropdownToggle>
          <DropdownList style={{ maxHeight: isOpen ? "500px" : "0" }}>
              {options.map((option) => (
                  <DropdownItem
                      key={option.value}
                      onClick={() => handleOptionSelect(option)}
                  >
                      {option.label}
                  </DropdownItem>
              ))}
          </DropdownList>
      </DropdownContainer><button className="text-center w-btn bg-[#5c51f3] rounded-md p-3">
              Submit
          </button></>
  );
};


export default Dropdown