import { useState, useEffect } from 'react'
import './index.scss'
import { Link, json, useParams } from 'react-router-dom'
import axios from 'axios'
import Atropos from 'atropos'

export default function BarraLateral(props) {
    const[menu, setMenu] = useState(false)
    const[carrin, setCarrin] = useState(false)
    const[fundo, setFundo] = useState(false)
    const[assis, setAssis] = useState(false)

    function Fundo() {
        if(carrin == true || menu == true || assis == true) {
            setFundo(true)
        }
        else {
            setFundo(false)
        }
    }

    useEffect( ()=> {
        Fundo()
    }, [carrin, menu, assis])

    function MostrarAssistente() {
        setAssis(!assis)
        Fundo()
    }

    function MostrarCarrin() {
        setCarrin(!carrin)
        Fundo()
    }

    function MostrarMenu() {
        setMenu(!menu)
        Fundo()
    }
    
    function Sair() {
        setCarrin(false)
        setMenu(false)
        setAssis(false)
    }




    //carrinho id
    var {idProduto} = useParams();
    const [nome, setNome] = useState('')
    const [image, setImage] = useState('');
    const [descricao, setDescricao] = useState('')

    useEffect(() => {
        async function DetalhesBuy(){
            try{
                const response = await axios.get('https://api.rawg.io/api/games/' + idProduto + '?key=0a526d3c3985430c9469d8d6951eb5cb&');
                console.log(idProduto)
                setNome(response.data.name)
                setImage(response.data.background_image)
                setDescricao(response.data.description_raw)
            }
            catch(error){
                console.log('Infelizmente deu erro' + error)
            }
        }
        DetalhesBuy();
    }, [idProduto]);




    //parte do bot
    const [IQuestion, setIQuestion] = useState('');
    const [Resposta, setResposta] = useState('');


    function GPTbro() {
        const OPENAI_API_KEY = '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';
    
        fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {

          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + OPENAI_API_KEY,
          },
          body: JSON.stringify({
            prompt: IQuestion,
            max_tokens: 2048,
            temperature: 0.5,
          })
        })
        
        .then((response) => response.json())
        .then((json) => {
          if (json.error?.message) {
            setResposta(`Error: ${json.error.message}`);
          } else if (json.choices?.[0].text) {
            const text = json.choices[0].text || "Sem resposta";
            setResposta(text);
          }
        })
        .catch((error) => console.log('Error:', error));
      }

      async function Enter(event) {
        if (event.key === "Enter") {
            const resposta = await GPTbro();
            setResposta(resposta)
        }
      }

    return(
        <div id="BarraLateral">
            {fundo == true &&
            <div onClick={Sair} className='fundo'></div>}
            
            {menu == true &&
            <section className='Menu'>
                <main className='geral'>
                    <section className='pages'>
                        <h1 className='none'>Paginas</h1>
                        <div className='linha'></div>
                        <a href="http://localhost:3000/">Descobrir</a>
                        <a href="http://localhost:3000/procurar">Procurar</a>
                        <a href="http://localhost:3000/planos">Planos</a>
                        <a href="">Noticias</a>
                        <a href="http://localhost:3000/conquistas">Sessao Conquista</a>
                        <a href="http://localhost:3000/sobregamesync">Sobre Nós</a>

                        <h1 >Menu</h1>
                        <div className='linha'></div>
                        <a href="">Configurações</a>
                        <a href="">Usuario</a>
                        <a href="">Privacidade</a>
                        <a href="">Gerenciar pagamento</a>

                        <h1 >Eu</h1>
                        <div className='linha'></div>
                        <a href="">Minha Conta</a>
                        <a href="">Favoritos</a>
                        <a href="">Compras</a>
                    </section>
                </main>
            </section>}

            {assis == true &&
            <section id='assistente'> 
                <div className='linha'></div>
                <main className='assis'>
                    <section className='assisOUbot'>
                        <button className='botao bot'>
                            Bot
                        </button>
                        <button className='botao assistente'>
                            Assistente
                        </button>
                    </section>
                    <div className='mensagens'>

                        <section className='mensagem empresa'>
                            <p>Ola, precisa de alguma ajuda? se sim, digite 1</p>
                        </section>

                    </div>
                    <nav className='enviar'>
                        <input onKeyDown={Enter} value={IQuestion}  onChange={(e) => setIQuestion(e.target.value)} type='text' placeholder='Qual a sua duvida?'/>
                        <button onClick={GPTbro}><img src="/assets/images/carrinho/enviar.png"/></button>
                        <textarea value={Resposta}  onChange={(e) => setResposta(e.target.value)} cols="100" rows="50"></textarea>
                    </nav>
                </main>
            </section>}


            <div className="BarraLateral">
                <img onClick={MostrarMenu} className='logo' src="/assets/images/GameSync/giphy-unscreen.gif" />
                <div className='botoes'>
                    <section onClick={MostrarAssistente} className='redirects assistente'>
                        <img src="/assets/images/carrinho/bot.png" />
                    </section>
                    <section onClick={MostrarCarrin} className='redirects carrinho'>
                        <img src="/assets/images/carrinho/carrinho.png" />
                    </section>
                    <section className='redirects fav'>
                        <img src="/assets/images/carrinho/coracao.png" />
                    </section>
                </div>
            </div>


            {carrin == true &&
            <section className='BarraLateralCar'>
                <div className='Resumo'>
                    <h1>Resumo do Carrinho</h1>
                </div>

                <main className='prodEsub'>
                    <section className='produtos'>

                        <div className='produto'>
                            <div className='card'>
                                <div className='verproduto'>
                            z
                                <img src={image} />


                                    <button>Ver Produto</button>
                                </div>
                                <div className='info'>
                
                                    <h1>{nome}</h1>
                                    <p>{descricao}</p>
                                    <h1>R$109,90</h1>
                                </div>
                            </div>
                            <div className='acoes'>
                                <div className='buton apagar'>
                                    <img src="/assets/images/carrinho/lixeira.png" />
                                </div>
                                <div className='buton qnt'>
                                    
                                </div>
                            </div>
                        </div>

                        

                    </section>
                    <section className='subtotal'>
                        <div className='dados'>

                        </div>
                        <button>Fechar Pedido</button>
                    </section>
                </main>

                <button className='continuar'>
                    Continuar Comprando
                </button>
            </section>}
        </div>
    )
}//