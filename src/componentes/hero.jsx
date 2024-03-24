import './hero.css';

const  Hero = () => {
    return (

     
<section className='wrapContent bg2'>
        <article className='wrapHero'>
            <div className='heroContent'>
                <div className='card'>
                    <a href="#" className='socialContainer containerOne'>
                    <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                    <a href="#" className='socialContainer containerDos'>
                    <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                    <a href="#" className='socialContainer containerTres'>
                    <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    <a href="#" className='socialContainer containerCuatro'>
                    <ion-icon name="logo-instagram"></ion-icon>
                    </a>

                </div>

                <h1>!Hola!  Mi nombre es Fabio</h1>
                <p>Soy Fabio, un apacionado desarrollador Wed con una amplia trayectoria
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ut sit consequatur blanditiis beatae voluptatibus accusamus, iste itaque odit earum eveniet pariatur exercitationem adipisci nihil quam, eos deleniti possimus vero.
                </p>
                <div className='heroBtnContainer'>
                    <button className='heroBtn1'>
                        <span className='text'> Mi portafolio</span>
                    </button>  
                    <button className="button" data-text="Awesome">
                        <span className="actual-text">&nbsp;Clickear&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;Clickear&nbsp;</span>
                    </button>
                </div>
             </div>
             <div className="container">
    <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="bubble">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
 </div>
        </article>
</section>
    )
  }


export default Hero 