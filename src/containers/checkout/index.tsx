"use server";
import { getData } from "@/lib/api/api-fun";
import { ICart } from "@/types/ICart";
import { cookies } from "next/headers";
import { IPaymentGateways } from "@/containers/checkout/submit-order";
import { IUser } from "@/types/IUser";
import { redirect } from "next/navigation";
import { CheckoutContent } from "@/containers/checkout/checkout-content";
import { getMyCart, getPaymentGateways, getUserById } from "@/lib/api/get-data-wc";

export const Checkout = async () => {
  const userId = (await cookies()).get("user_id")?.value
  const token = (await cookies()).get("token")?.value;
  const cart_key = (await cookies()).get("cart_key")?.value;
  const endpoint = `/cart?` + (token ? `token=${token}` : `cart_key=${cart_key}`);
  const data: ICart = await getMyCart({ token, cart_key });
  //const payments = await getData<IPaymentGateways[]>("/payment_gateways");
  const payments = await getPaymentGateways();
//  const userData = await getData<IUser>(`/user/me/${userId}`);
  const userData = await getUserById({ id: userId });

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
              <CheckoutContent userData={userData} data={data} token={token} payments={payments} cart_key={cart_key}/>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}




