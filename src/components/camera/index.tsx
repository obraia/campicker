import React, { useState, useEffect } from 'react';

import { Container, ExpoCamera, ButtonShot, InnerButtonShot } from './styles';

const Camera = (props: { cameraRef: React.MutableRefObject<null>, takePicture?: () => void }) => {

  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await ExpoCamera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  return (
    <Container>
      <ExpoCamera
        ref={props.cameraRef}
        ratio={'1:1'} />
      <ButtonShot onPress={props.takePicture}>
        <InnerButtonShot />
      </ButtonShot>
    </Container>
  );
}

export default Camera;