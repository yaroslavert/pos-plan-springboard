import React from 'react';
import { Check, X } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const features = [
  { name: 'POS', lite: true, optimal: true, professional: true, expert: true },
  { name: 'PPO', lite: false, optimal: true, professional: true, expert: true },
  { name: 'Інвентаризація', lite: true, optimal: true, professional: true, expert: true },
  { name: 'Склади в закладі', lite: '1 шт', optimal: '1 шт', professional: '2 шт', expert: '3 шт' },
  { name: 'Мобільна каса', lite: true, optimal: true, professional: true, expert: true },
  { name: 'Касові зміни', lite: true, optimal: true, professional: true, expert: true },
  { name: 'Управління клієнтами', lite: true, optimal: true, professional: true, expert: true },
  { name: 'Управління меню', lite: true, optimal: true, professional: true, expert: true },
  { name: 'Технічна підтримка 24/7', lite: false, optimal: false, professional: true, expert: true },
  { name: 'Столи', lite: true, optimal: true, professional: true, expert: true },
  { name: 'Управління продажами зі смартфона', lite: false, optimal: true, professional: true, expert: true },
  { name: 'Постачальники', lite: false, optimal: true, professional: true, expert: true },
  { name: 'Складський облік', lite: false, optimal: true, professional: true, expert: true },
  { name: 'Звітність та аналітика', lite: false, optimal: true, professional: true, expert: true },
  { name: 'Товари та тех-карти', lite: '100 шт', optimal: '200 шт', professional: '500 шт', expert: 'Необмежено' },
  { name: 'Фінансовий облік', lite: false, optimal: false, professional: true, expert: true },
  { name: 'Програми лояльності', lite: false, optimal: false, professional: true, expert: true },
  { name: 'Управління доставками', lite: false, optimal: false, professional: false, expert: true },
  { name: 'Акції', lite: false, optimal: false, professional: true, expert: true },
  { name: 'Бронювання столів', lite: false, optimal: false, professional: true, expert: true },
];

const FeatureComparisonTable = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Порівняння функцій</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/5">Функція</TableHead>
              <TableHead>Lite</TableHead>
              <TableHead>Optimal</TableHead>
              <TableHead>Professional</TableHead>
              <TableHead>Expert</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((feature, index) => (
              <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <TableCell className="font-medium">{feature.name}</TableCell>
                <TableCell>{renderFeature(feature.lite)}</TableCell>
                <TableCell>{renderFeature(feature.optimal)}</TableCell>
                <TableCell>{renderFeature(feature.professional)}</TableCell>
                <TableCell>{renderFeature(feature.expert)}</TableCell>
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
