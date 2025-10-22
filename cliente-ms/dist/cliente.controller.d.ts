export declare class ClienteController {
    private puntosClient;
    private emailClient;
    constructor();
    crearCliente(data: any): Promise<{
        message: string;
        cliente: any;
    }>;
    listarClientes(): Promise<{
        nombre: string;
        email: string;
    }[]>;
}
