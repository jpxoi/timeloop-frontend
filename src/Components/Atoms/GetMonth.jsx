import React from 'react';
import dayjs from 'dayjs';

function GetMonth() {
  dayjs.locale('en');
  const FormatMonth = dayjs().format('MMMM');
  return <div>{FormatMonth}</div>
}

export default GetMonth;