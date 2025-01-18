"use client";
const phoneNumber = "+90535xxxx7091720";

export function Appointment({ productName }: { productName?: string }) {
  return <div className="modal fade modal-lg" id="modalId" tabIndex={-1} role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content ">
        <div className="modal-header border-0">
          <h5 className="modal-title">Randevu Al</h5>
          <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <h6>Telefon ile</h6>
          <p className={"fs-sm"}>
            Mesai saatleri içerisinde bizi arayabilirsiniz.
          </p>
          <p>
            Pzt-Cum: 10:00 - 19:00
          </p>
          <p>
            0312 466 26 16
          </p>
          <h6>Whatsapp ile</h6>
          <p className={"fs-sm"}>
            Whatsapp ile hemen randevu alabilirsiniz.
          </p>
          <button
            onClick={() => {
              window.open(WhatsappMessage(productName), "_blank")
            }}
            className="btn rounded-pill btn-sm me-auto btn-dark" type="button">Whatsapp ile Randevu Al
          </button>
        </div>

      </div>
    </div>
  </div>

}

function WhatsappMessage(productName?: string) {
  const message = `Merhaba, ben ${productName} için randevu almak istiyorum.`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}/?text=${encodedMessage}`;
}