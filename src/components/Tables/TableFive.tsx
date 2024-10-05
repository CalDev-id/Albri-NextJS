import { BRAND } from "@/types/brand";
import Image from "next/image";
import Link from "next/link";

const brandData: BRAND[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Kemiri",
    visitors: 3.5,
    revenues: "Rp. 500.000",
    sales: "Rp. 200.000",
    conversion: 4.8,
    short: "K",
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "Kutoarjo",
    visitors: 2.2,
    revenues: "Rp. 500.000",
    sales: "Rp. 200.000",
    conversion: 4.3,
    short: "K",
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Pituruh",
    visitors: 2.1,
    revenues: "Rp. 500.000",
    sales: "Rp. 200.000",
    conversion: 3.7,
    short: "P",
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "Loano",
    visitors: 1.5,
    revenues: "Rp. 500.000",
    sales: "Rp. 200.000",
    conversion: 2.5,
    short: "L",
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Mranti",
    visitors: 3.5,
    revenues: "Rp. 500.000",
    sales: "Rp. 200.000",
    conversion: 4.2,
    short: "M",
  },
];

const TableFive = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="mb-6 flex justify-between">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Branch
        </h4>
        <Link href="/add-mentor">
          <button className="rounded bg-primary px-4 py-2 text-white hover:bg-opacity-90">
            Add Branch
          </button>
        </Link>
      </div>

      <div className="flex flex-col">
        {/* Header Row */}
        <div className="grid grid-cols-3 rounded-sm bg-gray-200 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Students
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Revenues
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Outcomes
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Actions
            </h5>
          </div>
        </div>

        {/* Data Rows */}
        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-blue-800">
                <h1 className="text-2xl font-bold text-gray-200">
                  {brand.short}
                </h1>
              </div>

              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{brand.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-red dark:text-white">{brand.sales}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <div className="flex items-center space-x-3.5">
                <button className="hover:text-primary">
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                      fill=""
                    />
                    <path
                      d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                      fill=""
                    />
                  </svg>
                </button>
                <button className="hover:text-primary">
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7285C12.8816 17.5219 13.8379 16.6219 13.8941 15.4688L14.3441 6.1594C14.8785 5.9344 15.2441 5.42815 15.2441 4.8094V3.96565C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.65039 1.9969C7.65039 1.7969 7.75352 1.69377 7.90352 1.69377H10.0691C10.2691 1.69377 10.3723 1.7969 10.3723 1.9969V2.47502H7.65039V1.9969ZM13.0285 4.8094H3.44414V3.96565C3.44414 3.81565 3.54727 3.71252 3.74727 3.71252H13.4441C13.5941 3.71252 13.6973 3.81565 13.6973 3.96565V4.8094H13.0285Z"
                      fill=""
                    />
                  </svg>
                </button>
                <button className="hover:text-primary">
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.97961 11.9035L3.19461 14.9277C3.10415 15.2598 3.19255 15.6116 3.42452 15.8436C3.65649 16.0755 4.00833 16.1639 4.34038 16.0735L7.36461 15.2885C7.54395 15.2412 7.70799 15.1468 7.84389 15.0109L14.6726 8.18221C15.0406 7.8142 15.0406 7.2207 14.6726 6.8527L11.1473 3.32741C10.7793 2.9594 10.1858 2.9594 9.81777 3.32741L2.98906 10.1561C2.85316 10.292 2.75883 10.456 2.71155 10.6354L1.92655 13.6596C1.88112 13.8302 1.8964 14.0081 1.9707 14.1683C2.04501 14.3284 2.17468 14.4629 2.33755 14.5527L5.25328 16.4266C5.44083 16.536 5.66352 16.5505 5.87255 16.4653C6.08159 16.3801 6.24088 16.2054 6.30669 15.9935L8.58848 8.0249L3.97961 11.9035Z"
                      fill=""
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableFive;
