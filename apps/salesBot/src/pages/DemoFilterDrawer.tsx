import { useState } from "react";
import FilterDrawer from "./../../node_modules/@my-monorepo/shared/src/components/overlay/FilterDrawer/index";
import {
  FilterModelType,
  GridColumns,
} from "./../../node_modules/@my-monorepo/shared/src/components/overlay/FilterDrawer/type";
import ViewDrawer from "./../../../../packages/shared/src/components/overlay/ViewDrawer/index";
import Button from "@shared/components/primitives/Button";
import { ViewTypeList } from "@shared/components/overlay/ViewDrawer/type";
import Guides from "./Guide";

// TODO: Demo only – remove this component when used in actual implementation

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
  description:
    "df cxvdfgvdf gd gd gd  gvd fg  g dfg dfgd gd gmfg fdDolore fuga Architecto nemo et dolorem dolor velit voluptas sequi quisquam temporibus Dolore fuga Architecto nemo et dolorem dolor velit voluptas sequi quisquam temporibus",
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

interface KBArticle {
  id: string;
  name: string;
}

interface ViewFieldType {
  label: string;
  fieldName: string;
  render?: (value: unknown) => string;
}

export const getFields = (): ViewFieldType[] => {
  const baseFields: ViewFieldType[] = [
    { label: "Name", fieldName: "name" },
    { label: "Category", fieldName: "category.name" },
    { label: "Description", fieldName: "description" },
    {
      label: "KB Article",
      fieldName: "kb_article",
      render: (value: unknown) => {
        if (!Array.isArray(value)) return "";

        return (value as KBArticle[]).map((item) => item.name).join(", ");
      },
    },
  ];

  return baseFields;
};

export const AISummaryView = {
  id: "68de1c1d-2393-4eec-9a77-f4fd351d6088",
  contact: {
    id: "61dfe61b-e85c-4f64-b6b1-ea092529095f",
    name: "Rainy Bhatt",
    phone_number: "917715025284",
    email: "rainy.bhatt@quantumbot.co.in",
    email_subscription_status: {
      value: "subscribed",
      label: "Subscribed to emails",
    },
  },
  last_message: {
    id: "af73f368-20c4-4ed6-8817-8ad42d8b6b5c",
    source: "CLIENT",
    meta_message_id:
      "wamid.HBgMOTE3NzE1MDI1Mjg0FQIAEhggQUMxRjlCNjJFMzNCODQ0Q0I1MDQ4QUNDNUNDMDUzQUUA",
    type: "text",
    body: "Hello",
    media_id: null,
    media_url: null,
    caption: null,
    media_path: null,
    filename: null,
    latitude: null,
    longitude: null,
    location_name: null,
    location_address: null,
    interactive_type: null,
    reply_id: null,
    title: null,
    emoji: null,
    original_meta_message_id: null,
    template_name: null,
    template_language: null,
    template_components: [],
    template: null,
    status: "incoming",
    created_at: "2025-12-18T12:52:10.085333Z",
    updated_at: "2025-12-18T12:52:10.085339Z",
    meta_error: null,
    campaign_retry_count: 1,
  },
  unread_count: 0,
  is_executive_takeover: false,
  current_agent: "Gopal",
  executive_summary:
    "- Rainy Bhatt greeted and expressed ongoing interest in QuantumBot's AI-powered bots and automation solutions\n- Asked about QuantumBot's working hours, referencing prior mention of them\n- Received clarification that CTO and team member identities are confidential and cannot be disclosed\n- Was provided QuantumBot's website and phone number for additional details on working hours\n- Was offered the opportunity to schedule a meeting or request more information about AI solutions",
  status: {
    value: "active",
    label: "Active",
  },
  can_message_send: true,
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
      <Button onclick={() => setIsFilterOpen(true)}>Open Filter Drawer</Button>
      <FilterDrawer
        onClear={() => {}}
        open={isFilterOpen}
        onClose={() => onCloseFilter()}
        onApply={() => {
          setIsFilterOpen(false);
        }}
        filterModel={{
          items: [],
        }}
        placement="right"
        title="Filter By"
        // TODO: Demo purpose only – console.log added temporarily for testing filter output
        onChangeFilter={(newModel: FilterModelType) => console.log(newModel)}
        columns={columns}
      />
      <Button onclick={showDrawer}>Open view</Button>

      <ViewDrawer
        title="WhatsApp Template"
        placement="right"
        open={open}
        onClose={() => onClose()}
        rowData={data}
        fields={getFields()}
        aiSummary={AISummaryView?.executive_summary}
        viewType={ViewTypeList.SUMMARY}
        summaryComponent={<Guides />}
      />
    </>
  );
};

export default DemoFilterDrawer;
