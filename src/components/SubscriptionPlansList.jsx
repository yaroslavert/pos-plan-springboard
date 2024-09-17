import React from 'react';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import FeatureComparisonTable from './FeatureComparisonTable';

const plans = [
  {
    name: 'Lite',
    price: '₴299',
    description: 'Для початківців',
    features: ['POS', 'Інвентаризація', 'Мобільна каса', 'Управління меню'],
  },
  {
    name: 'Optimal',
    price: '₴599',
    description: 'Для малого бізнесу',
    features: ['Все з Lite', 'PPO', 'Складський облік', 'Звітність та аналітика'],
  },
  {
    name: 'Professional',
    price: '₴999',
    description: 'Для зростаючого бізнесу',
    features: ['Все з Optimal', 'Технічна підтримка 24/7', 'Програми лояльності', 'Фінансовий облік'],
  },
  {
    name: 'Expert',
    price: '₴1999',
    description: 'Для великого бізнесу',
    features: ['Все з Professional', 'Управління доставками', 'Розширена аналітика', 'Необмежені товари та тех-карти'],
  },
];

const SubscriptionPlansList = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Оберіть свій тарифний план</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
