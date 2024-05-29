import {
    GithubLogo,
    LinkedinLogo,
    WhatsappLogo,
  } from "@phosphor-icons/react";
  
  function Footer() {
    const data = new Date().getFullYear();
  
    return (
      <>
        <div className="flex justify-center bg-indigo-800 text-stone-100">
          <div className="container flex flex-col items-center py-4">
            <p className="text-xl font-bold">Farmácia Cura Tudo | Desenvolvido por : Gabriel Aranda</p>
            <p className="text-lg font-display"> {data}</p>
            <p className='text-lg font-display'>Acesse minhas redes sociais</p>
            <div className='flex gap-2 green-900'>
              <a href="https://www.linkedin.com/in/gabriel-arandaa" target='_blank' rel="noopener noreferrer">
                <LinkedinLogo size={36} weight='bold' />
              </a>
              <a href="https://github.com/Gabriel-Aranda1406" target='_blank' rel="noopener noreferrer">
                <GithubLogo size={36} weight='bold'/>
              </a>
              <a href="https://api.whatsapp.com/send?phone=5511988042690&text=Seu%20projeto%20com%20a%Farmácia20%20Cura%20Tudo%20é%20bem%20legal!%20Poderíamos%20conversar%20um%20pouco?%20" target='_blank' rel="noopener noreferrer">
                <WhatsappLogo size={36} />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Footer;