import * as React from 'react';

// COMPONENTES
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import Grid from '@mui/material/Grid'
import { useNavigate } from 'react-router-dom';

// API
import * as Podcast from '../../models/Podcast'

const Widget = styled('div')(({ theme }) => ({
    padding: 16,
    borderRadius: 16,
    width: 343,
    maxWidth: '100%',
    margin: 'auto',
    position: 'relative',
    zIndex: 1,
    backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
    backdropFilter: 'blur(40px)',
}));

const CoverImage = styled('div')({
    width: 80,
    height: 80,
    objectFit: 'cover',
    overflow: 'hidden',
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.08)',
    '& > img': {
        width: '100%',
    },
});

const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
});

const Player = (props) => {
    const idPod = props.id;

    const fetchData = async () => {
        try {
            const res = await Podcast.get(idPod)
            setPodCast(res.data)
            setDuration(audioPlayer.current.duration)
        }
        catch (e) {
            console.log(e)
        }
    }

    const [podCast, setPodCast] = React.useState({}) // MP3

    const [isPlaying, setIsPlaying] = React.useState(false);
    const [duration, setDuration] = React.useState(0);
    const [position, setPosition] = React.useState(32);
    const [progressValue, setProgressValue] = React.useState(0);

    const audioPlayer = React.useRef();   // reference our audio component
    const progressBar = React.useRef();   // reference our progress bar
    const animationRef = React.useRef();  // reference the animation

    console.log(audioPlayer)

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setPosition(progressBar.current.value);
    }

    const backThirty = () => {
        progressBar.current.value = Number(progressBar.current.value - 30);
        changeRange();
    }

    const forwardThirty = () => {
        progressBar.current.value = Number(progressBar.current.value + 30);
        setProgressValue(Number(progressBar.current.value + 30));
        console.log('foi')
        changeRange();
    }

    const navigate = useNavigate()

    const theme = useTheme();
    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }

    const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
    const lightIconColor =
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';


    React.useEffect(() => {
        fetchData()
    }, [])

    console.log(podCast)

    if (podCast.url)
        return (
            <div>

                <Widget className="w-full flex items-center justify-around fixed left-0 bottom-0">
                    <audio ref={audioPlayer} src={podCast.url} preload="metadata"></audio>

                    <Grid container>
                        <Grid item xs={2} sm={2} md={4} className="flex ">
                            <CoverImage>
                                <img
                                    alt="Audio"
                                    src="https://yt3.ggpht.com/ytc/AMLnZu_r8aQu05aiYXWIJESQjg4MoriDy7UUneJODGsa_w=s900-c-k-c0x00ffffff-no-rj"
                                />
                            </CoverImage>
                            <Box className="hidden md:flex flex-col" sx={{ ml: 1.5, minWidth: 0 }}>
                                <Typography variant="caption" color="text.secondary" fontWeight={500}>
                                    Top 2 do dia
                                </Typography>
                                <Typography noWrap>
                                    <b>Nome do podcast</b>
                                </Typography>
                                <Typography noWrap letterSpacing={-0.25}>
                                    {`${podCast.nome}` || ''}
                                </Typography>
                            </Box>
                        </Grid>



                        <Grid item xs={2} sm={6} md={6}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mt: -1,
                                }}
                            >
                                <IconButton aria-label="previous song">
                                    <FastRewindRounded fontSize="medium" htmlColor={mainIconColor} />
                                </IconButton>
                                <IconButton onClick={togglePlayPause}
                                    aria-label={isPlaying ? 'play' : 'pause'}

                                >
                                    {isPlaying ? (
                                        <PauseRounded sx={{ fontSize: '2.2rem' }} htmlColor={mainIconColor} />
                                    ) : (
                                        <PlayArrowRounded
                                            sx={{ fontSize: '2.2rem' }}
                                            htmlColor={mainIconColor}
                                        />
                                    )}
                                </IconButton>
                                <IconButton aria-label="next song">
                                    <FastForwardRounded fontSize="medium" htmlColor={mainIconColor} />
                                </IconButton>
                            </Box>

                            <Slider
                                aria-label="time-indicator"
                                size="small"

                                value={progressValue}
                                min={0}
                                step={1}
                                max={duration}
                                onChange={(_, value) => setPosition(value)}
                                sx={{
                                    color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                                    height: 4,
                                    '& .MuiSlider-thumb': {
                                        width: 8,
                                        height: 8,
                                        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                                        '&:before': {
                                            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                                        },
                                        '&:hover, &.Mui-focusVisible': {
                                            boxShadow: `0px 0px 0px 8px ${theme.palette.mode === 'dark'
                                                ? 'rgb(255 255 255 / 16%)'
                                                : 'rgb(0 0 0 / 16%)'
                                                }`,
                                        },
                                        '&.Mui-active': {
                                            width: 20,
                                            height: 20,
                                        },
                                    },
                                    '& .MuiSlider-rail': {
                                        opacity: 0.28,
                                    },
                                }}
                            />


                            <Box className="flex items-center justify-between -mt-2" >
                                <TinyText>{formatDuration(position)}</TinyText>
                                <TinyText>-{formatDuration(duration - position)}</TinyText>
                            </Box>

                        </Grid>

                        <Grid item xs={2} sm={4} md={2} className="flex items-center px-6">
                            <Box className="w-full">
                                <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
                                    <VolumeDownRounded fontSize="medium" htmlColor={lightIconColor} />
                                    <Slider
                                        aria-label="Volume"
                                        defaultValue={70}
                                        size="small"
                                        sx={{
                                            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                                            '& .MuiSlider-track': {
                                                border: 'none',
                                            },
                                            '& .MuiSlider-thumb': {
                                                width: 15,
                                                height: 15,
                                                backgroundColor: '#fff',
                                                '&:before': {
                                                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                                                },
                                                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                                    boxShadow: 'none',
                                                },
                                            },
                                        }}
                                    />
                                    <VolumeUpRounded fontSize="medium" htmlColor={lightIconColor} />
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Widget>
            </div>
        );
    else
        <></>


}

export default Player