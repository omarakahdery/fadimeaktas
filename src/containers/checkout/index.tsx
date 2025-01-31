"use server";
import { getData } from "@/lib/api/api-fun";
import { ICart } from "@/types/ICart";
import { cookies } from "next/headers";
import { IPaymentGateways, PaymentForm } from "@/containers/checkout/submit-order";
import { IUser } from "@/types/IUser";
import { redirect } from "next/navigation";
import { CheckoutContent } from "@/containers/checkout/checkout-content";

export const Checkout = async () => {
  const token = (await cookies()).get("token")?.value;
  const userId = (await cookies()).get("user_id")?.value
  const data = await getData<ICart>("/cart?token=" + token);
  const payments = await getData<IPaymentGateways[]>("/payment_gateways");
  const userData = await getData<IUser>(`/user/me/${userId}`);
  if (data?.items && data?.items?.length <= 0) {
    redirect("/sepetim")
  }
  return (
    <>
      <section style={{ marginTop: "80px" }}>
        <main className="container content-wrapper">
          <div className=" pt-4 pt-md-5 pb-5 mt-sm-3 mt-md-0 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
            <div className="row">
              <div className="col-xl-10 ">
                <h1 className="h3 pb-2 pb-md-3">Ödeme</h1>
              </div>
            </div>
            <div className="row">
              <CheckoutContent userData={userData} data={data} token={token} payments={payments}/>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}




