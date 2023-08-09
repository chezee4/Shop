import React from "react";

import { Search, ContainerIconSerach, Input } from "./styles";
import { Icon } from "../Icons/styles";

import search from "../../assets/img/search.svg";

const InputSearchHeader = () => {
  return (
    <Search>
      <Input
        placeholder="Search..."
        autoComplete="off"
        name="text"
        type="text"
      />
      <ContainerIconSerach>
        <Icon src={search} alt="Search" />
      </ContainerIconSerach>
    </Search>
  );
};

export default InputSearchHeader;
