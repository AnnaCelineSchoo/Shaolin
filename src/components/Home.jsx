import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


function Home(){
    return (
        <div className="banner-home">
          <div className="banner-home-content">
            <h1 className="banner-title">Welcome To Shaolin Weekly Workouts</h1>
            <p className="banner-subtitle"> 
                Welcome to the Shaolin Workout plan generator, where ancient wisdom meets modern fitness.
                 This is more than just a workout; it's a journey into the disciplined world of Shaolin training, 
                 where every movement, every breath, and every moment connects mind and body in a harmonious flow.
            </p>
            <p className="banner-subtitle"> 
                Inspired by the strength and resilience of Shaolin monks, our workouts 
                are designed to build not just physical power, but mental clarity and inner peace. Whether you're 
                a beginner or a seasoned practitioner, this space offers something for everyone, from powerful martial
                 arts-inspired exercises to mindfulness practices rooted in centuries-old Shaolin tradition.
                 </p>
                 <p className="banner-subtitle">
                 Step in, focus your mind, and unleash your potential. Embrace the journey and welcome to the Shaolin Workout.
                 </p>
                 <Button variant="contained" href="Shaolin/#/WorkoutPlan"  color="error" size="large" endIcon={<ExitToAppIcon />}>Get a Workout Plan</Button>
          </div>
        </div>
      );
    };

export default Home;