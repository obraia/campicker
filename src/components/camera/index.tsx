import React, { useState, useEffect } from 'react';

import { Container, ExpoCamera } from './styles';

const Camera = (props: { cameraRef: React.MutableRefObject<null> }) => {

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
    </Container>
  );
}

export default Camera;