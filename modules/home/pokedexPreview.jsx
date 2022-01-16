import React, {useEffect} from 'react'
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import PokemonInfoContainer from '../pokedex/pokemonInfoContainer'
import PokeCardList from '../../components/pokeCardList';
import Link from 'next/link';


export default function PokedexPreview() {
    return (
        <PokemonInfoContainer fullWidth heading='Search pokedex'>
            <SwipeableTextMobileStepper/>
           <div style={{height: "3em"}}> <Link href="/pokedex" passHref>
                <Button variant="contained" sx={{float: "right", mr: "1em", mt:"0.5em"}}>Go to pokedex</Button>
            </Link></div>
        </PokemonInfoContainer>
    )
}



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const pokemon = Array.from({ length: 4 }, () => Math.floor(Math.random() * 150 + 1))
const pokemonOtherCard = Array.from({ length: 4 }, () => Math.floor(Math.random() * 150 + 1))


function SwipeableTextMobileStepper() {
  const theme = useTheme();
  
  const [activeStep, setActiveStep] = React.useState(0);
  
  const maxSteps = pokemon.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1,  }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        style={{marginLeft: '1em',marginRight: '1em'}}
        slideStyle={{ maxWidth: "100%"}}
        enableMouseEvents
      >
        {pokemon.map((step, index) => (
          <div key={Math.random()} >
            {Math.abs(activeStep - index) <= 2 ? (
                <>
               <Box sx={{display: {md: 'none', sm: 'initial', xs: 'inital'}}}>
                   <PokeCardList isPokedex searchResult={[step]}/>
               </Box>
               <Box sx={{display: {md: 'initial', sm: 'none', xs: 'none'}}}>
                   <PokeCardList isPokedex searchResult={[step, pokemonOtherCard[index]]}/>
               </Box>
               </> 
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        sx={{backgroundColor: "transparent"}}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}
