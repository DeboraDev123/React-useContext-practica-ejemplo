import React, {useContext} from 'react'
import UserContext from './users/UserContext'


function Profiles() {
    const {selectedUser} = useContext(UserContext)
    console.log(selectedUser);
  return (
        <>
            {selectedUser ? (
                <div className="card card-body text-center">
                    <img 
                        src={selectedUser.avatar} 
                        className="card-img-top rounded-circle m-auto img-fluid" 
                        style={{ width: '180px' }} 
                        alt={`${selectedUser.first_name} ${selectedUser.last_name}`} 
                    />
                    <p>{`${selectedUser.first_name} ${selectedUser.last_name}`}</p>
                    <h3>Email: {selectedUser.email}</h3>
                </div>
            ) : (
                <h1>No user selected</h1> 
            )}
        </>
    );
}


export default Profiles
