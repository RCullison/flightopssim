import { CLIENT, CLIENTS_UDP } from "../../../../classes/typings/all.typings";
export declare class ClientsManager {
    private static instance;
    private constructor();
    private init;
    private clients;
    private getClient;
    private getClients;
    private checkClientsIsAlive;
    private addClient;
    private socketConfig;
    static getClient: (hostPort: string) => CLIENT;
    static getClients: () => CLIENTS_UDP;
    static addClient: (timestamp: number, host: string, port: number, subscribeToTopics: string[]) => void;
    static init: () => void;
}
