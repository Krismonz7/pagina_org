import './Footer.css';
export const Footer = () => {
  return (
    <footer className='footer' style={{backgroundImage:"url(/img/footer.png)"}}>

        <div className='redes'> 

          <a href="https://app.aluracursos.com/dashboard">
            <img src="/img/twitter.png" alt="" />
          </a>
          
          <a href="https://app.aluracursos.com/dashboard">
            <img src="/img/facebook.png" alt="" />
          </a>
          
          <a href="https://app.aluracursos.com/dashboard">
            <img src="/img/instagram.png" alt="" />
          </a>
        </div>
    </footer>
  )
}
