import React, { useMemo, useState } from "react";

import type { ColDef, RowSelectionOptions, Theme } from "ag-grid-community";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { priceFormat } from "../../utils/format";
import { StatusBadge } from "./StatusBadge";
import { InvoiceType } from "../../lib/interface";

ModuleRegistry.registerModules([AllCommunityModule]);

interface PropsType {
  invoices: InvoiceType[];
  setSelectedInvoices: (arg: InvoiceType[]) => void;
}

// Create new GridExample component
const InvoiceTable: React.FC<PropsType> = ({
  invoices,
  setSelectedInvoices,
}) => {
  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef<InvoiceType>[]>([
    {
      field: "id",
      resizable: false,
      headerValueGetter: () => "Number",
      cellRenderer: (params: any) => (
        <div className="font-medium">{params.value}</div>
      ),
    },
    { field: "vendor", resizable: false },
    { field: "issueDate", resizable: false, headerValueGetter: () => "Date" },
    { field: "dueDate", resizable: false },
    {
      field: "amount",
      resizable: false,
      cellRenderer: (params: any, index: number) => priceFormat(params.value),
    },
    {
      field: "priority",
      resizable: false,
      cellRenderer: (params: any) => <StatusBadge status={params.value} />,
    },
  ]);

  const defaultColDef: ColDef = {
    flex: 1,
    headerCheckboxSelection: true,
  };

  const myTheme = themeQuartz.withParams({
    rowHeight: 50,
    wrapperBorder: false,
  });
  const theme = useMemo<Theme | "legacy">(() => {
    return myTheme;
  }, [myTheme]);

  const rowSelection = useMemo<
    RowSelectionOptions | "single" | "multiple"
  >(() => {
    return {
      mode: "multiRow",
      groupSelects: "self",
      checkboxLocation: "autoGroupColumn",
    };
  }, []);

  const handleSelect = (e: any) => {
    if (e.selectedNodes.length > 0) {
      setSelectedInvoices(e.selectedNodes.map((item: any) => item.data));
      console.log(e.selectedNodes.map((item: any) => item.data));
    }
  };

  // Container: Defines the grid's theme & dimensions.
  return (
    <div style={{ width: "100%", height: 350 }}>
      <AgGridReact
        rowData={invoices}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        suppressAutoSize={true}
        theme={theme}
        rowSelection={rowSelection}
        suppressAggFuncInHeader={true}
        onSelectionChanged={handleSelect}
      />
    </div>
  );
};

export default InvoiceTable;
