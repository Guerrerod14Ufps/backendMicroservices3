export declare class ClienteController {
    private puntosClient;
    private emailClient;
    private entregaClient;
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
