import * as React from 'react'
import ButtonUnstyled, { buttonUnstyledClasses, ButtonUnstyledProps } from '@mui/core/ButtonUnstyled'
import { styled } from '@mui/system'

const CustomButtonRoot = styled('button')(
  ({ theme }) => `
    background-color: ${theme.palette.primary.main};
    padding: 12px 22px;
    border-radius: 25px;
    color: ${theme.palette.common.white};
    font-weight: 500;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 15px;
    transition: all 200ms ease;
    cursor: pointer;
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
    border: none;
  
    &:hover {
      background-color: ${theme.palette.primary.dark};
    }
  
    &.${buttonUnstyledClasses.active} {
      background-color: ${theme.palette.primary.dark};
    }
  
    &.${buttonUnstyledClasses.focusVisible} {
      outline: none;
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
      box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
    }`
)

type Props = ButtonUnstyledProps

const CustomButton = (props: Props): JSX.Element => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />
}

export default CustomButton
