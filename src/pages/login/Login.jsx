export const Login = () => {
    return(
        <>
        <header className="mx-auto max-w-6xl mt-10 px-8 xl:px-0 xl:mt-20">
            <span className="text-3xl text-cOrange font-bold">***</span>
            <h1 className="text-cGrey uppercase font-bold text-6xl mt-0 xl:mt-6">
                login
            </h1>
            <h4 className="text-cLightGrey text-xl mt-4">
                Let’s get you setup with a new account!
            </h4>
        </header>
        <main className="mx-auto max-w-6xl mt-12 px-8 xl:px-0 xl:mt-24">
            <form action="" className="space-y-6 w-full xl:w-3/4">
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-cGrey font-bold uppercase">
                            EMAIL
                        </span>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Type here" 
                        className="input input-bordered w-full" 
                    />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-cGrey font-bold uppercase">
                            PASSWORD
                        </span>
                    </div>
                    <input 
                        type="password" 
                        placeholder="Type here" 
                        className="input input-bordered w-full" 
                    />
                </label>
                <button 
                    className="btn bg-cOrange w-full text-white uppercase"
                    type="submit"
                >
                    login
                </button>
            </form>
            <article className="mt-8 text-center w-full xl:w-3/4">
                <a href="" className="text-cOrange uppercase">
                    Forgot Password
                </a>
                <section className="mt-6">
                    <p>Don’t have an account yet?</p>
                    <a href="" className="uppercase text-cOrange font-semibold">
                        REGISTER
                    </a>
                </section>
            </article>
        </main>
        </> 
    )
}