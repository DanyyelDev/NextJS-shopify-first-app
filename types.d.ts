export interface ErrorPageProrps {
    error: Error;
    reset: () => void
}

type ProductType = {
    id: string;
    gql_id: string
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    handle: string;
    tags: string;
};

interface SmartCollection {
    id: number;
    handle: string;
    title: string;
    description: string;
    image: {
        src: string;
        alt: string;
    };
    published_at: string;
    updated_at: string;
    rules: {
        column: string;
        relation: string;
        condition: string;
    }[];
    disjunctive: boolean;
    sort_order: string;
    template_suffix: string | null;
    admin_graphql_api_id: string;
}

type Collection = Pick<SmartCollection, "id" | "handle" | "title">;