import SvgCell from "./svg-cell";
import TextCell from "./text-cell";
import { useTheme } from "@mui/material";

import BaseCheck from '../../../assets/pages/payment-plan-page/base-check.svg?react'
import GreyCheck from '../../../assets/pages/payment-plan-page/grey-check.svg?react'
import GreyMinus from '../../../assets/pages/payment-plan-page/grey-minus.svg?react'

const GreyColumn = () => {
  const theme = useTheme()
  return (
    <>
      <SvgCell>
        <BaseCheck />
      </SvgCell>
      <SvgCell>
        <BaseCheck />
      </SvgCell>
      <SvgCell>
        <BaseCheck />
      </SvgCell>
      <SvgCell>
        <BaseCheck />
      </SvgCell>
      <SvgCell>
        <BaseCheck />
      </SvgCell>
      <SvgCell>
        <GreyCheck />
      </SvgCell>
      <SvgCell>
        <GreyCheck />
      </SvgCell>
      <SvgCell>
        <GreyCheck />
      </SvgCell>
      <SvgCell>
        <GreyCheck />
      </SvgCell>
      <SvgCell>
        <GreyCheck />
      </SvgCell>
      <SvgCell>
        <GreyCheck />
      </SvgCell>
      <SvgCell>
        <GreyCheck />
      </SvgCell>
      <TextCell text="9" align={true} color={theme.palette.input.light}/>
      <TextCell text="3" align={true} color={theme.palette.input.light}/>
      <SvgCell>
        <GreyMinus />
      </SvgCell>
    </>
  );
};

export default GreyColumn