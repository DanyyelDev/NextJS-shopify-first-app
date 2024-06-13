export interface Product {

    admin_graphql_api_id: string;
  
    body_html: string;
  
    created_at: Date;
  
    handle: string;
  
    id: number;
  
    image: Image;
  
    images: Image[];
  
    options: Option[];
  
    product_type: string;
  
    published_at: Date;
  
    published_scope: string;
  
    status: string;
  
    tags: string;
  
    template_suffix: null;
  
    title: string;
  
    updated_at: Date;
  
    variants: Variant[];
  
    vendor: string;
  
  }
  
  export interface Image {
  
    admin_graphql_api_id: string;
  
    alt: null;
  
    created_at: Date;
  
    height: number;
  
    id: number;
  
    position: number;
  
    product_id: number;
  
    src: string;
  
    updated_at: Date;
  
    variant_ids: any[];
  
    width: number;
  
  }
  
  export interface Option {
  
    id: number;
  
    name: string;
  
    position: number;
  
    product_id: number;
  
    values: string[];
  
  }
  
  export interface Variant {
  
    admin_graphql_api_id: string;
  
    barcode: null;
  
    compare_at_price: null | string;
  
    created_at: Date;
  
    fulfillment_service: string;
  
    grams: number;
  
    id: number;
  
    image_id: null;
  
    inventory_item_id: number;
  
    inventory_management: null;
  
    inventory_policy: string;
  
    inventory_quantity: number;
  
    old_inventory_quantity: number;
  
    option1: string;
  
    option2: null;
  
    option3: null;
  
    position: number;
  
    price: string;
  
    product_id: number;
  
    requires_shipping: boolean;
  
    sku: null;
  
    taxable: boolean;
  
    title: string;
  
    updated_at: Date;
  
    weight: number;
  
    weight_unit: string;
  
  }