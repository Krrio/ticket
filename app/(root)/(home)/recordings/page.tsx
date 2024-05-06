import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"; // Importing the arrow icon

const shoppingList = [
  { id: 1, name: 'Strój Kąpielowy', quantity: 1, icon: '🩱' },
  { id: 2, name: 'Tropikalny Stich', quantity: 1, icon: '🌴' },
  { id: 3, name: 'Przewodnik', quantity: 1, icon: '📖' },
  { id: 4, name: 'Szczepionka', quantity: "1", icon: '💉' },
  { id: 5, name: 'Wrażenia', quantity: "99999", icon: '✨' },
];

const Page = () => {
  return (
    <div className="flex flex-col items-center h-screen pt-8">
      <div className="bg-white rounded-lg p-4 w-full shadow-md">
        <h2 className="text-lg font-bold mb-4">Shopping Bag</h2>
        {shoppingList.map(item => (
          <div key={item.id} className="flex justify-between items-center border-b border-gray-200 py-2">
            <div className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>
            <span>{item.quantity}</span>
          </div>
        ))}
      </div>
      <Button
        variant="outline" 
        className="bg-white text-black border border-gray-300 rounded-lg flex items-center gap-2 mt-4"
      >
        Checkout <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default Page;
