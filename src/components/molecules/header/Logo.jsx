import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='logo flex'>
      <Link to="/">
        <div>
          <img src="https://img.freepik.com/vector-gratis/logo-abstracto-empresa-tecnologica-degradado_52683-9702.jpg?size=338&ext=jpg&ga=GA1.2.92368367.1670741880"
            alt="Logo CaiTech" />
        </div>
      </Link>
    </div>
  )
}

export default Logo