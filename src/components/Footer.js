import React from "react";

import {
  Avatar,
  Badge,
  Input,
  Dropdown,
  DropdownItem,
  WindmillContext,
  Button,
} from "@windmill/react-ui";

function Header() {
  return (
    <footer className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-center h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        <Button>Lanjut</Button>
      </div>
    </footer>
  );
}

export default Header;
