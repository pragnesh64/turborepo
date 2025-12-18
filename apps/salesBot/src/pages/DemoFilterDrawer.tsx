import React, { useState } from "react";
import FilterDrawer from "./../../node_modules/@my-monorepo/shared/src/components/overlay/FilterDrawer/index";
import {
  FilterModel,
  GridColumns,
} from "./../../node_modules/@my-monorepo/shared/src/components/overlay/FilterDrawer/type";
import ViewDrawer from "./../../../../packages/shared/src/components/overlay/ViewDrawer/index";
import Button from "@shared/components/primitives/Button";

export const columnsList = [
  {
    headerName: "#",
    flex: 1,
    field: "srNo",
    minWidth: 50,
    maxWidth: 80,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
  {
    field: "name",
    headerName: "Product Name",
    flex: 3,
    minWidth: 150,
    filterOperators: [
      {
        label: "Contains",
        value: "contains",
      },
      {
        label: "Equals",
        value: "equal",
      },
      {
        label: "Not Equals",
        value: "not_equal",
      },
      {
        label: "Starts With",
        value: "begins_with",
      },
      {
        label: "Ends With",
        value: "ends_with",
      },
    ],
  },
  {
    field: "created_at",
    headerName: "Created Date",
    flex: 1,
    minWidth: 200,
    dataType: "date",
    filterOperators: [
      {
        label: "Before",
        value: "less",
      },
      {
        label: "Before or Equal",
        value: "less_or_equal",
      },
      {
        label: "After",
        value: "greater",
      },
      {
        label: "After or Equal",
        value: "greater_or_equal",
      },
      {
        label: "Between",
        value: "between",
      },
      {
        label: "Not Between",
        value: "not_between",
      },
    ],
  },
  {
    field: "category__name",
    headerName: "Category",
    flex: 3,
    minWidth: 150,
    filterOperators: [
      {
        label: "Contains",
        value: "contains",
      },
      {
        label: "Equals",
        value: "equal",
      },
      {
        label: "Not Equals",
        value: "not_equal",
      },
      {
        label: "Starts With",
        value: "begins_with",
      },
      {
        label: "Ends With",
        value: "ends_with",
      },
    ],
  },
  {
    field: "description",
    headerName: "Description",
    flex: 3,
    minWidth: 150,
    filterable: false,
  },
  {
    field: "kb_article_name",
    headerName: "KB Article",
    flex: 3,
    minWidth: 150,
    filterOperators: [
      {
        label: "Contains",
        value: "contains",
      },
      {
        label: "Equals",
        value: "equal",
      },
      {
        label: "Not Equals",
        value: "not_equal",
      },
      {
        label: "Starts With",
        value: "begins_with",
      },
      {
        label: "Ends With",
        value: "ends_with",
      },
    ],
  },
  {
    field: "created_at",
    headerName: "Created Date",
    flex: 3,
    minWidth: 150,
    dataType: "date",
    filterOperators: [
      {
        label: "Before",
        value: "less",
      },
      {
        label: "Before or Equal",
        value: "less_or_equal",
      },
      {
        label: "After",
        value: "greater",
      },
      {
        label: "After or Equal",
        value: "greater_or_equal",
      },
      {
        label: "Between",
        value: "between",
      },
      {
        label: "Not Between",
        value: "not_between",
      },
    ],
  },
  {
    field: "id",
    headerName: "Actions",
    flex: 1,
    minWidth: 150,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
];

export const columns: GridColumns[] = [
  {
    headerName: "#",
    flex: 1,
    field: "srNo",
    minWidth: 50,
    maxWidth: 80,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    minWidth: 200,
    filterOperators: [
      {
        label: "Contains",
        value: "contains",
      },
      {
        label: "Equals",
        value: "equal",
      },
      {
        label: "Not Equals",
        value: "not_equal",
      },
      {
        label: "Starts With",
        value: "begins_with",
      },
      {
        label: "Ends With",
        value: "ends_with",
      },
    ],
  },
  {
    field: "products__name",
    headerName: "Products",
    flex: 1,
    minWidth: 200,
    filterOperators: [
      {
        label: "Contains",
        value: "contains",
      },
      {
        label: "Equals",
        value: "equal",
      },
      {
        label: "Not Equals",
        value: "not_equal",
      },
      {
        label: "Starts With",
        value: "begins_with",
      },
      {
        label: "Ends With",
        value: "ends_with",
      },
    ],
  },
  {
    field: "etlstatus",
    headerName: "Status",
    flex: 1,
    minWidth: 200,
    filterable: false,
  },
  {
    field: "created_at",
    headerName: "Created Date",
    flex: 1,
    minWidth: 200,
    dataType: "date",
    filterOperators: [
      {
        label: "Before",
        value: "less",
      },
      {
        label: "Before or Equal",
        value: "less_or_equal",
      },
      {
        label: "After",
        value: "greater",
      },
      {
        label: "After or Equal",
        value: "greater_or_equal",
      },
      {
        label: "Between",
        value: "between",
      },
      {
        label: "Not Between",
        value: "not_between",
      },
    ],
  },
  {
    field: "Actions",
    headerName: "Actions",
    flex: 0.7,
    minWidth: 150,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
  },
];

export const data = {
  id: "f044f669-a756-4011-a469-a0b588176944",
  name: "p1",
  category: {
    id: "c1d3c636-5a5d-4077-bf54-1757d2659c13",
    name: "p1",
  },
  description: "df cxvdfgvdf gd gd gd  gvd fg  g dfg dfgd gd gmfg fdDolore fuga Architecto nemo et dolorem dolor velit voluptas sequi quisquam temporibus Dolore fuga Architecto nemo et dolorem dolor velit voluptas sequi quisquam temporibus",
  logo: null,
  kb_article: [
    {
      id: "e7285651-1bf8-4db1-943d-cb8c06fe69a0",
      name: "Sample_Name21",
    },
    {
      id: "e7285651-1bf8-4db1-943d-cb8c06fe69a0",
      name: "Sample_Name22",
    },
    {
      id: "e7285651-1bf8-4db1-943d-cb8c06fe69a0",
      name: "Sample_Name23",
    },
    {
      id: "e7285651-1bf8-4db1-943d-cb8c06fe69a0",
      name: "Sample_Name24",
    },
  ],
  created_at: "2025-11-28T13:11:51.235246Z",
  status: {
    value: "active",
    label: "Active",
  },
  srNo: 1,
};

export const getFields = () => {
    const baseFields = [
      { label: "Name", fieldName: "name" },
      { label: "Category", fieldName: "category.name" },
      { label: "Category", fieldName: "category.name" },
      { label: "Category", fieldName: "category.name" },
      { label: "Category", fieldName: "category.name" },
      { label: "Description", fieldName: "description" },
      {
        label: "KB Article",
        fieldName: "kb_article",
        render: (value: any) =>
          Array.isArray(value) ? value.map((p: any) => p.name).join(", ") : "",
      },
    ];
    return baseFields;
  };

const DemoFilterDrawer = () => {
  const [open, setOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const onCloseFilter = () => {
    setIsFilterOpen(false);
  };
  return (
    <>
      <Button
        onclick={()=> setIsFilterOpen(true)}
      >
        Open Filter Drawer
      </Button>
      <FilterDrawer
        onClear={() => console.log("Clear Filter")}
        open={isFilterOpen}
        onClose={() =>onCloseFilter()}
        onApply={() => {
          console.log("Apply Filter");
          setIsFilterOpen(false);
        }}
        onChangeFilter={(newModel: FilterModel) => console.log(newModel)}
        columns={columns}
      />
      <Button
        onclick={showDrawer}
      >
        Open view
      </Button>

      <ViewDrawer
        title="WhatsApp Template"
        open={open}
        onClose={() => onClose()}
        rowData={data}
        fields={getFields()}
      />
    </>
  );
};

export default DemoFilterDrawer;
