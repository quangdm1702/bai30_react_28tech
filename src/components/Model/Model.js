import { useState } from 'react';
import './Model.scss';
function Model() {

  const [showModel, setShowModel] = useState(false);

  const handleShowModel = () => {
    setShowModel(true);
  }
  const handleCloseModel = () => {
    setShowModel(false);
  }

  return (
    <>
      <button onClick={handleShowModel}>Show</button>

      {showModel && (
        <div className="model">
          <div className="model__body">
            <button className="model__close" onClick={handleCloseModel}>
              X
            </button>
            <div className="model__content">
              Noi dung...
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Model;