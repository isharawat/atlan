import React from 'react'

const TabComponent = ({tab}) => {
  return (
    <div style={
        {
            cursor: "pointer",
            width: "150px",
            fontSize: "15px",
            display: "inline-block",
        }
    }>
      <span>{tab.name}</span>
      <div style={
        {
            display: "inline-block",
            width: "30px",
            backgroundColor: "green",
            color: "white",
            margin: "5px",
        }
    }>del</div>
    </div>
  )
}

export default TabComponent;
