import React, { useState } from 'react';
import dummyData from './dummyData';
import DoctorCard from './DoctorCard.js';

const DoctorsIndex = () => {
  const doctors = dummyData;
  const [page, setPage] = useState(1);
  const pag = 3;
  const pagMax = Math.ceil((doctors.length / pag));

  const handlePageChange = (type) => {
    if (page + type > 0 && (page + type) <= pagMax) {
      setPage((prevState) => prevState + type);
    }
  };

  const filteredDocs = doctors.slice((page - 1) * 3, ((page - 1) * 3) + 3);
  return (
    <div className="doctors-card-container">
      {
        filteredDocs.map(
          (doctor) => <DoctorCard key={JSON.stringify(doctor)} doctor={doctor} />,
        )
      }
      <button type="button" onClick={() => handlePageChange(-1)}>prev</button>
      <button type="button" onClick={() => handlePageChange(1)}>next</button>
    </div>
  );
};

export default DoctorsIndex;
