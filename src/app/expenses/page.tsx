"use client"
import { useGetExpenseQuery } from '@/state/api';
import React, { useMemo, useState } from 'react'
import Header from '../(components)/Header';
import { Pie, PieChart } from 'recharts';

function Expense() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const {
        data: expensesData,
        isLoading,
        isError,
    } = useGetExpenseQuery();
    const expenses = useMemo(() => expensesData ?? [], [expensesData]);

    const parseDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toISOString().split("T")[0];
    };
    const classNames = {
        label: "block text-sm font-medium text-gray-700",
        selectInput:
            "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md",
    };

    if (isLoading) {
        return <div className="py-4">Loading...</div>;
    }

    if (isError || !expensesData) {
        return (
            <div className="text-center text-red-500 py-4">
                Failed to fetch expenses
            </div>
        );
    }
    return (
        <div>
            <div className="mb-5">
                <Header name="Expenses" />
                <p className="text-sm text-gray-500">
                    A visual representation of expenses over time.
                </p>
            </div>

            {/* FILTERS */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="w-full md:w-1/3 bg-white shadow rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">
                        Filter by Category and Date
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="category" className={classNames.label}>
                                Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                className={classNames.selectInput}
                                defaultValue="All"
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option>All</option>
                                <option>Office</option>
                                <option>Professional</option>
                                <option>Salaries</option>
                            </select>
                        </div>
                        
                        <div>
                            <label htmlFor=''>Start Date</label>
                            <input
                            type='date'
                            id='start-date'
                            name='start-date'
                            className={classNames.selectInput}
                            onChange={(e)=>setStartDate(e.target.value)}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor=''>End Date</label>
                            <input
                            type='date'
                            id='end-date'
                            name='end-date'
                            className={classNames.selectInput}
                            onChange={(e)=>setEndDate(e.target.value)}
                            />
                        </div>

                        <div className='flex-grow bg-white shadow rounded-lg p-4 md:p-6'>
                            <PieChart>
                                <Pie
                                    data={expenses}
                                    cx="50%"
                                    cy="50%"
                                    label
                                    outerRadius={150}
                                    fill="#8884d8"
                                    dataKey={"amount"}
                                    
                                />
                            </PieChart>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Expense