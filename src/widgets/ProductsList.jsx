// src/widgets/ProductsList.jsx
import React from 'react';
import Card from '../components/Card';
import { productsData } from '../data/mockData';

const ProductsList = () => (
    <Card className="col-span-12 lg:col-span-4">
        <h2 className="text-xl font-semibold text-white mb-4">Products</h2>
        <table className="w-full text-left">
            <thead>
                <tr className="text-sm text-slate-400 border-b border-slate-700">
                    <th className="py-3 font-normal">Products</th>
                    <th className="py-3 font-normal text-right">Price</th>
                </tr>
            </thead>
            <tbody>
                {productsData.map((product, index) => (
                    <tr key={index} className="border-b border-slate-800">
                        <td className="py-4">
                            <p className="font-medium text-white">{product.name}</p>
                            <p className="text-sm text-slate-400">{product.stock} in stock</p>
                        </td>
                        <td className="py-4 text-right font-semibold text-white">${product.price.toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Card>
);

export default ProductsList;
