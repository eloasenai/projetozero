import React, { useState } from 'react';

const MovieCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div onClick={toggleModal}>    
      </div>
      {isModalOpen && (
        <MovieDescription
          apiUrl={props.apiUrl}
          movieID={props.imdbID}
          click={toggleModal}
        />
      )}
    </>
  );
};

export default MovieCard;