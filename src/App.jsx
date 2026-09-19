import {useState } from "react"
function RobuverseRental(){
  
  return(
  <>
    <h1>Robuverse</h1>
    <p>Future Of Robotics</p>
  </>
)}
function RobotCard({robotName,rentalPrice,robotLocation,children}){
  const [bookings,setbookings] = useState(0)
  function increaseBooking(){
    setbookings(
      bookings + 1
    )
  }
  function decreaseBooking(){
    if(bookings > 0){
      setbookings(
        bookings - 1
      )
    }
  }
  return(
    <>
    <h2>{robotName}</h2>
    <p>₹{rentalPrice} / day</p>
    <p>{robotLocation}</p>
    {children}
    <p>Bookings : {bookings}</p>
    <button onClick={increaseBooking}> . Book</button>
    <button onClick={decreaseBooking}> . Remove</button>
    </>
    
)}  

function App() {
  return (
    <>
      <RobuverseRental />

      <RobotCard
        robotName="Stalker"
        rentalPrice={25000}
        robotLocation="Kannur"
      >
        ⭐ Best for Tech Fests
      </RobotCard>

      <RobotCard
        robotName="MJ Replics"
        rentalPrice={45000}
        robotLocation="Kollam"
      >
        🔥 Most Popular Rental
      </RobotCard>

      <RobotCard
        robotName="Optimus Prime"
        rentalPrice={95000}
        robotLocation="Malappuram"
      >
        ⚡ Premium Experience
      </RobotCard>
    </>
  );
}

export default App
