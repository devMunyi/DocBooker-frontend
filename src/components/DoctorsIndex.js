import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

import DoctorCard from './DoctorCard';
import './css/doctors_index.css';

const DoctorsIndex = () => {
  const { doctors } = useSelector((state) => state.doctors);

  if (doctors) {
    localStorage.setItem('doctors', JSON.stringify(doctors));
  }

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
    <div className="doctors-index-container">
      <div className="doctors-card-container">
        {
          filteredDocs.map(
            (doctor) => <DoctorCard key={JSON.stringify(doctor)} doctor={doctor} />,
          )
        }
      </div>
      <button data-testid="prev-button" name="prev-button" className={`pag-button prev-button ${page > 1 && 'active-button'}`} type="button" onClick={() => handlePageChange(-1)}>
        <BiLeftArrow />
      </button>
      <button data-testid="next-button" className={`pag-button next-button ${page < pagMax && 'active-button'}`} type="button" onClick={() => handlePageChange(1)}>
        <BiRightArrow />
      </button>
    </div>
  );
};

export default DoctorsIndex;
