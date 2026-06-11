import { Resend } from "resend";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  area?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const UNAVAILABLE_MESSAGE =
  "El formulario no está disponible en este momento. Por favor, escribinos por WhatsApp o llamanos por teléfono.";
const GENERIC_ERROR_MESSAGE =
  "Ocurrió un error al enviar el mensaje. Probá de nuevo en unos minutos o escribinos por WhatsApp.";

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const area = body.area?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return Response.json(
      { error: "Por favor completá nombre, email y mensaje." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return Response.json({ error: "Ingresá un email válido." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Estudio BDM <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    console.error(
      "[/api/contact] Faltan variables de entorno RESEND_API_KEY y/o CONTACT_TO_EMAIL."
    );
    return Response.json({ error: UNAVAILABLE_MESSAGE }, { status: 503 });
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Nueva consulta de ${name}${area ? ` — ${area}` : ""}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Teléfono: ${phone || "-"}`,
        `Área de interés: ${area || "-"}`,
        "",
        "Mensaje:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("[/api/contact] Resend error:", error);
      return Response.json({ error: GENERIC_ERROR_MESSAGE }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[/api/contact] Error inesperado:", err);
    return Response.json({ error: GENERIC_ERROR_MESSAGE }, { status: 500 });
  }
}
