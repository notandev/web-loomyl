import PropTypes from 'prop-types';
import '../../styles/Inputbox.css';

function Inputbox({ type, placeholder, icon, value, onChange, ...props }) {
  return (
    <div>
      <div className="input-box">
        <input {...props} type={type || 'text'} placeholder={placeholder || ''} value={value} onChange={onChange} />
        <i className={icon || ''}></i>
      </div>
    </div>
  );
}

Inputbox.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Inputbox;
