export default function Message() {
    return (
        <div className="card" style={{"margin": "30px", "width": "500px"}}>
            <div className="card-header">
                Fail!
            </div>
            <div className="card-body">
                <h5 className="card-title">Server doesn't response</h5>
                <p className="card-text">For new try, please reload page to get services list</p>
                <button type="button" className="btn btn-dark" onClick={() => document.location.reload()}>Reload</button>
            </div>
        </div>
    )
}