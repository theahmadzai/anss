//* just for type hinting across files
export interface Client {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    sex: boolean;
    uci: string;
    birthdate: import("dayjs").Dayjs;
    legalStatus: string;
    notes?: string;
}

namespace p {

}