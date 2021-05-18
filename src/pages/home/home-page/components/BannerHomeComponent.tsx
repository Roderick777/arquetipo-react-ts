import bannerSvg from '../../../../assets/images/banner.svg'

const BannerHomeComponent = (): JSX.Element => {
  return  (
    <div className="container px-0">
      <div className="banner-home mt-3" style={{ 
        backgroundImage: "url("+ bannerSvg +")", 
        minHeight: '400px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '90% center'
      }}>
        {/* <img className="grafica-svg" src={ bannerSvg } alt="banner-home" /> */}
        <div className="busqueda-banner" style={{ maxWidth: '600px', fontSize: '1.4rem'}}>
          <h1>
            Encuentra Profesionales de Confianza
          </h1>
          <p className="mt-3" style={{ fontSize: '1.1rem' }}>Pintores, Carpinteros, Remodelaciones, Mudanzas y más</p>
        </div>

      </div>
    </div>
  )
}

export default BannerHomeComponent