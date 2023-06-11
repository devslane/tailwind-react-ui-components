import React, { FC, ReactElement } from 'react';
import RCTooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

export enum TooltipTrigger {
  HOVER = 'hover',
  CLICK = 'click',
  FOCUS = 'focus',
}

export enum TooltipPlacement {
  TOP = 'top',
  LEFT = 'left',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  TOP_LEFT = 'topLeft',
  TOP_RIGHT = 'topRight',
  BOTTOM_LEFT = 'bottomLeft',
  BOTTOM_RIGHT = 'bottomRight',
  LEFT_TOP = 'leftTop',
  LEFT_BOTTOM = 'leftBottom',
  RIGHT_TOP = 'rightTop',
  RIGHT_BOTTOM = 'rightBottom',
}

interface TooltipProps {
  children: ReactElement;
  text: string;
  arrow?: boolean;
  trigger?: TooltipTrigger[];
  placement?: TooltipPlacement;
  zIndex?: number;
}

const Tooltip: FC<TooltipProps> = ({
  children,
  text,
  arrow,
  trigger,
  placement,
  zIndex,
}) => (
  <RCTooltip
    placement={placement}
    trigger={trigger}
    showArrow={arrow}
    overlay={<span>{text}</span>}
    zIndex={zIndex}
  >
    {children}
  </RCTooltip>
);

export default Tooltip;
