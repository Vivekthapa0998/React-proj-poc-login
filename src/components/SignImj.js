import React from 'react';

function SignImj() {
  return (
    <div>
      <div className='right_data mt-5' style={{width:"100%"}}>
            <div className='sign_svg mt-5'>
              <img src={process.env.PUBLIC_URL+'/img11.jpg'} style={{maxWidth:400}}  alt='no image'></img>
            </div>
          </div>
    </div>
  );
}

export default SignImj;
