import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='flex'>
      <Link to="/">
        <div>
          <img src="https://seng.hkust.edu.hk/sites/default/files/images/SENG_logo4_0.svg"
            alt="Logo CaiTech" />
        </div>
      </Link>
    </div>
  )
}

export default Logo