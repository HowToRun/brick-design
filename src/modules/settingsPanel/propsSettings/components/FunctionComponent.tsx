import React, { forwardRef, memo } from 'react';
import { Input } from 'antd';
import { InputProps } from 'antd/es/input';
import split from 'lodash/split';
import { propsAreEqual } from '@/utils';

function FunctionComponent(props: InputProps, ref: any) {

  const { value, onChange, ...rest } = props;
  let splitArr = split(value as string, '.');
  splitArr.shift();//去掉this.
  const resultValue = value && splitArr.join('.');
  return (<Input
    ref={ref}
    onChange={(e: any) => {
      const { value } = e.target;
      const result: any = value && `this.${value}`;
      onChange && onChange(result);
    }}
    value={resultValue}
    allowClear
    {...rest} />);
}

export default memo(forwardRef(FunctionComponent), propsAreEqual);
