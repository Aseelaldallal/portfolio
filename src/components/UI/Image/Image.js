import React from 'react';
import Auxillary from '../../../hoc/Auxillary/Auxillary';
import burger from '../../../assets/images/projectImages/burger2.PNG';

const Image = props => {
  let image = null;
  switch (props.image) {
    case 'burger':
      image = <img src={burger} alt="buildaburger" />;
      break;
    default:
      image = null;
  }

  return <Auxillary>{image}</Auxillary>;
};

export default Image;
