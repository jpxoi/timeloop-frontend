import dayjs from 'dayjs';

function SmallCalendar(month=dayjs().month(),year=dayjs().year()) {

  const FirstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const LastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  const ArrayOfDays=[];

  for(let i = FirstDateOfMonth.date(); i < LastDateOfMonth.date(); i++)
  {
    ArrayOfDays.push(FirstDateOfMonth.date(i));
  }
  return ArrayOfDays
};

export default SmallCalendar;