import { FloatingDecor, FloatingDecor2, FloatingDecor3, FloatingDecor4, Img3D, Img3DContainer, Img3DWrapper, RightContainer } from './homeStyle';


const RightHome = () => {
  return (
    <RightContainer>
      <Img3DContainer>
        <Img3DWrapper>
          <Img3D src={'https://i.pinimg.com/736x/f3/fb/c5/f3fbc5f026acfe830a53409624ae4765.jpg'} alt="mekkeImg" /> 
          <FloatingDecor /> 
          <FloatingDecor2 /> 
        </Img3DWrapper>

        <Img3DWrapper>
          <Img3D style={{marginTop: 130}} src={'https://i.pinimg.com/736x/14/12/eb/1412eb3746b855b8b7427e8a6cd1861c.jpg'} alt="mekkeImgGorod" /> 
          <FloatingDecor3 /> 
          <FloatingDecor4 /> 
        </Img3DWrapper>
      </Img3DContainer>
    </RightContainer>
  );
};

export default RightHome;
