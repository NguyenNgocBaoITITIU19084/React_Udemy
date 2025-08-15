import './SearchItem.css';

const SearchItem = () => {
  return (
    <div className='search-item-container'>
      <img
        src='https://cf.bstatic.com/xdata/images/hotel/square600/545496390.webp?k=6d9a244538522a76e7e7f4564e0878058ba458dd97a79f54afe6201e72cb7b7a&o='
        alt='search-item-image'
      />
      <div className='search-item-content'>
        <h1 className='title'>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <span className='location'>500m from center</span>
        <span className='taxi-option'>Free airport taxi</span>
        <span className='sub-title'>
          Studio Apartment with air conditioning
        </span>
        <span className='feature'>
          Lorem, ipsum dolor sit amet consectetur , omnis.
        </span>
        <span className='cancel'>Free cancellation</span>
        <span className='cancel-option'>
          Lorem ipsum dolor sit amet consectetur ic!
        </span>
      </div>
      <div className='search-item-detail'>detail</div>
    </div>
  );
};

export default SearchItem;
