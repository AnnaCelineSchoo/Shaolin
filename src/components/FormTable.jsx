import React from "react";

function FormTable({forms}){
    console.log(forms)
    return (
        <div>
            <h4 className="bg-black text-white text-center py-2">Forms</h4>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {/* <th>Round</th> */}
                            <th>Form Name</th>
                            <th>Reps</th>
                        </tr>
                    </thead>
                    <tbody>
                        {forms.map((form, index) =>{
                            console.log(form.name)
                            return (
                            <tr key={index}>
                                <td>{form.name}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table> 
            </div> 
        </div>
        );

}

export default FormTable;