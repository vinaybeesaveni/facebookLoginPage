import './App.css';

function App() {

const renderFacebookLogo = ()=>(
  <div className='logo-container'>
    <h1 className='facebook-logo'>facebook</h1>
    <p className='recent-login'>Recent Logins</p>
    <p className='description'>Click your picture or add an account</p>
    <div className='profile-container'>
      <div className='profile-card'>
            <img src="https://res.cloudinary.com/djdrrmpnu/image/upload/v1657000857/cld-sample-2.jpg" alt="sample" className='sample-img' /> 
      <p className='name'>Vinay</p>
      </div>
      <div className='profile-card'>
            <div className='button-container'>
              <button type="button" className='add-button'>+</button>
            </div> 
            <hr className='line'/>
      <p className='add-account'>Add Account</p>
      </div>
      

    </div>
  </div>
)


const renderLoginForm = ()=>(
  <div>
    <div className='login-card'>
      <form className='login-form'>
        <input type="text"  className='input-element'/>
        <br/>
        <input type="password"  className='input-element'/>
        <button type="submit" className='login-btn'>Login</button>
        <p className='forgot-password'>Forgotten password?</p>
      </form>
      <button type="button" className='create-account-btn'>Create Account</button>
     

    </div>
    <p className='tag'><span>Create a Page</span> for a celebrity, brand or business.</p>
  </div>
)

  return (
    <div className="main-container">
      {renderFacebookLogo()}
      {renderLoginForm()}
    </div>
  );
}

export default App;
