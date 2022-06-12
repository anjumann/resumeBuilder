const AuthReducer = (state , action) => {
    switch (action.type) {
        case "SIGNIN":{
            return {
                currentUser: action.payload,
            } ;
        }
    
        case "SIGNOUT":{
            return {
                currentUser: null,
            } ;
        }
            
    
        default:
            return state
            
    }
  return (
    <div>AuthReducer</div>
  )
}

export default AuthReducer