import React from 'react';
import AppLayout from '@/common/appLayout/AppLayout';
import SellingForm from './SellingForm';
import SellingInfo from './SellingInfo';

const SellingPage: React.FC = () => {
  return (
    <AppLayout>
      <div className="production-selling">
        <SellingForm />
        <SellingInfo />
      </div>
    </AppLayout>
  );
};

export default SellingPage;
