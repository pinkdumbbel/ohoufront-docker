import { SetFieldsStateAction } from '@/types/common';
import { hidefindDOMNodeError } from '@/utils/func';
import { FieldData } from 'rc-field-form/lib/interface';
import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import { Address } from 'react-daum-postcode/lib/loadPostcode';

interface OrderPostCodeProps {
  showPostCode?: boolean;
  setShowPostCode: (value: React.SetStateAction<boolean>) => void;
  setFields?: SetFieldsStateAction<FieldData[]>;
}

const OrderPostCode: React.FC<OrderPostCodeProps> = (props) => {
  hidefindDOMNodeError();

  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    console.log(data.zonecode);
    console.log(fullAddress);
    props.setShowPostCode(false);
    if (props.setFields)
      props.setFields([
        { name: 'orderZipCode', value: data.zonecode },
        { name: 'orderAdress', value: fullAddress },
      ]);
  };

  return <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />;
};

const postCodeStyle: React.CSSProperties = {
  width: '400px',
  height: '500px',
};

export default OrderPostCode;
