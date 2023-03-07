import React from 'react';

const Rank = ({name,entries}) =>{
    return(
        <div>
            <div className="white f3">
                {`${name}, your current entries count is...`}
                {/* {'CheeYen, your current rank is...'} */}
            </div>
            <div className="white f1">
                {entries}
            </div>
        </div>
    )
    // Q: Pass two props you need into the Rank component then display the message: "${name} , your current rank is...${entries}" 
}
export default Rank;