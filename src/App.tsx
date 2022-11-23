import React, { useState } from 'react';
import Calendar from './components/Calendar';

function App() {
  const [updatedDate, setUpdatedDate] = useState<Date>(new Date());
  const onClickWhen = (date: Date) => {
    setUpdatedDate(date);
  }
  return (
    <div className='text-red-500'>
      <Calendar selectedDate={new Date()} onSelectDate={onClickWhen} />
    </div>
  );
}

export default App;
