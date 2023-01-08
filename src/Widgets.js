import  FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InfoIcon from '@mui/icons-material/Info';
import React from 'react';
import './Widgets.css';

function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )


  return (
    <div className='widgets'>
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Animation will remain", 'Top news -9099 readers')}
      {newsArticle("The eminence in the shadow blows up", 'Anime update -1101 readers')}
      {newsArticle("Bibek learned redux?", 'Top news -9099 readers')}
      {newsArticle("Animation will remain", 'Top news -9099 readers')}
      {newsArticle("Is redux actually good?", 'code -125 readers')}
      {newsArticle("New source of energy?", 'Top news -603 readers')}
    </div>
  )
}

export default Widgets