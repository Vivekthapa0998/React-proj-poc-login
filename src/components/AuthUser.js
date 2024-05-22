import React from 'react';
import { useAuth } from './Auth';
import { Navigate} from 'react-router-dom';

const AuthUser = ({children}) => {
  const auth = useAuth();
  
  if(auth.user === null){
    return <Navigate to='/Signup' />
}
  else{
    return children
  }
    
  
  
  

}

export default AuthUser;
