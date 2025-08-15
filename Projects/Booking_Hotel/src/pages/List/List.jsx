import { useState } from 'react';
import { format } from 'date-fns';
import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';

import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';

import './List.css';
import SearchItem from '../../components/SearchItem/SearchItem';

const List = () => {
  const location = useLocation();

  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  function handleOpenDateButton() {
    setOpenDate((prevState) => !prevState);
  }
  return (
    <div>
      <Navbar />
      <Header style='list' />
      <div className='search-container'>
        <div className='search-wrapper'>
          <div className='search-content'>
            <h1 className='search-content-title'>Search</h1>
            <div className='search-content-item'>
              <label htmlFor=''>Destination</label>
              <input
                type='text'
                name='destination'
                id='destination'
                placeholder={destination ? destination : 'Your destination'}
              />
            </div>
            <div className='search-content-item'>
              <label htmlFor=''>Check-in Date</label>
              <span onClick={() => handleOpenDateButton()}>
                {format(date[0].startDate, 'MM/dd/yyyy')}
                <span> to </span>
                {format(date[0].endDate, 'MM/dd/yyyy')}
              </span>
              {openDate && (
                <DateRange
                  className='header-date-picker'
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className='search-content-item'>
              <label htmlFor=''>Options</label>
              <div className='option-container'>
                <div className='option-item'>
                  <span>
                    Min price <small>per night</small>
                  </span>
                  <input
                    min={1}
                    type='number'
                    name='min-price'
                    id='min-price'
                    placeholder=''
                  />
                </div>
                <div className='option-item'>
                  <span>
                    Max price <small>per night</small>
                  </span>
                  <input
                    min={1}
                    type='number'
                    name='min-price'
                    id='min-price'
                    placeholder=''
                  />
                </div>
                <div className='option-item'>
                  <span>Adults</span>
                  <input
                    min={1}
                    type='number'
                    name='min-price'
                    id='min-price'
                    placeholder={options.adults}
                  />
                </div>
                <div className='option-item'>
                  <span>Children</span>
                  <input
                    min={0}
                    type='number'
                    name='min-price'
                    id='min-price'
                    placeholder={options.children}
                  />
                </div>
                <div className='option-item'>
                  <span>Room</span>
                  <input
                    min={1}
                    type='number'
                    name='min-price'
                    id='min-price'
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button className='search-content-button'>Search</button>
          </div>
          <div className='result-content'>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
