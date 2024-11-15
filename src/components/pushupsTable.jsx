import React, {useState, useEffect} from "react";
import YouTubeIcon from '@mui/icons-material/YouTube';
import IconButton from '@mui/material/IconButton';

function PushupTable({week}){
    const [excersises, setExcersises] = useState([]);

    useEffect(() => {
        // Simulate data fetching
         const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/workouts/pushup.json`);
                //const response = await fetch('/workouts/pushup.json');
                const result = await response.json();
                console.log("fetched data", result); // Log only once on mount

                if (result.weeks && result.weeks[week]) {
                    const pushupWeekExcersises = result.weeks[week]; // Ensure workoutData is defined
                    setExcersises(pushupWeekExcersises);
                    console.log("Workout data for type:", pushupWeekExcersises);
                }else{
                    console.warn(`No data found for week: ${week}`);
                    setExcersises([]); // Clear exercises if data is not found
                }
                
            } catch (error) {
                console.error("Error fetching data:", error);
                setExcersises([]);
            }
        };

        fetchData();
    }, [week]);

        return (
        <div>
            <h4 className="bg-black text-white text-center py-2">Pushups</h4>
            <p >Rest for 2 minutes between rounds. <p className="no-print">For guidance on proper push-up form, refer to the following video:<IconButton className="link-danger link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="https://www.youtube.com/watch?v=IODxDxX7oi4&t=5s&ab_channel=Calisthenicmovement" target="_blank" rel="noopener noreferrer"><YouTubeIcon/></IconButton></p>
            </p> 
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Round</th>
                        <th>reps</th>
                    </tr>
                </thead>
                <tbody>
                    {excersises.map((excersise, index) =>{
                        return (
                        <tr key={index}>
                            <th>{index+1}</th>
                            <td>{excersise}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>  
        </div>
    );           
}

export default PushupTable;