import React from "react";


function Transaction({transaction}) {
    const {input, output} = transaction;
    const recipients = Object.keys(output);



return (
    <div className="Transaction">
        <div>From: {input.address}</div>
        {
            recipients.map(recipient =>(
                <div key ={recipient}>
                    To: {recipient} | sent: {output[recipient]}
                </div>
            ))
        }
    </div>  
)

}

export default Transaction;