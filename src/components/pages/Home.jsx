import { API_URL } from '../../constants/env';

function Home() {
  return (
    <>
      <div>
        <h1>Hola mundo! {API_URL}</h1>
        <p>Este es el sitio en desarrollo</p>
      </div>
    </>
  )
}

export default Home
