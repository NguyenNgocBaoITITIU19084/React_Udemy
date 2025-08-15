import { useState } from 'react';

import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

import { FaBed } from 'react-icons/fa';
import { MdFlight } from 'react-icons/md';
import { FaCar } from 'react-icons/fa';
import { BsFillTaxiFrontFill } from 'react-icons/bs';
import { FaHotel } from 'react-icons/fa6';
import { MdOutlinePlace } from 'react-icons/md';
import { FaCalendarAlt } from 'react-icons/fa';
import { GrGroup } from 'react-icons/gr';

import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = ({ style }) => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [openPicker, setOpenPicker] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [options, setOptions] = useState({
    adults: 1,
    children: 1,
    room: 1,
  });

  function handlePicker() {
    setOpenPicker((prevState) => !prevState);
  }

  function handleOpenOptionDialog() {
    setOpenOption((prevState) => !prevState);
  }

  function handleOptionButton(identifier, action) {
    setOptions((prevState) => {
      if (prevState[identifier] === 1 && action === 'decrease') {
        return { ...prevState };
      }

      return {
        ...prevState,
        [identifier]:
          action === 'increase'
            ? prevState[identifier]++
            : prevState[identifier]--,
      };
    });
  }

  function handleSearchButton() {
    navigate('/hotels', { state: { destination, date, options } });
  }

  return (
    <div className='header'>
      <div
        className={
          style !== 'list'
            ? 'header-container'
            : 'header-container list-container'
        }
      >
        <div className='header-list'>
          <div className='header-list-item active'>
            <FaBed />
            <span>Stay</span>
          </div>
          <div className='header-list-item'>
            <MdFlight />
            <span>Flights</span>
          </div>
          <div className='header-list-item'>
            <FaCar />
            <span>Car rental</span>
          </div>
          <div className='header-list-item'>
            <FaHotel />
            <span>Hotels</span>
          </div>
          <div className='header-list-item'>
            <BsFillTaxiFrontFill />
            <span>Taxi</span>
          </div>
        </div>
        {style !== 'list' && (
          <>
            <h1 className='header-title'>
              A lifetime of discount? It's Genius.
            </h1>
            <p className='header-desc'>
              Get reward for your travels - unlock instant saving of 10% or more
              with a free booking hotel account.
            </p>
            <button className='header-button'>Sign in / Register Now</button>
            <div className='header-search'>
              <div className='header-search-item'>
                <MdOutlinePlace className='header-search-icon' />
                <input
                  type='text'
                  name='search-place'
                  id='search-place'
                  placeholder='search your destination'
                  className='header-search-input'
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className='header-search-item'>
                <FaCalendarAlt className='header-search-icon' />
                <span className='header-search-text' onClick={handlePicker}>
                  {format(date[0].startDate, 'dd/MM/yyyy')} to{' '}
                  {format(date[0].endDate, 'dd/MM/yyyy')}
                </span>
                {openPicker ? (
                  <DateRange
                    className='header-date-picker'
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                  />
                ) : null}
              </div>
              <div className='header-search-item'>
                <GrGroup className='header-search-icon' />
                <span
                  className='header-search-text'
                  onClick={handleOpenOptionDialog}
                >
                  {options.adults} adult{options.adults > 1 ? 's' : ''} ,
                  {options.children} children, {options.room}room
                </span>
                {openOption ? (
                  <div className='options-dialog'>
                    <div className='option-item'>
                      <span>Adult</span>
                      <div className='option-counter'>
                        <button
                          className='option-counter-button'
                          onClick={() =>
                            handleOptionButton('adults', 'increase')
                          }
                        >
                          +
                        </button>
                        <span>{options.adults}</span>
                        <button
                          onClick={() =>
                            handleOptionButton('adults', 'decrease')
                          }
                          className='option-counter-button'
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className='option-item'>
                      <span>Children</span>
                      <div className='option-counter'>
                        <button
                          className='option-counter-button'
                          onClick={() =>
                            handleOptionButton('children', 'increase')
                          }
                        >
                          +
                        </button>
                        <span>1</span>
                        <button
                          className='option-counter-button'
                          onClick={() =>
                            handleOptionButton('children', 'decrease')
                          }
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className='option-item'>
                      <span>Room</span>
                      <div className='option-counter'>
                        <button
                          className='option-counter-button'
                          onClick={() => handleOptionButton('room', 'increase')}
                        >
                          +
                        </button>
                        <span>{options.room}</span>
                        <button
                          className='option-counter-button'
                          onClick={() => handleOptionButton('room', 'decrease')}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              <button className='header-button' onClick={handleSearchButton}>
                Search
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
