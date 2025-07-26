import React from "react";
import GoogleMapEmbed from "./Mapcomponent";
import { mapSrc } from "../../Data";


const Map = () => {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-6">
      <GoogleMapEmbed src={mapSrc} label="TCF Technologies Location" />
    </div>
  );
};

export default Map;
