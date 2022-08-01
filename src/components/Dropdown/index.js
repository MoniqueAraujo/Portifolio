import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const DropdownMobile = ({ fillModal }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown
      className="drop"
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
      isOpen={dropdownOpen}
      toggle={toggle}
    >
      <DropdownToggle
        style={{
          background: "transparent",
          color: " #FFF ",
          border: "none",
        }}
      >
        <AiOutlineMenu size="24px" />
      </DropdownToggle>
      <DropdownMenu style={{ background: "#F1889B" }}>
        <DropdownItem divider style={{ backgroundColor: "#fff" }} />
        <DropdownItem onClick={() => {}}>
          <a
            href="#containerIam"
            style={{ textDecoration: "none", color: "white" }}
          >
            Sobre mim
          </a>
        </DropdownItem>
        <DropdownItem onClick={() => {}}>
          <a
            href="#containerApprenticeship"
            style={{ textDecoration: "none", color: "white" }}
          >
            Conhecimentos
          </a>
        </DropdownItem>
        <DropdownItem onClick={() => {}}>
          <a
            href="#cardProject"
            style={{ textDecoration: "none", color: "white" }}
          >
            Projetos
          </a>
        </DropdownItem>
        <DropdownItem onClick={() => {}}>
          <a
            href="#Contacts"
            style={{ textDecoration: "none", color: "white" }}
          >
            Contatos
          </a>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownMobile;
