import React from 'react';
import { Check, X } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const features = [
  { name: 'POS', basic: true, pro: true, enterprise: true },
  { name: 'PPO', basic: false, pro: true, enterprise: true },
  { name: 'Інвентаризація', basic: true, pro: true, enterprise: true },
  { name: 'Склади в закладі', basic: '1 шт', pro: '1 шт', enterprise: '3 шт' },
  { name: 'Мобільна каса', basic: true, pro: true, enterprise: true },
  { name: 'Касові зміни', basic: true, pro: true, enterprise: true },
  { name: 'Управління клієнтами', basic: true, pro: true, enterprise: true },
  { name: 'Управління меню', basic: true, pro: true, enterprise: true },
  { name: 'Технічна підтримка 24/7', basic: false, pro: true, enterprise: true },
  { name: 'Столи', basic: true, pro: true, enterprise: true },
  { name: 'Управління продажами зі смартфона', basic: false, pro: true, enterprise: true },
  { name: 'Постачальники', basic: false, pro: true, enterprise: true },
  { name: 'Складський облік', basic: false, pro: true, enterprise: true },
  { name: 'Звітність та аналітика', basic: true, pro: true, enterprise: true },
  { name: 'Товари та тех-карти', basic: '100 шт', pro: '200 шт', enterprise: 'Необмежено' },
  { name: 'Фінансовий облік', basic: false, pro: true, enterprise: true },
  { name: 'Програми лояльності', basic: false, pro: true, enterprise: true },
  { name: 'Управління доставками', basic: false, pro: false, enterprise: true },
  { name: 'Акції', basic: false, pro: true, enterprise: true },
  { name: 'Бронювання столів', basic: false, pro: true, enterprise: true },
];

const FeatureComparisonTable = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Порівняння функцій</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3">Функція</TableHead>
              <TableHead>Basic</TableHead>
              <TableHead>Pro</TableHead>
              <TableHead>Enterprise</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((feature, index) => (
              <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <TableCell className="font-medium">{feature.name}</TableCell>
                <TableCell>{renderFeature(feature.basic)}</TableCell>
                <TableCell>{renderFeature(feature.pro)}</TableCell>
                <TableCell>{renderFeature(feature.enterprise)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const renderFeature = (value) => {
  if (typeof value === 'boolean') {
    return value ? <Check className="text-green-500" /> : <X className="text-red-500" />;
  }
  return value;
};

export default FeatureComparisonTable;