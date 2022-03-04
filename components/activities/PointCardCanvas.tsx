import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';

import Model from './Model';
import styled from 'styled-components';

const PointCardCanvas = () => {
  return (
    <Container>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 2], fov: 45 }}>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls enablePan={false} enableZoom={false} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;

  @media screen and (max-width: 800px) {
    margin-bottom: -4rem;
  }
`;

export default PointCardCanvas;
