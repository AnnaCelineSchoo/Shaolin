import React , { useRef, useState } from "react";
import StrengthTable from "./StrengthTable";
import PushupTable from "./pushupsTable";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Button from '@mui/material/Button';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function WeekSchedule({week, reps, sets, amount, pushupWeek, holdingTime, level}) {
    const [isOpen, setIsOpen] = useState({
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
    });

    const toggleDay = (day) => {
        setIsOpen((prev) => ({ ...prev, [day]: !prev[day] }));
    };

    const rootRef = useRef();

    const handleDownloadPDF = async() => {
      // Temporarily hide elements with "no-print" class
      const noPrintElements = document.querySelectorAll('.no-print');
      noPrintElements.forEach(el => el.style.display = 'none');
  
      html2canvas(rootRef.current, {
        useCORS: true, // Enables CORS for images
        logging: true, // Helps with debugging issues
        scale: 2, // Increases image resolution for higher quality
        backgroundColor: '#fff', // Set background color if transparent
        imageTimeout: 0, // Disable image loading timeout (optional)
        }
        ).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 190; // Set width of the PDF page
        const pageHeight = pdf.internal.pageSize.height;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
        let heightLeft = imgHeight;
        let position = 0;
  
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
  
         // Add subsequent pages if necessary
        while (heightLeft >= 10) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
  
        pdf.save(`WorkoutSchedule:level${week}.pdf`);
  
        // Restore elements with "no-print" class after PDF generation
        noPrintElements.forEach(el => el.style.display = '');
      });
    };

    return (
        <div ref={rootRef}>                
            <Button className="no-print"  variant="contained" color="error" size="large" onClick={handleDownloadPDF} endIcon={<PictureAsPdfIcon/>}>Download PDF</Button>
            <h4 className="text-center mt-4">{level} workout plan a at intensity level {week}</h4>
            <div className="container mt-4">
                <div className="row">
                    {/* Sunday */}
                    <div className="col-12 mb-4">
                        <div className="card shadow-lg">
                            <div className="card-header bg-warning text-white text-center" onClick={() => toggleDay("sunday")} style={{ cursor: "pointer" }} >
                                <h4>Sunday</h4><ExpandMoreIcon color="disabled"  fontSize="large"/> 
                            </div>
                            {isOpen.sunday && (
                                <div className="card-body">
                                    <PushupTable week={pushupWeek} />
                                    <StrengthTable type="arm_variations" week={week} reps={reps} sets={sets} amount={amount} holdingTime={holdingTime} />
                                    <StrengthTable type="core" week={week} reps={reps} sets={sets} amount={amount} holdingTime={holdingTime} />
                                    <StrengthTable type="weapon_forms" week={week} reps={reps} sets={sets} amount={amount} holdingTime={holdingTime} />
                                    <StrengthTable type="tai_chi_weapon_forms" week={week} reps={reps} sets={sets} amount={amount} holdingTime={holdingTime} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Monday */}
                    <div className="col-12 mb-4">
                        <div className="card shadow-lg">
                            <div className="card-header bg-warning text-white text-center" onClick={() => toggleDay("monday")} style={{ cursor: "pointer" }}>
                                <h4>Monday</h4><ExpandMoreIcon color="disabled"  fontSize="large"/>
                            </div>
                            {isOpen.monday &&(
                                <div className="card-body">
                                    <StrengthTable type="leg" week={week} reps={reps} sets={sets} amount={amount} holdingTime={holdingTime} />
                                    <StrengthTable type="stances" week={week} reps={reps} sets={sets} amount={amount} holdingTime={holdingTime} />
                                    <StrengthTable type="stamina" week={week} reps={reps} sets={sets} amount={amount} holdingTime={holdingTime}/>
                                </div> 
                            )}
                        </div>
                    </div>

                    {/* Tuesday */}
                    <div className="col-12 mb-4">
                        <div className="card shadow-lg">
                            <div className="card-header bg-warning text-white text-center" onClick={() => toggleDay("tuesday")} style={{ cursor: "pointer" }}>
                                <h4>Tuesday</h4><ExpandMoreIcon color="disabled"  fontSize="large"/>
                            </div>
                            {isOpen.tuesday && (
                                <div className="card-body">
                                    <StrengthTable type="hip" week={week} reps={reps} sets={sets} amount={amount} holdingTime={holdingTime} />
                                    <StrengthTable type="core" week={week} reps={reps} sets={sets} amount={amount} holdingTime={holdingTime} />
                                    <StrengthTable type="basics" week={week} reps={reps} sets={sets} amount={amount} holdingTime={holdingTime} />
                                </div>
                            )}
                            
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Wednesday */}
                    <div className="col-12 mb-4">
                        <div className="card shadow-lg">
                            <div className="card-header bg-warning text-white text-center" onClick={() => toggleDay("wednesday")} style={{ cursor: "pointer" }}>
                                <h4>Wednesday</h4><ExpandMoreIcon color="disabled"  fontSize="large"/>
                            </div>
                            {isOpen.wednesday && (
                                <div className="card-body">
                                    <PushupTable week={pushupWeek} />
                                    <StrengthTable type="arm_variations" week={week} reps={reps} sets={sets} amount={amount} holdingTime={holdingTime} />
                                    <StrengthTable type="beginner_forms" week={week} reps={reps} sets={sets} amount={amount} holdingTime={holdingTime} />
                                    <StrengthTable type="higher_forms" week={week} reps={reps} sets={sets} amount={amount} holdingTime={holdingTime} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Thursday */}
                    <div className="col-12 mb-4">
                        <div className="card shadow-lg">
                            <div className="card-header bg-warning text-white text-center" onClick={() => toggleDay("thursday")} style={{ cursor: "pointer" }}>
                                <h4>Thursday</h4><ExpandMoreIcon color="disabled"  fontSize="large"/>
                            </div>
                            {isOpen.thursday && (
                                <div className="card-body">
                                    <StrengthTable type="hip" week={week} reps={reps} sets={sets} amount={amount} holdingTime={holdingTime} />
                                    <StrengthTable type="core" week={week} reps={reps} sets={sets} amount={amount} holdingTime={holdingTime} />
                                    <StrengthTable type="tai_chi_forms" week={week} reps={reps} sets={sets} amount={amount} holdingTime={holdingTime} />
                                </div> 
                            )}
                            
                        </div>
                    </div>

                    {/* Friday */}
                    <div className="col-12 mb-4">
                        <div className="card shadow-lg">
                            <div className="card-header bg-warning text-white text-center"  onClick={() => toggleDay("friday")} style={{ cursor: "pointer" }}>
                                <h4>Friday</h4><ExpandMoreIcon color="disabled"  fontSize="large"/>
                            </div>
                            {isOpen.friday && (
                                <div className="card-body">
                                    <p>Group Training</p>
                                </div> 
                            )} 
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Saturday */}
                    <div className="col-12 mb-4">
                        <div className="card shadow-lg">
                            <div className="card-header bg-warning text-white text-center" onClick={() => toggleDay("saturday")} style={{ cursor: "pointer" }}>
                                <h4>Saturday</h4><ExpandMoreIcon color="disabled"  fontSize="large"/>
                            </div>
                            {isOpen.saturday && (
                                <div className="card-body">
                                    <p>Rest Day</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default WeekSchedule;
