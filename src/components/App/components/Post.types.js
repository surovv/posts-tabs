import PropTypes from 'prop-types';

export const post = PropTypes.shape({
  uid: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
});

export const comment = PropTypes.shape({
  uid: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
});
