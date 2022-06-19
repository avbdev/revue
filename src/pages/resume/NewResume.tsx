import { FC, useState } from "react";
import { Stepper, Button, Group } from '@mantine/core';
import { ProfileStep } from "../../components/Organisms/Resume/ProfileStep";
import { WorkExperienceStep } from "../../components/Organisms/Resume/WorkExperienceStep";
import { EducationStep } from "../../components/Organisms/Resume/EducationStep";
import { SkillsStep } from "../../components/Organisms/Resume/SkillsStep";

export const NewResume: FC = () => {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">

        <Stepper.Step label="First step" description="Create or choose Profile">
          <ProfileStep />
        </Stepper.Step>

        <Stepper.Step label="Second step" description="Work Experience">
          <WorkExperienceStep />
        </Stepper.Step>

        <Stepper.Step label="Third step" description="Educational Background">
          <EducationStep />
        </Stepper.Step>

        <Stepper.Step label="Final step" description="Add Skills">
          <SkillsStep />
        </Stepper.Step>

        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>{`Back`}</Button>
        <Button onClick={nextStep}>{active === 3 ? "Review Details" : "Next step"}</Button>
      </Group>
    </>
  );
}