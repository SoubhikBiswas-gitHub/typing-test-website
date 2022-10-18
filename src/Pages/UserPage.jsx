import { CircularProgress, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import Graph from '../Components/Graph';
import { useTheme } from '../Context/ThemeContext';
import { auth, db } from '../firebaseConfig';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const UserPage = () => {

  const [data, setData] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [user, loading] = useAuthState(auth);
  const {theme} = useTheme();
  const fetchUserData = () => {

    if (!loading) {
      console.log(user);
      const { uid } = auth.currentUser;
      const resultRef = db.collection('results');
      let tempData = [];
      let tempGraphData = []
      resultRef.where("userId", '==', uid).orderBy('timeStamp','desc').get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          tempData.push({ ...doc.data() });
          tempGraphData.push([doc.data().timeStamp,doc.data().wpm]);
        });
        setData(tempData);
        setGraphData(tempGraphData);
      });
    }

  }

  useEffect(() => {
    fetchUserData();
  }, [loading]);

  if (loading) {
    return (<CircularProgress size={200}/>)
  }

  return (
    
    <div className='canvas'>
      <Header/>
      <div className="central-data">
      <div className='user-profile'>
      
      <div className="user">
          <div className="picture">
            <AccountCircleIcon style={{display:'block',transform:'scale(6)'}}/>
          </div>
          <div className="info">
            <div className="email">
              {user.email}
            </div>
            <div className="joined-on">
              {user.metadata.creationTime}
            </div>
            
          </div>
      </div>
      <div className="total-times">
         Total Test Taken - {data.length}
      </div>
    </div>
    
    <div className="result-graph">
      <Graph graphData={graphData} type='date'/>
    </div>

    <div className='table'>
      <TableContainer style={{maxHeight:'30rem'}}>
        <Table>
          <TableHead >
            <TableRow>
              <TableCell style={{color:theme.title}}>
                WPM
              </TableCell>
              <TableCell style={{color:theme.title}}>
                Accuracy
              </TableCell>
              <TableCell style={{color:theme.title}}>
                Characters
              </TableCell>
              <TableCell style={{color:theme.title, textAlign:'center'}}>
                Date
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map(i => {
              return (
                <TableRow>
                  <TableCell style={{color:theme.title}}>
                    {i.wpm}
                  </TableCell>
                  <TableCell style={{color:theme.title}}>
                    {i.accuracy}
                  </TableCell>
                  <TableCell style={{color:theme.title}}>
                    {i.characters}
                  </TableCell>
                  <TableCell style={{color:theme.title}}>
                    {i.timeStamp.toDate().toString()}
                  </TableCell>
                </TableRow>
              )
            })}

          </TableBody>


        </Table>
      </TableContainer>
    </div>


      </div>
    
          
    <Footer/>
    </div>
    
    
    
    
    
    
    
    
    
  )
}

export default UserPage