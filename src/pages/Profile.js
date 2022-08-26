import React from 'react'
import Main from '../components/Main'

// Componentes
import { useParams, useNavigate } from "react-router-dom"
import NavBar from '../components/NavBar/NavBarLogged'
import HeadPage from '../components/Head'
import Grid from '@mui/material/Grid'
import Aside from '../components/Aside'
import Button from '@mui/material/Button'
import { Navigate, NavLink } from "react-router-dom"

// API
import * as User from '../models/Users'
import { getUserId } from '../client/auth'

const Profile = () => {
    const [profile, setProfile] = React.useState([])

    const navigate = useNavigate()
    const { username } = useParams()

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await User.all()
                const prof = res.data.find(user => user.username === username)

                    setProfile(prof)

                

            }
            catch (e) {
                navigate('/')
            }
        }

        fetchData().catch(() => (
            navigate('/')
        ));
    }, [username])

    if(profile.lenght !== 0)
    return (
        <Grid container className='h-screen w-full'>

            <HeadPage titulo={profile.nome} />

            <Grid item xs={2} sm={1} md={3} className=' bg-cinza-50'>
                <Aside />
            </Grid>

            <Grid item xs={10} sm={11} md={9}>
                <Main maxWidth='2xl' bg='bg-blueGray-200' >
                    <NavBar />

                    <section className="relative rounded-t-lg mt-40">
                        <div className='absolute w-full h-full -top-40'>
                            <img className='rounded-t-md' src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80" />
                        </div>
                        <div className="mx-auto px-4 z-30">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
                                <div className="px-6">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                            <div className='flex justify-center'>
                                                <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-36 w-36 border-none absolute -top-14" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                            <div className="py-6 px-3 mt-32 sm:mt-0">
                                                {
                                                    getUserId === profile.id ?
                                                        <NavLink type="button" className="text-white shadow-md px-4 py-2 font-bold text-sm rounded-lg bg-gradient-to-r from-azul-100 to-azul-200 group hover:scale-101" variant="contained">
                                                            Seguir
                                                        </NavLink> :
                                                        <NavLink to='/adicionar' type="button" className="text-white shadow-md px-4 py-2 font-bold text-sm rounded-lg bg-gradient-to-r from-azul-100 to-azul-200 group hover:scale-101" variant="contained">
                                                            Adicionar
                                                        </NavLink>
                                                }

                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                                <div className="mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span className="text-sm text-blueGray-400">Seguidores</span>
                                                </div>
                                                <div className="mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span className="text-sm text-blueGray-400">Podcasts</span>
                                                </div>
                                                <div className="lg:mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span className="text-sm text-blueGray-400">Seguindo</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-12">
                                        <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                                            {`${profile.nome || ''} ${profile.sobrenome || ''}`}
                                        </h3>
                                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                            {`${profile.interesses || 'Talks about: Tecnologia'}`}
                                        </div>
                                    </div>
                                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                        <div className="flex flex-wrap justify-center">
                                            <div className="w-full lg:w-9/12 px-4">
                                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                    {`${profile.descricao || 'Sem descrição por enquanto :) apenas querendo ouvir um velho e clássico podcast'}`}
                                                </p>
                                                <a className="font-normal text-pink-500">Ver mais</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </Main >
            </Grid>
        </Grid>
    )
    else
    return <Navigate to="/" replace={true} />
    
}

export default Profile