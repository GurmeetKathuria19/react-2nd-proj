import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();

  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton



      variant="ghost"
      color="current"
      pos={"fixed"}
      top={"4"} //this 4 is not 4px .. this is a unit of chakra ui .. 1 unit of chakra ui = 4px
      right={"4"} //you can give this 4 in px also
      onClick={toggleColorMode}
      zIndex={"overlay"}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;