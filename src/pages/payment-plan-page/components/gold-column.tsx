import SvgCell from "./svg-cell";
import TextCell from "./text-cell";

import BaseCheck from '../../../assets/pages/payment-plan-page/base-check.svg?react'
import GreyCheck from '../../../assets/pages/payment-plan-page/grey-check.svg?react'
import GoldCheck from '../../../assets/pages/payment-plan-page/gold-check.svg?react'


const GoldColumn = () => {
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
      <TextCell text="15" align={true} color='#AE8625'/>
      <TextCell text="Неограниченно" align={true} color='#AE8625'/>
      <SvgCell>
        <GoldCheck />
      </SvgCell>
    </>
  );
};

export default GoldColumn