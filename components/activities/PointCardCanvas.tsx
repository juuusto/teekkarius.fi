import { Suspense } from 'react';
// @ts-ignore
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';

import Model from './Model';
import styled from 'styled-components';

const PointCardCanvas = () => {
  return (
    <Container>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 2], fov: 45 }}>
        <Suspense fallback={null}>
          <planeGeometry args={[10, 10]} />
          <Model />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={1}
          />
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
    margin-bottom: -1rem;
  }
`;

export default PointCardCanvas;
