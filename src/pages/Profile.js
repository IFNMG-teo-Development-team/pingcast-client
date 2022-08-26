import React from 'react'
import Main from '../components/Main'

// Componentes
import { useParams, useNavigate } from "react-router-dom"
import NavBar from '../components/NavBar/NavBarLogged'
import HeadPage from '../components/Head'
import Grid from '@mui/material/Grid'
import Aside from '../components/Aside'
import { Navigate, NavLink } from "react-router-dom"
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// ICONES
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

// API
import * as User from '../models/Users'
import * as Canal from '../models/Canal'
import { getUserId } from '../client/auth'
import { Typography } from '@mui/material'

// CARD PARA CADA TAB
const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <Box component={'div'}
            className={value !== index ? 'hidden' : ''}
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}
const Profile = () => {
    // DADOS DO PERFIL DA PG
    const [profile, setProfile] = React.useState([])

    // STATUS DO BOTÃO SEGUIR
    const [follow, setFollow] = React.useState(false)

    // CANAL DE PODCAST Q O USUARIO ESTÁ VISUALIZANDO
    const [canal, setCanal] = React.useState(0);
    const [allChannels, setAllChannels] = React.useState({});

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

        fetchData()
    }, [username])

/*
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const canais = await Canal.get(profile.id)
                setAllChannels(JSON.stringify(canais.data))
                console.log(allChannels)
            }
            catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [profile])
*/

    const actions = [
        { icon: <AddIcon />, name: 'Novo Canal', uri: '/canal/create' },
        { icon: <KeyboardVoiceIcon />, name: 'Novo Podcast', uri: '/podcast/create' },
        { icon: <PrintIcon />, name: 'Print', uri: 'criar' },
        { icon: <ShareIcon />, name: 'Share', uri: 'criar' },
    ];

    const handleChangeCanal = (event, newValue) => {
        setCanal(newValue);
    };

    const handleFollow = (e) => {
        if (follow)
            setFollow(false)
        else
            setFollow(true)
    }

    if (profile.lenght !== 0)
        return (
            <>
                <Grid container className='h-screen w-full'>

                    <HeadPage titulo={profile.nome} />

                    <Grid item xs={2} sm={1} md={3}>
                        <Aside />
                    </Grid>

                    <Grid item xs={10} sm={11} md={9}>
                        <Main maxWidth='2xl' bg='bg-blueGray-200' >
                            <NavBar />

                            <Box component="section" className="relative rounded-t-lg mt-40">
                                <div className='absolute -top-40'>
                                    <img className='rounded-t-md w-full h-full' alt="bg" src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80" />
                                </div>
                                <div className="mx-auto px-4 z-30">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
                                        <div className="px-6">
                                            <div className="flex flex-wrap justify-center">
                                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                                    <div className='flex justify-center'>
                                                        <img alt="foto de perfil" src="https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png" className="shadow-xl rounded-full h-36 w-36 border-none absolute -top-14" />
                                                    </div>
                                                </div>
                                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                                    <div className="py-6 px-3 mt-32 sm:mt-0">

                                                        {
                                                            getUserId === profile.id ?
                                                                <IconButton onClick={handleFollow} aria-label="Seguir" color="error">
                                                                    {follow === false ? <FavoriteBorderIcon color="disabled" /> : <FavoriteIcon color="error" />}
                                                                </IconButton> :
                                                                <IconButton aria-label="Seguir" color="error">
                                                                    <FavoriteIcon color="error" />
                                                                </IconButton>
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
                                                        <a href='/' className="font-normal text-pink-500">Ver mais</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <Box sx={{ width: '100%' }}>
                                            <Box sx={{ bgcolor: '#fff' }}>
                                                {/* NOME DOS CANAIS DO PODCAST*/}
                                                <Tabs value={canal} onChange={handleChangeCanal} aria-label="ant example">
                                                    <Tab label="Canal principal" />
                                                </Tabs>
                                                <Box sx={{ p: 1 }} />

                                                {/* PODCASTS DE CADA CANAL */}
                                                <TabPanel value={canal} index={0} >
                                                    Nenhum podcast postado
                                                </TabPanel>
                                            </Box>
                                        </Box>
                                    </div>


                                </div>
                            </Box>
                        </Main >
                    </Grid>


                    <SpeedDial
                        ariaLabel="SpeedDial openIcon example"
                        sx={{ position: 'absolute', bottom: 16, right: 16 }}
                        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
                        className="fixed"
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                onClick={evt => { navigate(`${action.uri}`) }}
                            />
                        ))}
                    </SpeedDial>

                </Grid>
            </>
        )
    else
        return <Navigate to="/" replace={true} />

}

export default Profile