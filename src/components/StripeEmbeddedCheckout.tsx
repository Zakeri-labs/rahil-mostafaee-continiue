import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { getStripe } from "@/lib/stripe";

export function StripeEmbeddedCheckoutMount({ clientSecret }: { clientSecret: string }) {
  return (
    <div id="checkout" className="rounded-md overflow-hidden">
      <EmbeddedCheckoutProvider stripe={getStripe()} options={{ clientSecret }}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
