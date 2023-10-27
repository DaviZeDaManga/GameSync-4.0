import './index.scss'

import BarraDeCima from '../../../components/baraDeCima'
import BarraLateral from '../../../components/barraLateral'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

export default function Grupos() {

    return (
        <section id='Grupos'>
            <BarraDeCima/>
            <BarraLateral/>

            <section className='name-grupo'>
                <h1>Jogos Novos</h1>
            </section>


                    <div className='grupo'>
                        <section id='produtos'>

                        <motion.div
                        whileHover={{ scale: 1.07 }} 
                        whileTap={{ scale: 0.95 }}
                        >

                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/QQqcbZskvj_9I9-niPTKETriqpfqLen68vDgmLMKLUM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzM3MS83MjEv/MTU3L3ZpZGVvLWdh/bWVzLXRoZS13aXRj/aGVyLTMtd2lsZC1o/dW50LXRoZS13aXRj/aGVyLWdlcmFsdC1v/Zi1yaXZpYS13YWxs/cGFwZXItcHJldmll/dy5qcGc'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>The Witcher 3</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>

                        </motion.div>

                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/hudP_oAmD8YsVby-m40J-d7qVQavCNUBD4eDibgbeag/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvc2t5cmltLTA1/ZWFhb2puOXl2Zndn/YmguanBn'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Skyrim</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/FnayZZ7LJODoJwuvfuoUGWVIPHw4CJUwijJei0RLYC0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM4LmFscGhhY29k/ZXJzLmNvbS85MTQv/OTE0ODQ3LnBuZw'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Tricky Towers</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/9I6P3Blqki_ojsJcSI5Y65pEoL_KiWJ26LUHsERaexc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS80OS8x/OS9JMlo1YnMuanBn'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Ninja Gaiden</a>
                                        <p>Bethesda</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/MayplzfuRH2wZyhSty3PSYo_44kRtGUB7vI8g5KFJgI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM2LmFscGhhY29k/ZXJzLmNvbS8xMDkv/MTA5OTkxOC5qcGc'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Fall Guys</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/MeYw8owuAjL1SpT_H8g3u3OsV5lIA076RUX6VUKaMSk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM0LmFscGhhY29k/ZXJzLmNvbS8xMDgv/MTA4MjA3Ny5qcGc'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Minecraft Dungeons</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/CmPJF_aEIbcuf85q_27_vXpmcQleumBuJORE6ESncys/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvaG9sbG93LWtu/aWdodC04MmRkMWxn/eHBiemRyaHF3Lmpw/Zw'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Hollow Knight</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/ax1x0ShiOPIccDNN646zHzDWoQCvPU7b_K28Uhs3dWE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS81LzMx/L3l0NFhOWi5qcGc'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Metal Gear IV</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/iQTxvuCmVcvedwSYDq3jBtXyj9BXZNsaRtEz0zeHQIk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kaWd3/YWxscGFwZXJzLmNv/bS93YWxscGFwZXJz/L2Z1bGwvNC8zLzgv/MzM3NDEtMTkyMHgx/MDgwLXN0YXJkZXct/dmFsbGV5LWJhY2tn/cm91bmQtaW1hZ2Ut/ZGVza3RvcC1oZC5q/cGc'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Stardew Valley</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/9wB7RRXFdmb9pW6Y_xHWCaxMuoMYPLhZn4Qp851CyjQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZ3JhbmQtdGhl/ZnQtYXV0by12LW5h/ZWo0eWlhcDRnbnho/Mm8uanBn'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Grand The Auto V</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/wywzZ1XP6nQbhWR4tRf92z6a-azSow77Fmy_I5ILoWI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYmlvc2hvY2st/cDRhOGZ0aGE3NXd6/c3NpNy5qcGc'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Bioshock</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/_k2k4gmwqGg2gnf6BZapWBbD-Irq7C6aISAiqywaKQI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZmFu/LWFydC10ZXJyYXJp/YS1tb2JpbGUtMGps/YXNncjBrYnBzYXFk/NC5qcGc'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Terraria</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/Ngd2PFqhkRvf9VEnZsOSFD3OnVcXXdbiyfR-Akf40yw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM0LmFscGhhY29k/ZXJzLmNvbS8xMTUv/MTE1MTI0OS5qcGc'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Elder Ring</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/QQqcbZskvj_9I9-niPTKETriqpfqLen68vDgmLMKLUM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzM3MS83MjEv/MTU3L3ZpZGVvLWdh/bWVzLXRoZS13aXRj/aGVyLTMtd2lsZC1o/dW50LXRoZS13aXRj/aGVyLWdlcmFsdC1v/Zi1yaXZpYS13YWxs/cGFwZXItcHJldmll/dy5qcGc'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>The Witcher 3</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/hudP_oAmD8YsVby-m40J-d7qVQavCNUBD4eDibgbeag/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvc2t5cmltLTA1/ZWFhb2puOXl2Zndn/YmguanBn'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Skyrim</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/FnayZZ7LJODoJwuvfuoUGWVIPHw4CJUwijJei0RLYC0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM4LmFscGhhY29k/ZXJzLmNvbS85MTQv/OTE0ODQ3LnBuZw'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Tricky Towers</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/9I6P3Blqki_ojsJcSI5Y65pEoL_KiWJ26LUHsERaexc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS80OS8x/OS9JMlo1YnMuanBn'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Ninja Gaiden</a>
                                        <p>Bethesda</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/MayplzfuRH2wZyhSty3PSYo_44kRtGUB7vI8g5KFJgI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM2LmFscGhhY29k/ZXJzLmNvbS8xMDkv/MTA5OTkxOC5qcGc'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Fall Guys</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/MeYw8owuAjL1SpT_H8g3u3OsV5lIA076RUX6VUKaMSk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM0LmFscGhhY29k/ZXJzLmNvbS8xMDgv/MTA4MjA3Ny5qcGc'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Minecraft Dungeons</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/CmPJF_aEIbcuf85q_27_vXpmcQleumBuJORE6ESncys/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvaG9sbG93LWtu/aWdodC04MmRkMWxn/eHBiemRyaHF3Lmpw/Zw'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Hollow Knight</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/ax1x0ShiOPIccDNN646zHzDWoQCvPU7b_K28Uhs3dWE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS81LzMx/L3l0NFhOWi5qcGc'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Metal Gear IV</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/iQTxvuCmVcvedwSYDq3jBtXyj9BXZNsaRtEz0zeHQIk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kaWd3/YWxscGFwZXJzLmNv/bS93YWxscGFwZXJz/L2Z1bGwvNC8zLzgv/MzM3NDEtMTkyMHgx/MDgwLXN0YXJkZXct/dmFsbGV5LWJhY2tn/cm91bmQtaW1hZ2Ut/ZGVza3RvcC1oZC5q/cGc'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Stardew Valley</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/9wB7RRXFdmb9pW6Y_xHWCaxMuoMYPLhZn4Qp851CyjQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZ3JhbmQtdGhl/ZnQtYXV0by12LW5h/ZWo0eWlhcDRnbnho/Mm8uanBn'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Grand The Auto V</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>
                        <Link to={'/produto/3242'}>
                            <section className='produto'>
                                <div className='imagem-produto'>
                                    <div className='sombra'>
                                        <div className='linha'></div>
                                    </div>
                                    <div className='produtoIMG'>
                                        <img src='https://imgs.search.brave.com/wywzZ1XP6nQbhWR4tRf92z6a-azSow77Fmy_I5ILoWI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYmlvc2hvY2st/cDRhOGZ0aGE3NXd6/c3NpNy5qcGc'/>
                                    </div>
                                </div>
                                <div className='informacoes'>
                                    <div className='dados'>
                                        <a>Bioshock</a>
                                        <p>Ubsoft</p>
                                    </div>
                                    <div className='info'>
                                        <h3>Novidade</h3>
                                    </div>
                                </div>
                            </section>  
                        </Link>


                    </section>
                    </div>

        </section>
    )
}