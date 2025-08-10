const Dropdown = ({ children, className, data, ...props }) => {
  let baseCss = 'hover:text-primary duration-200 relative ';
  return (
    <div {...props} className={className ? `${baseCss} ${className}` : baseCss}>
      {children}
      <ul className='w-[200px] bg-white absolute top-1/2 -left-4 translate-y-3 hidden group-hover:block shadow-md rounded-md'>
        {data.map((item) => (
          <li
            key={item.name}
            className='inline-block w-full rounded-md px-2 py-3 text-black hover:bg-primary/20'
          >
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
