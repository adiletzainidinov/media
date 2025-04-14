import { styled } from '@mui/material';

export const Container = styled('div')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: 100,
}));

export const StyledBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '1440px',
  height: '400px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}));

export const Overlay = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  zIndex: 1,
}));

export const Background = styled('div')(() => ({
  width: '100%',
  height: '100%',
  backgroundImage: `url('https://i.pinimg.com/736x/f6/cb/03/f6cb037c2b7470108728ac0d3c7076b0.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
}));

export const TextContainer = styled('div')(() => ({
  zIndex: 2,
  color: 'white',
  padding: '20px',
  textAlign: 'center',
  h1: {
    fontSize: '34px',
    marginBottom: '35px',
    lineHeight: '1.4',
    span: {
      borderBottom: '3px solid #ff5a05',
      paddingBottom: 10,
    },
  },
  p: {
    fontSize: '18px',
    lineHeight: '1.6',
  },
  '& .tirmizi': {
    color: '#ff5a05',
    marginTop: 35,
    fontSize: 16,
    fontStyle: 'italic',
  },
  '@media (max-width: 990px)': {
    h1: {
      fontSize: '30px',
    },
    p: {
      fontSize: '16px',
    },
    '& .tirmizi': {
      fontSize: 14,
    },
  },
  '@media (max-width: 480px)': {
    h1: {
      fontSize: '26px',
    },
    p: {
      fontSize: '14px',
    },
    '& .tirmizi': {
      fontSize: 12,
    },
  },
}));
