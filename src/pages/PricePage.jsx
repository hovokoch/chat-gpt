import { CheckIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Payment } from "../components/payment/Payment";

const hobbyFeatures = [
  "Pariatur quod similique",
  "Sapiente libero doloribus",
  "Vel ipsa esse repudiandae",
];
const scaleFeatures = [
  "Pariatur quod similique",
  "Sapiente libero doloribus",
  "Vel ipsa esse repudiandae",
];
const growthFeatures = [
  "Quia rem est sed impedit magnam",
  "Dolorem vero ratione voluptates",
  "Qui sed ab doloribus voluptatem dolore",
  "Laborum commodi molestiae id et fugiat",
  "Nam ut ipsa nesciunt culpa modi dolor",
];

export const PricePage = () => {
  return (
    <div className="bg-gray-900 pb-16">
      <div className="px-6 pt-12 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="text-xl font-semibold leading-6 text-gray-300">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The right price for you, whoever you are
          </p>
          <p className="mx-auto mt-3 max-w-4xl text-xl text-gray-300 sm:mt-5 sm:text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            numquam eligendi quos odit doloribus molestiae voluptatum.
          </p>
        </div>
      </div>
      <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="mx-auto max-w-md lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:mx-0 lg:max-w-none">
                <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg">
                  <div className="flex flex-1 flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-2xl font-medium text-gray-900"
                          id="tier-hobby"
                        >
                          Hobby
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium tracking-tight">
                              $
                            </span>
                            <span className="font-bold">79</span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {hobbyFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="h-6 w-6 flex-shrink-0 text-green-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <Link
                            to="chat"
                            className="block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-indigo-600 hover:bg-gray-50"
                            aria-describedby="tier-hobby"
                          >
                            Start your trial
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-10 max-w-lg lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:mt-0 lg:max-w-none">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 translate-y-px transform">
                    <div className="flex -translate-y-1/2 transform justify-center">
                      <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-base font-semibold text-white">
                        Most popular
                      </span>
                    </div>
                  </div>
                  <div className="rounded-t-lg bg-white px-6 pt-12 pb-10">
                    <div>
                      <h3
                        className="text-center text-3xl font-semibold tracking-tight text-gray-900 sm:-mx-6"
                        id="tier-growth"
                      >
                        Growth
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900 sm:text-6xl">
                          <span className="mt-2 mr-2 text-4xl font-medium tracking-tight">
                            $
                          </span>
                          <span className="font-bold">149</span>
                        </span>
                        <span className="text-2xl font-medium text-gray-500">
                          /month
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-b-lg border-t-2 border-gray-100 bg-gray-50 px-6 pt-10 pb-8 sm:px-10 sm:py-10">
                    <ul role="list" className="space-y-4">
                      {growthFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="h-6 w-6 flex-shrink-0 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        <Link
                          to="chat"
                          className="block w-full rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-center text-xl font-medium leading-6 text-white hover:bg-indigo-700"
                          aria-describedby="tier-growth"
                        >
                          Start your trial
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-10 max-w-md lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3 lg:m-0 lg:max-w-none">
                <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-r-lg">
                  <div className="flex flex-1 flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-2xl font-medium text-gray-900"
                          id="tier-scale"
                        >
                          Scale
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium tracking-tight">
                              $
                            </span>
                            <span className="font-bold">349</span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {scaleFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="h-6 w-6 flex-shrink-0 text-green-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <Link
                            to="chat"
                            className="block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-indigo-600 hover:bg-gray-50"
                            aria-describedby="tier-scale"
                          >
                            Start your trial
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center pt-8 bg-white pb-12 lg:pb-20 w-full ">
        <div className="min-w-[800px] p-10 rounded-xl border border-[#ccc]">
          <h2 className="text-lg font-medium text-gray-900">Payment</h2>
          <div className="mt-2 text-base leading-7 text-gray-600">
            You can also click here to check out this awesome deal on Shine
            Ranker!
          </div>
          <div className="mt-10 border-t border-gray-200 pt-10">
            <fieldset>
              <legend className="text-lg font-medium text-gray-900">
                Selected plan
              </legend>

              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
                  <input
                    type="radio"
                    name="delivery-method"
                    // value="Standard"
                    className="sr-only"
                    aria-labelledby="delivery-method-0-label"
                    aria-describedby="delivery-method-0-description-0 delivery-method-0-description-1"
                  />
                  <span className="flex flex-1">
                    <span className="flex flex-col">
                      <span
                        id="delivery-method-0-label"
                        className="block text-sm font-medium text-gray-900"
                      >
                        MONTHLY PRO
                      </span>
                      <span
                        id="delivery-method-0-description-1"
                        className="mt-6 text-sm font-medium text-gray-900"
                      >
                        $75.00{" "}
                        <span className="mt-1 items-center text-sm text-gray-500">
                          /mo
                        </span>
                      </span>
                    </span>
                  </span>

                  <svg
                    x-show="type == 'monthly'"
                    className="h-5 w-5 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span
                    className="pointer-events-none absolute -inset-px rounded-lg border-2"
                    aria-hidden="true"
                  ></span>
                </label>

                <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
                  <input
                    type="radio"
                    name="delivery-method"
                    value="Express"
                    className="sr-only"
                    aria-labelledby="delivery-method-1-label"
                    aria-describedby="delivery-method-1-description-0 delivery-method-1-description-1"
                  />
                  <span className="flex flex-1">
                    <span className="flex flex-col">
                      <span
                        id="delivery-method-1-label"
                        className="block text-sm font-medium text-gray-900"
                      >
                        YEARLY PRO
                      </span>
                      <span
                        id="delivery-method-1-description-1"
                        className="mt-6 text-sm font-medium text-gray-900"
                      >
                        $750.00{" "}
                        <span className="mt-1 items-center text-sm text-gray-500">
                          /yr
                        </span>
                      </span>
                    </span>
                  </span>

                  <svg
                    x-show="type == 'yearly'"
                    className="h-5 w-5 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span
                    className="pointer-events-none absolute -inset-px rounded-lg border-2"
                    aria-hidden="true"
                  ></span>
                </label>
              </div>
            </fieldset>
          </div>
          <div className="mt-10 border-t border-gray-200 pt-10">
            <div className="mt-6">
              <div className="col-span-4">
                <label
                  htmlFor="cardholder-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name on card
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="cardholder-name"
                    name="name-on-card"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="border border-gray-300 mt-4 bg-white rounded-md">
                <div id="card-element" className="px-3 py-2"></div>
              </div>
              <div id="card-errors" role="alert"></div>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-200 pt-6 sm:flex sm:items-center sm:justify-between">
            <button
              type="button"
              id="subscription-pro-pay-withtrial"
              className="hidden w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:order-last sm:ml-6 sm:w-auto"
            >
              Save & Continue with Trial
            </button>
            <button
              type="button"
              id="subscription-pro-pay-withouttrial"
              className="w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:order-last sm:ml-6 sm:w-auto"
            >
              Pay & continue with subscription
            </button>
            <p
              id="pay_text"
              className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left"
            >
              Your card will be charged{" "}
              <span
                className="font-semibold text-indigo-600"
                x-text="type == 'monthly' ? '$75 each Month': '$750 each Year'"
              ></span>{" "}
              on this Date
            </p>
          </div>
        </div>
      </div> */}
      <div className="bg-white pb-[50px]">
        <Payment />
      </div>
    </div>
  );
};
