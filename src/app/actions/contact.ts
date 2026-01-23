"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
    const nome = formData.get("nome") as string;
    const email = formData.get("email") as string;
    const assunto = formData.get("assunto") as string;
    const mensagem = formData.get("mensagem") as string;

    if (!nome || !email || !assunto || !mensagem) {
        return { success: false, error: "Todos os campos são obrigatórios." };
    }

    try {
        await resend.emails.send({
            from: 'Pallium PSI Website <onboarding@resend.dev>', // Use default domain for testing/start
            to: ['contacto@palliumpsi.com'],
            replyTo: email,
            subject: `Novo Contacto via Website: ${assunto}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #006d77;">Nova Mensagem de Contacto</h2>
                    <p>Recebeu uma nova mensagem através do formulário de contacto do website.</p>
                    
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Nome:</strong> ${nome}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Assunto:</strong> ${assunto}</p>
                        <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #ddd;">
                            <strong>Mensagem:</strong><br/>
                            <p style="white-space: pre-wrap;">${mensagem}</p>
                        </div>
                    </div>

                    <p style="color: #666; font-size: 12px; margin-top: 30px;">
                        Esta mensagem foi enviada a partir do formulário de contacto em palliumpsi.com
                    </p>
                </div>
            `
        });

        return { success: true };
    } catch (error) {
        console.error("Erro ao enviar email:", error);
        return { success: false, error: "Falha ao enviar o email. Por favor, tente novamente." };
    }
}
