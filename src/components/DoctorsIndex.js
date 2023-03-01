import React, { useState } from 'react';
<<<<<<< HEAD:src/components/DoctorsIndex.js
import { useSelector } from 'react-redux';
import DoctorCard from './DoctorCard';

const DoctorsIndex = () => {
  const { doctors } = useSelector((state) => state.doctors);

=======
import dummyData from './dummyData';
import DoctorCard from './DoctorCard';

const DoctorsIndex = () => {
  const doctors = dummyData;
<<<<<<< HEAD:src/components/DoctorsIndex.js
>>>>>>> 04a24b0 (Add components and loggic for all doctors view and single doctors view):src/Components/DoctorsIndex.js
=======
  // const { doctors } = useSelector((state) => state.doctors);

>>>>>>> 4b242d0 (Resolved linters errors):src/Components/DoctorsIndex.js
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
