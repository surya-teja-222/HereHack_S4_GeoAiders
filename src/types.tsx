export type errorProps = {
    statusCode?: number;
    error?: string;
    errorMessage?: string;
};

export type logoProps = {
    fill?: string;
};

export type headerProps = {
    home?: boolean;
    getStarted?: boolean;
    dark?: boolean;
};

export type mapProps = {
    label?: string;
    lat?: number;
    lng?: number;
    type: "land" | "house";
};

export type searchProps = {
    type: "land" | "house";
};

type secondary = {
    lat: number;
    lng: number;
    price: number;
    label: string;
};

export type resMapProps = {
    inpLat: number;
    inpLng: number;
    secondary?: secondary[];
};
