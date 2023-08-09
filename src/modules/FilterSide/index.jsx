import React from 'react';
import { FilterContainer, FilterSideTitle } from './styles';
import InputPriceRange from './components/InputPriceRange';
import SerachProduct from './components/SearchProduct';

const FilterSide = () => {
    return (
        <FilterContainer>
        <FilterSideTitle>Shop The Latest</FilterSideTitle>
        <SerachProduct/>
        <InputPriceRange />
      </FilterContainer>
    );
};

export default FilterSide;