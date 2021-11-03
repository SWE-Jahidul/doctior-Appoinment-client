import React from "react";
import Navigation from "../../../Sheard/Navigation/Navigation";
import AppoinmnetHeader from "../Appointmentheader/AppoinmnetHeader";
import AvailableAppoinment from "../AvailableAppointment/AvailableAppoinment";

const Appointment = () => {

    const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <Navigation></Navigation>
      <AppoinmnetHeader date={date} setDate={setDate}> </AppoinmnetHeader>
      <AvailableAppoinment  date={date} ></AvailableAppoinment>
    </div>
  );
};

export default Appointment;
