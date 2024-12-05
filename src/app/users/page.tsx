"use client"
import React from 'react'
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetUsersQuery } from '@/state/api';

function UsersPage() {
    const { data: users, isError, isLoading } = useGetUsersQuery();
    if (isLoading) {
        return <div className="py-4">Loading...</div>;
      }
    
      if (isError || !users) {
        return (
          <div className="text-center text-red-500 py-4">
            Failed to fetch products
          </div>
        );
      }
    const columns: GridColDef[] = [
        { field: "userId", headerName: "ID", width: 90 },
        { field: "name", headerName: "User Name", width: 150 },
        {
          field: "email",
          headerName: "Email",
          width: 200,
        }
      ];

  return (
    <div className="flex flex-col">
      <Header name="Inventory" />
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row.userId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      />
    </div>
  )
}

export default UsersPage