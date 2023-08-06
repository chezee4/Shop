import { useState } from "react";

const useInputValue = (initialValue = '') => {
    const [value, setValue] = useState(initialValue);
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return { value, onChange: handleChange };
  };

  export default useInputValue;