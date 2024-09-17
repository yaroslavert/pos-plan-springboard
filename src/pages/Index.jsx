import React from 'react';
import SubscriptionPlansList from '../components/SubscriptionPlansList';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto py-6">
          <h1 className="text-3xl font-bold text-gray-900">Тарифні плани для POS-системи</h1>
        </div>
      </header>
      <main>
        <SubscriptionPlansList />
      </main>
    </div>
  );
};

export default Index;
