import React from "react";
const SlotM=(props)=>{
    // let x= "smile";
    // let y= "smile";
    // let z= "smile";
    let x=props.x;
    let y=props.y;
    let z=props.z;
    if ((x===y) && (props.y===props.z)){
        return(
            <>
                <div className="slot-inner">
                <h1> {x} {y} {z}</h1>
                <h1> This is matching  </h1>
                </div>
            </>
        );
    }
    else{
        return(
            <>
                <div className="slot-inner">
                <h1> {x} {y} {z}</h1>
                <h1> This is  not matching  </h1>
                </div>
            </>
        );
    }
}
const App = ()=>{
  return(
    <>
    <h1 className="heading-style"> Slot   Welcome To <span style={{fontWeight:"bold"}}>Slot Machie Game</span> Slot</h1>
   
    <div className="slotmachnie">
    <SlotM x= "smile" y= "smile" z= "smile"/>
    <SlotM x= "smile" y= "ile" z= "smile"/>
    <SlotM x= "smile" y= "sm" z= "smile" />
    </div>
    </>
  );
};
export default App;