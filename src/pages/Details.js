import React from 'react';

function Details({dayInfo,iconUrl,maxTemp,minTemp}) {
  //day info, max temo,, min temp , icon

  return (
   <div  style={{flexDirection:'row'}} className='itemWrapper'> 
     <h5>{dayInfo}</h5>
     <div>
     <img src={iconUrl} alt='new'/>
     </div>
     <div>
        <span>{minTemp}°C</span> <span>{''}</span>
        <span>{maxTemp}°C</span>
     </div>

   </div>

  );
}

export default Details;
