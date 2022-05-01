import stablePayLogo from "./../../../assets/stable-pay-logo/Logo.png";

const headers = [
  {title: "Supported Block Chains", link: ""},
  {title: "Merchant Tools", link: ""},
  {title: "StablePay Partners", link: ""},
  {title: "Fees", link: ""},
  {title: "Developers", link: ""},
];

const Header = () => {
  return (
    <div className="relative bg-white">
      <div className="border-b-2 border-gray-100 shadow-md px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <img
              className="h-8 w-auto sm:h-10"
              src={stablePayLogo}
              alt=""
            />
          </div>

          <div className="hidden md:flex space-x-10">
            {headers.map((item, index) => 
              <button
                key={index}
                className="
                  text-base font-medium
                text-black
                hover:text-gray-500">
                  {item.title}
              </button>
            )}
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Log in
            </button>
            <button
              className="signup"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
