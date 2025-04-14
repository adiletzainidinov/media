import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
// import { MdLanguage } from 'react-icons/md';
// import { useDispatch } from 'react-redux';
import MailIcon from '@mui/icons-material/Mail';
// import { GoSingleSelect } from 'react-icons/go';
// import { useState } from 'react';
// import { BurgerOpen } from '../headerStyle';
// import { languageFalse, languageTrue } from '../../../store/slices/umra-slice/umraSlice';
// import Button from '../../../shared/UI/button/Button';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PropTypes from 'prop-types';

const ListSideBar = ({ anchor }) => {
  // const dispatch = useDispatch();
  // const { languageStore } = useSelector((state) => state.umra);
  // const [language, setLanguage] = useState(false);

  // const toggleLanguage = () => {
  //   setLanguage((prev) => !prev);
  // };

  // const handleLanguageTrue = () => {
  //   dispatch(languageTrue());
  // };

  // const handleLanguageFalse = () => {
  //   dispatch(languageFalse());
  // };

  return (
    <>
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
      >
        {/* <List>
          {[languageStore ? 'Кыргызча' : 'Русский'].map((text, index) => (
            <ListItem
              style={{ position: 'relative' }}
              key={text}
              disablePadding
              onClick={toggleLanguage}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <MdLanguage fontSize="1.5rem" />
                  ) : (
                    <MailIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
                <GoSingleSelect style={{ marginRight: 65 }} />
              </ListItemButton>
              {language && (
                <BurgerOpen style={{ minHeight: 200, right: 40 }}>
                  <p
                    style={{
                      marginBottom: 10,
                      fontSize: 22,
                      cursor: 'pointer',
                    }}
                    onClick={handleLanguageTrue}
                  >
                    Кыргызча
                  </p>
                  <Divider />

                  <p
                    style={{
                      marginBottom: 10,
                      fontSize: 22,
                      cursor: 'pointer',
                      marginTop: 10,
                    }}
                    onClick={handleLanguageFalse}
                  >
                    Русский
                  </p>
                  <Divider />

                  <Button
                    style={{ marginTop: 20, zIndex: 11 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLanguage(false);
                    }}
                  >
                    Назад
                  </Button>
                </BurgerOpen>
              )}
            </ListItem>
          ))}
        </List> */}
        <Divider />
        <List>
          {['All mail'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default ListSideBar;

ListSideBar.propTypes = {
  anchor: PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
};
