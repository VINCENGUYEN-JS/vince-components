import { useLocation } from 'react-router-dom';

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const useDocumentTitle = () => {
  const location = useLocation();
  const urlParts = capitalizeFirstLetter(location.pathname.split('/')[1]);
  document.title = urlParts.concat(' - Vince Design');
};

export default useDocumentTitle;
