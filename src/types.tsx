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
};
