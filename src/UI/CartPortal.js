import ReactDOM from 'react-dom';

const CartPortal = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById('modal-root')
  );
};

export default CartPortal;