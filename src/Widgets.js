import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widget__article">
      <div className="widgets__articleleft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Cyclone: Biparjoy updates", "Tops news - 7248 readers")}
      {newsArticle("Bitcoin hits new high", "Tops news - 2,324 readers")}
      {newsArticle("Blackrock Files For Bitcoin ETF for Push Towards Cryptocurrency.", "Tops news - 524 readers")}
      {newsArticle("Infiltrators From Across The Border Behind Manipur Clashes: Chief Minister.", "Tops news - 1524 readers")}
      {newsArticle("Amazon Gets UK CMA Clearance for $1.7 Billion Roomba-Maker iRobot Acquisition.", "Tops news - 124 readers")}
      {newsArticle("China Building 'Star Wars'-Style Supership, Claims Report", "Tops news - 545 readers")}
      {newsArticle("Russia's Embassy In Israel To Open Office In Jerusalem", "Tops news - 124 readers")}
      {newsArticle("Alia, Katrina-Vicky Together At Airport Lounge, Video Is Obviously Viral.")}
    </div>
  )
}

export default Widgets