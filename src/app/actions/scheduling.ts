"use server";

import { Resend } from "resend";

export async function sendSchedulingEmails(data: {
    name: string;
    email: string;
    phone: string;
    topic: string;
    message?: string;
    date: Date;
    time: string;
}) {
    const { name, email, phone, topic, message, date, time } = data;
    const formattedDate = date.toLocaleDateString("pt-PT", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    if (!process.env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY não configurada");
        return { success: false, error: "Serviço de email indisponível. Por favor, tente novamente mais tarde." };
    }

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        // 1. Email para o Cliente (Confirmação)
        const customerEmail = await resend.emails.send({
            from: 'Pallium PSI <noreply@palliumpsi.com>',
            to: [email],
            subject: 'Recebemos o seu pedido - Pallium PSI',
            html: `
                <div style="background-color: #fcfcfc; padding: 40px 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #eaeaea; box-shadow: 0 2px 8px rgba(0,0,0,0.02);">
                        
                        <!-- Header -->
                        <div style="text-align: center; padding: 40px 40px 30px;">
                            <h1 style="color: #006d77; font-size: 24px; font-weight: 300; margin: 0; font-family: 'Times New Roman', serif;">Pallium PSI</h1>
                            <p style="text-transform: uppercase; font-size: 10px; letter-spacing: 0.2em; color: #888; margin-top: 8px;">Confirmação de Receção</p>
                        </div>

                        <!-- Content -->
                        <div style="padding: 0 40px 40px;">
                            <p style="font-size: 16px; line-height: 1.6; color: #444; text-align: center; margin-bottom: 32px;">
                                Olá <strong>${name}</strong>,<br><br>
                                Recebemos o seu pedido de agendamento. A nossa equipa irá validar a disponibilidade para a data selecionada e entraremos em contacto consigo muito em breve para confirmação final.
                            </p>

                            <!-- Details Card -->
                            <div style="background-color: #f8f9fa; border-radius: 12px; padding: 32px 24px; text-align: center;">
                                
                                <div style="margin-bottom: 24px;">
                                    <div style="text-transform: uppercase; letter-spacing: 0.15em; font-size: 10px; color: #888; margin-bottom: 8px; font-weight: 600;">Data & Hora</div>
                                    <div style="font-size: 18px; font-weight: 500; color: #111;">${formattedDate}</div>
                                    <div style="font-size: 16px; color: #006d77; margin-top: 4px;">às ${time}</div>
                                </div>

                                <div style="width: 40px; height: 1px; background-color: #ddd; margin: 0 auto 24px;"></div>

                                <div>
                                    <div style="text-transform: uppercase; letter-spacing: 0.15em; font-size: 10px; color: #888; margin-bottom: 8px; font-weight: 600;">Serviço Solicitado</div>
                                    <div style="font-size: 16px; font-weight: 500; color: #111;">${topic}</div>
                                </div>

                            </div>

                            <div style="margin-top: 40px; text-align: center;">
                                <a href="https://palliumpsi.com/contactos" style="display: inline-block; background-color: #002b30; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; padding: 12px 24px; border-radius: 50px;">
                                    Falar Connosco
                                </a>
                            </div>
                        </div>

                        <!-- Footer -->
                        <div style="border-top: 1px solid #eaeaea; padding: 32px; text-align: center; background-color: #fafafa;">
                            <p style="font-size: 11px; color: #999; line-height: 1.6; margin: 0;">
                                <strong>Pallium PSI</strong> - Psicologia Clínica & Avaliação de Condutores<br>
                                Praça de Londres, 3, 8º Drt, 1000-191 Lisboa, Portugal<br>
                                <a href="mailto:contacto@palliumpsi.com" style="color: #999; text-decoration: underline;">contacto@palliumpsi.com</a> | +351 912 220 771
                            </p>
                        </div>
                    </div>
                </div>
            `
        });

        if (customerEmail.error) {
            console.error("Erro do Resend ao confirmar agendamento:", customerEmail.error);
            return { success: false, error: "Falha ao processar o agendamento" };
        }

        // 2. Email para a Clínica (Notificação)
        const clinicEmail = await resend.emails.send({
            from: 'Agendamento Web <noreply@palliumpsi.com>',
            to: [process.env.CONTACT_EMAIL || 'contacto@palliumpsi.com'],
            replyTo: email,
            subject: `Novo Agendamento: ${name} - ${formattedDate}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #006d77;">Novo Pedido de Agendamento</h2>
                    
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Cliente:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Telefone:</strong> ${phone}</p>
                        <hr style="border: 0; border-top: 1px solid #ddd; margin: 15px 0;">
                        <p><strong>Serviço:</strong> ${topic}</p>
                        <p><strong>Data:</strong> ${formattedDate}</p>
                        <p><strong>Hora:</strong> ${time}</p>
                        ${message ? `<div style="margin-top: 15px; background: #fff; padding: 10px; border-radius: 4px;"><strong>Mensagem Adicional:</strong><br>${message}</div>` : ''}
                    </div>
                    
                    <a href="mailto:${email}" style="display: inline-block; padding: 10px 20px; background-color: #006d77; color: white; text-decoration: none; border-radius: 4px;">Responder ao Cliente</a>
                </div>
            `
        });

        if (clinicEmail.error) {
            console.error("Erro do Resend ao notificar a clínica:", clinicEmail.error);
            return { success: false, error: "Falha ao processar o agendamento" };
        }

        return { success: true };

    } catch (error) {
        console.error("Erro ao enviar emails de agendamento:", error);
        return { success: false, error: "Falha ao processar o agendamento" };
    }
}
