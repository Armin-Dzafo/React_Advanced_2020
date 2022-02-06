import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';
const Product = ({ image, name, price }) => {
  // since image prop is an object, we can prevent reading undefined objects with this line
  // if the image object exists, store its url attribute in the url const variable
  const url = image && image.url;
  return (
    <article className='product'>
      <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name}</h4>
      <p>${price || 999999}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// prop type approach

// Product.defaultProps = {
//   name: 'default name',
//   price: 999999,
//   image: defaultImage,
// };

export default Product;
