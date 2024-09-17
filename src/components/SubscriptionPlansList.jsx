import React from 'react';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import FeatureComparisonTable from './FeatureComparisonTable';

const plans = [
  {
    name: 'Basic',
    price: '₴499',
    description: 'Для малого бізнесу',
    features: ['POS', 'Інвентаризація', 'Мобільна каса', 'Управління меню'],
  },
  {
    name: 'Pro',
    price: '₴999',
    description: 'Для зростаючого бізнесу',
    features: ['Все з Basic', 'PPO', 'Технічна підтримка 24/7', 'Складський облік', 'Програми лояльності'],
  },
  {
    name: 'Enterprise',
    price: '₴1999',
    description: 'Для великого бізнесу',
    features: ['Все з Pro', 'Необмежені товари та тех-карти', 'Управління доставками', 'Розширена аналітика'],
  },
];

const SubscriptionPlansList = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Оберіть свій тарифний план</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {plans.map((plan, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-3xl font-bold mb-4">{plan.price}<span className="text-sm font-normal">/місяць</span></p>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Підписатися зараз</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <FeatureComparisonTable />
    </div>
  );
};

export default SubscriptionPlansList;
