import SignUpForm from '../components/auth/SignUpForm';

function SignUpRoute() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-body lg:grid-cols-12 w-full">
        <section className="relative flex h-32 bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden mt-24 lg:relative lg:block lg:p-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Codesplain!
            </h2>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-2 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative block lg:hidden">
              <h1 className="mt-2 mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
                Welcome to Codesplain!
              </h1>
            </div>

            <SignUpForm />
          </div>
        </main>
      </div>
    </section>
  );
}

export default SignUpRoute;
