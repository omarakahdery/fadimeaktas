"use client";
const phoneNumber = "+905357091720xxxx";

export function Appointment({ productName }: { productName: string }) {
  return <div className="modal fade" id="modalId" tabIndex={-1} role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header border-0">
          <h5 className="modal-title">Randevu Al</h5>
          <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <p>
            Randevu almak için bize WhatsApp üzerinden mesaj gönderebilir veya <b>09:00 - 20:00</b> saatleri arasında telefonla
            ulaşabilirsiniz. </p>
        </div>
        <div className="modal-footer border-0 flex-column flex-sm-row align-items-stretch">
          <button
            type="button" onClick={() => {
            window.location.href = 'tel:' + phoneNumber;
          }}
            className="btn btn-outline-secondary rounded-pill" data-bs-dismiss="modal">Bizi Arayın</button>
          <button
            onClick={() => {
              window.open(WhatsappMessage(productName), "_blank")
            }}
            className="btn rounded-pill btn-dark" type="button">whatsapp'tan yazın
          </button>
        </div>
      </div>
    </div>
  </div>

}

function WhatsappMessage(productName: string) {
  const message = `Merhaba, ben ${productName} için randevu almak istiyorum.`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}/?text=${encodedMessage}`;
}