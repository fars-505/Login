

export default function LoginCard({ email, setEmail, password, setPassword, handleSubmit, error}) {
    return(
        <>
            <div className="card">
            <h1>Login</h1>
            <br />
            <input className='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Email Anda" />
            <br />
            <input className='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password Anda" />
            <br />
            <button onClick={handleSubmit}>Login</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
        </>
    )
}