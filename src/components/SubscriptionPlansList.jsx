import React from 'react';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const plans = [
  {
    name: 'Basic',
    price: '$9.99',
    description: 'For small businesses',
    features: ['Up to 100 transactions/month', 'Basic reporting', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$29.99',
    description: 'For growing businesses',
    features: ['Unlimited transactions', 'Advanced reporting', 'Priority support', 'Inventory management'],
  },
  {
    name: 'Enterprise',
    price: '$99.99',
    description: 'For large businesses',
    features: ['Unlimited transactions', 'Custom reporting', '24/7 support', 'Multi-location support', 'API access'],
  },
];

const SubscriptionPlansList = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Choose Your Subscription Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-3xl font-bold mb-4">{plan.price}<span className="text-sm font-normal">/month</span></p>
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
              <Button className="w-full">Subscribe Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlansList;