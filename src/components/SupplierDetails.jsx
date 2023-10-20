import { SUPPLIERS_DETAILS } from "../data/order-data";

const SupplierDetails = () => {
  return (
    <div className="bg-white p-5 md:rounded-2xl md:divide-x-2 md:flex md:w-full md:justify-center md:mb-4">
      {SUPPLIERS_DETAILS.map((detail) => (
        <div key={detail.label} className="w-full md:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="mx-auto ml-5">
            <p className="text-gray-500 font-medium mb-1">{detail.label}</p>
            <p className="text-black font-semibold text-md md:text-lg lg:text-lg xl:text-lg">
              {detail.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupplierDetails;
