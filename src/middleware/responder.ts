export const responder = (ok: boolean, message: string, data?: any[] | any) => {
    return {
        ok,
        message,
        data,
    };
};

export const errorChecker = (ok: boolean, error: string) => {
    return {
        ok,
        error,
    };
};
