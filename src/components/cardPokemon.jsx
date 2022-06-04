import React from 'react';
import {useHistory} from 'react-router-dom'

export default function Card(props) {
  let history = useHistory()

  const toPage = (id) => {
    history.push("/detail/" + id)
  }
    return (
        <>
        <div className="container">
         <div  key={props.id} style={{marginBottom: '30px', marginTop: '20px'}}>
          <img src={props.img} className="card-img-top" alt={props.name}/>
          <div className="card-body">
          <h6 className="card-title" style={{textAlign: 'center'}}>{props.name}</h6>
          </div>
          <div style={{textAlign: 'center'}}>
          <button style={{marginBottom: '20px'}} className="btn btn-danger" onClick={() => {toPage(props.id)}}>Details</button>
          </div>
        </div>
        </div>
        </>
    )
}