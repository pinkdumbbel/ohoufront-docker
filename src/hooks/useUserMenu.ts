import { useState } from 'react';

const useUserMenu = (): boolean => {
  const [userMenu, setUserMenu] = useState(false);

  setUserMenu((prev) => !prev);

  return userMenu;
};

export default useUserMenu;
