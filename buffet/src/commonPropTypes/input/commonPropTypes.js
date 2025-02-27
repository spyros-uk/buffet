import PropTypes from 'prop-types';

export default {
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  tabIndex: PropTypes.string,
};
