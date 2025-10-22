export declare class EmailService {
    private readonly logger;
    private transporter;
    enviarEmailBienvenida(data: {
        name: string;
        email: string;
    }): Promise<void>;
}
