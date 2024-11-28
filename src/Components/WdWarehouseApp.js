import React from 'react';
import WarehouseFlow from '../assets/Warehouse Application Flow for Power Platform - L100.png'

function WdWarehouseApp() {
  return (
    // Content Wrapper
    <div id="content-wrapper" className="d-flex flex-column">

      {/* Main Content */}
      <div id="content">

        {/* Begin Page Content */}
        <div className="container-fluid">

          <div className="d-flex justify-content-center align-items-center vh-80">
            <div className="card-body d-flex justify-content-center align-items-center p-0">
              <img
                src={WarehouseFlow}
                alt="Brand Logo"
                style={{ height: '89vh', width: '180vh' }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default WdWarehouseApp;
