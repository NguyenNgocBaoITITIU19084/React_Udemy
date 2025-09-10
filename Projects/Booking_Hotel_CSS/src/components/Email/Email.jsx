import './Email.css';

const Email = () => {
  return (
    <div className='email'>
      <div className='email-container'>
        <h1 className='title'>Save Your Time, and save your budget!</h1>
        <span>Register your email now </span>
        <div className='email-input'>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='your email here...'
          />

          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Email;
