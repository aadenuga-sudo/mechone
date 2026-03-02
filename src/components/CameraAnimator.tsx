import { useEffect, forwardRef, useImperativeHandle } from 'react';
import { useCameraAnimation } from '@/hooks/useCameraAnimation';
import type { CameraView } from '@/components/CameraControls';

interface CameraAnimatorProps {
  controlsRef: React.RefObject<any>;
  targetView: CameraView | null;
  onAnimationComplete?: () => void;
}

export interface CameraAnimatorHandle {
  animateToView: (view: CameraView) => void;
}

const CameraAnimator = forwardRef<CameraAnimatorHandle, CameraAnimatorProps>(
  ({ controlsRef, targetView, onAnimationComplete }, ref) => {
    const { animateCamera } = useCameraAnimation(controlsRef);

    useImperativeHandle(ref, () => ({
      animateToView: (view: CameraView) => {
        animateCamera(view);
      },
    }));

    useEffect(() => {
      if (targetView) {
        animateCamera(targetView);
        onAnimationComplete?.();
      }
    }, [targetView, animateCamera, onAnimationComplete]);

    return null;
  }
);

CameraAnimator.displayName = 'CameraAnimator';

export default CameraAnimator;
