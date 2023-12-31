import './index.scss'
import { Link } from 'react-router-dom'

export default function PayFim(){

 
    

    return(
        
        <div id='finalizar-payment-main'>
            <div className='image-esq'></div>
            <div className='finalizar-payment'>
                <div className='titulo-payment'>
                    <h1>Estamos Preparando Seu Pagamento!</h1>
                </div>
                <div className='text-payment'>
                Falta Pouco Para Terminarmos Seu Pagamento Selecione o Método Que Deseja:
                </div>
                <div className='metodos-de-pagamento'>
                    <div className='pagarpix'>
                        <img src='/assets/images/pagamento/pixlogo.svg'/>
                        <div className='btn-pagar'>
                            <button className='chave-pix'>Pague Com Pix</button>
                        </div>

                    </div>
                    <div className='pagarboleto'>
                        <img src='/assets/images/pagamento/boleto3.png' />
                        <div className='btn-pagar'>
                            <Link to={'/payboleto'}>
                                <button className='boleto'>Pagar Com Boleto</button>
                            </Link>
                        </div>
                    </div>
                        
                </div>

            </div>





        </div>


    )


}