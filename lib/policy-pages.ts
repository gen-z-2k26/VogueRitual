import { CONTENT_PAGES } from "@/lib/site-urls";
import type { FaqGroup } from "@/lib/types";

export type PolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type PolicyPageDef = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  groupTitles: string[];
  paragraphs?: string[];
  designed?: boolean;
  sections?: PolicySection[];
};

export const POLICY_PAGES: PolicyPageDef[] = [
  {
    slug: "shipping-policy",
    title: "Shipping & Delivery",
    description: "Free standard shipping throughout the United States, with published handling and transit estimates.",
    intro:
      "All orders qualify for free standard shipping throughout the United States, with no minimum purchase requirement.",
    groupTitles: ["Shipping and delivery"],
  },
  {
    slug: "return-and-refund-policy",
    title: "Returns & Refunds",
    description: "How to return an eligible product and how refunds are issued.",
    intro:
      "We offer a 30-calendar-day return window for eligible products and a $0 restocking fee on approved returns.",
    groupTitles: ["Returns and exchanges", "Refunds"],
  },
  {
    slug: "cancellation-policy",
    title: "Order Cancellations",
    description: "How to request a cancellation before fulfillment begins.",
    intro:
      "You may request cancellation before fulfillment begins. The cancellation fee is $0.00.",
    groupTitles: ["Placing and managing orders"],
  },
  {
    slug: "payment-policy",
    title: "Payment Options",
    description: "Checkout methods, currency, and payment handling at Vogueritual.",
    intro:
      "All product prices and transactions are processed in US dollars. Only methods displayed during checkout are supported.",
    groupTitles: ["Payments and checkout"],
  },
  {
    slug: "buy-now-pay-later",
    title: "Buy Now, Pay Later",
    description: "Installment options, only when a provider is shown at checkout.",
    intro:
      "Buy Now, Pay Later is available only if a supported financing provider is displayed during checkout.",
    groupTitles: ["Buy Now, Pay Later (BNPL)"],
  },
  {
    slug: "warranty",
    title: "Warranty & Support",
    description: "Manufacturer warranty coverage and what to do if a product has an issue.",
    intro:
      "Warranty availability varies by product and manufacturer. We do not promise a blanket one-year warranty on all products.",
    groupTitles: ["Warranty and product support"],
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description:
      "How Vogueritual handles information when you shop with us.",
    intro:
      "This policy explains how Vogueritual handles information when you browse the store, place an order, or contact support.",
    groupTitles: [],
    designed: true,
    sections: [
      {
        title: "Who we are",
        paragraphs: [
          "Vogueritual is a multi-category online retailer. Our business address is 2260 Porter Way, Stockton, CA 95207, United States. Customers should obtain return instructions before sending merchandise.",
          "Questions about this policy can be sent to info@vogueritual.us or +1 (209) 810-5789. The business address is 2260 Porter Way, Stockton, CA 95207, United States.",
        ],
      },
      {
        title: "Information we collect",
        paragraphs: [
          "We collect the details needed to complete a purchase and to answer your questions. That typically includes your name, email address, shipping and billing details, phone number, order contents, and messages you send to our team.",
        ],
        bullets: [
          "Account-free checkout details you enter during an order.",
          "Order history, tracking references, and support tickets tied to your purchase.",
          "Technical data such as browser type, device, and pages visited, used to keep the store working.",
          "Payment status from our processors. We do not store full card numbers on this website.",
        ],
      },
      {
        title: "How we use information",
        paragraphs: [
          "We use customer information for store operations, not for unrelated marketing lists created from your order.",
        ],
        bullets: [
          "Processing orders, arranging delivery, and sending confirmations or tracking updates.",
          "Providing customer assistance by email, phone, or live chat.",
          "Supporting secure checkout and preventing fraud or abuse.",
          "Maintaining website functionality, including the shopping cart.",
          "Meeting applicable legal, tax, and accounting obligations.",
        ],
      },
      {
        title: "Payments and processors",
        paragraphs: [
          "Transactions may be handled by third-party payment service providers. Those providers process payment credentials under their own terms and privacy notices. Prices and checkout totals are displayed in United States dollars.",
        ],
      },
      {
        title: "Sharing",
        paragraphs: [
          "We share information with service partners who help us fulfill your order, such as shipping carriers, payment processors, and the WordPress / WooCommerce platform that powers catalog and checkout data. We do not sell your personal information.",
        ],
      },
      {
        title: "Retention and security",
        paragraphs: [
          "Order records are kept for as long as needed to fulfill the purchase, handle returns, and meet legal record-keeping requirements. We use reasonable administrative and technical measures to protect the store, including encrypted checkout through our payment provider.",
        ],
      },
      {
        title: "Your privacy choices",
        paragraphs: [
          "You may contact info@vogueritual.us with a privacy-related request, including access, correction, or deletion where applicable law provides those rights. We will review the request and respond according to the laws that apply to your situation.",
          "California residents and other US shoppers can also visit the Your Privacy Choices page on this site.",
        ],
      },
    ],
  },
  {
    slug: "terms-of-service",
    title: "Terms of Service",
    description:
      "The purchasing, shipping, return, and payment terms that apply when you shop at Vogueritual.",
    intro:
      "By browsing this store or placing an order you agree to the terms published here, together with our shipping, return, payment, and privacy pages.",
    groupTitles: [],
    designed: true,
    sections: [
      {
        title: "The store",
        paragraphs: [
          "Vogueritual operates a multi-category online retail website and ships exclusively within the United States.",
        ],
      },
      {
        title: "Orders",
        paragraphs: [
          "An order is an offer to buy the products listed in your cart at the prices shown at checkout. We may decline or cancel an order if an item is unavailable, a payment cannot be completed, or the order appears fraudulent or incomplete.",
          "You may request cancellation before fulfillment begins. There is no cancellation fee. Once an order has entered fulfillment, our return policy applies instead.",
        ],
      },
      {
        title: "Pricing and payment",
        paragraphs: [
          "Prices are shown in United States Dollars (USD). Applicable tax and the final order total appear at checkout. The payment methods displayed for your purchase are the options available at that time.",
          "Buy Now, Pay Later is available only if a supported financing provider is displayed during checkout. Affirm, PayPal, or card payments may also appear. Financing approval, installments, interest, and fees are set by the payment provider.",
        ],
      },
      {
        title: "Shipping",
        paragraphs: [
          "All orders qualify for free standard shipping throughout the United States, with no minimum purchase requirement. Handling is 1-3 business days and transit is 3-5 business days, for an estimated total of 4-8 business days. The daily order cutoff is 5:00 PM PST.",
          "Delivery estimates can change because of carrier conditions, holidays, weather, or other events outside our control.",
        ],
      },
      {
        title: "Returns and refunds",
        paragraphs: [
          "Eligible defective and non-defective returns are accepted within 30 days. Approved returns qualify for free return shipping, and the restocking fee is $0.00. Standard non-defective returns must be in new condition.",
          "Obtain return instructions before sending merchandise. The published refund processing time is 10 days, and approved refunds are generally returned to the original payment method.",
        ],
      },
      {
        title: "Product information and warranties",
        paragraphs: [
          "Please review product descriptions, specifications, and compatibility notes before you buy. Warranty coverage varies by product and manufacturer. We do not promise a blanket warranty period on every item.",
          "If a product arrives damaged, defective, or incorrect, contact us so we can review prepaid return shipping and the options available under our return policy.",
        ],
      },
      {
        title: "Limitation of liability",
        paragraphs: [
          "To the fullest extent permitted by law, Vogueritual and Vogueritual are not liable for indirect, incidental, or consequential damages arising from your use of the site or from products purchased through it. Nothing in these terms limits rights you have under applicable consumer law.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "Email info@vogueritual.us or call +1 (209) 810-5789. Vogueritual, 2260 Porter Way, Stockton, CA 95207, United States. Website: https://vogueritual.us.",
        ],
      },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    description: "How cookies are used on the Vogueritual website.",
    intro:
      "Essential cookies may support shopping carts, checkout, security, and other website functions. Additional cookies depend on the services enabled.",
    groupTitles: ["Accounts, privacy, and security"],
  },
  {
    slug: "legal-notice",
    title: "Legal Notice",
    description: "Business identity and contact details for Vogueritual.",
    intro:
      "Vogueritual operates a multi-category online retail website serving customers throughout the United States.",
    groupTitles: ["General questions"],
    paragraphs: [
      "Business address: 2260 Porter Way, Stockton, CA 95207, United States. This address is for business correspondence and is not a retail showroom or an authorized return location.",
      "Website: https://vogueritual.us. Email: info@vogueritual.us. Phone: +1 (209) 810-5789.",
    ],
  },
  {
    slug: "accessibility-statement",
    title: "Accessibility Statement",
    description:
      "How Vogueritual aims to keep the website easier to use, and how to report a barrier.",
    intro:
      "We want our website and shopping information to be easier for customers to navigate and understand. This statement describes that aim and how to reach us if a page, listing, or checkout step is difficult to use.",
    groupTitles: [],
    designed: true,
    sections: [
      {
        title: "Our commitment",
        paragraphs: [
          "Vogueritual, operated by Vogueritual, is working to keep product information, policies, and checkout steps clearer over time. We treat accessibility as an ongoing effort, not a one-time audit claim.",
        ],
      },
      {
        title: "What we work toward",
        paragraphs: [
          "We aim for readable text, visible focus states, keyboard access to primary shopping actions, and captions or text alternatives on important images where we control the markup.",
        ],
        bullets: [
          "Clear headings and labels on key pages.",
          "Color contrast that remains readable in light and dark modes.",
          "Forms that identify required fields and errors in text.",
          "Support by email at info@vogueritual.us or by phone at +1 (209) 810-5789 if a flow is blocked.",
        ],
      },
      {
        title: "Known limits",
        paragraphs: [
          "Some product photography, third-party payment widgets, and carrier tracking pages are outside our full control. If a third-party step is hard to complete, contact us and we will help you finish the request another way.",
        ],
      },
      {
        title: "Request assistance",
        paragraphs: [
          "If you have trouble using a page, product listing, or checkout step, email info@vogueritual.us or call +1 (209) 810-5789. Tell us the page you were on and what you were trying to do. We will help you complete your request.",
          "Email info@vogueritual.us or call +1 (209) 810-5789 and include the page URL and a description of the issue. Our business address is 2260 Porter Way, Stockton, CA 95207, United States.",
        ],
      },
    ],
  },
  {
    slug: "your-privacy-choices",
    title: "Your Privacy Choices",
    description: "How to ask about personal information used for your Vogueritual orders.",
    intro:
      "You may email info@vogueritual.us with a privacy-related request. Applicable rights depend on relevant privacy laws.",
    groupTitles: ["Accounts, privacy, and security"],
  },
];

export function policyBySlug(slug: string) {
  return POLICY_PAGES.find((page) => page.slug === slug) ?? null;
}

export function groupsForPolicy(policy: PolicyPageDef, groups: FaqGroup[]) {
  if (!policy.groupTitles.length) return [];
  return groups.filter((group) => policy.groupTitles.includes(group.title));
}

export function contentPageTitle(slug: string) {
  return CONTENT_PAGES.find((page) => page.slug === slug)?.title ?? slug;
}
