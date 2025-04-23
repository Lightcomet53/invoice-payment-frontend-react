import React, { useMemo } from "react";
import type {
  ColDef,
  RowSelectionOptions,
  Theme,
  SelectionChangedEvent,
} from "ag-grid-community";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { priceFormat } from "../../utils/helpers/formatting";
import StatusBadge from "./StatusBadge";
import { StatusType } from "../../utils/constants/constants";
import { InvoiceType } from "../../types/interface";

ModuleRegistry.registerModules([AllCommunityModule]);

interface InvoiceTableProps {
  invoices: InvoiceType[];
  setSelectedInvoices: (invoices: InvoiceType[]) => void;
}

const InvoiceTable: React.FC<InvoiceTableProps> = ({
  invoices,
  setSelectedInvoices,
}) => {
  const columnDefinitions = useMemo<ColDef<InvoiceType>[]>(
    () => [
      {
        field: "id",
        resizable: false,
        headerValueGetter: () => "Number",
        cellRenderer: (params: { value: string }) => (
          <div className="font-medium">{params.value}</div>
        ),
      },
      {
        field: "vendor",
        resizable: false,
      },
      {
        field: "issueDate",
        resizable: false,
        headerValueGetter: () => "Date",
      },
      {
        field: "dueDate",
        resizable: false,
      },
      {
        field: "amount",
        resizable: false,
        cellRenderer: (params: { value: number }) => priceFormat(params.value),
      },
      {
        field: "priority",
        resizable: false,
        cellRenderer: (params: { value: StatusType }) => (
          <StatusBadge status={params.value} />
        ),
      },
    ],
    []
  );

  const defaultColDef = useMemo<ColDef>(
    () => ({
      flex: 1,
      headerCheckboxSelection: true,
    }),
    []
  );

  const gridTheme = useMemo<Theme>(() => {
    return themeQuartz.withParams({
      rowHeight: 50,
      wrapperBorder: false,
      wrapperBorderRadius: 0,
    });
  }, []);

  const rowSelection = useMemo<RowSelectionOptions>(
    () => ({
      mode: "multiRow",
      groupSelects: "self",
      checkboxLocation: "autoGroupColumn",
    }),
    []
  );

  const handleSelectionChanged = (event: SelectionChangedEvent) => {
    const selectedNodes = event.api.getSelectedNodes();
    const selectedData = selectedNodes
      .map((node) => node.data as InvoiceType)
      .filter(Boolean);
    setSelectedInvoices(selectedData);
  };

  return (
    <div className="mb-10">
      <AgGridReact
        rowData={invoices}
        columnDefs={columnDefinitions}
        defaultColDef={defaultColDef}
        suppressAutoSize={true}
        theme={gridTheme}
        rowSelection={rowSelection}
        suppressAggFuncInHeader={true}
        onSelectionChanged={handleSelectionChanged}
        domLayout="autoHeight"
      />
    </div>
  );
};

export default InvoiceTable;
