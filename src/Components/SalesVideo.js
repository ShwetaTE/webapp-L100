import React from 'react';

function SalesVideo() {
  return (
    // Content Wrapper
    <div id="content-wrapper" className="d-flex flex-column">

      {/* Main Content */}
      <div id="content">

        {/* Begin Page Content */}
        <div className="container-fluid">

          <div className="d-flex justify-content-center align-items-center vh-80">
            <div className="card-body d-flex justify-content-center align-items-center p-0">
              <video autoPlay muted controls>
                <source 
                  src="https://stdemoassets.blob.core.windows.net/videos/L100/6.%20Microsoft%20Power%20Platform-Sales%20Video.mp4 " 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SalesVideo;
