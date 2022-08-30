import React from 'react';
import { motion, AnimatePresence, MotionProps } from 'framer-motion';
import { styled } from '@storybook/theming';

const SidebarWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const Instance = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`;

interface SidebarProps extends MotionProps {
  type: 'rangeSlider' | 'timeFrame';
  activeStory: string;
}

export const Sidebar = ({ activeStory, type = 'rangeSlider', ...props }: SidebarProps) => {
  const modifyingControls = ['start-time', 'end-time'].includes(activeStory);

  return (
    <SidebarWrapper {...props}>
      {type === 'rangeSlider' && (
        <AnimatePresence initial={false}>
          <Instance key={activeStory} src={`images/develop/sidebar-rs-${activeStory}.svg`} alt="" />
        </AnimatePresence>
      )}
      {type === 'timeFrame' && (
        <AnimatePresence initial={false}>
          <Instance
            key={modifyingControls ? 'all-day' : activeStory}
            src={`images/develop/sidebar-tf-${modifyingControls ? 'all-day' : activeStory}.svg`}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          />
        </AnimatePresence>
      )}
    </SidebarWrapper>
  );
};
