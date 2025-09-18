import React from 'react';

interface ProgressTrackerProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ currentStep, totalSteps }) => {
  const progressPercentage = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0;

  return (
    <div className="w-full bg-stone-200 rounded-full h-2.5 my-4 px-4">
      <div className="w-full bg-stone-200 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-amber-500 to-yellow-500 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
          role="progressbar"
          aria-valuenow={currentStep}
          aria-valuemin={0}
          aria-valuemax={totalSteps}
          aria-label={`Fortschritt: Schritt ${currentStep} von ${totalSteps}`}
        ></div>
      </div>
    </div>
  );
};

export default ProgressTracker;