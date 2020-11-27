import React from 'react';

const Title = () => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <a className="navbar-brand" href="#">
          <img src="../../camera.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
        </a>
        <h1 className=" m-auto">Picgram</h1>
      </nav>
      <div className="container">
        <h2 className=" mt-10 text-center">Your Pictures</h2>
        <p className=" mt-10 text-center">Taking pictures is savoring life intensely, every hundredth of a second.</p>
      </div>
    </div>
  )
}

export default Title;

