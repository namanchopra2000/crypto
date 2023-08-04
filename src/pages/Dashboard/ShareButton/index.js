import React from 'react';
import Button from '../../../components/common/Button'

const ShareButton = ({ title, url }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: url
      })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      console.warn('Web Share API not supported.');
    }
  };

  return (
    <Button onClick={handleShare} outlined={true} text="Share"/>

  );
};

export default ShareButton;
