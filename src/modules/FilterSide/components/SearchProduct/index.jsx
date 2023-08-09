import React, { useContext, useState } from "react";

import { Context } from "../../../../utils/context";

import { Search, ContainerIconSerach, Input } from "./styles";
import { Icon } from "../../../../UI/Icons/styles";
import search from "../../../../assets/img/search.svg";

const SerachProduct = () => {
   const [value, setValue]  = useState("");
   const {searchProduct} = useContext(Context);
   const Submit = (e) => {
      e.preventDefault();
      searchProduct(value);
 };
  return (
    <Search>
      <form onSubmit={Submit}>
      <Input
        placeholder="Search..."
        autoComplete="off"
        name="text"
        type="text"
        value={value}
        onChange = {(e) => setValue(e.target.value)}
      />
      <ContainerIconSerach onClick={() => searchProduct(value)}>
        <Icon src={search} alt="Search" />
      </ContainerIconSerach>
      </form>
    </Search>
  );
};

export default SerachProduct;

