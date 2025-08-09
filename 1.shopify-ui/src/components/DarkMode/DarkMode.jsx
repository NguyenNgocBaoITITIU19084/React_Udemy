import { FaCloudMoon } from 'react-icons/fa';

import Button from '../button/Button';
import { useState } from 'react';

const DarkMode = () => {
  const [theme, setTheme] = useState('light');

  function handleDarkMode() {
    let element = document.getElementsByTagName('body');
    if (theme === 'light') {
      element[0].classList.add('dark');
      setTheme('dark');
    } else {
      element[0].classList.remove('dark');
      element[0].classList.add('light');
      setTheme('light');
    }
  }

  return (
    <div>
      <Button onClick={handleDarkMode}>
        <span className='text-2xl'>
          <FaCloudMoon />
        </span>
      </Button>
    </div>
  );
};

export default DarkMode;
