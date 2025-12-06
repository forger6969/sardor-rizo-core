import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import marscoin from "../assets/mars-coin.svg";

const attendanceDates = [
  "06.12", "09.12", "11.12", "13.12",
  "16.12", "18.12", "20.12", "23.12",
  "25.12", "27.12", "30.12"
];

const StudentList = ({ group }) => {
  const [attendanceState, setAttendanceState] = useState([]);

  // AUTO FILL missing attendance days
  useEffect(() => {
    if (group?.students) {
      const normalized = group.students.map(student => {
        const arr = [...student.attendance];

        // yetishmayotgan joylarga false qo‘shamiz
        while (arr.length < attendanceDates.length) {
          arr.push(false);
        }

        return arr;
      });

      setAttendanceState(normalized);
    }
  }, [group]);

  const toggleAttendance = (sIdx, dIdx) => {
    setAttendanceState(prev => {
      const newState = [...prev];

      // fallback: agar hali mavjud bo‘lmasa false qo‘yib beramiz
      if (newState[sIdx][dIdx] === undefined) {
        newState[sIdx][dIdx] = false;
      }

      newState[sIdx][dIdx] = !newState[sIdx][dIdx];
      return newState;
    });
  };

  return (
    <div className="relative w-full">
      <div className="overflow-x-auto w-full">
        <table className="table-auto border-collapse border border-gray-300 w-max min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="sticky left-0 z-20 bg-gray-100 border border-gray-300 px-2">
                Students list
              </th>

              {attendanceDates.map((date, i) => (
                <th key={i} className="px-3 py-1 text-center min-w-[60px] border border-gray-300">
                  {date}
                </th>
              ))}

              <th className="sticky right-[240px] bg-gray-100 border border-gray-300 z-10 px-2">Today</th>
              <th className="sticky right-[165px] bg-gray-100 border border-gray-300 z-10 px-2">General</th>
              <th className="sticky right-0 bg-gray-100 border border-gray-300 z-10 px-2 flex items-center gap-1 justify-center py-2">
                <img src={marscoin} className='w-5 h-5' alt="" />
                {group?.students?.length * 100}
              </th>
            </tr>
          </thead>

          <tbody>
            {group?.students?.map((student, sIdx) => (
              <tr key={student.id} className="text-center">

                <th className="sticky left-0 z-20 bg-white border border-gray-300 px-2 text-left">
                  {sIdx + 1}. {student.surname} {student.name}
                </th>

                {attendanceState[sIdx]?.map((att, dIdx) => (
                  <td
                    key={dIdx}
                    onClick={() => toggleAttendance(sIdx, dIdx)}
                    className={`text-center px-3 py-1 min-w-[60px] border border-gray-300 cursor-pointer font-bold text-white ${
                      att ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {att ? <Check className="mx-auto" /> : "Y"}
                  </td>
                ))}

                <td className="sticky right-[230px] bg-white border border-gray-300 font-bold text-yellow-500 px-2">
                  {student.dailyCoins}
                </td>

                <td className="sticky right-[160px] bg-white border border-gray-300 font-bold text-yellow-500 px-2">
                  {student.coins}
                </td>

                <td className="sticky right-0 bg-white border border-gray-300 px-2">
                  <input
                    type="text"
                    placeholder="0"
                    max={student.coins}
                    className="py-1 shadow-inner px-2 w-12 text-center text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#2CC5E4]"
                  />
                  <button className="btn btn-sm btn-primary ml-1">Coin</button>
                  <button className="btn btn-sm btn-secondary ml-1">PDF</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
