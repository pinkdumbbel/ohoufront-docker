import React, { useRef } from 'react';
import AppLayout from '@/common/appLayout/AppLayout';
import SellingForm from './SellingForm';
import SellingInfo from './SellingInfo';
import usePosition from '@/hooks/usePosition';

const SellingPage: React.FC = () => {
  const footerRef = useRef(null);
  const intersect = usePosition(footerRef);
  const sellingRef = useRef<HTMLDivElement>(null);

  //console.log(sellingRef.current?.getBoundingClientRect());

  return (
    <AppLayout>
      <div className="production-selling" ref={sellingRef}>
        <SellingForm />
        <SellingInfo intersect={intersect} />
      </div>
      <div ref={footerRef}></div>
    </AppLayout>
  );
};

export default SellingPage;
