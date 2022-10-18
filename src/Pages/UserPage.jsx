import { CircularProgress, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import Graph from '../Components/Graph';
import { useTheme } from '../Context/ThemeContext';
import { auth, db } from '../firebaseConfig';

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
      resultRef.where("userId", '==', uid).get().then((snapshot) => {
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
    
    <>
    
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
    
    </>
    
    
    
    
    
    
    
    
    
  )
}

export default UserPage