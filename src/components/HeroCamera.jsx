import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();

  // Define the max rotation angles (in radians)
  const maxRotationX = 0.1;  // Around 11.5 degrees for the X-axis
  const maxRotationY = 0.5;  // Around 11.5 degrees for the Y-axis

  useFrame((state, delta) => {
    // Smoothly damp the camera position
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    if (!isMobile) {
      // Calculate the desired rotation based on pointer movement
      const targetRotationX = -state.pointer.y / 3;
      const targetRotationY = -state.pointer.x / 5;

      // Clamp the rotation values
      const clampedRotationX = Math.max(-maxRotationX, Math.min(maxRotationX, targetRotationX));
      const clampedRotationY = Math.max(-maxRotationY, Math.min(maxRotationY, targetRotationY));

      // Smoothly damp the rotation of the group
      easing.dampE(
        groupRef.current.rotation,
        [clampedRotationX, clampedRotationY, 0],
        0.25,
        delta
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

export default HeroCamera;
