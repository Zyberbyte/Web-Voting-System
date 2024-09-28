import { Logo } from "../../assets/img/image"

function forgotPassword() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <img
            alt="Supreme Secondary Learner Government logo"
            className="rounded-lg shadow-lg w-64 h-64 md:w-80 md:h-80"
            src={Logo}
          />
        </div>
        <div className="md:ml-8 md:mt-9 text-center md:text-left ">
          <h2 className="text-gray-700 mb-4">
            Forgot your password? Just let us know your email address and a password reset link will be sent to your email.
          </h2>
          <form>
            <div className="mb-4">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <span className="px-3 text-gray-500">
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  className="w-full py-2 px-3 text-gray-700 focus:outline-none"
                  placeholder="Email"
                  type="email"
                />
              </div>
            </div>
            <button
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-lg"
              type="submit"
            >
              Reset Password
            </button>
          </form>
          <div className="mt-4">
            <a className="">
              <p className="text-center">Go back to <a className="text-blue-600 hover:text-blue-900"  href="/">Sign In</a></p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default forgotPassword